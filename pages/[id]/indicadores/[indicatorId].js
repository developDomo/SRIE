import _ from 'lodash';
import {
  Container, Row, Col, Popover, OverlayTrigger,
} from 'react-bootstrap';
import isEmpty from 'lodash/isEmpty';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { withTranslation } from '../../../i18n';
import CountryHeader from '../../../components/countries/CountryHeader';
import FetchUtils from '../../../utils/Fetch.utils';
import IndicatorChart from '../../../components/charts/IndicatorChart';
import TopicTag from '../../../components/layout/TopicTag';
import {
  txt,
} from '../../../theme/colors';
import RelatedIndicator from '../../../components/layout/RelatedIndicator';

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

const NameParagraph = styled.p`
  color: #22314D;
  font-weight: bold;
`;
const Title = styled.h1`
    color: #4495CD;
`;

const PecIndicator = styled.p`
  color: #5CA0BE;
`;

const OdsIndicator = styled.p`
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
      return variations.map((variation) => `${id}${isEmpty(variation) ? '' : `.${variation.code}`}`);
    }
    return [`${id}`];
  };

  const popoverPec = (
    <Popover id="popover-pec">
      <Popover.Content>
        Spicy jalapeno bacon ipsum dolor amet leberkas venison drumstick pork loin meatball, ham salami swine prosciutto.
        Sirloin biltong buffalo, spare ribs chicken alcatra short loin andouille meatball turducken.
        Landjaeger turkey sausage beef. Tongue landjaeger andouille, fatback shank t-bone
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
    <>
      <CountryHeader countries={countries} country={country} navigation={navigation} active="indicators" />
      <Container style={containerTitleStyles}>
        <IndicatorTitle>
          <Title>{t('indicators:indicatorTitle')}</Title>
        </IndicatorTitle>
        <IndicatorDescription>
          <Row>
            <Col xs lg="10">
              <NameParagraph>{t(`indicators:indicators.${indicator.id}.name`)}</NameParagraph>
              {indicator.topics.map((topic) => (
                <TopicTag topicCode={topic.code} />
              ))}
            </Col>
            <Col md="auto" lg="2">
              <OverlayTrigger trigger={['hover', 'focus']} placement="auto" overlay={popoverPec}>
                <Icon iconUrl="/img/home/icon_ods4_indicadores.svg">
                  <PecIndicator>
                    PEC
                    {indicator.pec_goals.map((goal) => goal.code).join('/')}
                  </PecIndicator>
                </Icon>
              </OverlayTrigger>
              <OverlayTrigger trigger={['hover', 'focus']} placement="auto" overlay={popoverOds}>
                <Icon iconUrl="/img/home/icon_ods_table.svg">
                  <OdsIndicator>
                    ODS
                    {indicator.ods4_goals.map((goal) => goal.code).join('/')}
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
    </>
  );
};

IndicatorPage.getInitialProps = async ({ query, res: { t } }) => {
  const countriesResponse = await fetch(`${process.env.API_URL}/api/countries`);
  const countries = await countriesResponse.json();

  const country = _.find(countries, (c) => c.short_name === query.id);
  const [indicator, data, relatedIndicators] = await FetchUtils.multipleFetch([
    `${process.env.API_URL}/api/indicators/${query.indicatorId}`,
    `${process.env.API_URL}/api/indicators/${query.indicatorId}/data?country=${country.code}`,
    `${process.env.API_URL}/api/indicators/${query.indicatorId}/related`,
  ]);
  return {
    namespacesRequired: ['common', 'indicators'],
    countries,
    country,
    indicator,
    data,
    relatedIndicators,
    t,
  };
};

export default withTranslation('common', 'indicators')(IndicatorPage);
