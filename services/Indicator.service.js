import _ from 'lodash';

import IndicatorVariationService from './IndicatorVariation.service';

const db = require('express-http-context').get('db');

const INDICATOR_SELECT = `SELECT i.id as indicator_id, i.translation_key as indicator_translation_key, i.code as indicator_code,
      pg.id as pec_goal_id,
      pg.code as pec_goal,
      t.id as topic_id,
      t.translation_key as topic,
      el.id as educational_level_id,
      el.code as educational_level,
      os.id as ods4_scale_id,
      os.code as ods4_scale`;

const INDICATOR_FROM = `FROM indicators i
   LEFT JOIN indicator_pec_goals ipg ON i.id = ipg.indicator_id
   LEFT JOIN indicator_topics it ON i.id = it.indicator_id
   LEFT JOIN indicator_educational_levels iel ON i.id = iel.indicator_id
   LEFT JOIN indicator_ods4_scales ios ON i.id = ios.indicator_id
   LEFT JOIN pec_goals pg ON pg.id = ipg.pec_goal_id
   LEFT JOIN topics t ON t.id = it.topic_id
   LEFT JOIN educational_levels el ON el.id = iel.educational_level_id
   LEFT JOIN ods4_scales os ON os.id = ios.ods4_scale_id`;

const INDICATOR_DECOMPOSE = {
  pk: 'indicator_id',
  columns: {
    indicator_id: 'id',
    indicator_translation_key: 'translation_key',
    indicator_code: 'code',
  },
  pec_goals: {
    pk: 'pec_goal_id',
    columns: { pec_goal: 'code' },
  },
  topics: {
    pk: 'topic_id',
    columns: { topic: 'translation_key' },
  },
  educational_levels: {
    pk: 'educational_level_id',
    columns: { educational_level: 'translation_key' },
  },
  ods4_scales: {
    pk: 'ods4_scale_id',
    columns: { ods4_scale: 'code' },
  },
};

/**
 * Builds where clause for search indicator query
 *
 * @param {string} pecGoal PEC Goal id to filter
 * @param {string} topic Topic id to filter
 * @param {string} educationalLevel Educational level id to filter
 *
 * @returns String containg the whole search indicator where clause, based on the provided parameters
 */
const getSearchWhere = (pecGoal, topic, educationalLevel) => {
  const whereClauses = [];

  if (pecGoal) {
    whereClauses.push(`ipg.pec_goal_id = ${pecGoal}`);
  }

  if (topic) {
    whereClauses.push(`it.topic_id = ${topic}`);
  }

  if (educationalLevel) {
    whereClauses.push(`iel.educational_level_id = ${educationalLevel}`);
  }

  return whereClauses.length > 0 ? `WHERE ${whereClauses.join(' AND ')}` : '';
};

export default {
  /**
   * Returns a list of matching indicatos, based on the specified criteria
   *
   * @param {number} [pecGoal] PEC Goal id
   * @param {number} [topic] Topic id
   * @param {number} [educationaLevel] Educational Level id
   */
  search: async (pecGoal, topic, educationaLevel) => {
    const where = getSearchWhere(pecGoal, topic, educationaLevel);
    const orderBy = 'ORDER BY i.code, pg.goal_order, os.scale_order, el.code';

    const sql = `${INDICATOR_SELECT}
      ${INDICATOR_FROM}
      ${where}
      ${orderBy}`;

    return db.query(sql, [], {
      decompose: INDICATOR_DECOMPOSE,
    });
  },
  findById: async (id) => db.indicators.findOne({ id }),
  /**
   * Finds related indicators
   *
   * @param {number} id Indicator id
   */
  findRelated: async (id) => {
    const sql = `SELECT i.id, i.code, i.translation_key FROM (
                 SELECT related_id as id 
                 FROM related_indicators 
                 WHERE indicator_id = ${id} 
                 UNION 
                 SELECT indicator_id as id 
                 FROM related_indicators 
                 WHERE related_id = ${id}
               ) r 
               LEFT JOIN indicators i ON r.id = i.id;`;

    return db.query(sql);
  },
  /**
   * Return all indicator information and data needed for the indicator page
   *
   * @param {number} id Indicator id
   * @param {string} country Country code
   */
  findFullDetailsById: async (id) => {
    const where = `WHERE i.id = ${id}`;
    const sql = `${INDICATOR_SELECT}
      ${INDICATOR_FROM}
      ${where}`;

    const indicator = await db.query(sql, [], {
      decompose: INDICATOR_DECOMPOSE,
    });

    if (!indicator || indicator.length === 0) {
      return null;
    }

    delete indicator.query;

    const variations = await IndicatorVariationService.findByIndicatorId(id);
    indicator.variations = _.map(variations, (v) => _.omit(v, 'indicator_id', 'query'));

    return indicator;
  },
};
