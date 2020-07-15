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
import DataTable from 'react-data-table-component';
import { charDataFormatHelper } from './helpers/ChartDataHelper';
import { ChartMetrics, IndexeType, DisplayTypes } from './types/ChartTypes';
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

const IndexesChart = ({ data, t, chartType }) => {
  const [indexes, setIndexes] = useState(IndexeType.GPI.description);
  const [latestData, setLatestData] = useState(charDataFormatHelper(data.indexes[indexes]?.latest));
  const [historicalData, setHistoricalData] = useState(charDataFormatHelper(data.indexes[indexes]?.historical));
  const [chartMetrics, setChartMetrics] = useState(ChartMetrics.LAST_YEAR);
  const datasource = chartMetrics === ChartMetrics.LAST_YEAR ? latestData : historicalData;
  const columns = [
    {
      name: t('year'),
      selector: 'groupBy',
      sortable: true,
    },
    {
      name: t(indexes),
      selector: indexes,
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
          <YAxis domain={[0, 2]} />
          <Tooltip />
          <Legend />
          <Bar dataKey={indexes} fill="#359B8A" barSize={defaultBarSize} />
        </BarChart>
      );
    }
    return (
      <DataTable
        title="Total"
        columns={columns}
        data={datasource}
        striped
      />
    );
  };
  return (
    <Content>
      <ControlContainer>
        <ChartControls setChartMetrics={setChartMetrics} chartMetrics={chartMetrics} />
        <IndexesControls setIndexes={setIndexes} indexesData={data.indexes} />
      </ControlContainer>
      <ResponsiveContainer width="100%" height={400}>
        {showContent()}
      </ResponsiveContainer>
    </Content>
  );
};

IndexesChart.getInitialProps = ({ t, data, chartType }) => (
  {
    t,
    data,
    chartType,
    namespacesRequired: ['charts'],
  }
);

export default withTranslation('charts')(IndexesChart);
