import { Container } from 'react-bootstrap';
import { withTranslation } from '../../i18n';
import CountryHeader from '../../components/countries/CountryHeader';

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
  };
};

export default withTranslation('common')(Progress2021);
