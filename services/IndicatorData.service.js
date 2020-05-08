const db = require("express-http-context").get("db");

import _ from "lodash";

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

  getFreeEducationYearsByCountry: async (country) => {
    const data = await db.uis_data.findOne(
      { stat_unit: "FREE_EDU", ref_area: country },
      {
        fields,
        order,
      }
    );

    return data || {};
  },
  getCompulsoryEducationYearsByCountry: async (country) => {
    const data = await db.uis_data.findOne(
      { stat_unit: "COMP_EDU", ref_area: country },
      {
        fields,
        order,
      }
    );

    return data || {};
  },
  getLiteracyRateByCountry: async (country) => {
    const data = await db.uis_data.findOne(
      { stat_unit: "LR", ref_area: country, age: "Y_GE15" },
      {
        fields,
        order,
      }
    );

    return data || {};
  },

  getNetEnrollmentRateByCountry: async (country) => {
    const rawData = await db.uis_data.find(
      {
        stat_unit: "NER",
        ref_area: country,
        unit_measure: "PT",
        sex: "_T",
        age: "SCH_AGE_GROUP",
        wealth_quintile: "_T",
        location: "_T",
        or: [{ edu_level: "L02" }, { edu_level: "L1" }, { edu_level: "L2_3" }],
      },
      {
        fields: _.union(["edu_level"], fields),
        order,
      }
    );

    if (!rawData || !rawData.length) {
      return {};
    }

    const data = {};
    data.time_period = _.maxBy(rawData, "time_period").time_period;
    data.data = splitByEducationalLevel(
      rawData,
      ["L02", "L1", "L2_3"],
      data.time_period
    );

    return data;
  },

  getCompletionRateByCountry: async (country) => {
    const rawData = await db.uis_data.find(
      {
        stat_unit: "CR",
        unit_measure: "PT",
        ref_area: country,
        sex: "_T",
        age: "_T",
        wealth_quintile: "_T",
        location: "_T",
        or: [{ edu_level: "L1" }, { edu_level: "L3" }],
      },
      {
        fields: _.union(["edu_level"], fields),
      }
    );

    if (!rawData || !rawData.length) {
      return {};
    }

    const data = {};
    data.time_period = _.maxBy(rawData, "time_period").time_period;
    data.data = splitByEducationalLevel(
      rawData,
      ["L1", "L3"],
      data.time_period
    );

    return data;
  },
  getOutOfSchoolRateByCountry: async (country) => {
    const data = await db.uis_data.findOne(
      {
        stat_unit: "ROFST",
        ref_area: country,
        sex: "_T",
        age: "SCH_AGE_GROUP",
        wealth_quintile: "_Z",
        location: "_Z",
        edu_level: "L1T3",
      },
      {
        fields,
        order,
      }
    );

    return data || {};
  },
};

/**
 * Default order
 */
const order = [
  {
    field: "time_period",
    direction: "desc",
    nulls: "last",
  },
];

/**
 * Default fields to be retrieved
 */
const fields = [
  "time_period",
  "obs_value",
  "unit_mult",
  "obs_status",
  "freq",
  "decimals",
];

/**
 * Split data by provided levels
 *
 * @param {array} data Data
 * @param {array} levels Levels to split data
 * @param {number} maxTimePeriod Max year
 *
 * @returns {array} List of data, splitted by level
 */
const splitByEducationalLevel = (data, levels, maxTimePeriod) => {
  const filteredData = {};

  levels.forEach((level) => {
    filteredData[level] =
      filterAndGetLatest(data, { edu_level: level }, maxTimePeriod) || {};
  });

  return filteredData;
};

/**
 * Filter and get the most recent object
 *
 * @param {*} data Data
 * @param {*} filters FIlters to be applied
 * @param {*} maxTimePeriod Max year
 *
 * @returns {object} Returns most recent object, based on filters
 */
const filterAndGetLatest = (data, filters, maxTimePeriod) => {
  const levelData = _.filter(data, filters);

  if (!levelData.length) {
    return {};
  }

  const maxData = _.filter(levelData, {
    time_period: maxTimePeriod,
  });

  if (!maxData.length) {
    return {};
  }

  return maxData[0];
};
