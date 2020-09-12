import _ from 'lodash';
import { withTranslation } from '../../../i18n';
import FetchUtils from '../../../utils/Fetch.utils';
import IndicatorChart from '../../../components/charts/IndicatorChart';

const IndicatorShare = ({
  data, indicatorVariation, share, hideSideBar, type, tabNumber, period, indicatorId, country, indicator,
}) => (
  <>
    <IndicatorChart
      data={data}
      indicatorSource={indicatorVariation}
      share={share}
      hideSideBar={hideSideBar}
      type={type}
      tabNumber={tabNumber}
      period={period}
      indicator={indicatorId}
      country={country.short_name}
      chart={indicator}
      countryCode={country.code}
    />
    )
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
  };
};

export default IndicatorShare;
