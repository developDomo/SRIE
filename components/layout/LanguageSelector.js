import PropTypes from 'prop-types';
import styled from 'styled-components';
import { i18n, withTranslation } from '../../i18n';

const Button = styled.button`
  &:hover {
    background-color: #E59E2C;
  }
  height: 2em;
  width: 2em;
  border-radius: 50%;
  color: white;
  background-color: #0865BA;
  border: none;
  font-size: 0.93em;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
`;

const Span = styled.span`
  padding: 2px;
  color: white;
`;

const Container = styled.div`
  margin: 0.8em;
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
