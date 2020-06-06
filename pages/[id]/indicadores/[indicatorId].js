import { Container } from 'react-bootstrap';
import { withTranslation } from '../../../i18n';
import Header from '../../../components/layout/Header';
import CountryHeader from '../../../components/countries/CountryHeader';

const Progress2021 = ({
  t, countries, country, indicator,
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

Progress2021.getInitialProps = async ({ query }) => {
  const countriesResponse = await fetch(`${process.env.API_URL}/api/countries`);
  const countries = await countriesResponse.json();

  const countryResponse = await fetch(
    `${process.env.API_URL}/api/countries/${query.id}`,
  );
  const country = await countryResponse.json();

  return {
    namespacesRequired: ['common'],
    countries,
    country,
    indicator: { id: query.indicatorId },
  };
};

export default withTranslation('common')(Progress2021);
