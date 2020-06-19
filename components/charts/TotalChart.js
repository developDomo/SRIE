
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ChartMetrics } from './types/ChartTypes';
import ChartControls from './controls/ChartControls';
import { withTranslation } from '../../i18n';
import { charDataFormatHelper } from './helpers/ChartDataHelper';

const Content = styled.div`
  width: 100%;
  background-color: #FFFFFF;
`;

const TotalChart = ({ data, t }) => {
  const [latestData, setLatestData] = useState(charDataFormatHelper(data.visualizations.total.latest));
  const [historicalData, setHistoricalData] = useState(charDataFormatHelper(data.visualizations.total.historical));
  const [chartMetrics, setChartMetrics] = useState(ChartMetrics.LAST_YEAR);

  return (
    <Content>
      <ChartControls setChartMetrics={setChartMetrics} chartMetrics={chartMetrics} />
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={chartMetrics === ChartMetrics.LAST_YEAR ? latestData : historicalData}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="0 0" />
          <XAxis dataKey="groupBy" />
          <YAxis unit="%" />
          <Tooltip />
          <Legend />
          <Bar dataKey="_T" fill="#359b8a" name={t('total')} unit="%" />
        </BarChart>
      </ResponsiveContainer>
    </Content>
  );
};

TotalChart.getInitialProps = ({ t, data }) => ({
  t,
  data,
  namespacesRequired: ['charts'],
});

export default withTranslation('charts')(TotalChart);
