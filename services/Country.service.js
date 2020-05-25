const db = require('express-http-context').get('db');

export default {
  findAll: async () => db.countries.find({}),
  findByCode: async (code) => db.countries.findOne({ code: code.toUpperCase() }),
};
