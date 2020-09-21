import React from 'react';
import styled from 'styled-components';
import {
  yellow,
  blue,
  blueRoll,
  orange2,
  orange,
  yellowRoll,
  green,
  greenRoll,
  gray1,
  blue4,
  blue42,
  brown,
  brown2,
  pink,
  pink2,
  blue52,
} from '../../styles/colors';
import arrow from '../../public/img/home/arrow-more-rollover.svg';
import { white } from '../../theme/colors';

const colors = {
  blue,
  green,
  yellow,
  light_blue: blue4,
  brown,
  orange,
  pink,
  white,
};
const colorActive = {
  blue: blueRoll,
  green: greenRoll,
  yellow: yellowRoll,
};

const ButtonContainerColors = {
  blue: blue52,
  green,
  yellow: yellowRoll,
  light_blue: blue42,
  brown: brown2,
  orange: orange2,
  pink: pink2,
};

export const ButtonNav = styled.button`
  outline: 0;
  border: 0;
  width: 100%;
  border-bottom: 10px solid
    ${(props) => (props.active && colorActive[props.color]
    ? colorActive[props.color]
    : colors[props.color])};
  text-transform: uppercase;
  padding: 10px 0;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
  transition: all ease-in 0.2s;
  background-color: ${(props) => (colors[props.color])};
  color: white;
  &:hover {
    background-color: ${(props) => (colorActive[props.color])};
    border-bottom: 10px solid
      ${(props) => (colors[props.color])};
  }
`;

export const ButtonNavIndicadores = styled.button`
  display: flex;
  align-items: center;
  outline: 0;
  border: 0;
  border-radius: 20px;
  text-align: left;
  text-transform: uppercase;
  padding: 5px 18px 5px 20px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: all ease-in 0.2s;
  background-color: ${(props) => (colors[props.color])};
  & > a{
    color: white;
    text-decoration: none;
  } 
  &:hover {
    background-color: ${blueRoll};
  }
  &:after {
    content: '';
    display: inline-block;
    -webkit-mask-image: url(${arrow});
    mask-image: url(${arrow});
    background-color: ${gray1};
    background-size: 15px 15px;
    background-repeat: no-repeat;
    width: 15px;
    height: 15px;
    margin-left: 10px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  outline: 0;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  text-align: left;
  padding: 0;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
  color: ${(props) => (props.outline ? colors[props.color] : white)};
  border: 1px solid ${(props) => (colors[props.color])};
  
  & div {
    transition: all ease-in 0.1s;
    border-bottom: 10px solid ${(props) => (props.outline ? white : colors[props.color])}};
  } 

  &:hover{
     color: ${(props) => (props.outline ? colors[props.color] : white)};
   div {
    border-bottom: 10px solid
      ${(props) => (ButtonContainerColors[props.color])};
  }}
`;
export const IconContainer = styled.div`
  background-color: ${(props) => (colors[props.color])};
  margin-right: 5px;
  padding: 25px 25px 10px 25px;
  & img {
    width: 31px;
    height: 31px;
  }
`;

export const TextContainer = styled.div`
  -webkit-line-clamp:2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
  background-color: ${(props) => (props.outline ? white : colors[props.color])};
  text-transform: ${(props) => (props.textTransform || 'initial')};
  font-family: 'Roboto Slab', sans-serif;
  font-size: 1.5em;
  padding: 10px 10px 5px 10px;
  width: 100%;
  display:flex;
  align-items:center;
  justify-content: center;
`;

export const Button = (props) => {
  const {
    children, onClick, color, textTransform, outline,
  } = props;

  return (
    <ButtonContainer {...props} as="button" outline={outline} color={color} onClick={onClick}>
      <TextContainer color={color} outline={outline} textTransform={textTransform}>{children}</TextContainer>
    </ButtonContainer>
  );
};
