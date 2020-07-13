import fetch from 'isomorphic-unfetch';
import { Container, Row } from 'react-bootstrap';
import Boxes from '../../components/layout/Boxes';

import { ButtonNavIndicadores } from '../../components/layout/Button';
import Title from '../../components/layout/Title';
import { BoxIndicador, Box } from '../../components/layout/Box';

import Banner from '../../components/layout/Banner';
import ButtonWithIcon from '../../components/layout/ButtonWithIcon';
import { green } from '../../styles/colors';

import { withTranslation } from '../../i18n';
import EducationIcon from '../../public/img/home/icon_datos_educ.svg';
import LiteracyIcon from '../../public/img/home/icon_datos_alfabetizacion.svg';

import SchoolsIcon from '../../public/img/home/icon_datos_centroseduc.svg';
import DataChildIcon from '../../public/img/home/icono_datos_ninos.svg';
import ParticipationIcon from '../../public/img/home/icon_participacion_indicador.svg';

import OfferIcon from '../../public/img/home/icon_oferta_indicador.svg';
import LearningIcon from '../../public/img/home/icon_aprendizaje_indicador.svg';
import ConclusionIcon from '../../public/img/home/icon_conclusion_indicador.svg';

import EnvironmentIcon from '../../public/img/home/icon_entorno_indicador.svg';
import GoalsIcon from '../../public/img/home/icon_metas_indicador.svg';
import CountryHeader from '../../components/countries/CountryHeader';

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

const Country = ({ t, countries, country }) => {
  const navigation = [{ key: 'navigation.pages.country-data' }];

  return (
    <div>
      <CountryHeader
        countries={countries}
        country={country}
        navigation={navigation}
        active="country-data"
      />
      <Container className="mt-4">
        <Row className="mt-4">
          <div className="col-lg-12 mb-3 text-center">
            <Title color="yellow" type="title">
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
              iconImg={EducationIcon}
              title={t('numberOfYears')}
              color="blue"
              isFree={12}
              mandatory={12}
            />
          </div>
          <div className="col-lg-4 mb-4">
            <Box
              iconImg={LiteracyIcon}
              title={t('alphabetizationRate')}
              subtitle="88%"
              color="green"
            />
          </div>

          <div className="col-lg-4 mb-4">
            <Box
              iconImg={SchoolsIcon}
              title={t('numberOfEducationalCenters')}
              subtitle="10.000"
              color="orange"
            />
          </div>

          <div className="col-lg-4">
            <BoxIndicador
              title={t('tuitionFeesByLevel')}
              prescolar="50,09%"
              primaria="40,60%"
              secundaria="50,00%"
            />
          </div>

          <div className="col-lg-4">
            <BoxIndicador
              title={t('completionRateByLevel')}
              primaria="36,00%"
              secundaria="50,00%"
            />
          </div>
          <div className="col-lg-4">
            <Box
              iconImg={DataChildIcon}
              title={t('girlsBoysAndAdolescentsOutsideOfSchool')}
              subtitle="10,00%"
              color="light_blue"
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
            <Title color="blue" type="title">
              Indicadores Educativos
            </Title>
          </div>
          <div className="col-lg-12 text-center">
            <Title color="blue" type="subtitle">
              Por categoria
            </Title>
          </div>
        </Row>
        <Row className="mt-4 mb-4">
          <div className="col-lg-4 mb-3">
            <ButtonWithIcon color="light_blue" icon={ParticipationIcon}>
              participacion
            </ButtonWithIcon>
          </div>

          <div className="col-lg-4 mb-3">
            <ButtonWithIcon color="brown" icon={OfferIcon}>
              oferta
            </ButtonWithIcon>
          </div>

          <div className="col-lg-4 mb-3">
            <ButtonWithIcon color="blue" icon={LearningIcon}>
              Aprendizaje y competencias
            </ButtonWithIcon>
          </div>

          <div className="col-lg-4">
            <ButtonWithIcon color="orange" icon={ConclusionIcon}>
              Conclusión
            </ButtonWithIcon>
          </div>

          <div className="col-lg-4">
            <ButtonWithIcon color="pink" icon={EnvironmentIcon}>
              Entorno educativo
            </ButtonWithIcon>
          </div>

          <div className="col-lg-4">
            <ButtonWithIcon color="yellow" icon={GoalsIcon}>
              Metas transversales
            </ButtonWithIcon>
          </div>
        </Row>
        <Row className="mb-5">
          <div className="col-lg-12 d-flex justify-content-end">
            <ButtonNavIndicadores blue>
              Ver los indicadores
            </ButtonNavIndicadores>
          </div>
        </Row>
      </Container>
      <style type="text/css">
        {`
        .bg-verde-oscuro {
          background: ${green};
        }
        
        .fa-times:before, .fa-bars:before {
          color: #cecece;
        }
      `}
      </style>
    </div>
  );
};

Country.getInitialProps = async ({ query, pathname: path }) => {
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
    path,
  };
};

export default withTranslation('common')(Country);
