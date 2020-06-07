import { Row, Col, Container } from 'react-bootstrap';
import NavSecondaryCountry from './NavSecondaryCountry';

export default class extends React.Component {
  render() {
    const { countries, countryCode } = this.props;

    return (
      <>
        <div className="box_linkC">
          <Container>
            <Row>
              <Col sm={5}>
                <p className="p-select text-right">
                  Seleccione otro país que desee consultar:
                </p>
              </Col>
              <Col sm={7} className="d-flex">
                {countries.map((country) => (
                  <NavSecondaryCountry key={country.code} country={country} selected={countryCode} />
                ))}
              </Col>
            </Row>
          </Container>
          <style type="text/css">
            {`
        .p-select {
            color: #1D2D49;
            line-height: 46px;
            margin: 0;
        }
                .box_linkC {
                    background: #cccccc;
                    padding: 10px 0px;
                    margin: 0 0 2em 0;
                }
            `}
          </style>
        </div>
      </>
    );
  }
}
