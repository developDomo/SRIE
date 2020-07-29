import { Dropdown, DropdownButton } from 'react-bootstrap';
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
        Indices
      </Dropdown.Toggle>
      <Dropdown.Menu className="indicator-dropdown-menu">
        {Object.keys(indexesData)?.map((indexe) => (
          <Dropdown.Item
            className="indicator-dropdown-item"
            eventKey={indexe}
            disabled={hasSomeData(indexesData[indexe])}
          >
            {t(indexe)}
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
