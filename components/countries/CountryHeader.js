import NavSecondaryCountries from '../layout/NavSecondaryCountries';
import BreacrumbBar from './BreacrumbBar';
import CountryTitle from './CountryTitle';

const CountryHeader = ({
  countries, country, navigation, active,
}) => (
  <div>
    <NavSecondaryCountries countries={countries} countryCode={country.code} />
    <BreacrumbBar country={country} navigation={navigation} />
    <CountryTitle country={country} active={active} />
  </div>
);

export default CountryHeader;
