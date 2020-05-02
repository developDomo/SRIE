const db = require("express-http-context").get("db");

import _ from "lodash";

import FilterUtils from "../utils/Filter.utils";

import IndicatorVariationService from "./IndicatorVariation.service";
import IndicatorVizualizationService from "./IndicatorVizualization.service";
import IndicatorIndexService from "./IndicatorIndex.service";
import IndicatorDataService from "./IndicatorData.service";

export default {
  /**
   * Returns a list of matching indicatos, based on the specified criteria
   *
   * @param {number} [pec_goal] PEC Goal id
   * @param {number} [topic] Topic id
   * @param {number} [educational_level] Educational Level id
   */
  search: async (pec_goal, topic, educational_level) => {
    const where = getSearchWhere(pec_goal, topic, educational_level);
    const sql = `SELECT i.*, 
                     string_agg(DISTINCT pg.code, '/') as pec_goals, 
                     string_agg(DISTINCT t.translation_key, '/') as topics,
                     string_agg(DISTINCT el.code, '/') as educational_levels 
                 FROM indicators i 
                 LEFT JOIN indicator_pec_goals ipg ON i.id = ipg.indicator_id
                 LEFT JOIN indicator_topics it ON i.id = it.indicator_id
                 LEFT JOIN indicator_educational_levels iel ON i.id = iel.indicator_id
                 LEFT JOIN pec_goals pg ON pg.id = ipg.pec_goal_id
                 LEFT JOIN topics t ON t.id = it.topic_id
                 LEFT JOIN educational_levels el ON el.id = iel.educational_level_id
                 ${where}
                 GROUP BY i.id`;

    return await db.query(sql);
  },
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

    return await db.query(sql);
  },
  /**
   * Return all indicator information and data needed for the indicator page
   *
   * @param {number} id Indicator id
   * @param {string} country Country code
   */
  findById: async (id, country) => {
    let response = {};

    const indicator = await db.indicators.findOne({ id: id });
    if (!indicator) {
      return null;
    }

    response.info = _.omit(indicator, "query");

    const rawData = await IndicatorDataService.find(
      _.assign(indicator.query, { ref_area: country })
    );

    const variations = await IndicatorVariationService.findByIndicatorId(id);
    response.variations = _.map(variations, (v) =>
      _.omit(v, "indicator_id", "query")
    );
    let data = await filterDataByVariation(variations, indicator.code, rawData);

    const visualizations = await IndicatorVizualizationService.findByIndicatorId(
      id
    );

    const indexes = await IndicatorIndexService.findByIndicatorId(id);

    response.data = await filterData(data, visualizations, indexes);

    return response;
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
  let whereClauses = [];

  if (pecGoal) {
    whereClauses.push(`ipg.pec_goal_id = ${pecGoal}`);
  }

  if (topic) {
    whereClauses.push(`it.topic_id = ${topic}`);
  }

  if (educationalLevel) {
    whereClauses.push(`iel.educational_level_id = ${educationalLevel}`);
  }

  return whereClauses.length > 0 ? `WHERE ${whereClauses.join(" AND ")}` : "";
};

/**
 * Filter data by the indicator variations
 *
 * @param {array} variations Indicator variations
 * @param {string} indicatorCode Indicator code
 * @param {array} rawData Raw data from the database
 */
const filterDataByVariation = async (variations, indicatorCode, rawData) => {
  let data = {};

  if (variations.length > 0) {
    variations.forEach(async (variation) => {
      data[indicatorCode + "." + variation.code] = _.filter(
        rawData,
        variation.query
      );
    });
  } else {
    data[indicatorCode] = rawData;
  }

  return data;
};

/**
 * Filters the data by every possible index or visualization
 *
 * @param {array} data The data separated by indicator variation
 * @param {array} visualizations The list of possible visualizations
 * @param {array} indexes The list of possible indexes
 *
 * @returns {object} Returns the data filterd by visualizations and views
 */
const filterData = async (data, visualizations, indexes) => {
  let dataByViews = {};

  Object.keys(data).forEach(async (code) => {
    dataByViews[code] = {};
    dataByViews[code].visualizations = await filterDataByView(
      visualizations,
      data[code]
    );
    dataByViews[code].indexes = await filterDataByView(
      _.map(indexes, (i) => _.assign(i, { label: "unit_measure" })),
      data[code]
    );
  });

  return dataByViews;
};

/**
 * Filter data by view
 *
 * @param {array} viewList It could be a visualization or an index list
 * @param {array} data Indicator data
 *
 * @returns {object} Returns complete data by view
 */
const filterDataByView = async (viewList, data) => {
  let dataByView = {};

  viewList.forEach(async (view) => {
    const filteredData = FilterUtils.filter(data, view.query);

    dataByView[view.code] = await filterHistoricalData(
      _.map(filteredData, (item) => {
        return _.assign(
          { label: `${view.label_root || "indexes"}.${item[view.label]}` },
          _.omit(
            item,
            "unit_measure",
            "edu_level",
            "sex",
            "wealth_quintile",
            "location"
          )
        );
      })
    );
  });

  return dataByView;
};

/**
 * Filter data by time period
 *
 * @param {array} data Array of data
 *
 * @returns {object} Returns historical data and latest year data
 */
const filterHistoricalData = async (data) => {
  let historicalData = {};
  historicalData["historical"] = data;

  const max = _.maxBy(data, "time_period");
  historicalData["latest"] = data.length
    ? _.filter(data, { time_period: max.time_period })
    : data;

  return historicalData;
};
