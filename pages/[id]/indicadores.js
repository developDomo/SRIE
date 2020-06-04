import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, Row, Breadcrumb } from 'react-bootstrap';

import styled from 'styled-components';
import IndicadorComponent from '../../components/layout/IndicadorComponent';
import Header from '../../components/layout/Header';

import { ButtonNav } from '../../components/layout/Button';
import CrFlag from '../../public/img/home/cr-flag.png';
import FlagNameComponent from '../../components/layout/FlagNameComponent';

import NavSecundaryCountries from '../../components/layout/NavSecundaryCountries';
import Title from '../../components/layout/Title';
import PecIcon from '../../public/img/home/icon_pec_indicadores.svg';

import { txt } from '../../styles/colors';
import { withTranslation } from '../../i18n';
import FilterResult from '../../components/indicadors/FilterResult';

const IconImg = styled.img`
  width: 18px;
  height: 18px;
`;

const Divider = styled.span`
  display: block;
  width: 100%;
  border-bottom: 1px solid ${txt};
  margin-top: 20px;
`;

const Indicadores = ({ t, countries, country }) => {
  const router = useRouter();
  const { id } = router.query;
  const array = [1, 2, 3, 4, 5];

  return (
    <>
      <Header />
      <NavSecundaryCountries countries={countries} countryCode={country.code} />
      <Container className="p-0">
        <Breadcrumb className="bg-white-ol">
          <Breadcrumb.Item className="bg-white" href="#">
            Inicio
          </Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Costa Rica
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Indicadores Educativos</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <Container>
        <Row className="d-flex justify-content-betweent mt-5 mb-5">
          <div className="col-lg-4 ">
            {id}
            <FlagNameComponent icon={CrFlag}>Costa Rica</FlagNameComponent>
          </div>
          <Row className="col-lg-8 d-flex justify-content-end p-0">
            <div className="col-lg-2 pr-0">
              <ButtonNav amarillo>Dato Pais</ButtonNav>
            </div>

            <div className="col-lg-3 pr-0">
              <ButtonNav azul active>
                INDICADORES EDUCATIVOS
              </ButtonNav>
            </div>
            <div className="col-lg-2 pr-0">
              <ButtonNav verde>AVANCE 2021</ButtonNav>
            </div>
          </Row>
          <Divider />
        </Row>

        <Row>
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
            <Link href="/equipo-responsable" as="equipo-responsable">
              <div className="col-lg-12 mb-3 p-0" key={`indicador-${index}`}>
                <IndicadorComponent>asd</IndicadorComponent>
              </div>
            </Link>
          ))}
        </Row>
      </Container>
      <style type="text/css">
        {`
      .imgUrlCountry img{
        width: 50px;
        height: 30px;
        margin-top: 7px;
      }
      .bg-white-ol > ol {
        background:white;
        padding:0;
      }
    `}
      </style>
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
    countries,
    country,
  };
};

export default withTranslation('countries')(Indicadores);
