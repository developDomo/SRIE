import _ from 'lodash';
import { Container } from 'react-bootstrap';
import { withTranslation } from '../../../i18n';
import Header from '../../../components/layout/Header';
import CountryHeader from '../../../components/countries/CountryHeader';

import FetchUtils from '../../../utils/Fetch.utils';

const IndicatorPage = ({
  t, countries, country, indicator, data,
}) => {
  const navigation = [
    { key: 'navigation.pages.indicators', url: `/${country.short_name}/indicadores` },
    { key: `indicators:indicators.${indicator.id}.name` },
  ];

  return (
    <>
      <Header />
      <CountryHeader countries={countries} country={country} navigation={navigation} active="indicators" />
      <Container />
    </>
  );
};

IndicatorPage.getInitialProps = async ({ query }) => {
  const countriesResponse = await fetch(`${process.env.API_URL}/api/countries`);
  const countries = await countriesResponse.json();

  const country = _.find(countries, (c) => c.short_name === query.id);

  const [indicator, data] = await FetchUtils.multipleFetch([
    `${process.env.API_URL}/api/indicators/${query.indicatorId}`,
    `${process.env.API_URL}/api/indicators/${query.indicatorId}/data?country=${country.code}`,
  ]);

  return {
    namespacesRequired: ['common'],
    countries,
    country,
    indicator,
    data,
  };
};

export default withTranslation('common')(IndicatorPage);
