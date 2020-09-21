import NavSecondaryCountries from '../layout/NavSecondaryCountries';
import BreacrumbBar from './BreacrumbBar';
import CountryTitle from './CountryTitle';
import BreacrumbBarDefault from '../layout/BreadcrumbBarDefault';

const CountryHeader = ({
  countries, country, navigation, active, page,
}) => (
  <div>
    {
      countries && country ? (
        <>
          <NavSecondaryCountries countries={countries} countryCode={country.code} />
          <BreacrumbBar country={country} navigation={navigation} />
          <CountryTitle country={country} active={active} />
        </>
      )
        : (
          <>
            <BreacrumbBarDefault page={page} navigation={navigation} />
          </>
        )
    }

  </div>
);

export default CountryHeader;
