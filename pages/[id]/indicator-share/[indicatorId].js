import _ from 'lodash';
import { withTranslation } from '../../../i18n';
import FetchUtils from '../../../utils/Fetch.utils';
import IndicatorChart from '../../../components/charts/IndicatorChart';
import { ChartMetrics } from '../../../components/charts/types/ChartTypes';

const IndicatorShare = ({
  data, indicatorVariation, share, hideSideBar, type, tabNumber, period, indicatorId, country, indicator, defaultChartMetrics,
}) => (
  <>
    <IndicatorChart
      data={data}
      indicatorSource={indicatorVariation}
      share={share}
      unitMeasure={indicator.unit_measure}
      hideSideBar={hideSideBar}
      type={type}
      tabNumber={tabNumber}
      period={period}
      indicator={indicatorId}
      country={country.short_name}
      chart={indicator}
      countryCode={country.code}
      defaultChartMetrics={defaultChartMetrics === ChartMetrics.LAST_YEAR.description ? ChartMetrics.LAST_YEAR : ChartMetrics.HISTORICAL}
    />
  </>
);

IndicatorShare.getInitialProps = async ({ query, res: { t } }) => {
  const countriesResponse = await fetch(`${process.env.API_URL}/api/countries`);
  const countries = await countriesResponse.json();
  const country = _.find(countries, (c) => c.short_name === query.id);
  const [data, indicator] = await FetchUtils.multipleFetch([
    `${process.env.API_URL}/api/indicators/${query.indicatorId}/data?country=${country.code}`,
    `${process.env.API_URL}/api/indicators/${query.indicatorId}`,
  ]);
  return {
    data,
    indicatorVariation: query.indicatorVariation || query.indicatorId,
    share: true,
    hideSideBar: query.hideSideBar,
    type: query.type,
    tabNumber: query.tabNumber,
    period: query.period,
    indicatorId: query.indicatorId,
    indicator,
    country,
    defaultChartMetrics: query.defaultChartMetrics,
  };
};

export default IndicatorShare;
