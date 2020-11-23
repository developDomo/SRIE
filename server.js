const path = require('path');
const express = require('express');
const httpContext = require('express-http-context');

const nextjs = require('next');

const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const nextI18next = require('./i18n');

const dev = process.env.NODE_ENV !== 'production';

const port = process.env.PORT || 3000;
const massive = require('./db');

(async () => {
  if (!dev && cluster.isMaster) {
    console.log(`Node cluster master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i += 1) {
      cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
      console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
    });
  } else {
    const app = nextjs({ dir: '.', dev });
    const handle = app.getRequestHandler();

    await app.prepare();
    const server = express();
    const db = await massive();

    server.use(httpContext.middleware);
    server.use((req, res, next) => {
      httpContext.set('db', db);
      next();
    });

    await nextI18next.initPromise;

    if (!dev) {
    // Enforce SSL & HSTS in production
      server.use((req, res, next) => {
        const proto = req.headers['x-forwarded-proto'];
        if (proto === 'https') {
          res.set({
            'Strict-Transport-Security': 'max-age=31557600', // one-year
          });
          return next();
        }
        res.redirect(`https://${req.headers.host}${req.url}`);
        return next();
      });
    }

    // Static files
    // https://github.com/zeit/next.js/tree/4.2.3#user-content-static-file-serving-eg-images
    server.use('/static', express.static(path.join(__dirname, 'static'), {
      maxAge: dev ? '0' : '365d',
    }));

    server.get('*', (req, res) => handle(req, res));
    server.post('*', (req, res) => handle(req, res));

    await server.listen(port);
    console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
  }
})();
