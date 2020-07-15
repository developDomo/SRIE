
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import React, { useState } from 'react';
import styled from 'styled-components';
import DataTable from 'react-data-table-component';
import { ChartMetrics, DisplayTypes } from './types/ChartTypes';
import ChartControls from './controls/ChartControls';
import { withTranslation } from '../../i18n';
import { charDataFormatHelper } from './helpers/ChartDataHelper';
import { defaultBarSize } from './Constants';

const Content = styled.div`
  width: 100%;
  background-color: #FFFFFF;
`;

const TotalChart = ({ data, t, chartType }) => {
  const [latestData, setLatestData] = useState(charDataFormatHelper(data.visualizations.total.latest));
  const [historicalData, setHistoricalData] = useState(charDataFormatHelper(data.visualizations.total.historical));
  const [chartMetrics, setChartMetrics] = useState(ChartMetrics.LAST_YEAR);
  const datasource = chartMetrics === ChartMetrics.LAST_YEAR ? latestData : historicalData;

  const columns = [
    {
      name: t('year'),
      selector: 'groupBy',
      sortable: true,
    },
    {
      name: t('total'),
      selector: '_T',
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
        >
          <CartesianGrid strokeDasharray="0 0" />
          <XAxis dataKey="groupBy" />
          <YAxis unit="%" />
          <Tooltip />
          <Legend />
          <Bar dataKey="_T" fill="#359b8a" name={t('total')} unit="%" barSize={defaultBarSize} />
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
      <ChartControls setChartMetrics={setChartMetrics} chartMetrics={chartMetrics} />
      <ResponsiveContainer width="100%" height={400}>
        {showContent()}
      </ResponsiveContainer>
    </Content>
  );
};

TotalChart.getInitialProps = ({ t, data, chartType }) => ({
  t,
  data,
  chartType,
  namespacesRequired: ['charts'],
});

export default withTranslation('charts')(TotalChart);
