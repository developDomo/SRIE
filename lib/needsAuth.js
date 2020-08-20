import withSession from './session';

const loginUrl = '/admin/login';

export default function needsAuth(handler) {
  return withSession(async (...args) => {
    const { req, res } = args[0];

    const user = req.session.get('user');

    if (user === undefined) {
      res.setHeader('location', loginUrl);
      res.statusCode = 302;
      res.end();
      return { props: {} };
    }

    return handler(Object.assign(...args, { user }));
  });
}
