import _ from 'lodash';
import { Container, Row } from 'react-bootstrap';

import FetchUtils from '../../../utils/Fetch.utils';
import Boxes from '../../../components/layout/Boxes';

import Title from '../../../components/layout/Title';
import { BoxIndicador, Box } from '../../../components/layout/Box';

import { green } from '../../../styles/colors';

import { withTranslation } from '../../../i18n';
import EducationIcon from '../../../public/img/home/icon_datos_educ.svg';
import LiteracyIcon from '../../../public/img/home/icon_datos_alfabetizacion.svg';

import GovernmentExpenditureIcon from '../../../public/img/home/icon_gasto_gubernamental.svg';
import DataChildIcon from '../../../public/img/home/icono_datos_ninos.svg';
import CountryHeader from '../../../components/countries/CountryHeader';
import CountryService from '../../../services/Country.service';

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
        share
      />
      <Container className="mt-4" fluid>
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
      share: true,
      countries,
      country,
      countryInfo,
    },
  };
};

Country.defaultProps = { i18nNamespaces: ['common'] };

export default withTranslation('common')(Country);
