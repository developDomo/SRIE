const db = require('express-http-context').get('db');

export default {
  findByIndicatorId: async (indicatorId) => db.indexes
    .join({
      indicator_indexes: {
        type: 'LEFT',
        pk: 'id',
        on: { index_id: 'id' },
      },
    })
    .find({ 'indicator_indexes.indicator_id': indicatorId }),
};
