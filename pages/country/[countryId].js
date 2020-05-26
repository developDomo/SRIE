import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  Container, Col, Row, Breadcrumb,
} from 'react-bootstrap';
import styled from 'styled-components';
import Header from '../../components/layout/Header';

import NavSecundaryCountries from '../../components/layout/NavSecundaryCountries';
import Boxes from '../../components/layout/Boxes';

import {
  ButtonNav,
  ButtonNavIndicadores,
} from '../../components/layout/Button';
import ButtonWithIcon from '../../components/layout/ButtonWithIcon';
import {
  Box,
  BoxIndicador,
  BoxPreescolar,
  BoxPrimaria,
  BoxSecundaria,
} from '../../components/layout/Box';

import Banner from '../../components/layout/Banner';
import {
  LineTime,
  TitleLineTime,
} from '../../components/layout/TimeLineEducation';
import EducacionIcon from '../../public/img/home/icon_datos_educ.svg';

import AlfabetizacionIcon from '../../public/img/home/icon_datos_alfabetizacion.svg';
import CentroseducIcon from '../../public/img/home/icon_datos_centroseduc.svg';
import DatoNinoIcon from '../../public/img/home/icono_datos_niños.svg';

import ParticipacionIcon from '../../public/img/home/icon_participacion_indicador.svg';
import OfertaIcon from '../../public/img/home/icon_oferta_indicador.svg';
import AprendizajeIcon from '../../public/img/home/icon_aprendizaje_indicador.svg';

import ConclusionIcon from '../../public/img/home/icon_conclusion_indicador.svg';
import EntornoIcon from '../../public/img/home/icon_entorno_indicador.svg';
import MetasIcon from '../../public/img/home/icon_metas_indicador.svg';

// import CrFlag from '../../public/img/home/bandera-costa_rica.png'
// import FlagNameComponent from '../../components/layout/FlagNameComponent'
import Title from '../../components/layout/Title';

import {
  txt, blue1, blue2, green,
} from '../../styles/colors';

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
export default function Country() {
  const router = useRouter();
  let imgUrlCountry = '';
  let titleC = '';
  switch (router.query.countryId) {
    case 'bh':
      imgUrlCountry = '/img/home/flag_bel_titulo.svg';
      titleC = 'Belice';
      break;
    case 'cr':
      imgUrlCountry = '/img/home/flag_cr_titulo.svg';
      titleC = 'Costa Rica';
      break;
    case 'su':
      imgUrlCountry = '/img/home/flag_elsalv_titulo.svg';
      titleC = 'El Salvador';
      break;
    case 'gt':
      imgUrlCountry = '/img/home/flag_guat_titulo.svg';
      titleC = 'Guatemala';
      break;
    case 'ho':
      imgUrlCountry = '/img/home/flag_hond_tiutlo.svg';
      titleC = 'Honduras';
      break;
    case 'nu':
      imgUrlCountry = '/img/home/flag_nic_titulo.svg';
      titleC = 'Nicaragua';
      break;
    case 'pm':
      imgUrlCountry = '/img/home/flag-pana_titulo.svg';
      titleC = 'Panamá';
      break;
    case 'dr':
      imgUrlCountry = '/img/home/flag_rep_titulo.svg';
      titleC = 'Rep. Dominicana';
      break;

    default:
      break;
  }

  return (
    <div>
      {/* {router.query.countryId} */}
      <Header />
      {/* <p>Country content for {router.query.countryId}.</p> */}
      <Col className="d-none d-sm-block p-0">
        <NavSecundaryCountries idCountry={router.query.countryId} />
      </Col>
      <Container className="p-0">
        <Breadcrumb className="bg-white-ol">
          <Breadcrumb.Item className="bg-white" href="#">
            Inicio
          </Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            {titleC}
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Dato Pais</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <Container className="mt-4">
        <Boxes countryId={router.query.countryId} />
        <hr />
        <Row className="d-flex justify-content-between">
          <div className="col-lg-4">
            {/* <FlagNameComponent icon={imgUrlCountry}>{titleC}</FlagNameComponent> */}
            <Row>
              <Col sm={2} className="d-none d-sm-block imgUrlCountry p-0">
                <img src={imgUrlCountry} alt="" />
              </Col>
              <Col className="titleC psm-0">
                <h2>{titleC}</h2>
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
              {/* <Link href={`${router.query.countryId}`} as={`/indicadores`}> */}
              <Link
                href="/indicador/[indicadorId]"
                as={`/indicador/${router.query.countryId}`}
                key="ssssssssssss"
              >
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
              Datos pais
            </Title>
          </div>
          <div className="col-lg-12 mb-4 p-0 text-center">
            <Title color="negro" type="subtitle">
              Estructura del sistema educativo del país
            </Title>
          </div>
          <div className="col-lg-4 m-0 p-0">
            <BoxPreescolar title="PREESCOLAR" />
          </div>
          <div className="col-lg-4 m-0 p-0">
            <BoxPrimaria title="PRIMARIA" />
          </div>
          <div className="col-lg-4 m-0 p-0">
            <BoxSecundaria title="SECUNDARIA" />
          </div>
          <div className="col-lg-12 m-0 p-0">
            <LineTime timeLineEducationProps={timeLineEducationProps} />
          </div>
          <div className="col-lg-12 m-0 p-0">
            <TitleLineTime timeLineEducationProps={timeLineEducationProps} />
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
              title="Niñas, niños y adolescentes fuera
    de la escuela"
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
      <style jsx>
        {`
    .header {
        border-bottom: 2px solid #cecece;
        padding-top: 10px;
      }
    `}
      </style>
    </div>
  );
}
