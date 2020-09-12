import _ from 'lodash';

import IndicatorVariationService from './IndicatorVariation.service';

const db = require('express-http-context').get('db');

const INDICATOR_SELECT = `SELECT i.id as indicator_id,
      i.translation_key as indicator_translation_key,
      i.code as indicator_code,
      i.uis_unit_measure as unit_measure,
      pg.id as pec_goal_id,
      pg.code as pec_goal,
      t.id as topic_id,
      t.code as topic,
      el.id as education_level_id,
      el.code as education_level,
      os.id as ods4_goal_id,
      os.code as ods4_goal`;

const INDICATOR_FROM = `FROM indicators i
   LEFT JOIN indicator_pec_goals ipg ON i.id = ipg.indicator_id
   LEFT JOIN indicator_topics it ON i.id = it.indicator_id
   LEFT JOIN indicator_education_levels iel ON i.id = iel.indicator_id
   LEFT JOIN indicator_ods4_goals ios ON i.id = ios.indicator_id
   LEFT JOIN pec_goals pg ON pg.id = ipg.pec_goal_id
   LEFT JOIN topics t ON t.id = it.topic_id
   LEFT JOIN education_levels el ON el.id = iel.education_level_id
   LEFT JOIN ods4_goals os ON os.id = ios.ods4_goal_id`;

const INDICATOR_DECOMPOSE = {
  pk: 'indicator_id',
  columns: {
    indicator_id: 'id',
    indicator_translation_key: 'translation_key',
    indicator_code: 'code',
    unit_measure: 'unit_measure',
  },
  pec_goals: {
    pk: 'pec_goal_id',
    columns: { pec_goal: 'code' },
  },
  ods4_goals: {
    pk: 'ods4_goal_id',
    columns: { ods4_goal: 'code' },
  },
  topics: {
    pk: 'topic_id',
    columns: { topic: 'code' },
  },
  education_levels: {
    pk: 'education_level_id',
    columns: { education_level: 'translation_key' },
  },
};

/**
 * Builds where clause for search indicator query
 *
 * @param {string} pecGoal PEC Goal id to filter
 * @param {string} topic Topic id to filter
 * @param {string} educationLevel Education level id to filter
 *
 * @returns String containg the whole search indicator where clause, based on the provided parameters
 */
const getSearchWhere = (pecGoal, topic, educationLevel) => {
  const whereClauses = [];

  if (pecGoal) {
    whereClauses.push(`ipg.pec_goal_id = ${pecGoal}`);
  }

  if (topic) {
    whereClauses.push(`it.topic_id = ${topic}`);
  }

  if (educationLevel) {
    whereClauses.push(`iel.education_level_id = ${educationLevel}`);
  }

  return whereClauses.length > 0 ? `WHERE ${whereClauses.join(' AND ')}` : '';
};

export default {
  /**
   * Returns a list of matching indicatos, based on the specified criteria
   *
   * @param {number} [pecGoal] PEC Goal id
   * @param {number} [topic] Topic id
   * @param {number} [educationLevel] Educational Level id
   */
  search: async (pecGoal, topic, educationLevel) => {
    const where = getSearchWhere(pecGoal, topic, educationLevel);
    const orderBy = 'ORDER BY i.code, pg.goal_order, os.goal_order, el.code';

    const sql = `${INDICATOR_SELECT}
      ${INDICATOR_FROM}
      ${where}
      ${orderBy}`;

    return db.query(sql, [], {
      decompose: INDICATOR_DECOMPOSE,
    });
  },
  findAll: async () => db.indicators.find({}),
  findById: async (id) => db.indicators.findOne({ id }),
  /**
   * Finds related indicators
   *
   * @param {number} id Indicator id
   */
  findRelated: async (id) => {
    const sql = `SELECT i.*
                 FROM indicator_topics it
                 LEFT JOIN indicators i ON (it.indicator_id = i.id)
                 WHERE id <> ${id} 
                 AND topic_id = (
                     SELECT topic_id
                     FROM indicator_topics
                     WHERE indicator_id = ${id}
                 )
                 ORDER BY id ASC;`;

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

    let indicator = await db.query(sql, [], {
      decompose: INDICATOR_DECOMPOSE,
    });

    if (!indicator || indicator.length === 0) {
      return null;
    }

    [indicator] = indicator;

    const variations = await IndicatorVariationService.findByIndicatorId(id);
    indicator.variations = _.map(variations, (v) => _.omit(v, 'indicator_id', 'query'));

    return indicator;
  },
};
