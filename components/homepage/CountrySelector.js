import { Row } from 'react-bootstrap';
import CountryItem from './CountryItem';


export default function CountrySelector({ countries }) {
  return (
    <div className="country-selector">
      <Row className="py-2">
        {countries?.map((country) => (
          <CountryItem country={country} />
        ))}
      </Row>
      <style jsx>
        {`
    .country-selector {
    {/* background-color: #044A95; */}
    }
    `}
      </style>
    </div>
  );
}
