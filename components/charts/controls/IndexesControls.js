import { Dropdown } from 'react-bootstrap';
import styled from 'styled-components';
import { hasSomeData } from '../helpers/ChartDataHelper';
import { withTranslation } from '../../../i18n';

const Content = styled.div`
  padding: 1.2em;
  margin-left: auto;
  & .indicator-indexes-dropdown {
    width: 350px;
    border-radius: 0;
    text-align: left;
    background-color: #3784c4 !important;
    border-color: transparent;
  }
  & .dropdown-toggle::after{
    float: right;
    margin-top: .6em;
  }

`;
const IndexesControls = ({ setIndexes, indexesData, t }) => (
  <Content>
    <Dropdown onSelect={(e) => setIndexes(e)}>
      <Dropdown.Toggle id="dropdown-basic" className="indicator-indexes-dropdown dropdown-toggle">
        {t('indexes')}
      </Dropdown.Toggle>
      <Dropdown.Menu className="indicator-dropdown-menu">
        {Object.keys(indexesData)?.map((index) => (
          <Dropdown.Item
            className="indicator-dropdown-item"
            eventKey={index}
            disabled={hasSomeData(indexesData[index].historical) && hasSomeData(indexesData[index].latest)}
          >
            {t(`indexesLabel.${index}`)}
          </Dropdown.Item>
        )
        )}
      </Dropdown.Menu>
    </Dropdown>
  </Content>
);

IndexesControls.getInitialProps = ({ setIndexes, indexesData, t }) => (
  {
    setIndexes,
    indexesData,
    namespacesRequired: ['charts'],
    t,
  }
);

export default withTranslation('charts')(IndexesControls);
