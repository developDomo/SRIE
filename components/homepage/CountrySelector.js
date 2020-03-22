import theme from "../../styles/theme";
import CountryItem from "./CountryItem";

const CountrySelector = props => (
  <div className="country-selector">
    {props.countries.map(country => (
      <CountryItem key={country.code} country={country} />
    ))}
    <style jsx>{`
      .country-selector {
        display: flex;
        flex-direction: row;
      }
    `}</style>
  </div>
);

export default CountrySelector;
