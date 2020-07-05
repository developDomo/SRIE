import _ from 'lodash';
import { Container, Row, Col } from 'react-bootstrap';
import isEmpty from 'lodash/isEmpty';
import styled from 'styled-components';
import { withTranslation } from '../../../i18n';
import CountryHeader from '../../../components/countries/CountryHeader';
import FetchUtils from '../../../utils/Fetch.utils';
import IndicatorChart from '../../../components/charts/IndicatorChart';


const IndicatorTitle = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 2em;
  margin-bottom: 3em;
  text-transform: uppercase;
`;

const IndicatorDescription = styled.div`


`;

const FooterIndicator = styled.div`

`;

const FooterTitle = styled.h3`
  text-align: center;
  width: 100%;
  margin-top: 1em;
  margin-bottom: 1.5em;
  text-transform: uppercase;
`;
const containerWithColor = {
  backgroundColor: '#eaeef2',
};

const containerTitleStyles = {
  marginBottom: '3em',
};

const Icon = styled.span`
display:inline-block;
  &::before {
    display:block;
    content: url(${(props) => props.iconUrl});
    display:block;
    width: 80px;
    margin: 0 10px;
    float: left;
  }
  & p {
    text-align: center;
  }
`;


const IndicatorPage = ({
  t, countries, country, indicator, data,
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

  return (
    <>
      <CountryHeader countries={countries} country={country} navigation={navigation} active="indicators" />
      <Container style={containerTitleStyles}>
        <IndicatorTitle>
          <h1>Indicador titulo</h1>
        </IndicatorTitle>
        <IndicatorDescription>
          <Container>
            <Row>
              <Col xs lg="9">
                Spicy jalapeno bacon ipsum dolor amet leberkas venison drumstick pork loin meatball, ham salami swine prosciutto.
                Sirloin biltong buffalo, spare ribs chicken alcatra short loin andouille meatball turducken. Landjaeger turkey sausage beef.
                Tongue landjaeger andouille, fatback shank t-bone kielbasa chicken prosciutto.
                Biltong doner pastrami burgdoggen t-bone, brisket prosciutto tenderloin frankfurter kevin pig tri-tip tongue. Salami pork loin
                jowl t-bone tongue tri-tip alcatra bresaola tail.
              </Col>
              <Col md="auto" lg="3">
                <Icon iconUrl="/img/home/icon_ods_table.svg">
                  {' '}
                  <p>ods</p>
                </Icon>
                <Icon iconUrl="/img/home/icon_ods4_indicadores.svg">
                  {' '}
                  <p>ods</p>
                </Icon>
              </Col>
            </Row>
          </Container>
        </IndicatorDescription>
      </Container>
      <Container fluid style={containerWithColor}>
        {showIndicators(indicator).map((indicatorSource) => <IndicatorChart data={data} indicatorSource={indicatorSource} indicator={indicator} />)}
      </Container>
      <FooterIndicator>
        <FooterTitle>
          Indicadores Relacionados
        </FooterTitle>
      </FooterIndicator>

    </>
  );
};

IndicatorPage.getInitialProps = async ({ query }) => {
  const countriesResponse = await fetch(`${process.env.API_URL}/api/countries`);
  const countries = await countriesResponse.json();

  const country = _.find(countries, (c) => c.short_name === query.id);

  const [indicator, data] = await FetchUtils.multipleFetch([
    `${process.env.API_URL}/api/indicators/${query.indicatorId}`,
    `${process.env.API_URL}/api/indicators/${query.indicatorId}/data?country=${country.code}`,
  ]);
  return {
    namespacesRequired: ['common'],
    countries,
    country,
    indicator,
    data,
  };
};

export default withTranslation('common')(IndicatorPage);
