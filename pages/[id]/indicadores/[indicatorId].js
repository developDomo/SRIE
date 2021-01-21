import _ from 'lodash';
import {
  Container, Row, Col, Popover, OverlayTrigger,
} from 'react-bootstrap';
import isEmpty from 'lodash/isEmpty';
import styled from 'styled-components';
import { withTranslation } from '../../../i18n';
import CountryHeader from '../../../components/countries/CountryHeader';
import { Serialize } from '../../../utils/Serializer.utils';
import IndicatorChart from '../../../components/charts/IndicatorChart';
import TopicTag from '../../../components/layout/TopicTag';
import {
  txt,
} from '../../../theme/colors';
import RelatedIndicator from '../../../components/layout/RelatedIndicatorList';
import CountryService from '../../../services/Country.service';
import IndicatorService from '../../../services/Indicator.service';
import IndicatorDataService from '../../../services/IndicatorData.service';

const IndicatorTitle = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 2em;
  margin-bottom: 2em;
  text-transform: uppercase;
  font-weight: bold;
`;

const IndicatorDescription = styled.div`


`;

const FooterIndicator = styled.div`
  margin-bottom: 4em;
  margin-top: 2em;
`;

const FooterTitle = styled.h3`
  text-align: center;
  width: 100%;
  margin-top: 1em;
  margin-bottom: 1.5em;
  text-transform: uppercase;
  color: #4495CD;
  font-weight: bold;
`;
const containerWithColor = {
  backgroundColor: '#eaeef2',
};

const containerTitleStyles = {
  marginBottom: '3em',
};

const Icon = styled.span`
  display:block;
    &::before {
      display:block;
      content: url(${(props) => props.iconUrl});
        width: 90px;
        padding: 0 20px;
        text-align: center;
    }
    & p {
      text-align: center;
    }
    &:nth-child(1) {
      padding-right: 9px;
    }
    &:nth-child(2) {
      padding-left: 9px;
    }
`;

const IndicatorName = styled.h2`
  color: #22314D;
  font-weight: bold;
  font-size: 1.4rem;
  font-family: "Roboto Slab", sans-serif;
`;
const Title = styled.h3`
    color: #4495CD;
    font-family: "Roboto Slab";
    font-size: 1.5em;
`;

const PecIndicator = styled.p`
  color: #5CA0BE;
  font-family: "Roboto Slab";
`;

const OdsIndicator = styled(PecIndicator)`
  color: #C84046;
`;

const IndicatorPage = ({
  countries, country, indicator, data, relatedIndicators, t,
}) => {
  const navigation = [
    { key: 'navigation.pages.indicators', url: `/${country.short_name}/indicadores` },
    { key: `indicators:indicators.${indicator.id}.name` },
  ];
  const showIndicators = ({ id, variations }) => {
    if (!isEmpty(variations)) {
      return variations.map((variation) => {
        const code = `${id}.${variation.code}`;
        return {
          code,
          data: data[code],
          translation_key: variation.translation_key,
          isVariation: true,
        };
      });
    }
    return [{
      code: id,
      data: data[id],
      isVariation: false,
    }];
  };

  const PecTooltip = ({ pecGoals }) => (
    pecGoals.map((pecGoal, index) => (
      <p key={`pec-${index}`}>
        <strong>{pecGoal.code}</strong>
        {`: ${t(`pec-goals:pec-goals.${pecGoal.code.toString().replace('.', '-')}.description`)}`}
      </p>
    ))
  );

  const OdsTooltip = ({ ods4Goals }) => (
    ods4Goals.map((ods4Goal, index) => (
      <p key={`ods-${index}`}>
        <strong>{ods4Goal.code}</strong>
        {`: ${t(`ods-goals:${ods4Goal.code.toString().replace('.', '-')}.description`)}`}
      </p>
    ))
  );

  const popoverPec = (
    <Popover id="popover-pec">
      <Popover.Content>
        <PecTooltip pecGoals={indicator.pec_goals} />
      </Popover.Content>
    </Popover>
  );

  const popoverOds = (
    <Popover id="popover-ods">
      <Popover.Content>
        <OdsTooltip ods4Goals={indicator.ods4_goals} />
      </Popover.Content>
    </Popover>
  );

  return (
    <Container className="p-0">
      <Container style={containerTitleStyles}>
        <CountryHeader countries={countries} country={country} navigation={navigation} active="indicators" />
        <IndicatorTitle>
          <Title>{t('indicators:indicatorTitle')}</Title>
        </IndicatorTitle>
        <IndicatorDescription>
          <Row>
            <Col xs={12} lg="8" className="mb-5 mb-lg-0">
              <IndicatorName>{t(`indicators:indicators.${indicator.id}.name`)}</IndicatorName>
              {indicator.topics?.map((topic) => (
                <TopicTag key={topic.code} topicCode={topic.code} />
              ))}
            </Col>
            <Col xs={6} lg="2" className="d-flex text-center justify-content-center align-items-center border-right border-dark">
              <OverlayTrigger trigger={['hover', 'focus']} placement="auto" overlay={popoverPec}>
                <Icon iconUrl="/img/home/icon_ods4_indicadores.svg">
                  <PecIndicator>
                    {`PEC ${indicator.pec_goals?.map((goal) => goal.code).join('/')}`}
                  </PecIndicator>
                </Icon>
              </OverlayTrigger>
            </Col>
            <Col xs={6} lg="2" className="d-flex text-center justify-content-center align-items-center mx-0">
              <OverlayTrigger trigger={['hover', 'focus']} placement="auto" overlay={popoverOds}>
                <Icon iconUrl="/img/home/icon_ods_table.svg">
                  <OdsIndicator>
                    {`ODS ${indicator.ods4_goals?.map((goal) => goal.code).join('/')}`}
                  </OdsIndicator>
                </Icon>
              </OverlayTrigger>
            </Col>
          </Row>
        </IndicatorDescription>
      </Container>
      <Container style={containerWithColor}>
        {showIndicators(indicator).map((indicatorSource) => (
          <IndicatorChart
            data={data}
            indicatorSource={indicatorSource}
            indicator={indicator.id}
            unitMeasure={indicator.unit_measure}
            country={country}
            key={indicatorSource.code}
            chart={indicatorSource}
            countryCode={country.code}
            share={false}
          />
        ))}
      </Container>
      <Container>

        <FooterIndicator>
          <FooterTitle>
            {t('indicators:relatedIndicatorTitle')}
          </FooterTitle>
          <RelatedIndicator relatedIndicators={relatedIndicators} countryName={country.short_name} />
        </FooterIndicator>
      </Container>
    </Container>
  );
};

export const getServerSideProps = async ({ query }) => {
  const countries = await CountryService.findAll();

  const country = _.find(countries, (c) => c.short_name === query.id);

  const indicatorService = IndicatorService.findFullDetailsById(query.indicatorId);

  const dataService = IndicatorDataService.findByIndicatorId(
    query.indicatorId,
    country.code,
  );

  const relatedIndicatorsService = IndicatorService.findRelated(query.indicatorId);

  const [indicator, data, relatedIndicators] = await Promise.all([indicatorService, dataService, relatedIndicatorsService]);

  return {
    props: {
      countries,
      country,
      indicator,
      data,
      relatedIndicators: Serialize(relatedIndicators),
    },
  };
};

IndicatorPage.defaultProps = { i18nNamespaces: ['common', 'indicators', 'pec-goals', 'ods-goals'] };

export default withTranslation(['common', 'indicators', 'pec-goals', 'ods-goals'])(IndicatorPage);
