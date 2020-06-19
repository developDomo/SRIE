
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell,
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

const SexChart = ({ data, t }) => {
  const [latestData, setLatestData] = useState(charDataFormatHelper(data.visualizations.sex.latest));
  const [historicalData, setHistoricalData] = useState(charDataFormatHelper(data.visualizations.sex.historical));
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
          isAnimationActive={false}
        >
          <CartesianGrid strokeDasharray="0 0" />
          <XAxis dataKey="groupBy" />
          <YAxis unit="%" />
          <Tooltip />
          <Legend />
          <Bar dataKey="M" fill="#359B8A" name={t('M')} unit="%" />
          <Bar dataKey="F" fill="#2A58AD" name={t('F')} unit="%" />
        </BarChart>
      </ResponsiveContainer>
    </Content>
  );
};

SexChart.getInitialProps = ({ t, data }) => (
  {
    t,
    data,
    namespacesRequired: ['charts'],
  }
);

export default withTranslation('charts')(SexChart);
