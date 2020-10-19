import { Row } from 'react-bootstrap';
import CountryItem from './CountryItem';

export default function CountrySelector(props) {
  const { countries } = props;
  return (
    <div className="country-selector">
      <Row className="py-2">
        {countries?.map((country) => (
          <CountryItem key={country.code} country={country} />
        ))}
      </Row>
    </div>
  );
}
