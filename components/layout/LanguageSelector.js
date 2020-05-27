import PropTypes from 'prop-types';
import { i18n, withTranslation } from '../../i18n';

const LanguageSelector = ({ t }) => (
  <div className="laguage-selector">
    <button type="button" onClick={() => i18n.changeLanguage('en')}>
      {t('language.english')}
    </button>
    <button type="button" onClick={() => i18n.changeLanguage('es')}>
      {t('language.spanish')}
    </button>
  </div>
);

LanguageSelector.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(LanguageSelector);
