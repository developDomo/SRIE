import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import {
  Col, Container, Breadcrumb, Row,
} from 'react-bootstrap';
import styled from 'styled-components';
import Header from '../../components/layout/Header';
import NavSecundaryCountries from '../../components/layout/NavSecundaryCountries';
import Boxes from '../../components/layout/Boxes';
import { ButtonNav, ButtonNavIndicadores } from '../../components/layout/Button';
import Title from '../../components/layout/Title';
import {
  BoxPreescolar, BoxPrimaria, BoxSecundaria, BoxIndicador, Box,
} from '../../components/layout/Box';
import { LineTime, TitleLineTime } from '../../components/layout/TimeLineEducation';
import Banner from '../../components/layout/Banner';
import ButtonWithIcon from '../../components/layout/ButtonWithIcon';
import {
  green, blue2, blue1, txt,
} from '../../styles/colors';
import { withTranslation } from '../../i18n';

import EducacionIcon from '../../public/img/home/icon_datos_educ.svg';
import AlfabetizacionIcon from '../../public/img/home/icon_datos_alfabetizacion.svg';
import CentroseducIcon from '../../public/img/home/icon_datos_centroseduc.svg';
import DatoNinoIcon from '../../public/img/home/icono_datos_ninos.svg';
import ParticipacionIcon from '../../public/img/home/icon_participacion_indicador.svg';
import OfertaIcon from '../../public/img/home/icon_oferta_indicador.svg';
import AprendizajeIcon from '../../public/img/home/icon_aprendizaje_indicador.svg';
import ConclusionIcon from '../../public/img/home/icon_conclusion_indicador.svg';
import EntornoIcon from '../../public/img/home/icon_entorno_indicador.svg';
import MetasIcon from '../../public/img/home/icon_metas_indicador.svg';

// TODO: Fix this
const timeLineEducationProps = [
  {
    title: 'Materno infantil',
    color: '#fb8080',
    width: '21.5%',
  },
  {
    title: 'Preescolar',
    color: '#bc6060',
    width: '10.6%',
  },
  {
    title: ' Educación general básica',
    color: '#7ab239',
    width: '50%',
  },
  {
    title: 'Educación diversificada',
    color: '#0071bc',
    width: '15.1%',
  },
];

const Divider = styled.span`
  display: block;
  width: 100%;
  border-bottom: 1px solid ${txt};
  margin-top: 20px;
`;

