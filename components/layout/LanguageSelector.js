import PropTypes from 'prop-types';
import styled from 'styled-components';
import { i18n, withTranslation } from '../../i18n';

import { theme } from '../../styles/theme';

const Button = styled.button`
  &:hover {
    background-color: #E59E2C;
  }
  height: 2em;
  width: 100%;
  border-radius: 50%;
  color: white;
  border: none;
  font-size: 0.93em;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  ${(props) => (props.active ? `background-color: ${theme.navbar.langColorBtnActive};` : `background-color: ${theme.navbar.langColorBtn};`)}
`;

const Container = styled.div`
  display:flex;
  margin: 0.8em;
`;

const LanguageSelector = ({ t, path }) => {
  const Span = styled.span`
  display:flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-weight: bold;
  color: ${path === '/' ? `${theme.navbar.primaryFontColor}` : `${theme.navbar.secondaryFontColor}`};
  `;
  const selectectedLanguage = i18n.language;
  return (
    <Container>
      <Span>
        {t('lanLabel')}
      </Span>
      <Span>
        <Button active={selectectedLanguage === 'en' ? 'active' : ''} type="button" onClick={() => i18n.changeLanguage('en')}>
          {t('language.english')}
        </Button>
      </Span>
      <Span>
        <Button active={selectectedLanguage === 'es' ? 'active' : ''} type="button" onClick={() => i18n.changeLanguage('es')}>
          {t('language.spanish')}
        </Button>
      </Span>
    </Container>
  );
};

LanguageSelector.propTypes = {
  t: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

export default withTranslation('common')(LanguageSelector);
