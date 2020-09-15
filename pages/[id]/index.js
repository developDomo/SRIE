import _ from 'lodash';
import fetch from 'isomorphic-unfetch';
import { Container, Row } from 'react-bootstrap';

import Link from 'next/link';
import FetchUtils from '../../utils/Fetch.utils';
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
  const { free_edu, literacy_rate, out_of_school_rate } = countryInfo;

  const enrollment = countryInfo.net_enrollment_rate;
  const { data: enrollmentData } = enrollment;

  const completionRate = countryInfo.completion_rate;
  const { data: completionRateData } = completionRate;

  const isFreeValue = free_edu?.obs_value || 0;
  const mandatoryValue = free_edu?.obs_value || 0;

  const alphabetizationRateValue = literacy_rate?.obs_value || 0;

  const numberOfEducationalCentersValue = 0;

  const tuitionFeesByLevelPreschoolValue = enrollmentData?.L1?.obs_value || 0;
  const tuitionFeesByLevelHighSchoolValue = enrollmentData?.L02?.obs_value || 0;
  const tuitionFeesByLevelPrimarySchoolValue = enrollmentData?.L2_3?.obs_value || 0;

  const RateByLevelPrimaryValue = completionRateData?.L3?.obs_value || 0;
  const RateByLevelHighValue = completionRateData?.L1?.obs_value || 0;

  const girlsBoysAndAdolescentsOutsideOfSchoolValue = out_of_school_rate?.obs_value || 0;

  const percentFormat = (data) => `${parseFloat(data).toFixed(2)}%`;

  const decimalFormat = (data) => parseInt(data, 10);

  return (
    <Container fluid className="p-0">
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
              isFree={decimalFormat(isFreeValue)}
              isFreeTitle={t('freeAndCompulsoryEducation')}
              mandatory={decimalFormat(mandatoryValue)}
              mandatoryTitle={t('ObligatoryEducation')}
            />
          </div>
          <div className="col-lg-4 mb-4">
            <Box
              iconImg={LiteracyIcon}
              title={t('alphabetizationRate')}
              subtitle={percentFormat(alphabetizationRateValue)}
              color="green"
            />
          </div>

          <div className="col-lg-4 mb-4">
            <Box
              iconImg={SchoolsIcon}
              title={t('numberOfEducationalCenters')}
              subtitle={numberOfEducationalCentersValue}
              color="orange"
            />
          </div>

          <div className="col-lg-4">
            <BoxIndicador
              title={t('tuitionFeesByLevel')}
              preschoolValue={percentFormat(tuitionFeesByLevelPreschoolValue)}
              primarySchoolValue={percentFormat(tuitionFeesByLevelPrimarySchoolValue)}
              highSchoolValue={percentFormat(tuitionFeesByLevelHighSchoolValue)}
              preschoolText={t('preschool')}
              primarySchoolText={t('highSchool')}
              highSchoolText={t('primary')}
            />
          </div>

          <div className="col-lg-4">
            <BoxIndicador
              title={t('completionRateByLevel')}
              primarySchoolValue={percentFormat(RateByLevelPrimaryValue)}
              highSchoolValue={percentFormat(RateByLevelHighValue)}
              primarySchoolText={t('highSchool')}
              highSchoolText={t('primary')}
            />
          </div>
          <div className="col-lg-4">
            <Box
              iconImg={DataChildIcon}
              title={t('girlsBoysAndAdolescentsOutsideOfSchool')}
              subtitle={percentFormat(girlsBoysAndAdolescentsOutsideOfSchoolValue)}
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
            <Title color="blue2" type="title">
              {t('EducationalIndicators')}
            </Title>
          </div>
          <div className="col-lg-12 text-center">
            <Title color="blue2" type="subtitle" className="mt-0">
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
            <ButtonNavIndicadores color="blue">
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
    </Container>
  );
};

Country.getInitialProps = async ({ query, pathname: path }) => {
  const countriesResponse = await fetch(`${process.env.API_URL}/api/countries`);
  const countries = await countriesResponse.json();

  const country = _.find(countries, (c) => c.short_name === query.id);

  const [countryInfo] = await FetchUtils.multipleFetch([
    `${process.env.API_URL}/api/countries/${country.code}/info`,
  ]);

  return {
    namespacesRequired: ['common'],
    countries,
    country,
    countryInfo,
    path,
  };
};

export default withTranslation('common')(Country);
