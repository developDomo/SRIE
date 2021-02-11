import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import React from 'react';
import CountryTitle from '../../countries/CountryTitle';
import Title from '../../layout/Title';
import { withTranslation } from '../../../i18n';

const CountryAdminDashboard = ({ t, country }) => (
  <Container fluid>
    <Container className="pt-4 pb-4">
      <CountryTitle country={country} />
      <Row className="justify-content-center mb-4 mt-4">
        <Title color="blueTitle" type="title">
          {t('admin:countryAdminPanel')}
        </Title>
      </Row>
      <Row>
        <Col sm={12} className="d-flex pt-2 pb-5 justify-content-center">
          <p>{t('admin:countryIntroDirections')}</p>
        </Col>
      </Row>
    </Container>
  </Container>

);

export default withTranslation(['common', 'admin'])(CountryAdminDashboard);
