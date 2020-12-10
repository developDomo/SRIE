import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import DataTable from 'react-data-table-component';
import React, { useState } from 'react';
import styled from 'styled-components';
import { withTranslation } from '../../i18n';
import { ChartMetrics, DisplayTypes } from './types/ChartTypes';
import { charDataFormatHelper, dataFormatter } from './helpers/ChartDataHelper';
import {
  firstQuintille, secondQuintille, thirthQuintille, fourQuintille, fifthQuintille,
} from '../../theme/colors';
import ChartControls from './controls/ChartControls';
import { defaultBarSize } from './Constants';

const Content = styled.div`
  width: 100%;
  background-color: #FFFFFF;
`;

const WealthQuintileChart = ({
  data, t, chartType, unitMeasure, defaultChartMetrics, share,
}) => {
  const [latestData, setLatestData] = useState(charDataFormatHelper(data.visualizations['wealth-quintile'].latest));
  const [historicalData, setHistoricalData] = useState(charDataFormatHelper(data.visualizations['wealth-quintile'].historical));
  const [chartMetrics, setChartMetrics] = useState(defaultChartMetrics || ChartMetrics.LAST_YEAR);
  const datasource = chartMetrics === ChartMetrics.LAST_YEAR ? latestData : historicalData;

  const columns = [
    {
      name: t('year'),
      selector: 'groupBy',
      sortable: true,
    },
    {
      name: t('Q1'),
      selector: 'Q1',
      sortable: true,
      format: (row) => `${dataFormatter(row.Q1)}`,
    },
    {
      name: t('Q2'),
      selector: 'Q2',
      sortable: true,
      format: (row) => `${dataFormatter(row.Q2)}`,
    },
    {
      name: t('Q3'),
      selector: 'Q3',
      sortable: true,
      format: (row) => `${dataFormatter(row.Q3)}`,
    },
    {
      name: t('Q4'),
      selector: 'Q4',
      sortable: true,
      format: (row) => `${dataFormatter(row.Q4)}`,
    },
    {
      name: t('Q5'),
      selector: 'Q5',
      sortable: true,
      format: (row) => `${dataFormatter(row.Q5)}`,
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
          <YAxis label={{ value: t(`yAxisLabel.${unitMeasure}`), angle: -90, position: 'insideLeft' }} domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Bar isAnimationActive={false} dataKey="Q1" fill={firstQuintille} name={t('Q1')} unit="%" barSize={defaultBarSize} formatter={dataFormatter} />
          <Bar isAnimationActive={false} dataKey="Q2" fill={secondQuintille} name={t('Q2')} unit="%" barSize={defaultBarSize} formatter={dataFormatter} />
          <Bar isAnimationActive={false} dataKey="Q3" fill={thirthQuintille} name={t('Q3')} unit="%" barSize={defaultBarSize} formatter={dataFormatter} />
          <Bar isAnimationActive={false} dataKey="Q4" fill={fourQuintille} name={t('Q4')} unit="%" barSize={defaultBarSize} formatter={dataFormatter} />
          <Bar isAnimationActive={false} dataKey="Q5" fill={fifthQuintille} name={t('Q5')} unit="%" barSize={defaultBarSize} formatter={dataFormatter} />
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
      <ChartControls setChartMetrics={setChartMetrics} chartMetrics={chartMetrics} share={share} />
      <ResponsiveContainer width="100%" height={400}>
        {showContent()}
      </ResponsiveContainer>
    </Content>
  );
};

WealthQuintileChart.getInitialProps = ({
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

export default withTranslation('charts')(WealthQuintileChart);
