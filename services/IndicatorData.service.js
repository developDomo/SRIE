/* eslint-disable no-param-reassign */
import _ from 'lodash';
import FilterUtils from '../utils/Filter.utils';
import IndicatorService from './Indicator.service';
import IndicatorVariationService from './IndicatorVariation.service';
import IndicatorVizualizationService from './IndicatorVizualization.service';
import IndicatorIndexService from './IndicatorIndex.service';

const db = require('express-http-context').get('db');

/**
 * Default order
 */
const order = [
  {
    field: 'time_period',
    direction: 'desc',
    nulls: 'last',
  },
];

/**
 * Default fields to be retrieved
 */
const fields = [
  'time_period',
  'obs_value',
  'unit_mult',
  'obs_status',
  'freq',
  'decimals',
];

/**
 * Default fields to be filtered
 */
const filteringFields = [
  'unit_measure',
  'edu_level',
  'edu_attain',
  'sex',
  'wealth_quintile',
  'location',
  'subject',
  'stat_unit',
  'grade',
  'age',
  'infrastr',
];

const find = async (table, query) => {
  const allFields = filteringFields.concat(fields);

  return table.find(query, {
    fields: allFields,
    order: [{
      field: 'time_period',
      direction: 'asc',
    }],
  });
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
    filteredData[level] = filterAndGetLatest(data, { edu_level: level }, maxTimePeriod) || {};
  });

  return filteredData;
};

/**
 * Filter data by the indicator variations
 *
 * @param {array} variations Indicator variations
 * @param {string} indicatorCode Indicator code
 * @param {array} rawData Raw data from the database
 */
const filterDataByVariation = async (variations, indicatorCode, rawData) => {
  const data = {};

  if (variations.length > 0) {
    variations.forEach(async (variation) => {
      data[`${indicatorCode}.${variation.code}`] = FilterUtils.filter(
        rawData,
        variation.query,
      );
    });
  } else {
    data[indicatorCode] = rawData;
  }

  return data;
};

/**
 * Filter data by time period
 *
 * @param {array} data Array of data
 *
 * @returns {object} Returns historical data and latest year data
 */
