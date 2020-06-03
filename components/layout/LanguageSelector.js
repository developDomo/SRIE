import PropTypes from 'prop-types';
import styled from 'styled-components';
import { i18n, withTranslation } from '../../i18n';

const Button = styled.button`
  &:hover {
    background-color: orange;
  }
  border-radius: 50%;
  color: white;
  background-color: blue;
  border: none;
`;

const Span = styled.span`
  padding: 2px;
  color: white;
`;

const Container = styled.div`
  margin: 1em;
`;

const LanguageSelector = ({ t }) => (
  <Container>
    <Span>
      {t('lanLabel')}
    </Span>
    <Span>
      <Button type="button" onClick={() => i18n.changeLanguage('en')}>
        {t('language.english')}
      </Button>
    </Span>
    <Span>
      <Button type="button" onClick={() => i18n.changeLanguage('es')}>
        {t('language.spanish')}
      </Button>
    </Span>
  </Container>
);

LanguageSelector.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(LanguageSelector);
