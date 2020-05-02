const db = require("express-http-context").get("db");

export default {
  findAll: async () => {
    return await db.educational_levels.find({});
  },
};
