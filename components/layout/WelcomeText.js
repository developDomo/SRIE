import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size:1.25em;
`;
const WelcomeText = () => (
  <Text className="text-center text-white pb-4">Seleccione el país que desea consultar:</Text>
);

export default WelcomeText;
