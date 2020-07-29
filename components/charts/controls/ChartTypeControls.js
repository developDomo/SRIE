import styled from 'styled-components';
import { DisplayTypes } from '../types/ChartTypes';
import { withTranslation } from '../../../i18n';

const Button = styled.button`
  color: #5ECDF1;
  padding: 0;
  border: none;
  background: none;
  border-bottom: 5px solid transparent;
  &.active {
    border-bottom: 5px solid #2A6C9C;
    color: #596BA1;
  }
  &::before {
    content: url(${(props) => props.iconUrl});
    display:block;
    height: 20px;
    width: 20px;
    margin: 0 10px;
    float: left;
  }
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-top: 2em;
  padding-right: 1em;
  margin-bottom: 1em;
`;

const ChartTypeControls = ({ setChartType, activeState, t }) => (
  <Content>
    <Button
      iconUrl="/img/home/icon_grafico_linea_table.svg"
      onClick={() => setChartType(DisplayTypes.CHART)}
      className={activeState.description === DisplayTypes.CHART.description ? 'active' : ''}
    >
      {t('chart')}
    </Button>
    <Button
      iconUrl="/img/home/icon_grafico_linea_table.svg"
      onClick={() => setChartType(DisplayTypes.TABLE)}
      className={activeState.description === DisplayTypes.TABLE.description ? 'active' : ''}
    >
      {t('table')}
    </Button>
  </Content>
);

ChartTypeControls.getInitialProps = ({ t }) => ({
  namespacesRequired: ['charts'],
  t,
});

export default withTranslation('charts')(ChartTypeControls);
