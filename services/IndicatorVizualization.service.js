const db = require("express-http-context").get("db");

export default {
  findByIndicatorId: async (indicator_id) => {
    return await db.visualizations
      .join({
        indicator_visualizations: {
          type: "LEFT",
          pk: "id",
          on: { visualization_id: "id" },
        },
      })
      .find({ "indicator_visualizations.indicator_id": indicator_id });
  },
};
