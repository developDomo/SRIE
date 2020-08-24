import { Dropdown } from 'react-bootstrap';
import styled from 'styled-components';
import { hasSomeData } from '../helpers/ChartDataHelper';
import { withTranslation } from '../../../i18n';

const Content = styled.div`
  padding: 1.2em;
  margin-left: auto;
`;
const IndexesControls = ({ setIndexes, indexesData, t }) => (
  <Content>
    <Dropdown onSelect={(e) => setIndexes(e)}>
      <Dropdown.Toggle id="dropdown-basic" className="indicator-indexes-dropdown">
        {t('indexes')}
      </Dropdown.Toggle>
      <Dropdown.Menu className="indicator-dropdown-menu">
        {Object.keys(indexesData)?.map((index) => (
          <Dropdown.Item
            className="indicator-dropdown-item"
            eventKey={index}
            disabled={hasSomeData(indexesData[index])}
          >
            {t(index)}
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
  }
);

export default withTranslation('charts')(IndexesControls);
