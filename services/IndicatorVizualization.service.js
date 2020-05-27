const db = require('express-http-context').get('db');

export default {
  findByIndicatorId: async (indicatorId) => db.visualizations
    .join({
      indicator_visualizations: {
        type: 'LEFT',
        pk: 'id',
        on: { visualization_id: 'id' },
      },
    })
    .find({ 'indicator_visualizations.indicator_id': indicatorId }),
};
