const db = require("express-http-context").get("db");

export default {
  findAll: async () => {
    return await db.countries.find({});
  },
  findByCode: async (code) => {
    return await db.countries.findOne({ code: code.toUpperCase() });
  },
};
