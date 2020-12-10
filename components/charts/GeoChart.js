import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import React, { useState } from 'react';
import styled from 'styled-components';
import DataTable from 'react-data-table-component';
import { withTranslation } from '../../i18n';
import { ChartMetrics, DisplayTypes } from './types/ChartTypes';
import { charDataFormatHelper, dataFormatter } from './helpers/ChartDataHelper';
import { maleBarColor, femaleBarColor } from '../../theme/colors';
import ChartControls from './controls/ChartControls';
import { defaultBarSize } from './Constants';

const Content = styled.div`
  width: 100%;
  background-color: #FFFFFF;
`;

const GeoChart = ({
  data, t, chartType, unitMeasure, defaultChartMetrics, share,
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
      format: (row) => `${dataFormatter(row.RUR)}`,
    },
    {
      name: t('URB'),
      selector: 'URB',
      sortable: true,
      format: (row) => `${dataFormatter(row.URB)}`,
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
          <Bar
            isAnimationActive={false}
            dataKey="URB"
            fill={maleBarColor}
            name={t('URB')}
            unit={t(`units.${unitMeasure}`)}
            barSize={defaultBarSize}
            formatter={dataFormatter}
          />
          <Bar
            isAnimationActive={false}
            dataKey="RUR"
            fill={femaleBarColor}
            name={t('RUR')}
            unit={t(`units.${unitMeasure}`)}
            barSize={defaultBarSize}
            formatter={dataFormatter}
          />
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

GeoChart.getInitialProps = ({
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

export default withTranslation('charts')(GeoChart);
