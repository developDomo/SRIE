import Link from 'next/link';
import { Container, Row } from 'react-bootstrap';

import styled from 'styled-components';
import IndicadorComponent from '../../../components/layout/IndicadorComponent';
import Header from '../../../components/layout/Header';

import Title from '../../../components/layout/Title';
import PecIcon from '../../../public/img/home/icon_pec_indicadores.svg';

import { withTranslation } from '../../../i18n';
import FilterResult from '../../../components/indicadors/FilterResult';
import CountryHeader from '../../../components/countries/CountryHeader';

const IconImg = styled.img`
  width: 18px;
  height: 18px;
`;

const Indicadores = ({ t, countries, country }) => {
  const array = [1, 2, 3, 4, 5];
  const navigation = [
    { key: 'navigation.pages.indicators' },
  ];

  return (
    <>
      <Header />
      <CountryHeader countries={countries} country={country} navigation={navigation} active="indicators" />
      <Container>
        <Row className="mt-5 mb-5">
          <div className="col-lg-12 pr-0 text-center">
            <Title color="azul" type="title">
              INDICADORES EDUCATIVOS
            </Title>
          </div>
        </Row>
        <Row>
          <div className="col-lg-12 pr-0 text-left">
            <Title color="azul" type="subtitle">
              Filtrar indicadores por:
            </Title>
            <form>
              <Row>
                <div className="form-group col-lg-4">
                  <select
                    className="form-control"
                    id="form-indicadors-pec"
                  >
                    <option selected>Meta PEC</option>
                  </select>
                </div>
                <div className="form-group col-lg-4">
                  <select
                    className="form-control"
                    id="form-indicadors-topic"
                  >
                    <option selected>Tema</option>
                  </select>
                </div>
                <div className="form-group col-lg-4">
                  <select
                    className="form-control"
                    id="form-indicadors-level"
                  >
                    <option selected>Nivel educativo</option>
                  </select>
                </div>
              </Row>
            </form>
          </div>
        </Row>
      </Container>
      <Container fluid>
        <Row className="mt-5 mb-5 bg-light pt-2 pb-0">
          <Container>
            <Row>
              <FilterResult pec="2.2" level="Participación" topic="Primaria" />
            </Row>
          </Container>
        </Row>
      </Container>
      <Container>
        <Row className="mt-3 mb-3">
          <div className="col-lg-7 mb-3">
            <Title color="negro" type="caption">
              Indicadores Educativos
            </Title>
          </div>
          <div className="col-lg-3 mb-3">
            <Row className="d-flex align-content-center">
              <div className="col-lg-2 m-0 p-0">
                <IconImg src={PecIcon} />
              </div>
              <div className="col-lg-8 m-0 p-0">
                <Title color="negro" type="caption">
                  PEC
                </Title>
              </div>
            </Row>
          </div>
          <div className="col-lg-2 mb-3">
            <Row>
              <div className="col-lg-2 m-0 p-0">
                <IconImg src={PecIcon} />
              </div>
              <div className="col-lg-8 m-0 p-0">
                <Title color="negro" type="caption">
                  ODS 4
                </Title>
              </div>
            </Row>
          </div>
          {array.map((item, index) => (
            <Link key={`indicador-${index}`} href={`/${country.short_name}/indicadores/1`} as={`/${country.short_name}/indicadores/1`}>
              <div className="col-lg-12 mb-3 p-0">
                <IndicadorComponent />
              </div>
            </Link>
          ))}
        </Row>
      </Container>
    </>
  );
};

Indicadores.getInitialProps = async ({ query }) => {
  const countriesResponse = await fetch(`${process.env.API_URL}/api/countries`);
  const countries = await countriesResponse.json();

  const countryResponse = await fetch(
    `${process.env.API_URL}/api/countries/${query.id}`,
  );
  const country = await countryResponse.json();

  return {
    namespacesRequired: ['common'],
    countries,
    country,
  };
};

export default withTranslation('common')(Indicadores);
