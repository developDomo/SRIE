import theme from '../../styles/theme'
import CountryItem from './CountryItem'
import { Row } from 'react-bootstrap'

export default function CountrySelector(props) {
  return (
  <div className="country-selector">
        
        <Row className="py-2">
          {props.countries.map(country => (
            <CountryItem country={country} />
          ))}
        </Row>
        

    <style jsx>{`
    .country-selector {
    {/* background-color: #044A95; */}
    }
    `}</style>
  </div>
)}

