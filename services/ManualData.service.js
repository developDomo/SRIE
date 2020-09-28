import _ from 'lodash';
import IndicatorService from './Indicator.service';
import IndicatorDataService from './IndicatorData.service';
import IndicatorIndexService from './IndicatorIndex.service';
import IndicatorVizualizationService from './IndicatorVizualization.service';
import IndicatorVariationService from './IndicatorVariation.service';
import EventService from './Event.service';
import FilterUtils from '../utils/Filter.utils';

const db = require('express-http-context').get('db');

const MALE_VALUE = 'M';
const FEMALE_VALUE = 'F';

const RURAL_VALUE = 'RUR';
const URBAN_VALUE = 'URB';

const Q1_VALUE = 'Q1';
const Q2_VALUE = 'Q2';
const Q3_VALUE = 'Q3';
const Q4_VALUE = 'Q4';
const Q5_VALUE = 'Q5';

const indicator12baseData = {
  dataflow: 'UNESCO:SDG4(2.0)',
  stat_unit: 'STU',
  unit_measure: 'PT',
  edu_level: 'L3',
  edu_cat: 'C4',
  sex: '_T',
  age: 'GE2_OVER_AGE',
  grade: '_T',
  sector_edu: 'INST_T',
  edu_attain: '_Z',
  subject: '_T',
  wealth_quintile: '_Z',
  infrastr: '_Z',
  location: '_T',
  edu_type: 'INIT',
  se_bkgrd: '_T',
  source_fund: '_Z',
  fund_flow: '_Z',
  imm_status: '_Z',
  unit_mult: 0,
  obs_status: 'A',
  freq: 'A',
  decimals: 5,
};

const sdgManualBaseData = {
  unit_measure: 'PT',
  edu_level: '_T',
  sex: '_T',
  age: '_T',
  grade: '_T',
  edu_attain: '_Z',
  subject: '_T',
  wealth_quintile: '_Z',
  infrastr: '_Z',
  location: '_T',
  unit_mult: 0,
  obs_status: 'A',
  freq: 'A',
  decimals: 5,
};

const getBaseData = (id, data, query) => {
  const contextData = { ref_area: data.country, time_period: data.year, ...query };

  if (id === 12) {
    return Object.assign(indicator12baseData, contextData);
  }

  return Object.assign(sdgManualBaseData, contextData);
};

const addIndicatorData = async (id, data) => {
  const indicatorPromise = IndicatorService.findById(id);
  const indexesPromise = IndicatorIndexService.findByIndicatorId(id);
  const [indicator, indexes] = await Promise.all([indicatorPromise, indexesPromise]);

  const baseData = getBaseData(indicator.id, data, indicator.query);
  const insertData = [{ ...baseData, obs_value: data.total }];
  if (data.male && data.female) {
    insertData.push({ ...baseData, sex: MALE_VALUE, obs_value: data.male });
    insertData.push({ ...baseData, sex: FEMALE_VALUE, obs_value: data.female });
  }

  if (data.rural && data.urban) {
    insertData.push({ ...baseData, location: RURAL_VALUE, obs_value: data.rural });
    insertData.push({ ...baseData, location: URBAN_VALUE, obs_value: data.urban });
  }

  if (data.q1 && data.q2 && data.q3 && data.q4 && data.q5) {
    insertData.push({ ...baseData, wealth_quintile: Q1_VALUE, obs_value: data.q1 });
    insertData.push({ ...baseData, wealth_quintile: Q2_VALUE, obs_value: data.q2 });
    insertData.push({ ...baseData, wealth_quintile: Q3_VALUE, obs_value: data.q3 });
    insertData.push({ ...baseData, wealth_quintile: Q4_VALUE, obs_value: data.q4 });
    insertData.push({ ...baseData, wealth_quintile: Q5_VALUE, obs_value: data.q5 });
  }

  indexes.forEach((index) => {
    const indexCode = index.code.toLowerCase();

    if (data[indexCode]) {
      insertData.push({ ...baseData, unit_measure: index.code, obs_value: data[indexCode] });
    }
  });

  db[indicator.uis_dataset.toLowerCase()].insert(insertData);
};

const addData = async (id, data, user) => {
  await addIndicatorData(id, data);
  EventService.newDataEvent(user, id, data.year);
};

const updateUisData = (indicator, data, value) => {
  if (value) {
    db[indicator.uis_dataset.toLowerCase()].update(data, { obs_value: value });
  }
};

const editIndicatorData = async (id, data, user) => {
  const indicatorPromise = IndicatorService.findById(id);
  const indexesPromise = IndicatorIndexService.findByIndicatorId(id);
  const [indicator, indexes] = await Promise.all([indicatorPromise, indexesPromise]);

  const baseData = getBaseData(indicator.id, data);

  updateUisData(indicator, { ...baseData }, data.total);

  updateUisData(indicator, { ...baseData, sex: MALE_VALUE }, data.male);
  updateUisData(indicator, { ...baseData, sex: FEMALE_VALUE }, data.female);

  updateUisData(indicator, { ...baseData, location: RURAL_VALUE }, data.rural);
  updateUisData(indicator, { ...baseData, location: URBAN_VALUE }, data.urban);

  updateUisData(indicator, { ...baseData, wealth_quintile: Q1_VALUE }, data.q1);
  updateUisData(indicator, { ...baseData, wealth_quintile: Q2_VALUE }, data.q2);
  updateUisData(indicator, { ...baseData, wealth_quintile: Q3_VALUE }, data.q3);
  updateUisData(indicator, { ...baseData, wealth_quintile: Q4_VALUE }, data.q4);
  updateUisData(indicator, { ...baseData, wealth_quintile: Q5_VALUE }, data.q5);

  indexes.forEach((index) => {
    const indexCode = index.code.toLowerCase();

    if (data[indexCode]) {
      updateUisData(indicator, { ...baseData, unit_measure: index.code }, data[indexCode]);
    }
  });

  EventService.updateDataEvent(user, id, data.year);
};

