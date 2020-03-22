const { Pool } = require("pg");

const pool = new Pool({
  user: "srie",
  host: "localhost",
  database: "srie",
  password: "srie",
  port: 5432
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
