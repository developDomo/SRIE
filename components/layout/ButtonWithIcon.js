import React from 'react';
import {
  ButtonContainer,
  IconContainer,
  TextContainer,
} from './Button';

const ButtonWithIcon = ({
  children, onClick, icon, color,
}) => (
  <ButtonContainer color={color} onClick={onClick}>
    <IconContainer color={color}>
      <img src={icon} alt="icon" />
    </IconContainer>
    <TextContainer color={color}>{children}</TextContainer>
  </ButtonContainer>
);

export default ButtonWithIcon;
