import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  blue1, yellow, green, txt, blueTitle, bordes,
} from '../../styles/colors';

const colors = {
  green,
  blue: blue1,
  blueTitle,
  yellow,
  black: txt,
  bordes,
};

const TextContainer = styled.h3`
  font-family: ${(props) => (props.type === 'title'
    ? 'Roboto Slab'
    : props.type === 'subtitle'
      ? 'Raleway'
      : props.type === 'caption'
        ? 'Raleway'
        : 'sans-serif')};
  font-size: ${(props) => (props.type === 'title'
    ? '1.7em'
    : props.type === 'subtitle'
      ? '1.2em!important'
      : props.type === 'caption'
        ? '1.1em!important'
        : '1em')};
  font-weight: bold;
  font-size: 1.5em;

  text-transform: ${(props) => (props.type === 'title'
    ? 'uppercase'
    : props.type === 'subtitle'
      ? 'initial'
      : undefined)};
  color: ${(props) => (colors[props.color])};
  ${(props) => (props.textCenter ? 'text-align: center;' : '')}
`;

const Title = ({
  children, color, type, textCenter,
}) => (
  <TextContainer color={color} type={type} textCenter={textCenter}>
    {children}
  </TextContainer>
);

Title.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Title;
