import _ from 'lodash';
import {
  Container, Row, Col, Popover, OverlayTrigger,
} from 'react-bootstrap';
import isEmpty from 'lodash/isEmpty';
import styled from 'styled-components';
import { withTranslation } from '../../../i18n';
import CountryHeader from '../../../components/countries/CountryHeader';
import FetchUtils from '../../../utils/Fetch.utils';
import IndicatorChart from '../../../components/charts/IndicatorChart';
import TopicTag from '../../../components/layout/TopicTag';
import {
  txt,
} from '../../../theme/colors';
import RelatedIndicator from '../../../components/layout/RelatedIndicatorList';

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
  paddingLeft: 0,
  paddingRight: 0,
};

const Icon = styled.span`
  display:inline-block;
    &::before {
      display:block;
      content: url(${(props) => props.iconUrl});
      display:block;
      width: 40px;
      margin: 2px 10px;
      float: left;
    }
    & p {
      text-align: center;
    }
    &:nth-child(1) {
      border-right: 1px solid ${txt};
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

const OdsIndicator = styled.p`
  color: #C84046;
  font-family: "Roboto Slab";
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
    pecGoals.map((pecGoal) => (
      <p>
        <strong>{pecGoal.code}</strong>
        {`: ${t(`pec-goals:pec-goals.${pecGoal.code.toString().replace('.', '-')}.description`)}`}
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
        Spicy jalapeno bacon ipsum dolor amet leberkas venison drumstick pork loin meatball, ham salami swine prosciutto.
        Sirloin biltong buffalo, spare ribs chicken alcatra short loin andouille meatball turducken.
        Landjaeger turkey sausage beef. Tongue landjaeger andouille, fatback shank t-bone
      </Popover.Content>
    </Popover>
  );

  return (
    <Container fluid className="p-0">
      <CountryHeader countries={countries} country={country} navigation={navigation} active="indicators" />
      <Container style={containerTitleStyles}>
        <IndicatorTitle>
          <Title>{t('indicators:indicatorTitle')}</Title>
        </IndicatorTitle>
        <IndicatorDescription>
          <Row>
            <Col xs lg="10">
              <IndicatorName>{t(`indicators:indicators.${indicator.id}.name`)}</IndicatorName>
              {indicator.topics?.map((topic) => (
                <TopicTag key={topic.code} topicCode={topic.code} />
              ))}
            </Col>
            <Col md="auto" lg="2">
              <OverlayTrigger trigger={['hover', 'focus']} placement="auto" overlay={popoverPec}>
                <Icon iconUrl="/img/home/icon_ods4_indicadores.svg">
                  <PecIndicator>
                    {`PEC ${indicator.pec_goals?.map((goal) => goal.code).join('/')}`}
                  </PecIndicator>
                </Icon>
              </OverlayTrigger>
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
      <Container fluid style={containerWithColor}>
        {showIndicators(indicator).map((indicatorSource) => (
          <IndicatorChart
            data={data}
            indicatorSource={indicatorSource}
            indicator={indicator.id}
            country={country}
            key={indicatorSource.code}
            chart={indicatorSource}
            countryCode={country.code}
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

IndicatorPage.getInitialProps = async ({ query }) => {
  const countriesResponse = await fetch(`${process.env.API_URL}/api/countries`);
  const countries = await countriesResponse.json();

  const country = _.find(countries, (c) => c.short_name === query.id);
  const [indicator, data, relatedIndicators] = await FetchUtils.multipleFetch([
    `${process.env.API_URL}/api/indicators/${query.indicatorId}`,
    `${process.env.API_URL}/api/indicators/${query.indicatorId}/data?country=${country.code}`,
    `${process.env.API_URL}/api/indicators/${query.indicatorId}/related`,
  ]);
  return {
    namespacesRequired: ['common', 'indicators', 'pec-goals'],
    countries,
    country,
    indicator,
    data,
    relatedIndicators,
  };
};

export default withTranslation('common', 'indicators', 'pec-goals')(IndicatorPage);
