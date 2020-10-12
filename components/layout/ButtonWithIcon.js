import React from 'react';
import Link from 'next/link';
import {
  ButtonContainer,
  IconContainer,
  TextContainer,
} from './Button';

const ButtonWithIcon = ({
  children, onClick, icon, color, country, topic,
}) => (
  <Link href={{ pathname: '/[id]/indicadores', query: { topic } }} as={`/${country.short_name}/indicadores?topic=${topic}`} replace>

    <ButtonContainer color={color} onClick={onClick}>
      <IconContainer color={color}>
        <img src={icon} alt="icon" />
      </IconContainer>
      <TextContainer color={color}>{children}</TextContainer>
    </ButtonContainer>
  </Link>

);

export default ButtonWithIcon;
