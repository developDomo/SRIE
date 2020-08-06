import _ from 'lodash';
import axios from 'axios';
import parse from 'csv-parse';
import ObjectsToCsv from 'objects-to-csv';
import IndicatorService from './Indicator.service';
import IndicatorVariationService from './IndicatorVariation.service';
import FilterUtils from '../utils/Filter.utils';

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

const generalLabels = {
  _T: 'Total',
  _Z: 'No aplicable',
};

const noData = [{
  PAIS: '',
  PERIODO: '',
  UNIDAD_DE_MEDIDA: '',
  NIVEL_EDUCATIVO: '',
  SEXO: '',
  EDAD: '',
  GRADO: '',
  MATERIA_TEMA_O_NORMA: '',
  NIVEL_SOCIOECONOMICO: '',
  UBICACION: '',
  VALOR: '',
}];

const labels = {
  units: {
    PT: 'Porcentaje',
    YR: 'Años',
    PER: 'Personas',
    GPI: 'Índice de Paridad de Género',
    GPIA: 'Índice de Paridad de Género Ajustado',
    GLPI: 'Índice de Paridad de Ubicación Geográfica',
    GLPIA: 'Índice de Paridad de Ubicación Geográfica Ajustado',
    SESPI: 'Índice de Paridad de Nivel Socieconómico',
    SESPIA: 'Índice de Paridad de Nivel Socieconómico Ajustado',
    ...generalLabels,
  },
  educative_levels: {
    L0: 'Primera Infancia',
    L1: 'Primaria',
    L2: 'Secundaria Baja',
    L3: 'Secundaria Alta',
    L02: 'Preprimaria',
    L02T3: 'Preprimaria a secundaria',
    L1T3: 'Prmaria y Secundaria',
    L2_3: 'Secundaria',
    L5T8: 'Terciaria',
    L5T7: 'Educación terciaria de ciclo corto a nivel de maestría, especialización o equivalente',
    L6T8: 'Grado en educación terciaria a nivel de doctorado o equivalente',
    L7T8: 'Nivel de maestría especialización, doctorado, o equivalente',
    ...generalLabels,
  },
  sexos: {
    M: 'Masculino',
    F: 'Femenino',
    ...generalLabels,
  },
  ages: {
    SCH_AGE_GROUP: 'Edad escolar',
    Y_LT5: 'Menos de 5 años',
    Y_GE15: '15 años y más',
    Y_GE25: '25 años y más',
    Y15T24: '15-24 años',
    TH_ENTRY_AGE: 'Edad teórica de ingreso',
    GE2_OVER_AGE: 'Por lo menos 2 años más de edad',
    UNDER1_AGE: 'Un año menor que la edad teórica de ingreso',
    ...generalLabels,
  },
  grades: {
    G1: '1° Grado',
    G2: '2° Grado',
    G3: '3° Grado',
    G4: '4° Grado',
    G5: '5° Grado',
    G6: '6° Grado',
    G2_3: '2° o 3° Grado',
    GLAST: 'Último grado',
    ...generalLabels,
  },
  subjects: {
    MATH: 'Matemáticas',
    READING: 'Lectura',
    ...generalLabels,
  },
  wealth_quintiles: {
    Q1: 'Más pobre',
    Q2: 'Segundo',
    Q3: 'Medio',
    Q4: 'Cuarto',
    Q5: 'Más rico',
    ...generalLabels,
  },
  locations: {
    RUR: 'Rural',
    URB: 'Urbana',
    ...generalLabels,
  },
  countries: {
    BZ: 'Belice',
    CR: 'Costa Rica',
    SV: 'El Salvador',
    GT: 'Guatemala',
    HN: 'Honduras',
    NI: 'Nicaragua',
    PA: 'Panamá',
    DO: 'Rep. Dominicana',
  },
};

const mapDataForCSV = (data) => data.map((item) => ({
  PAIS: labels.countries[item.ref_area],
  PERIODO: item.time_period,
  UNIDAD_DE_MEDIDA: labels.units[item.unit_measure],
  NIVEL_EDUCATIVO: labels.educative_levels[item.edu_level],
  SEXO: labels.sexos[item.sex],
  EDAD: labels.ages[item.age],
  GRADO: labels.grades[item.grade],
  MATERIA_TEMA_O_NORMA: labels.subjects[item.subject],
  NIVEL_SOCIOECONOMICO: labels.wealth_quintiles[item.wealth_quintile],
  UBICACION: labels.locations[item.location],
  VALOR: item.obs_value,
}));

const updateCsvFile = async (country, code, data) => {
  const objects = (data.length > 0) ? mapDataForCSV(data) : noData;

  await new ObjectsToCsv(objects).toDisk(`./public/csv/${country}-${code}.csv`);
};

const updateVariationsCsvFiles = async (country, indicator, variations, data) => {
  variations.forEach(async (variation) => {
    const variationData = FilterUtils.filter(
      data,
      variation.query,
    );

    updateCsvFile(country, `${indicator.code}.${variation.code}`, variationData);
  });
};

const updateCsvFiles = async (countries, indicator, data) => {
  const variations = await IndicatorVariationService.findByIndicatorId(
    indicator.id,
  );

  if (variations.length) {
    countries.split('+').forEach((country) => updateVariationsCsvFiles(country, indicator, variations, data.filter((row) => row.ref_area === country)));
  } else {
    countries.split('+').forEach((country) => updateCsvFile(country, indicator.code, data.filter((row) => row.ref_area === country)));
  }
};

const updateIndicatorData = async (indicator, data, countries) => {
  const table = db[indicator.uis_dataset.toLowerCase()];

  const lowercaseData = data.map((obj) => _.transform(obj, (result, val, key = '') => {
    // eslint-disable-next-line no-param-reassign
    result[key.toLowerCase()] = val;
  }));

  lowercaseData.forEach(async (row) => {
    const queryFields = _.omit(row, dataFields);
    const existing = await table.findOne(queryFields);

    if (existing) {
      table.destroy(queryFields);
    }
    table.insert(row);
  });

  await db.indicators.update(indicator.id, { updated_at: new Date() });

  updateCsvFiles(countries, indicator, lowercaseData);
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
        parse(response.data, { columns: true }, (err, output) => { updateIndicatorData(indicator, output, countries); });
      }
    })
    .catch(() => {
      // if no data, just ignore
      updateCsvFiles(countries, indicator, []);
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
