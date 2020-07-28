import { withTranslation } from '../../i18n';

const FilterResult = ({
  pec, level, topic, t,
}) => (
  <>
    <div className="col-lg-12 mb-1">
      {`${t('filter.searchResultsFor')}:`}
    </div>
    <div className="col-lg-12 mb-3">
      {`${t('filter.goalMeta')}: `}
      <strong>{pec}</strong>
      {`/ ${t('filter.topic')}: `}
      <strong>
        {level}
      </strong>
      {`/ ${t('filter.level')}: `}
      <strong>
        {topic}
      </strong>
    </div>
  </>
);

export default withTranslation('common')(FilterResult);
