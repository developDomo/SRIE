import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import React, { useState } from 'react';
import styled from 'styled-components';
import DataTable from 'react-data-table-component';
import isEmpty from 'lodash/isEmpty';
import { ChartMetrics, DisplayTypes } from './types/ChartTypes';
import ChartControls from './controls/ChartControls';
import { withTranslation } from '../../i18n';
import { charDataFormatHelper, dataFormatter } from './helpers/ChartDataHelper';
import { defaultBarSize } from './Constants';
import { maleBarColor, femaleBarColor } from '../../theme/colors';

const Content = styled.div`
  width: 100%;
  background-color: #FFFFFF;
`;

const SexChart = ({
  data, t, chartType, unitMeasure, defaultChartMetrics, share, domain,
}) => {
  const [latestData, setLatestData] = useState(charDataFormatHelper(data.visualizations.sex.latest));
  const [historicalData, setHistoricalData] = useState(charDataFormatHelper(data.visualizations.sex.historical));
  const [chartMetrics, setChartMetrics] = useState(defaultChartMetrics || ChartMetrics.LAST_YEAR);
  const datasource = chartMetrics === ChartMetrics.LAST_YEAR ? latestData : historicalData;

  const columns = [
    {
      name: t('year'),
      selector: 'groupBy',
      sortable: true,
    },
    {
      name: t('M'),
      selector: 'M',
      sortable: true,
      format: (row) => `${dataFormatter(row.M)}`,
    },
    {
      name: t('F'),
      selector: 'F',
      sortable: true,
      format: (row) => `${dataFormatter(row.F)}`,
    },
  ];

  const showContent = () => {
    if (chartType === DisplayTypes.CHART) {
      if (isEmpty(historicalData)) {
        return (
          <div>
            {t('charts:emptyData')}
          </div>
        );
      }
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
          <YAxis label={{ value: t(`yAxisLabel.${unitMeasure}`), angle: -90, position: 'insideLeft' }} formatter={dataFormatter} domain={[0, domain]} />
          <Tooltip />
          <Legend />
          <Bar
            isAnimationActive={false}
            dataKey="M"
            fill={maleBarColor}
            name={t('M')}
            unit={t(`units.${unitMeasure}`)}
            barSize={defaultBarSize}
            formatter={dataFormatter}
          />
          <Bar
            isAnimationActive={false}
            dataKey="F"
            fill={femaleBarColor}
            name={t('F')}
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

SexChart.getInitialProps = ({
  t, data, chartType, unitMeasure, defaultChartMetrics, share, domain,
}) => (
  {
    t,
    data,
    chartType,
    unitMeasure,
    defaultChartMetrics,
    namespacesRequired: ['charts'],
    share,
    domain,
  }
);

export default withTranslation('charts')(SexChart);
