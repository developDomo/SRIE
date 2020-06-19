import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import styled from 'styled-components';
import { withTranslation } from '../../i18n';
import { DisplayTypes } from './types/ChartTypes';
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
  color: black;
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

const IndicatorChart = ({
  t, data, indicator, indicatorSource,
}) => {
  const [chartType, setChartType] = useState(DisplayTypes.CHART);
  const [chartData, setChartData] = useState(data[indicatorSource]);


  const tabsToShow = [...Object.keys(chartData.visualizations), ...['indexes']];

  const showTotalTab = () => {
    if (tabsToShow.indexOf('total') !== -1) {
      return (
        <Tab
          eventKey="total"
          disabled={hasSomeData(chartData.visualizations?.total)}
          title={<TapTitle iconUrl="/img/home/icon_total_line.svg">{t('total')}</TapTitle>}
        >
          <TotalChart data={chartData} />
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
          title={<TapTitle iconUrl="/img/home/icon_sexo_line.svg">{t('sex')}</TapTitle>}
        >
          <SexChart data={chartData} />
        </Tab>
      );
    }
    return (<></>);
  };

  const showGeoZoneTab = () => {
    if (tabsToShow.indexOf('geozone') !== -1) {
      return (
        <Tab eventKey="geoZone" title={<TapTitle iconUrl="/img/home/icon_socioeconomico_line.svg">{t('socioeconomicLevel')}</TapTitle>}>
          <TotalChart data={chartData} />
        </Tab>
      );
    }
    return (<></>);
  };

  const showSocioeconomicLevelTab = () => {
    if (tabsToShow.indexOf('socioeconomicLevel') !== -1) {
      return (
        <Tab eventKey="socioeconomicLevel" title={<TapTitle iconUrl="/img/home/icon_total_line.svg">{t('socioeconomicLevel')}</TapTitle>}>
          <TotalChart data={chartData} />
        </Tab>
      );
    }
    return (<></>);
  };

  const showIndexesTab = () => {
    if (tabsToShow.indexOf('indexes') !== -1) {
      return (
        <Tab eventKey="Indexes" disabled={hasSomeData(chartData.indexes)} title={<TapTitle iconUrl="/img/home/icon_indice_line.svg">{t('indexes')}</TapTitle>}>
          <IndexesChart data={chartData} />
        </Tab>
      );
    }
    return (<></>);
  };
  return (
    <>
      <ChartContent>
        <ChartTypeControls setChartType={setChartType} activeState={chartType} />
        <Tabs defaultActiveKey={tabsToShow[0] || ''} id="uncontrolled-tab-example">
          {showTotalTab()}
          {showSexTab()}
          {showGeoZoneTab()}
          {showSocioeconomicLevelTab()}
          {showIndexesTab()}
        </Tabs>
        <FooterSource>
          {t('source')}
          : Lorem ipsum dolor sit amet.
        </FooterSource>
      </ChartContent>
    </>

  );
};

IndicatorChart.getInitialProps = async ({
  data, indicator, indicatorSource, t,
}) => ({
  namespacesRequired: ['charts'],
  data,
  t,
  indicator,
  indicatorSource,
});

export default withTranslation('charts')(IndicatorChart);
