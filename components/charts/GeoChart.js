import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import React, { useState } from 'react';
import styled from 'styled-components';
import DataTable from 'react-data-table-component';
import { withTranslation } from '../../i18n';
import { ChartMetrics, DisplayTypes } from './types/ChartTypes';
import { charDataFormatHelper } from './helpers/ChartDataHelper';
import { maleBarColor, femaleBarColor } from '../../theme/colors';
import ChartControls from './controls/ChartControls';
import { defaultBarSize } from './Constants';

const Content = styled.div`
  width: 100%;
  background-color: #FFFFFF;
`;

const GeoChart = ({
  data, t, chartType, unitMeasure, defaultChartMetrics,
}) => {
  const [latestData, setLatestData] = useState(charDataFormatHelper(data.visualizations.location.latest));
  const [historicalData, setHistoricalData] = useState(charDataFormatHelper(data.visualizations.location.historical));
  const [chartMetrics, setChartMetrics] = useState(defaultChartMetrics || ChartMetrics.LAST_YEAR);
  const datasource = chartMetrics === ChartMetrics.LAST_YEAR ? latestData : historicalData;

  const columns = [
    {
      name: t('year'),
      selector: 'groupBy',
      sortable: true,
    },
    {
      name: t('RUR'),
      selector: 'RUR',
      sortable: true,
    },
    {
      name: t('URB'),
      selector: 'URB',
      sortable: true,
    },
  ];

  const showContent = () => {
    if (chartType === DisplayTypes.CHART) {
      return (
        <BarChart
          data={datasource}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
          isAnimationActive={false}
        >
          <CartesianGrid strokeDasharray="0 0" />
          <XAxis dataKey="groupBy" />
          <YAxis unit={t(`units.${unitMeasure}`)} />
          <Tooltip />
          <Legend />
          <Bar dataKey="URB" fill={maleBarColor} name={t('URB')} unit={t(`units.${unitMeasure}`)} barSize={defaultBarSize} />
          <Bar dataKey="RUR" fill={femaleBarColor} name={t('RUR')} unit={t(`units.${unitMeasure}`)} barSize={defaultBarSize} />
        </BarChart>
      );
    }
    return (
      <DataTable
        title="Total"
        columns={columns}
        data={datasource}
        striped
        responsive
        allowOverflow
        style={{ maxHeight: '400px', overflowY: 'auto' }}
      />
    );
  };

  return (
    <Content>
      <ChartControls setChartMetrics={setChartMetrics} chartMetrics={chartMetrics} />
      <ResponsiveContainer width="100%" height={400}>
        {showContent()}
      </ResponsiveContainer>
    </Content>
  );
};

GeoChart.getInitialProps = ({
  t, data, chartType, unitMeasure, defaultChartMetrics,
}) => (
  {
    t,
    data,
    chartType,
    unitMeasure,
    namespacesRequired: ['charts'],
    defaultChartMetrics,
  }
);

export default withTranslation('charts')(GeoChart);
