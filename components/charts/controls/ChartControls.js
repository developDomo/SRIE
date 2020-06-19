
import styled from 'styled-components';
import { ChartMetrics } from '../types/ChartTypes';
import { withTranslation } from '../../../i18n';

const Button = styled.button`
  padding: .3em;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  background-color: transparent;
  border-color: #3784c4;
  color: #5e80b8;
  border: 1px solid #3784c4;
  &::before {
    content: url(${(props) => props.iconUrl});
    color: red;
    display:block;
    height: 20px;
    width: 20px;
    margin: 0 .5em;
    float: left;
  }
  &.active {
    color: #2e5cc4;
    border-color: #2e5cc4;
  }
`;

const Span = styled.span`
  padding: 2px;
  font-weight: bold;
`;

const Content = styled.div`
  padding: 1.2em;
`;

const ChartControls = ({ setChartMetrics, t, chartMetrics }) => (
  <Content>
    <Span>
      <Button
        iconUrl="/img/home/icono_historico_line.svg"
        onClick={() => setChartMetrics(ChartMetrics.LAST_YEAR)}
        className={chartMetrics.description === ChartMetrics.LAST_YEAR.description ? 'active' : ''}
      >
        {t('lastYear')}
      </Button>
    </Span>
    <Span>
      <Button
        iconUrl="/img/home/icono_historico_line.svg"
        onClick={() => setChartMetrics(ChartMetrics.HISTORICAL)}
        className={chartMetrics.description === ChartMetrics.HISTORICAL.description ? 'active' : ''}
      >
        {t('historical')}
      </Button>
    </Span>
  </Content>
);

ChartControls.getInitialProps = ({ t, chartMetrics }) => ({
  namespacesRequired: ['charts'],
  t,
  chartMetrics,
});

export default withTranslation('charts')(ChartControls);
