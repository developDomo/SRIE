import styled from 'styled-components';
import React, { useState } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { charDataFormatHelper } from './helpers/ChartDataHelper';
import { ChartMetrics, IndexeType } from './types/ChartTypes';
import ChartControls from './controls/ChartControls';
import { withTranslation } from '../../i18n';
import IndexesControls from './controls/IndexesControls';
import { defaultBarSize } from './Constants';

const Content = styled.div`
  width: 100%;
  background-color: #FFFFFF;
`;

const ControlContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const IndexesChart = ({ data, t }) => {
  const [indexes, setIndexes] = useState(IndexeType.GPI.description);
  const [latestData, setLatestData] = useState(charDataFormatHelper(data.indexes[indexes]?.latest));
  const [historicalData, setHistoricalData] = useState(charDataFormatHelper(data.indexes[indexes]?.historical));
  const [chartMetrics, setChartMetrics] = useState(ChartMetrics.LAST_YEAR);

  return (
    <Content>
      <ControlContainer>
        <ChartControls setChartMetrics={setChartMetrics} chartMetrics={chartMetrics} />
        <IndexesControls setIndexes={setIndexes} indexesData={data.indexes} />
      </ControlContainer>
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
          <YAxis domain={[0, 2]} />
          <Tooltip />
          <Legend />
          <Bar dataKey={indexes} fill="#359B8A" barSize={defaultBarSize} />
        </BarChart>
      </ResponsiveContainer>
    </Content>
  );
};

IndexesChart.getInitialProps = ({ t, data }) => (
  {
    t,
    data,
    namespacesRequired: ['charts'],
  }
);

export default withTranslation('charts')(IndexesChart);
