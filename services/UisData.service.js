import _ from 'lodash';
import axios from 'axios';
import parse from 'csv-parse';
import IndicatorService from './Indicator.service';

const db = require('express-http-context').get('db');

const apiUrl = 'https://api.uis.unesco.org/sdmx/data';
const allCountries = 'CR+DO+NI+PA+SV+GT+BZ+HN';
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

/**
 * Update the UIS data for the indicator
 *
 * @param {string} id Indicator id
 * @param {string} countries List of countries to update
 * @returns {boolean} If it was successful
 */
const updateDataByIndicatorId = async (id, countries = allCountries) => {
  const indicator = await IndicatorService.findById(id);
  if (!indicator) {
    return false;
  }

  const url = `${apiUrl}/${indicator.uis_dataset}/${indicator.uis_data_query}.${countries}`;
  axios.get(url, { params })
    .then((response) => {
      if (response.status === 200) {
        parse(response.data, { columns: true }, (err, output) => { updateIndicatorData(indicator, output); });
      }
    })
    .catch(() => {
      // if no data, just ignore
    });


  return true;
};

const updateAllIndicators = async (countries = allCountries) => {
  const indicators = await IndicatorService.findAll();

  indicators.forEach(async (indicator) => {
    updateDataByIndicatorId(indicator.id, countries);
  });

  return true;
};

export default {
  updateDataByIndicatorId,
  updateAllIndicators,
};