const buildManualDataByYear = (data, year, unit_measure, indexes) => {
  const total = FilterUtils.filter(data, {
    sex: ['_T', '_Z'], location: ['_T', '_Z'], wealth_quintile: ['_T', '_Z'], unit_measure,
  });
  const male = FilterUtils.filter(data, {
    sex: MALE_VALUE, location: ['_T', '_Z'], wealth_quintile: ['_T', '_Z'], unit_measure,
  });
  const female = FilterUtils.filter(data, {
    sex: FEMALE_VALUE, location: ['_T', '_Z'], wealth_quintile: ['_T', '_Z'], unit_measure,
  });
  const rural = FilterUtils.filter(data, {
    sex: ['_T', '_Z'], location: RURAL_VALUE, wealth_quintile: ['_T', '_Z'], unit_measure,
  });
  const urban = FilterUtils.filter(data, {
    sex: ['_T', '_Z'], location: URBAN_VALUE, wealth_quintile: ['_T', '_Z'], unit_measure,
  });
  const q1 = FilterUtils.filter(data, {
    sex: ['_T', '_Z'], location: ['_T', '_Z'], wealth_quintile: Q1_VALUE, unit_measure,
  });
  const q2 = FilterUtils.filter(data, {
    sex: ['_T', '_Z'], location: ['_T', '_Z'], wealth_quintile: Q2_VALUE, unit_measure,
  });
  const q3 = FilterUtils.filter(data, {
    sex: ['_T', '_Z'], location: ['_T', '_Z'], wealth_quintile: Q3_VALUE, unit_measure,
  });
  const q4 = FilterUtils.filter(data, {
    sex: ['_T', '_Z'], location: ['_T', '_Z'], wealth_quintile: Q4_VALUE, unit_measure,
  });
  const q5 = FilterUtils.filter(data, {
    sex: ['_T', '_Z'], location: ['_T', '_Z'], wealth_quintile: Q5_VALUE, unit_measure,
  });

  const indexesValues = {};
  indexes.forEach((index) => {
    indexesValues[index.toLowerCase()] = FilterUtils.filter(data, {
      sex: ['_T', '_Z'], location: ['_T', '_Z'], wealth_quintile: ['_T', '_Z'], unit_measure: index,
    })[0]?.obs_value;
  });

  return {
    year,
    total: total[0]?.obs_value,
    male: male[0]?.obs_value,
    female: female[0]?.obs_value,
    rural: rural[0]?.obs_value,
    urban: urban[0]?.obs_value,
    q1: q1[0]?.obs_value,
    q2: q2[0]?.obs_value,
    q3: q3[0]?.obs_value,
    q4: q4[0]?.obs_value,
    q5: q5[0]?.obs_value,
    ...indexesValues,
  };
};

const buildManualDataByIndicator = (indicator, tempData) => {
  const data = [];
  Object.keys(tempData).forEach((year) => {
    const yearData = buildManualDataByYear(tempData[year], year, indicator.uis_unit_measure, indicator.indexes);

    data.push(yearData);
  });

  return data;
};

const groupDataByYear = async (indicatorId, indicatorCode, variationCode, data) => {
  if (!variationCode) {
    return _.groupBy(data, 'time_period');
  }

  const variation = await IndicatorVariationService.findByIndicatorIdAndCode(
    indicatorId,
    variationCode,
  );

  const variationData = await IndicatorDataService.filterDataByVariation(
    variation,
    indicatorCode,
    data,
  );

  return _.groupBy(variationData[`${indicatorId}.${variationCode}`], 'time_period');
};

const findManualDataByIndicatorId = async (id, variationCode, country) => {
  const indicator = await IndicatorService.findById(id);
  if (!indicator) {
    return indicator;
  }

  const visualizationsPromise = IndicatorVizualizationService.findByIndicatorId(id);
  const indexesPromise = IndicatorIndexService.findByIndicatorId(id);

  const [visualizations, indexes] = await Promise.all([visualizationsPromise, indexesPromise]);
  indicator.visualizations = visualizations.map((v) => v.code);
  indicator.indexes = indexes.map((i) => i.code);

  const data = await IndicatorDataService.find(
    db[indicator.uis_dataset.toLowerCase()], _.assign(indicator.query, { ref_area: country.toUpperCase() }),
  );

  const groupedData = await groupDataByYear(id, indicator.code, variationCode, data);
  indicator.data = buildManualDataByIndicator(indicator, groupedData);

  return indicator;
};

export default {
  addData,
  editIndicatorData,
  findManualDataByIndicatorId,
};