const filterHistoricalData = async (data) => {
  const historicalData = {};
  historicalData.historical = data;

  const max = _.maxBy(data, 'time_period');
  historicalData.latest = data.length
    ? _.filter(data, { time_period: max.time_period })
    : data;

  return historicalData;
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
  const dataByView = {};

  viewList.forEach(async (view) => {
    const filteredData = FilterUtils.filter(data, view.query);

    dataByView[view.code] = await filterHistoricalData(
      _.map(filteredData, (item) => _.assign(
        { label: `${item[view.label]}` },
        _.omit(
          item,
          filteringFields,
        ),
      )),
    );
  });

  return dataByView;
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
const filterData = async (unit_measure, data, visualizations, indexes) => {
  const dataByViews = {};

  indexes = _.map(indexes, (i) => _.assign(i, { label: 'unit_measure' }));

  Object.keys(data).forEach(async (code) => {
    dataByViews[code] = {};
    dataByViews[code].visualizations = await filterDataByView(
      visualizations,
      _.filter(data[code], { unit_measure }),
    );
    dataByViews[code].indexes = await filterDataByView(
      indexes,
      data[code],
    );
  });

  return dataByViews;
};

export default {
  find,

  findByIndicatorId: async (id, country) => {
    const indicator = await IndicatorService.findById(id);
    if (!indicator) {
      return indicator;
    }

    indicator.variations = await IndicatorVariationService.findByIndicatorId(
      id,
    );

    const rawData = await find(
      db[indicator.uis_dataset.toLowerCase()], _.assign(indicator.query, { ref_area: country.toUpperCase() }),
    );

    const dataPromise = filterDataByVariation(
      indicator.variations,
      indicator.code,
      rawData,
    );

    const visualizationsPromise = IndicatorVizualizationService.findByIndicatorId(
      id,
    );

    const indexesPromise = IndicatorIndexService.findByIndicatorId(id);

    const [data, visualizations, indexes] = await Promise.all([
      dataPromise, visualizationsPromise, indexesPromise,
    ]);

    return filterData(indicator.uis_unit_measure, data, visualizations, indexes);
  },

  getFreeEducationYearsByCountry: async (country) => {
    const data = await db.sdg4.findOne(
      {
        stat_unit: 'FREE_EDU',
        unit_measure: 'YR',
        ref_area: country,
        edu_level: 'L02T3',
      },
      {
        fields,
        order,
      },
    );

    return data || {};
  },
  getCompulsoryEducationYearsByCountry: async (country) => {
    const data = await db.sdg4.findOne(
      {
        stat_unit: 'COMP_EDU',
        unit_measure: 'YR',
        ref_area: country,
        edu_level: 'L02T3',
      },
      {
        fields,
        order,
      },
    );

    return data || {};
  },
  getLiteracyRateByCountry: async (country) => {
    const data = await db.sdg4.findOne(
      {
        stat_unit: 'LR',
        unit_measure: 'PT',
        ref_area: country,
        age: 'Y_GE15',
        sex: '_T',
        wealth_quintile: '_Z',
        location: '_T',
      },
      {
        fields,
        order,
      },
    );

    return data || {};
  },

  getGovernmentExpenditureByCountry: async (country) => {
    const rawData = await db.edu_finance.find(
      {
        stat_unit: 'XUNIT',
        unit_measure: 'PPP_CONST',
        fund_flow: 'FFNTP',
        source_fund: 'GOV',
        or: [{ edu_level: 'L02' }, { edu_level: 'L1' }, { edu_level: 'L2_3' }],
        ref_area: country,
      },
      {
        fields: _.union(['edu_level'], fields),
        limit: 3,
        order,
      },
    );

    if (!rawData || !rawData.length) {
      return {};
    }

    const data = {};
    data.time_period = _.maxBy(rawData, 'time_period').time_period;
    data.data = splitByEducationalLevel(
      rawData,
      ['L02', 'L1', 'L2_3'],
      data.time_period,
    );

    return data || {};
  },

  getNetEnrollmentRateByCountry: async (country) => {
    const rawData = await db.edu_non_finance.find(
      {
        stat_unit: 'NER',
        ref_area: country,
        unit_measure: 'PT',
        sex: '_T',
        age: 'SCH_AGE_GROUP',
        wealth_quintile: '_Z',
        location: '_T',
        or: [{ edu_level: 'L02' }, { edu_level: 'L1' }, { edu_level: 'L2_3' }],
      },
      {
        fields: _.union(['edu_level'], fields),
        order,
      },
    );

    if (!rawData || !rawData.length) {
      return {};
    }

    const data = {};
    data.time_period = _.maxBy(rawData, 'time_period').time_period;
    data.data = splitByEducationalLevel(
      rawData,
      ['L02', 'L1', 'L2_3'],
      data.time_period,
    );

    return data;
  },

  getCompletionRateByCountry: async (country) => {
    const rawData = await db.sdg4.find(
      {
        stat_unit: 'CR',
        unit_measure: 'PT',
        ref_area: country,
        sex: '_T',
        age: '_T',
        wealth_quintile: '_T',
        location: '_T',
        or: [{ edu_level: 'L1' }, { edu_level: 'L3' }],
      },
      {
        fields: _.union(['edu_level'], fields),
      },
    );

    if (!rawData || !rawData.length) {
      return {};
    }

    const data = {};
    data.time_period = _.maxBy(rawData, 'time_period').time_period;
    data.data = splitByEducationalLevel(
      rawData,
      ['L1', 'L3'],
      data.time_period,
    );

    return data;
  },
  getOutOfSchoolRateByCountry: async (country) => {
    const data = await db.sdg4.findOne(
      {
        stat_unit: 'ROFST',
        unit_measure: 'PT',
        ref_area: country,
        sex: '_T',
        age: 'SCH_AGE_GROUP',
        wealth_quintile: '_Z',
        location: '_Z',
        edu_level: 'L1T3',
      },
      {
        fields,
        order,
      },
    );

    return data || {};
  },
  filterDataByVariation,
};
