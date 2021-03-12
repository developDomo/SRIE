import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {
  ButtonContainer,
} from './Button';
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
import { white } from '../../theme/colors';
import arrow from '../../public/img/home/arrow_cumplimiento_metas.svg';

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

const TextContainer = styled.div`
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
  justify-content: left;
`;

const IconContainer = styled.div`
  background-color: ${(props) => (colors[props.color])};
  margin-right: 5px;
  & img {
    width: 31px;
    height: 31px;
    margin-top: 10px;
    margin-right: 12px;
  }
`;

const IconContainerArrow = styled.div`
  background-color: ${(props) => (colors[props.color])};
  & img {
    width: 31px;
    height: 31px;
    margin-top: 10px;
    margin-right: 12px;
  }
`;

const ButtonInformation = ({
  children, onClick, icon, color, path,
}) => (
  <Link href={{ pathname: path }} target="_blank" rel="noreferrer">
    <ButtonContainer color={color} onClick={onClick}>
      <IconContainer color={color}>
        <img src={icon} alt="icon" />
      </IconContainer>
      <TextContainer color={color}>{children}</TextContainer>
      <IconContainerArrow color={color}>
        <img src={arrow} alt="icon" />
      </IconContainerArrow>
    </ButtonContainer>
  </Link>

);

export default ButtonInformation;
