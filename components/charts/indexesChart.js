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
import isEmpty from 'lodash/isEmpty';
import { charDataFormatHelper, dataFormatter } from './helpers/ChartDataHelper';
import { ChartMetrics, DisplayTypes } from './types/ChartTypes';
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

const IndexesChart = ({
  data, t, chartType, unitMeasure, defaultChartMetrics, share,
}) => {
  const [indexes, setIndexes] = useState(Object.keys(data.indexes)[0]);
  const [latestData, setLatestData] = useState(charDataFormatHelper(data.indexes[indexes]?.latest));
  const [historicalData, setHistoricalData] = useState(charDataFormatHelper(data.indexes[indexes]?.historical));
  const [chartMetrics, setChartMetrics] = useState(defaultChartMetrics || ChartMetrics.LAST_YEAR);

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
      format: (row) => `${dataFormatter(row.indexes)}`,
    },
  ];

  const showContent = () => {
    if (chartType === DisplayTypes.CHART) {
      if (isEmpty(data.indexes[indexes]?.historical)) {
        return (
          <div>
            No hay datos
          </div>
        );
      }

      return (
        <BarChart
          data={chartMetrics === ChartMetrics.LAST_YEAR
            ? charDataFormatHelper(data.indexes[indexes]?.latest)
            : charDataFormatHelper(data.indexes[indexes]?.historical)}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
          isAnimationActive={false}
        >
          <CartesianGrid strokeDasharray="0 0" />
          <XAxis dataKey="groupBy" />
          <YAxis label={{ value: t('yAxisLabel.PP'), angle: -90, position: 'insideLeft' }} domain={[0, 2]} />
          <Tooltip />
          <Legend />
          <Bar isAnimationActive={false} dataKey={indexes} fill="#359B8A" barSize={defaultBarSize} formatter={dataFormatter} />
        </BarChart>
      );
    }
    return (
      <DataTable
        title="Total"
        columns={columns}
        data={chartMetrics === ChartMetrics.LAST_YEAR
          ? charDataFormatHelper(data.indexes[indexes]?.latest)
          : charDataFormatHelper(data.indexes[indexes]?.historical)}
        striped
        responsive
        allowOverflow
        style={{ maxHeight: '400px', overflowY: 'auto' }}
      />
    );
  };
  return (
    <Content>
      <ControlContainer>
        <ChartControls setChartMetrics={setChartMetrics} chartMetrics={chartMetrics} share={share} />
        <IndexesControls setIndexes={setIndexes} indexesData={data.indexes} />
      </ControlContainer>
      <ResponsiveContainer width="100%" height={400}>
        {showContent()}
      </ResponsiveContainer>
    </Content>
  );
};

IndexesChart.getInitialProps = ({
  t, data, chartType, unitMeasure, defaultChartMetrics, share,
}) => (
  {
    t,
    data,
    chartType,
    unitMeasure,
    namespacesRequired: ['charts'],
    defaultChartMetrics,
    share,
  }
);

export default withTranslation('charts')(IndexesChart);
