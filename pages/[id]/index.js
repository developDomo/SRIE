import _ from 'lodash';
import { Container, Row } from 'react-bootstrap';

import Link from 'next/link';
import FetchUtils from '../../utils/Fetch.utils';
import Boxes from '../../components/layout/Boxes';

import { ButtonNavIndicadores } from '../../components/layout/Button';
import Title from '../../components/layout/Title';
import { BoxIndicador, Box } from '../../components/layout/Box';

import ButtonWithIcon from '../../components/layout/ButtonWithIcon';
import { green } from '../../styles/colors';

import { withTranslation } from '../../i18n';
import EducationIcon from '../../public/img/home/icon_datos_educ.svg';
import LiteracyIcon from '../../public/img/home/icon_datos_alfabetizacion.svg';

import GovernmentExpenditureIcon from '../../public/img/home/icon_gasto_gubernamental.svg';
import DataChildIcon from '../../public/img/home/icono_datos_ninos.svg';
import ParticipationIcon from '../../public/img/home/icon_participacion_indicador.svg';

import OfferIcon from '../../public/img/home/icon_oferta_indicador.svg';
import LearningIcon from '../../public/img/home/icon_aprendizaje_indicador.svg';
import ConclusionIcon from '../../public/img/home/icon_conclusion_indicador.svg';

import EnvironmentIcon from '../../public/img/home/icon_entorno_indicador.svg';
import GoalsIcon from '../../public/img/home/icon_metas_indicador.svg';
import CountryHeader from '../../components/countries/CountryHeader';
import CountryService from '../../services/Country.service';

