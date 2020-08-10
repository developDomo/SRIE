import React from 'react';
import styled from 'styled-components';
import { withTranslation } from '../../i18n';

const Text = styled.p`
    font-family: 'Roboto Slab', sans-serif;
    font-weight: 500;
    font-size:1.25em;
`;
const WelcomeText = ({ t }) => (
  <Text className="text-center text-white pb-4">{`${t('selectTheCountryYouWantToConsult')}:`}</Text>
);

export default withTranslation('common')(WelcomeText);
