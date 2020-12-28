import NavSecondaryCountries from '../layout/NavSecondaryCountries';
import BreacrumbBar from './BreacrumbBar';
import CountryTitle from './CountryTitle';
import BreacrumbBarDefault from '../layout/BreadcrumbBarDefault';

const CountryHeader = ({
  countries, country, navigation, active, page, share,
}) => (
  <div>
    {
      countries && country ? (
        <>
          <NavSecondaryCountries countries={countries} countryCode={country.code} share={share} />
          <BreacrumbBar country={country} navigation={navigation} share={share} />
          <CountryTitle country={country} active={active} share={share} />
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
