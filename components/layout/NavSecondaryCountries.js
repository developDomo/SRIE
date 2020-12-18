import { Row, Col, Container } from 'react-bootstrap';
import styled from 'styled-components';
import NavSecondaryCountry from './NavSecondaryCountry';

import {
  txt,
} from '../../styles/colors';
import { withTranslation } from '../../i18n';

const NavLabel = styled.p`
  color: ${txt};
  line-height: 46px;
  margin: 0;
  text-align:right;
  font-family: 'Roboto Slab', serif;
  @media (max-width: 768px) {
    text-align:center;
  }
`;

const NavSecondaryCountries = ({ t, countries, countryCode }) => (
  <>
    <div className="box_linkC">
      <Container>
        <Row>
          <Col xs={12} sm={4} md={5}>
            <NavLabel>
              {t('selectAnotherCountryThatYouWantToConsult')}
            </NavLabel>
          </Col>
          <Col xs={12} md={7} className="d-sm-flex d-inline-flex">
            <Container fluid>
              <Row>
                {countries.map((country) => (
                  <NavSecondaryCountry key={country.code} country={country} selected={countryCode} />
                ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <style type="text/css">
        {`
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

export default withTranslation('common')(NavSecondaryCountries);
