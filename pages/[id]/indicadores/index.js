import { Container, Row } from 'react-bootstrap';
import _ from 'lodash';
import styled from 'styled-components';

import IndicatorListItem from '../../../components/indicators/IndicatorListItem';
import Title from '../../../components/layout/Title';
import PecIcon from '../../../public/img/home/icon_pec_indicadores.svg';

import { withTranslation } from '../../../i18n';
import FilterResult from '../../../components/indicadors/FilterResult';
import CountryHeader from '../../../components/countries/CountryHeader';

import FetchUtils from '../../../utils/Fetch.utils';

const IconImg = styled.img`
  width: 18px;
  height: 18px;
`;

const IndicatorListPage = ({
  t, countries, country, pecGoals, topics, educationLevels, indicators,
}) => {
  const navigation = [
    { key: 'navigation.pages.indicators' },
  ];

  return (
    <>
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
                    {pecGoals.map((goal) => (
                      <option key={`goal-${goal.id}`} value={goal.id}>{goal.code}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group col-lg-4">
                  <select id="topic-select" className="form-control">
                    {topics.map((topic) => (
                      <option key={`topic-${topic.id}`} value={topic.id}>{t(`topics.${topic.code}`)}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group col-lg-4">
                  <select
                    className="form-control"
                    id="form-indicadors-level"
                  >
                    {educationLevels.map((level) => (
                      <option key={`education-level-${level.id}`} value={level.id}>{t(`education-levels:${level.code}`)}</option>
                    ))}
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
          <div className="col-lg-8 mb-3">
            <Title color="negro" type="caption">
              Indicadores Educativos
            </Title>
          </div>
          <div className="col-lg-2 mb-3">
            <Row className="d-flex align-content-center">
              <div className="col-lg-2 m-0 p-0">
                <IconImg src={PecIcon} />
              </div>
              <div className="col-lg-2 m-0 p-0">
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
          {indicators.map((indicator) => (
            <IndicatorListItem indicator={indicator} countryName={country.short_name} />
          ))}
        </Row>
      </Container>
    </>
  );
};

IndicatorListPage.getInitialProps = async ({ query }) => {
  const [countries, pecGoals, topics, educationLevels, indicators] = await FetchUtils.multipleFetch([
    `${process.env.API_URL}/api/countries`,
    `${process.env.API_URL}/api/pec-goals`,
    `${process.env.API_URL}/api/topics`,
    `${process.env.API_URL}/api/education-levels`,
    `${process.env.API_URL}/api/indicators`,
  ]);

  const country = _.find(countries, (c) => c.short_name === query.id);

  return {
    namespacesRequired: ['topics', 'education-levels'],
    countries,
    country,
    pecGoals,
    topics,
    educationLevels,
    indicators,
  };
};

export default withTranslation('topics', 'education-levels')(IndicatorListPage);