const Country = ({
  t, countries, country, countryInfo,
}) => {
  const navigation = [{ key: 'navigation.pages.country-data' }];
  const {
    free_edu, comp_edu, literacy_rate, out_of_school_rate,
  } = countryInfo;

  const governmentExpenditure = countryInfo.government_expenditure.data;
  const enrollmentData = countryInfo.net_enrollment_rate.data;
  const completionRateData = countryInfo.completion_rate.data;

  const freeEducationValue = free_edu?.obs_value || 0;
  const mandatoryEducationValue = comp_edu?.obs_value || 0;
  const educationYearsYear = free_edu?.time_period || comp_edu?.time_period || '?';

  const alphabetizationRateValue = literacy_rate?.obs_value || 0;
  const alphabetizationRateYear = literacy_rate?.time_period || '?';

  const governmentExpenditurePreschoolValue = governmentExpenditure?.L02?.obs_value || 0;
  const governmentExpenditurePrimaryValue = governmentExpenditure?.L1?.obs_value || 0;
  const governmentExpenditureHighSchoolValue = governmentExpenditure?.L2_3?.obs_value || 0;
  const governmentExpenditureYear = governmentExpenditure?.L02?.time_period
                                    || governmentExpenditure?.L02?.time_period
                                    || governmentExpenditure?.L02?.time_period
                                    || '?';

  const tuitionFeePreschoolValue = enrollmentData?.L02?.obs_value || 0;
  const tuitionFeePrimaryValue = enrollmentData?.L1?.obs_value || 0;
  const tuitionFeeHighSchoolValue = enrollmentData?.L2_3?.obs_value || 0;
  const tuitionYear = enrollmentData?.L02?.time_period
                      || enrollmentData?.L1?.time_period
                      || enrollmentData?.L2_3?.time_period
                      || '?';

  const completionRatePrimaryValue = completionRateData?.L1?.obs_value || 0;
  const completionRateHighSchoolValue = completionRateData?.L3?.obs_value || 0;
  const completionRateYear = completionRateData?.L1?.time_period || completionRateData?.L1?.time_period || '?';

  const girlsBoysAndAdolescentsOutsideOfSchoolValue = out_of_school_rate?.obs_value || 0;
  const outsideOfSchoolYear = out_of_school_rate?.time_period || '?';

  const percentFormat = (data) => `${parseFloat(data).toFixed(2)}%`;

  const decimalFormat = (data) => parseInt(data, 10);

  const educationValues = [
    { value: decimalFormat(freeEducationValue), title: t('freeAndCompulsoryEducation'), color: 'yellow' },
    { value: decimalFormat(mandatoryEducationValue), title: t('ObligatoryEducation'), color: 'green' },
  ];

  const governmentExpenditureValues = [
    { value: `$${decimalFormat(governmentExpenditurePreschoolValue)}`, title: t('preschool'), color: 'yellow' },
    { value: `$${decimalFormat(governmentExpenditurePrimaryValue)}`, title: t('primary'), color: 'blue' },
    { value: `$${decimalFormat(governmentExpenditureHighSchoolValue)}`, title: t('highSchool'), color: 'green' },
  ];

  const tuitionFeeValues = [
    { value: percentFormat(tuitionFeePreschoolValue), title: t('preschool'), color: 'yellow' },
    { value: percentFormat(tuitionFeePrimaryValue), title: t('primary'), color: 'blue' },
    { value: percentFormat(tuitionFeeHighSchoolValue), title: t('highSchool'), color: 'green' },
  ];

  const completionRateValues = [
    { value: percentFormat(completionRatePrimaryValue), title: t('primary'), color: 'blue' },
    { value: percentFormat(completionRateHighSchoolValue), title: t('highSchool'), color: 'green' },
  ];

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
              containers={educationValues}
              year={educationYearsYear}
            />
          </div>
          <div className="col-lg-4 mb-4">
            <Box
              iconImg={LiteracyIcon}
              title={t('alphabetizationRate')}
              subtitle={percentFormat(alphabetizationRateValue)}
              color="green"
              year={alphabetizationRateYear}
            />
          </div>

          <div className="col-lg-4 mb-4">
            <Box
              iconImg={GovernmentExpenditureIcon}
              title={t('governmentExpenditurePerStudentPerYear')}
              color="orange"
              containers={governmentExpenditureValues}
              year={governmentExpenditureYear}
            />
          </div>

          <div className="col-lg-4">
            <BoxIndicador
              title={t('tuitionFeesByLevel')}
              containers={tuitionFeeValues}
              year={tuitionYear}
            />
          </div>

          <div className="col-lg-4">
            <BoxIndicador
              title={t('completionRateByLevel')}
              containers={completionRateValues}
              year={completionRateYear}
            />
          </div>
          <div className="col-lg-4">
            <Box
              iconImg={DataChildIcon}
              title={t('girlsBoysAndAdolescentsOutsideOfSchool')}
              subtitle={percentFormat(girlsBoysAndAdolescentsOutsideOfSchoolValue)}
              color="light_blue"
              year={outsideOfSchoolYear}
            />
          </div>
        </Row>
      </Container>
      {/*
      Descomentar para volver activar el banner
      <Container fluid className="bg-verde-oscuro">
        <Row>
           <Link href="/[id]/avance-2021" as={`/${country.short_name}/avance-2021`} replace>
          <div className="col-lg-12 p-0 m-0">
            <Banner text1={t('seeTheProgressIn')} text2={t('complianceWithGoalsCentralAmericanEducationalPolicy')} />
          </div>
          </Link>
        </Row>
      </Container> */}
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
            <ButtonWithIcon color="light_blue" icon={ParticipationIcon} country={country} topic="participation">
              {t('participation')}
            </ButtonWithIcon>

          </div>

          <div className="col-lg-4 mb-3">
            <ButtonWithIcon color="brown" icon={OfferIcon} country={country} topic="offering">
              {t('offering')}
            </ButtonWithIcon>
          </div>

          <div className="col-lg-4 mb-3">
            <ButtonWithIcon color="blue" icon={LearningIcon} country={country} topic="learning-and-skills">
              {t('learningAndSkills')}
            </ButtonWithIcon>
          </div>

          <div className="col-lg-4">
            <ButtonWithIcon color="orange" icon={ConclusionIcon} country={country} topic="completion">
              {t('Completion')}
            </ButtonWithIcon>
          </div>

          <div className="col-lg-4">
            <ButtonWithIcon color="pink" icon={EnvironmentIcon} country={country} topic="educational-environment">
              {t('educationalEnvironment')}
            </ButtonWithIcon>
          </div>

          <div className="col-lg-4">
            <ButtonWithIcon color="yellow" icon={GoalsIcon} country={country} topic="cross-cutting-goals">
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

export const getServerSideProps = async ({ query }) => {
  const countries = await CountryService.findAll();

  const country = _.find(countries, (c) => c.short_name === query.id);

  const [countryInfo] = await FetchUtils.multipleFetch([
    `${process.env.API_URL}/api/countries/${country.code}/info`,
  ]);

  return {
    props: {
      countries,
      country,
      countryInfo,
    },
  };
};

Country.defaultProps = { i18nNamespaces: ['common'] };

export default withTranslation('common')(Country);
