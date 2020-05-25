const db = require('express-http-context').get('db');

export default {
  findAll: async () => db.educational_levels.find({}),
};
