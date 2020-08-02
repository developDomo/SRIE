import React, { useState, useEffect } from 'react';
import {
  Tabs, Tab, Container, Row, Col,
} from 'react-bootstrap';
import styled from 'styled-components';
import { withTranslation } from '../../i18n';
import { DisplayTypes, ChartTypes } from './types/ChartTypes';
import TotalChart from './TotalChart';
import SexChart from './SexChart';
import ChartTypeControls from './controls/ChartTypeControls';
import IndexesChart from './indexesChart';
import { hasSomeData } from './helpers/ChartDataHelper';

const ChartContent = styled.div`
  width: 100%;
  height: 700px;
  // background-color: #EAEEF2;
`;

const TapTitle = styled.span`
  &::before {
    content: url(${(props) => props.iconUrl});
    display:block;
    width: 20px;
    margin: 0 10px;
    float: left;
  }
`;

const DownloadIcon = styled.span`
  &::before {
    content: url(${(props) => props.iconUrl});
    color: red;
    display:block;
    width: 20px;
    margin: 0 10px;
    float: left;
  }
`;

const FooterSource = styled.div`
  color: #727EAB;
  padding-top: 1em;
`;

const SideBarIcons = styled.div`
  margin-top: 2.9em;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  border-bottom: 2px solid #AABAC3;
   & > p {
    max-width: 30px;
    text-align: center;
    background: rgba(255,255,255,0.5);
    margin: .25rem;
    padding: .25rem;
   }
`;

const SideBarDownloadContainer = styled.div`
margin-top: 1.4em;
margin-left: 1em;

 & > h5 {
  color: #5E7C8B;
 }
`;
const SideBarDescriptionContainer = styled.div`
  border-top: 2px solid #AABAC3;
  margin-top: 2em;
  padding: 1em;
`;

const IndicatorChart = ({
  t, chart,
}) => {
  const [chartType, setChartType] = useState(DisplayTypes.CHART);
  const [chartData, setChartData] = useState(chart.data);

  const tabsToShow = [...Object.keys(chartData.visualizations), ...['indexes']];

  const showTotalTab = () => {
    if (tabsToShow.indexOf('total') !== -1) {
      return (
        <Tab
          eventKey="total"
          disabled={hasSomeData(chartData.visualizations?.total)}
          title={<TapTitle iconUrl="/img/home/ico-total.svg">{t('total')}</TapTitle>}
        >
          <TotalChart data={chartData} chartType={chartType} />
        </Tab>
      );
    }
    return (<></>);
  };

  const showSexTab = () => {
    if (tabsToShow.indexOf('sex') !== -1) {
      return (
        <Tab
          eventKey="sex"
          disabled={hasSomeData(chartData.visualizations?.sex)}
          title={<TapTitle iconUrl="/img/home/ico-sexo.svg">{t('sex')}</TapTitle>}
        >
          <SexChart data={chartData} chartType={chartType} />
        </Tab>
      );
    }
    return (<></>);
  };

  const showGeoZoneTab = () => {
    if (tabsToShow.indexOf('geozone') !== -1) {
      return (
        <Tab eventKey="geoZone" title={<TapTitle iconUrl="/img/home/ico-zona.svg">{t('geoZone')}</TapTitle>}>
          <TotalChart data={chartData} chartType={chartType} />
        </Tab>
      );
    }
    return (<></>);
  };

  const showSocioeconomicLevelTab = () => {
    if (tabsToShow.indexOf('socioeconomicLevel') !== -1) {
      return (
        <Tab eventKey="socioeconomicLevel" title={<TapTitle iconUrl="/img/home/icon_total_line.svg">{t('socioeconomicLevel')}</TapTitle>}>
          <TotalChart data={chartData} chartType={chartType} />
        </Tab>
      );
    }
    return (<></>);
  };

  const showIndexesTab = () => {
    if (tabsToShow.indexOf('indexes') !== -1) {
      return (
        <Tab eventKey="Indexes" disabled={hasSomeData(chartData.indexes)} title={<TapTitle iconUrl="/img/home/ico-indices.svg">{t('indexes')}</TapTitle>}>
          <IndexesChart data={chartData} chartType={chartType} />
        </Tab>
      );
    }
    return (<></>);
  };

  const showContent = () => (
    <Tabs defaultActiveKey={tabsToShow[0] || ''} className="indicatorChartTabs">
      {showTotalTab()}
      {showSexTab()}
      {showGeoZoneTab()}
      {showSocioeconomicLevelTab()}
      {showIndexesTab()}
    </Tabs>
  );

  const showVariationTitle = () => {
    if (chart.isVariation) {
      return (
        <div>
          {t(`indicators:variations.${chart.translation_key}`)}
        </div>
      );
    }
    return (<></>);
  };
  return (
    <>
      <Container key={chart.code}>
        {showVariationTitle()}
        <Row>
          <Col xs lg="9">
            <ChartContent>
              <ChartTypeControls setChartType={setChartType} activeState={chartType} />
              {showContent()}
              <FooterSource>
                {t('source')}
                : Lorem ipsum dolor sit amet.
              </FooterSource>
            </ChartContent>
          </Col>
          <Col md="auto" lg="3">
            <SideBarIcons>
              <DownloadIcon iconUrl="/img/home/icon_table_1.svg" />
              <DownloadIcon iconUrl="/img/home/icon_table_2.svg" />
            </SideBarIcons>
            <SideBarDownloadContainer>
              <h5>
                {t('sideBar.downloads')}
                :
              </h5>
              <div>
                {' '}
                <a href="/#">{t('sideBar.formats.PDF')}</a>
                {' '}
              </div>
              <div>
                {' '}
                <a href="/#">{t('sideBar.formats.PNG')}</a>
                {' '}
              </div>
              <div>
                {' '}
                <a href="/#">{t('sideBar.formats.CSV')}</a>
                {' '}
              </div>
            </SideBarDownloadContainer>
            <SideBarDescriptionContainer>
              Spicy jalapeno bacon ipsum dolor amet leberkas venison drumstick pork loin meatball, ham salami swine prosciutto.
              Sirloin biltong buffalo, spare ribs chicken alcatra short loin andouille meatball turducken. Landjaeger turkey sausage beef.
              Tongue landjaeger andouille, fatback shank t-bone
            </SideBarDescriptionContainer>
          </Col>
        </Row>
      </Container>
    </>

  );
};

IndicatorChart.getInitialProps = async ({
  data, indicator, chart, t,
}) => ({
  namespacesRequired: ['charts', 'indicators'],
  data,
  t,
  indicator,
  chart,
});

export default withTranslation('charts', 'indicators')(IndicatorChart);
