const massive = require('massive');

let db;

module.exports = async () => {
  if (db) {
    return db;
  }

  db = await massive({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    ssl: { rejectUnauthorized: false }
  });

  if(process.env.NODE_ENV ==='development'){
    const monitor = require('pg-monitor');
    monitor.attach(db.driverConfig);
  }

  return db;
};
