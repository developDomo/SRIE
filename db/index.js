const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
});

const _query = (sql, params, resolveCallback) => {
  return new Promise(function(resolve, reject) {
    pool
      .query(sql, params)
      .then(results => resolveCallback(resolve, results))
      .catch(error => reject(error));
  });
};

const handleOne = (resolve, results) => {
  if (results.rowCount === 0) {
    resolve({});
  }

  resolve(results.rows[0]);
};

const handleMany = (resolve, results) => {
  resolve(results.rows);
};

export default {
  query: sql => {
    return query(sql, []);
  },
  query: (sql, params) => {
    return _query(sql, params, handleMany);
  },
  queryForObject: sql => {
    return queryForObject(sql, []);
  },
  queryForObject: (sql, params) => {
    return _query(sql, params, handleOne);
  }
};
