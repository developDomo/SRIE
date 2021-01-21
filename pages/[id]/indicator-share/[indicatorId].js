import _ from 'lodash';
import styled from 'styled-components';
import IndicatorChart from '../../../components/charts/IndicatorChart';
import { ChartMetrics } from '../../../components/charts/types/ChartTypes';
import IndicatorService from '../../../services/Indicator.service';
import IndicatorDataService from '../../../services/IndicatorData.service';
import CountryService from '../../../services/Country.service';
import { withTranslation } from '../../../i18n';

const IndicatorTitle = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 2em;
  margin-bottom: 2em;
  text-transform: uppercase;
  font-weight: bold;
`;
const Title = styled.h3`
    color: #4495CD;
    font-family: "Roboto Slab";
    font-size: 1.5em;
`;

const TitleComponent = ({ t, indicator, variation }) => {
  if (indicator.id.toString() === variation.toString()) {
    return (
      <>
        <IndicatorTitle>
          <Title>{t(`indicators.${indicator.id}.name`)}</Title>
        </IndicatorTitle>
      </>
    );
  }
  return (
    <>
      <IndicatorTitle>
        <Title>{t(`indicators:variations.${variation.replace('.', '-')}`)}</Title>
      </IndicatorTitle>
    </>
  );
};

const IndicatorShare = ({
  data, indicatorVariation, share, hideSideBar, type, tabNumber, period, indicatorId, country, indicator, defaultChartMetrics, t, indexe,
}) => (
  <>
    <TitleComponent indicator={indicator} t={t} variation={indicatorVariation} />
    <IndicatorChart
      data={data}
      indicatorSource={indicatorVariation}
      share={share}
      unitMeasure={indicator.unit_measure}
      hideSideBar={hideSideBar}
      type={type}
      tabNumber={tabNumber}
      indicator={indicatorId}
      country={country}
      chart={indicator}
      countryCode={country.code}
      defaultChartMetrics={defaultChartMetrics === ChartMetrics.LAST_YEAR.description ? ChartMetrics.LAST_YEAR : ChartMetrics.HISTORICAL}
      indexe={indexe}
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
      indicatorId: query.indicatorId,
      indicator,
      country,
      defaultChartMetrics: query.defaultChartMetrics,
      indexe: query.indexe || '',
    },
  };
};

IndicatorShare.defaultProps = { i18nNamespaces: ['indicators'] };

export default withTranslation('indicators')(IndicatorShare);
