import _ from 'lodash';
import FetchUtils from '../../../utils/Fetch.utils';
import IndicatorChart from '../../../components/charts/IndicatorChart';
import { ChartMetrics } from '../../../components/charts/types/ChartTypes';
import IndicatorService from '../../../services/Indicator.service';
import IndicatorDataService from '../../../services/IndicatorData.service';
import CountryService from '../../../services/Country.service';

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

export const getServerSideProps = async ({ query, res: { t } }) => {
  const countries = await CountryService.findAll();
  const country = _.find(countries, (c) => c.short_name === query.id);
  const indicatorService = await IndicatorService.findFullDetailsById(query.indicatorId);

  const dataService = await IndicatorDataService.findByIndicatorId(
    query.indicatorId,
    country.code,
  );

  const [indicator, data] = await Promise.all([indicatorService, dataService]);

  return {
    props: {
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
    },
  };
};

export default IndicatorShare;
