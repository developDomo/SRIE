import _ from 'lodash';
import { Container } from 'react-bootstrap';
import { withTranslation } from '../../i18n';
import CountryHeader from '../../components/countries/CountryHeader';
import FetchUtils from '../../utils/Fetch.utils';

const Progress2021 = ({ t, countries, country }) => {
  const navigation = [
    { key: 'navigation.pages.progress2021' },
  ];

  return (
    <>
      <CountryHeader countries={countries} country={country} navigation={navigation} active="progress-2021" />
      <Container />
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const countriesResponse = await fetch(`${process.env.API_URL}/api/countries`);
  const countries = await countriesResponse.json();
  const countryInfo = _.find(countries, (c) => c.short_name === query.id);

  const [country] = await FetchUtils.multipleFetch([
    `${process.env.API_URL}/api/countries/${countryInfo.code}`,
  ]);
  return {
    props: {
      countries,
      country,
    },
  };
};
Progress2021.defaultProps = { i18nNamespaces: ['common'] };

export default withTranslation('common')(Progress2021);
