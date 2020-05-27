const db = require('express-http-context').get('db');

export default {
  getAll: async () => db.topics.find({}),
};
