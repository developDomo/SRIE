import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import DataTable from 'react-data-table-component';
import React, { useState } from 'react';
import styled from 'styled-components';
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

const WealthQuintilleChart = ({
  data, t, chartType, unitMeasure,
}) => {
  const [latestData, setLatestData] = useState(charDataFormatHelper(data.visualizations['wealth-quintille'].latest));
  const [historicalData, setHistoricalData] = useState(charDataFormatHelper(data.visualizations['wealth-quintille'].historical));
  const [chartMetrics, setChartMetrics] = useState(ChartMetrics.LAST_YEAR);
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
    },
    {
      name: t('Q2'),
      selector: 'Q2',
      sortable: true,
    },
    {
      name: t('Q3'),
      selector: 'Q3',
      sortable: true,
    },
    {
      name: t('Q4'),
      selector: 'Q4',
      sortable: true,
    },
    {
      name: t('Q5'),
      selector: 'Q5',
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
          <Bar dataKey="Q1" fill={maleBarColor} name={t('Q1')} unit={t(`units.${unitMeasure}`)} barSize={defaultBarSize} />
          <Bar dataKey="Q2" fill={femaleBarColor} name={t('Q2')} unit={t(`units.${unitMeasure}`)} barSize={defaultBarSize} />
          <Bar dataKey="Q3" fill={maleBarColor} name={t('Q3')} unit={t(`units.${unitMeasure}`)} barSize={defaultBarSize} />
          <Bar dataKey="Q4" fill={femaleBarColor} name={t('Q4')} unit={t(`units.${unitMeasure}`)} barSize={defaultBarSize} />
          <Bar dataKey="Q5" fill={maleBarColor} name={t('Q5')} unit={t(`units.${unitMeasure}`)} barSize={defaultBarSize} />
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

WealthQuintilleChart.getInitialProps = ({
  t, data, chartType, unitMeasure,
}) => (
  {
    t,
    data,
    chartType,
    unitMeasure,
    namespacesRequired: ['charts'],
  }
);

export default withTranslation('charts')(WealthQuintilleChart);
