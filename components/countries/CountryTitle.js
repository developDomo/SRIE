import Link from 'next/link';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import { txt, blue1 } from '../../styles/colors';
import { ButtonNav } from '../layout/Button';
import { withTranslation } from '../../i18n';

const Divider = styled.span`
  display: block;
  width: 100%;
  border-bottom: 1px solid ${txt};
  margin-top: 20px;
`;

const CountryTitle = ({ t, country }) => (
  <Container className="mt-4">
    <Row className="d-flex justify-content-between">
      <div className="col-lg-4">
        <Row>
          <Col sm={2} className="d-none d-sm-block title-flag p-0">
            <img src={`/img/country/${country.code}-flag-title.svg`} alt="" />
          </Col>
          <Col className="title-text psm-0">
            <h2>{t(`countries:countries.${country.code}`)}</h2>
          </Col>
        </Row>
      </div>
      <Row className="col-lg-8 d-flex justify-content-end p-0">
        <div className="col-lg-2 pr-0">
          <Link href={`/${country.short_name}`} as={`/${country.short_name}`}>
            <ButtonNav amarillo active>
              {t('navigation.pages.country-data')}
            </ButtonNav>
          </Link>
        </div>
        <div className="col-lg-3 pr-0">
          <Link href={`/${country.short_name}/indicadores`} as={`/${country.short_name}/indicadores`}>
            <ButtonNav azul>{t('navigation.pages.indicators')}</ButtonNav>
          </Link>
        </div>
        <div className="col-lg-2 pr-0">
          <Link href={`/${country.short_name}/avance-2021`} as={`/${country.short_name}/avance-2021`}>
            <ButtonNav verde>{t('navigation.pages.progress2021')}</ButtonNav>
          </Link>
        </div>
      </Row>
      <Divider />
    </Row>
    <style type="text/css">
      {`
      .title-flag img {
        width: 100%; 
        margin-top: 3px;
      }
    
      .title-text h2 {
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size: 2.5em;
        text-transform: uppercase;
        color: ${blue1};
      }
    `}

    </style>
  </Container>
);

CountryTitle.getInitialProps = async () => ({
  namespacesRequired: ['navigation', 'countries'],
});

export default withTranslation('navigation', 'countries')(CountryTitle);
