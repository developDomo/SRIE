import {
  Container, Row, Form, Col,
} from 'react-bootstrap';
import React, { useState } from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import Select from 'react-select';
import IndicatorListItem from '../../../components/indicators/IndicatorListItem';
import Title from '../../../components/layout/Title';
import PecIcon from '../../../public/img/home/icon_pec_indicadores.svg';

import { withTranslation } from '../../../i18n';
import FilterResult from '../../../components/indicadors/FilterResult';
import CountryHeader from '../../../components/countries/CountryHeader';

import {
  gray2,
} from '../../../styles/colors';
import CountryService from '../../../services/Country.service';
import PecGoalService from '../../../services/PecGoal.service';
import TopicService from '../../../services/Topic.service';
import EducationLevelService from '../../../services/EducativeLevel.service';
import IndicatorService from '../../../services/Indicator.service';

const IconImg = styled.img`
  width: 20px;
  height: 20px;
`;

const IndicatorTitle = styled.div`
 &.col-lg-8 {
      flex: 0 0 65.666667%;
      max-width: 65.666667%;
  }
`;
const LabelFilter = styled(Form.Label)`
  font-family: Roboto;
  font-size: 1em;
  font-weight: bolder;
  color: ${gray2};
`;

const filterPec = (pec, indicator, goals) => {
  if (pec !== 0) {
    return indicator.pec_goals.some((pecGoal) => pecGoal.code === goals.find((goal) => goal.id === pec)?.code);
  }
  return true;
};

const filterTopic = (topic, indicator, topics) => {
  if (topic !== 0) {
    return indicator.topics.some((someTopic) => someTopic.code === topics.find((filteredTopic) => filteredTopic.id === topic)?.code);
  }
  return true;
};

const filterEducationLevel = (educationLevel, indicator, educationLevels) => {
  if (educationLevel !== 0) {
    return indicator.education_levels.some((someLevel) => someLevel.translation_key === educationLevels.find((level) => level.id === educationLevel)?.code);
  }
  return true;
};

