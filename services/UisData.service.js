import _ from 'lodash';
import axios from 'axios';
import parse from 'csv-parse';
import IndicatorService from './Indicator.service';

const db = require('express-http-context').get('db');

const apiUrl = 'https://api.uis.unesco.org/sdmx/data';
const countries = 'CR+DO+NI+PA+SV+GT+BZ+HN';
const subscriptionKey = process.env.UIS_API_KEY;
const format = 'csv-sdmx';
const startPeriod = 2010;
const endPeriod = 2020;

const params = {
  startPeriod,
  endPeriod,
  format,
  'subscription-key': subscriptionKey,
};

const dataFields = [
  'obs_value',
  'unit_mult',
  'obs_status',
  'freq',
  'decimals',
];


const updateIndicatorData = async (indicator, data) => {
  const table = db[indicator.uis_dataset.toLowerCase()];

  data.forEach(async (row) => {
    const lowercaseRow = _.mapKeys(row, (v, k) => k.toLowerCase());
    const queryFields = _.omit(lowercaseRow, dataFields);
    const existing = await table.findOne(queryFields);

    if (existing) {
      table.destroy(queryFields);
    }
    table.insert(lowercaseRow);
  });

  db.indicators.update(indicator.id, { updated_at: new Date() });
};


const updateDataByIndicatorId = async (id) => {
  const indicator = await IndicatorService.findById(id);

  const url = `${apiUrl}/${indicator.uis_dataset}/${indicator.uis_data_query}.${countries}`;

  const response = await axios.get(url, { params });
  parse(response.data, { columns: true }, (err, output) => { updateIndicatorData(indicator, output); });
};

const updateAllIndicators = async () => {
  const indicators = await IndicatorService.findAll();

  indicators.forEach((indicator) => {
    updateDataByIndicatorId(indicator);
  });
};

export default {
  updateDataByIndicatorId,
  updateAllIndicators,
};
