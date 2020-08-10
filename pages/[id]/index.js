import fetch from 'isomorphic-unfetch';
import { Container, Row } from 'react-bootstrap';
import Link from 'next/link';
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

const Country = ({
  t, countries, country, countryInfo,
}) => {
  const navigation = [{ key: 'navigation.pages.country-data' }];
  console.log('countryInfo', countryInfo);

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
              {t('countryData')}
            </Title>
          </div>
          <div className="col-lg-12 mb-4 p-0 text-center">
            <Title color="negro" type="subtitle">
              {t('structureOfTheCountryEducationalSystem')}
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
              isFree={parseInt(countryInfo.free_edu.obs_value, 10)}
              isFreeTitle={t('freeAndCompulsoryEducation')}
              mandatory={parseInt(countryInfo.free_edu.obs_value, 10)}
              mandatoryTitle={t('ObligatoryEducation')}
            />
          </div>
          <div className="col-lg-4 mb-4">
            <Box
              iconImg={LiteracyIcon}
              title={t('alphabetizationRate')}
              subtitle={`${parseFloat(countryInfo.literacy_rate.obs_value).toFixed(2)}%`}
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
              preschoolValue="50,09%"
              primarySchoolValue="40,60%"
              highSchoolValue="50,00%"
              preschoolText={t('preschool')}
              primarySchoolText={t('highSchool')}
              highSchoolText={t('primary')}
            />
          </div>

          <div className="col-lg-4">
            <BoxIndicador
              title={t('completionRateByLevel')}
              primarySchoolValue={`${parseFloat(countryInfo.completion_rate.data.L1.obs_value).toFixed(2)}%`}
              highSchoolValue={`${parseFloat(countryInfo.completion_rate.data.L3.obs_value).toFixed(2)}%`}
              primarySchoolText={t('highSchool')}
              highSchoolText={t('primary')}
            />
          </div>
          <div className="col-lg-4">
            <Box
              iconImg={DataChildIcon}
              title={t('girlsBoysAndAdolescentsOutsideOfSchool')}
              subtitle={`${parseFloat(countryInfo.out_of_school_rate.obs_value).toFixed(2)}%`}
              color="light_blue"
            />
          </div>
        </Row>
      </Container>
      <Container fluid className="bg-verde-oscuro">
        <Row>
          <Link href="/[id]/avance-2021" as={`/${country.short_name}/avance-2021`} replace>
            <div className="col-lg-12 p-0 m-0">
              <Banner text1={t('seeTheProgressIn')} text2={t('complianceWithGoalsCentralAmericanEducationalPolicy')} />
            </div>
          </Link>
        </Row>
      </Container>
      <Container>
        <Row className="mt-5">
          <div className="col-lg-12 text-center">
            <Title color="blue" type="title">
              {t('EducationalIndicators')}
            </Title>
          </div>
          <div className="col-lg-12 text-center">
            <Title color="blue" type="subtitle">
              {t('byCategory')}
            </Title>
          </div>
        </Row>
        <Row className="mt-4 mb-4">
          <div className="col-lg-4 mb-3">
            <ButtonWithIcon color="light_blue" icon={ParticipationIcon}>
              {t('participation')}
            </ButtonWithIcon>
          </div>

          <div className="col-lg-4 mb-3">
            <ButtonWithIcon color="brown" icon={OfferIcon}>
              {t('offering')}
            </ButtonWithIcon>
          </div>

          <div className="col-lg-4 mb-3">
            <ButtonWithIcon color="blue" icon={LearningIcon}>
              {t('learningAndSkills')}
            </ButtonWithIcon>
          </div>

          <div className="col-lg-4">
            <ButtonWithIcon color="orange" icon={ConclusionIcon}>
              {t('Completion')}
            </ButtonWithIcon>
          </div>

          <div className="col-lg-4">
            <ButtonWithIcon color="pink" icon={EnvironmentIcon}>
              {t('educationalEnvironment')}
            </ButtonWithIcon>
          </div>

          <div className="col-lg-4">
            <ButtonWithIcon color="yellow" icon={GoalsIcon}>
              {t('CrossCuttingGoals')}
            </ButtonWithIcon>
          </div>
        </Row>
        <Row className="mb-5">
          <div className="col-lg-12 d-flex justify-content-end">
            <ButtonNavIndicadores azul>
              <Link href="/[id]/indicadores" as={`/${country.short_name}/indicadores`} replace>
                { t('moreIndicatorsBtn') }
              </Link>
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

  const countryInfoResponse = await fetch(
    `${process.env.API_URL}/api/countries/${country.code}/info`,
  );

  const countryInfo = await countryInfoResponse.json();

  return {
    namespacesRequired: ['common'],
    countries,
    country,
    countryInfo,
    path,
  };
};

export default withTranslation('common')(Country);