const IndicatorListPage = ({
  t, countries, country, pecGoals, topics, educationLevels, indicators, query,
}) => {
  const queryTopic = query.topic && topics.filter((item) => item.code === query.topic)[0];

  const [pec, setPec] = useState(0);

  const [topic, setTopic] = useState(queryTopic ? queryTopic.id : 0);

  const [educationLevel, setEducationLevel] = useState(0);

  const navigation = [
    { key: 'navigation.pages.indicators' },
  ];

  const FilterDescription = () => {
    if (topic !== 0 || educationLevel !== 0 || pec !== 0) {
      return (
        <FilterResult
          pec={pecGoals.find((e) => e.id === pec)?.code || t('common:goal.all')}
          level={t(`topics.${topics.find((e) => e.id === topic)?.code || t('all')}`)}
          topic={t(`education-levels:${educationLevels.find((e) => e.id === educationLevel)?.code || t('common:goal.all')}`)}
        />
      );
    }
    return (
      <>
      </>
    );
  };

  const IndicatorList = () => {
    if (topic !== 0 || educationLevel !== 0 || pec !== 0) {
      const filteredIndicators = indicators.filter((indicator) => filterPec(pec, indicator, pecGoals)
        && filterTopic(topic, indicator, topics)
        && filterEducationLevel(educationLevel, indicator, educationLevels));
      return (filteredIndicators.map((indicator) => (
        <IndicatorListItem indicator={indicator} countryName={country.short_name} />
      )));
    }
    return (indicators.map((indicator) => (
      <IndicatorListItem indicator={indicator} countryName={country.short_name} />
    )));
  };
  const defaultOption = [{ value: 0, label: t('topics.all') }];

  const pecGoalsOptions = pecGoals.map((goal) => (
    {
      value: goal.id,
      label: t(`common:goal.${goal.translation_key}`),
    }
  ));

  const topicsOptions = topics.map((topicItem) => (
    {
      value: topicItem.id,
      label: t(`topics.${topicItem.code}`),
    }
  ));

  const selectedTopic = topicsOptions.find((topicsOption) => topicsOption.value === queryTopic?.id);

  const educationOptions = educationLevels.map((level) => (
    {
      value: level.id,
      label: t(`education-levels:${level.code}`),
    }
  ));
  return (
    <Container>
      <CountryHeader countries={countries} country={country} navigation={navigation} active="indicators" />

      <Row className="mt-5 mb-5 pr-0 text-center">
        <Col>
          <Title color="blueTitleIndicator" type="title">
            {t('common:educationalIndicators')}
          </Title>
        </Col>
      </Row>
      <Row>
        <Col>
          <Title color="bordes" type="subtitle">
            {`${t('common:filter.filterIndicatorsBy')}:`}
          </Title>
          <Form>
            <Form.Row>
              <Form.Group as={Col} xs={12} sm={4} controlId="goal">
                <LabelFilter>{t('common:filter.goalMeta')}</LabelFilter>
                <Select
                  defaultValue={defaultOption}
                  onChange={({ value }) => setPec(value)}
                  options={[...defaultOption, ...pecGoalsOptions]}
                  isSearchable
                />
              </Form.Group>
              <Form.Group as={Col} xs={12} sm={4} controlId="topic">
                <LabelFilter>{t('common:filter.topic')}</LabelFilter>
                <Select
                  defaultValue={selectedTopic || defaultOption}
                  onChange={({ value }) => setTopic(value)}
                  options={[...defaultOption, ...topicsOptions]}
                  isSearchable
                />
              </Form.Group>
              <Form.Group as={Col} xs={12} sm={4} controlId="level">
                <LabelFilter>{t('common:filter.level')}</LabelFilter>
                <Select
                  defaultValue={defaultOption}
                  onChange={({ value }) => setEducationLevel(value)}
                  options={[...defaultOption, ...educationOptions]}
                  isSearchable
                />
              </Form.Group>
            </Form.Row>
          </Form>
        </Col>
      </Row>
      <Container className="mt-5 mb-5 bg-light p-2 pb-0">
        <FilterDescription />
      </Container>
      <Row className="mt-3 mb-3">
        <Col className="mb-3">
          <IndicatorTitle>
            <Title color="negro" type="caption">
              {t('common:educationalIndicators')}
            </Title>
          </IndicatorTitle>
        </Col>
        <Col xs={2} className="justify-content-center align-items-center d-none d-sm-flex">
          <IconImg src={PecIcon} />
          <Title className="pl-1" color="negro" type="caption">
            {t('common:pec')}
          </Title>
        </Col>
        <Col xs={2} className="justify-content-center align-items-center d-none d-sm-flex">
          <IconImg src={PecIcon} />
          <Title className="pl-1" color="negro" type="caption">
            {t('common:ods4')}
          </Title>
        </Col>

        <Col xs={3} sm={2} lg={1} className="d-none d-sm-flex" />
      </Row>
      <Row className="mt-3 mb-3">
        <Col>
          <IndicatorList />
        </Col>
      </Row>
    </Container>
  );
};

export const getServerSideProps = async ({ query }) => {
  const countriesService = CountryService.findAll();
  const pecGoalsService = PecGoalService.getAll();
  const topicsService = TopicService.getAll();
  const educationLevelsService = EducationLevelService.findAll();
  const indicatorsService = IndicatorService.search();

  const [countries, pecGoals, topics, educationLevels, indicators] = await Promise.all([
    countriesService,
    pecGoalsService,
    topicsService,
    educationLevelsService,
    indicatorsService]);

  const country = _.find(countries, (c) => c.short_name === query.id);

  return {
    props: {
      countries,
      country,
      pecGoals,
      topics,
      educationLevels,
      indicators,
      query,
    },
  };
};

IndicatorListPage.defaultProps = { i18nNamespaces: ['topics', 'education-levels'] };

export default withTranslation(['topics', 'education-levels', 'common'])(IndicatorListPage);
