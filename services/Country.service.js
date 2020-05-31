const db = require('express-http-context').get('db');

const options = {
  fields: ['short_name'],
  exprs: {
    code: 'lower(code)',
  },
};

export default {
  findAll: async () => db.query('SELECT lower(code) as code, short_name FROM countries'),
  findByCode: async (code) => db.countries.findOne({ code: code.toUpperCase() }, options),
  findByShortName: async (shortName) => db.countries.findOne({ short_name: shortName.toLowerCase() }, options),
};
