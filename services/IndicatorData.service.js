const db = require("express-http-context").get("db");

export default {
  find: async (query) => {
    let fields = [
      "unit_measure",
      "edu_level",
      "sex",
      "wealth_quintile",
      "location",
      "time_period",
      "obs_value",
      "unit_mult",
      "obs_status",
      "freq",
      "decimals",
    ];

    return await db.uis_data.find(query, {
      fields,
    });
  },
};