const Country = ({
  t, countries, country, path,
}) => (
  <div>
    <Col className="d-none d-sm-block p-0">
      <NavSecundaryCountries countries={countries} countryCode={country.code} />
    </Col>
    <Container className="p-0">
      <Breadcrumb className="bg-white-ol">
        <Breadcrumb.Item className="bg-white" href="#">
          Inicio
        </Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          {t(`countries.${country.code}`)}
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Dato País</Breadcrumb.Item>
      </Breadcrumb>
    </Container>
    <Container className="mt-4">
      <Row className="d-flex justify-content-between">
        <div className="col-lg-4">
          <Row>
            <Col sm={2} className="d-none d-sm-block imgUrlCountry p-0">
              <img src={`/img/country/${country.code}-flag-title.svg`} alt="" />
            </Col>
            <Col className="titleC psm-0">
              <h2>{t(`countries.${country.code}`)}</h2>
            </Col>
          </Row>
        </div>
        <Row className="col-lg-8 d-flex justify-content-end p-0">
          <div className="col-lg-2 pr-0">
            <ButtonNav amarillo active>
              Dato Pais
            </ButtonNav>
          </div>
          <div className="col-lg-3 pr-0">
            <Link href="/indicador/[indicadorId]" as={`/indicador/${country.code}`}>
              <ButtonNav azul>INDICADORES EDUCATIVOS</ButtonNav>
            </Link>
          </div>
          <div className="col-lg-2 pr-0">
            <ButtonNav verde>AVANCE 2021</ButtonNav>
          </div>
        </Row>
        <Divider />
      </Row>
      <Row className="mt-4">
        <div className="col-lg-12 mb-3 text-center">
          <Title color="amarillo" type="title">
            Datos país
          </Title>
        </div>
        <div className="col-lg-12 mb-4 p-0 text-center">
          <Title color="negro" type="subtitle">
            Estructura del sistema educativo del país
          </Title>
        </div>
        <div className="col-lg-12 mb-4 p-0 text-center">
          <Boxes countryId={country.code} />
        </div>
      </Row>
      <Row className="mt-4 mb-5">
        <div className="col-lg-4 mb-4">
          <Box
            iconImg={EducacionIcon}
            title="Educación gratuita y obligatoria"
            subtitle="Número de años: 12"
            color="azul"
          />
        </div>
        <div className="col-lg-4 mb-4">
          <Box
            iconImg={AlfabetizacionIcon}
            title="Tasa de alfabetización"
            subtitle="88%"
            color="verde"
          />
        </div>

        <div className="col-lg-4 mb-4">
          <Box
            iconImg={CentroseducIcon}
            title="Cantidad de centros educativos"
            subtitle="10.000"
            color="naranja"
          />
        </div>

        <div className="col-lg-4">
          <BoxIndicador
            title="Tasas de matrícula, por nivel"
            prescolar="50,09%"
            primaria="40,60%"
            secundaria="50,00%"
          />
        </div>

        <div className="col-lg-4">
          <BoxIndicador
            title="Tasa de finalización, por nivel"
            primaria="36,00%"
            secundaria="50,00%"
          />
        </div>
        <div className="col-lg-4">
          <Box
            iconImg={DatoNinoIcon}
            title="Niñas, niños y adolescentes fuera de la escuela"
            subtitle="10,00%"
            color="celeste"
          />
        </div>
      </Row>
    </Container>
    <Container fluid className="bg-verde-oscuro">
      <Row>
        <div className="col-lg-12 p-0 m-0">
          <Banner />
        </div>
      </Row>
    </Container>
    <Container>
      <Row className="mt-5">
        <div className="col-lg-12 text-center">
          <Title color="azul" type="title">
            Indicadores Educativos
          </Title>
        </div>
        <div className="col-lg-12 text-center">
          <Title color="azul" type="subtitle">
            Por categoria
          </Title>
        </div>
      </Row>
      <Row className="mt-4 mb-4">
        <div className="col-lg-4 mb-3">
          <ButtonWithIcon color="celeste" icon={ParticipacionIcon}>
            participacion
          </ButtonWithIcon>
        </div>

        <div className="col-lg-4 mb-3">
          <ButtonWithIcon color="cafe" icon={OfertaIcon}>
            oferta
          </ButtonWithIcon>
        </div>

        <div className="col-lg-4 mb-3">
          <ButtonWithIcon color="azul" icon={AprendizajeIcon}>
            Aprendizaje y competencias
          </ButtonWithIcon>
        </div>

        <div className="col-lg-4">
          <ButtonWithIcon color="naranja" icon={ConclusionIcon}>
            Conclusión
          </ButtonWithIcon>
        </div>

        <div className="col-lg-4">
          <ButtonWithIcon color="rosa" icon={EntornoIcon}>
            Entorno educativo
          </ButtonWithIcon>
        </div>

        <div className="col-lg-4">
          <ButtonWithIcon color="amarillo" icon={MetasIcon}>
            Metas transversales
          </ButtonWithIcon>
        </div>
      </Row>
      <Row className="mb-5">
        <div className="col-lg-12 d-flex justify-content-end">
          <ButtonNavIndicadores azul>
            Ver los indicadores
          </ButtonNavIndicadores>
        </div>
      </Row>
    </Container>
    <style type="text/css">
      {`
      .imgUrlCountry img{
        width: 100%;
        
        margin-top: 3px;
      }
      .bg-white-ol > ol {
        background:white;
        padding:0;
      }
      .bg-verde-oscuro {
        background:${green};
      }
      .bg-white-ol a {
       
        font-family: 'Roboto', sans-serif;
        color: ${blue2};
      }
      .titleC h2{
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size: 2.5em;
        text-transform: uppercase;
        color: ${blue1};
      }
      
      .fa-times:before, .fa-bars:before {
        color: #cecece;
      }
      .header {
        border-bottom: 2px solid #cecece;
        padding-top: 10px;
      }
    `}

    </style>
  </div>
);

Country.getInitialProps = async ({ query, pathname: path }) => {
  const countriesResponse = await fetch(`${process.env.API_URL}/api/countries`);
  const countries = await countriesResponse.json();

  const countryResponse = await fetch(`${process.env.API_URL}/api/countries/${query.id}`);
  const country = await countryResponse.json();
  console.log(path);
  return {
    countries,
    country,
    path,
  };
};

export default withTranslation('countries')(Country);
