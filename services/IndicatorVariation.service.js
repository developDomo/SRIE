const db = require('express-http-context').get('db');

export default {
  findByIndicatorId: async (indicatorId) => db.indicator_variations.find({
    indicator_id: indicatorId,
  }),
  findByIndicatorIdAndCode: async (indicatorId, code) => db.indicator_variations.find({
    indicator_id: indicatorId,
    code,
  }),
};
