import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  blue1, yellow, green, txt,
} from '../../styles/colors';

const colors = {
  green,
  blue: blue1,
  yellow,
  black: txt,
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
<<<<<<< HEAD
  color: ${(props) => (props.color === 'azul'
    ? blue1
    : props.color === 'verde'
      ? green
      : props.color === 'amarillo'
        ? yellow
        : props.color === 'negro'
          ? txt
          : undefined)};
  ${(props) => (props.textCenter
    ? 'text-align: center;'
    : ''
  )};
=======
  color: ${(props) => (colors[props.color])};
>>>>>>> develop
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
