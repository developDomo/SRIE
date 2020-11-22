import _ from 'lodash';
import { object } from 'prop-types';

export const charDataFormatHelper = (data) => {
  const grouped = _.mapValues(_.groupBy(data, 'time_period'));

  const formattedData = [];

  Object.keys(grouped).forEach((key) => {
    const charData = {
      groupBy: key,
    };
    grouped[key].forEach((child) => {
      charData[child.label] = parseFloat(child.obs_value).toFixed(2);
    });
    formattedData.push(charData);
  });
  return formattedData;
};

export const hasSomeData = (data) => {
  let shouldHide = false;
  if (Object.keys(data).length === 0) {
    shouldHide = true;
  }
  Object.keys(data).forEach((value) => {
    if (_.isEmpty(data[value])) {
      shouldHide = true;
    }
  });
  return shouldHide;
};

export const dataFormatter = (value) => new Intl.NumberFormat('es').format(value);
