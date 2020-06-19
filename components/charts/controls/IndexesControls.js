import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useState } from 'react';
import { IndexeType } from '../types/ChartTypes';
import { hasSomeData } from '../helpers/ChartDataHelper';
import { withTranslation } from '../../../i18n';

const IndexesControls = ({ setIndexes, indexesData, t }) => (
  <>
    <Dropdown onSelect={(e) => setIndexes(e)}>
      <Dropdown.Toggle id="dropdown-basic">
        Indices
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {Object.keys(indexesData)?.map((indexe) => <Dropdown.Item eventKey={indexe} disabled={hasSomeData(indexesData[indexe])}>{t(indexe)}</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  </>
);


IndexesControls.getInitialProps = ({ setIndexes, indexesData, t }) => (
  {
    setIndexes,
    indexesData,
    namespacesRequired: ['charts'],
  }
);

export default withTranslation('charts')(IndexesControls);
