const db = require("express-http-context").get("db");

export default {
  findByIndicatorId: async (indicator_id) => {
    return await db.indicator_variations.find({ indicator_id });
  },
};
