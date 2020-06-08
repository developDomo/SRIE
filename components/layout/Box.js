import React from 'react';
import styled from 'styled-components';

import {
  gray1,
  blue,
  blue3,
  orange2,
  orange,
  yellowRoll,
  green,
  blue4,
  blue42,
  brown2,
  pink2,
  txt,
} from '../../styles/colors';

const Title = styled.h3`
  width: 100%;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 15px;
  color: ${txt};
`;
const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  background-color: ${gray1};
  padding: 30px 20px;
  width: 100%;
  height: 230px;
`;
const ContainerEducationStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  flex-basis: auto;
  background-color: ${(props) => (props.color === 'azul'
    ? '#cce3f2'
    : props.color === 'verde'
      ? ' #caf0b0'
      : props.color === 'amarillo'
        ? yellowRoll
        : props.color === 'celeste'
          ? blue42
          : props.color === 'cafe'
            ? brown2
            : props.color === 'naranja'
              ? orange2
              : props.color === 'rosa'
                ? '#fdcccc'
                : 'black')};
  padding: 0;
  width: 100%;
  min-height: 120px;

  & ${Title} {
    padding: 10px 1px;
    margin-bottom: 0;
    text-transform: uppercase;
    text-align: center;
    color: ${txt};
    font-weight: 500;
    font-size: 1.1em;
  }
`;
const ContainerIndicadorStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  background-color: ${gray1};
  padding: 10px 11px;
  width: 100%;
  height: 230px;
`;
const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
`;
const Icon = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${(props) => (props.color === 'azul'
    ? blue
    : props.color === 'verde'
      ? green
      : props.color === 'amarillo'
        ? yellowRoll
        : props.color === 'celeste'
          ? blue42
          : props.color === 'cafe'
            ? brown2
            : props.color === 'naranja'
              ? orange2
              : props.color === 'rosa'
                ? pink2
                : 'black')};
  -webkit-mask-image: url(${(props) => props.icon});
  mask-image: url(${(props) => props.icon});
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-position: center;
`;
const IconImgStyled = styled.img`
  width:${(props) => (props.width ? props.width : '80px')};
  height: ${(props) => (props.height ? props.height : '80px')};
`;


const ColorSubtitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: ${(props) => (props.font_size ? props.font_size : '1.8em')};
  margin: 0;
  margin-bottom: ${(props) => (props.mb ? props.mb : '0')};
  width: 100%;
  color: ${(props) => (props.color === 'azul'
    ? blue3
    : props.color === 'verde'
      ? green
      : props.color === 'amarillo'
        ? yellowRoll
        : props.color === 'celeste'
          ? blue4
          : props.color === 'cafe'
            ? brown2
            : props.color === 'naranja'
              ? orange
              : props.color === 'rosa'
                ? pink2
                : 'black')};
`;
const IndicadorContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: white;
  font-size: 1em;
  text-align: center;
  padding: ${(props) => (props.padding ? props.padding : '40px 8px')};
  width: 24%;
  height:${(props) => (props.height ? props.height : '70px')};
  box-sizing: content-box;
  margin-left: ${(props) => (props.ml ? props.ml : '0')};
  margin-right: ${(props) => (props.mr ? props.mr : '10px')}; 
  background-color: ${(props) => (props.color === 'azul'
    ? blue
    : props.color === 'verde'
      ? green
      : props.color === 'amarillo'
        ? yellowRoll
        : props.color === 'celeste'
          ? blue4
          : props.color === 'cafe'
            ? brown2
            : props.color === 'naranja'
              ? orange
              : props.color === 'rosa'
                ? pink2
                : 'black')};
  & h3 {
    padding-bottom: ${(props) => (props.pbh3 ? props.pbh3 : '30px')};
    border-bottom: 2px solid white;
    margin: 0;
    font-size: 1.2em;
    font-weight: bold;
  }
  & p {
    margin: 0;
    margin-top: 10px;
    font-weight: 400;
    font-size: 0.8em;
  }
  &:nth-child(4) {
    margin-right: 0;
  }
`;
const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: ${(props) => props.width};
  padding: 1px 1px;
  min-height: 120px;
  background-color: ${(props) => props.color};
  & h3 {
    margin: 0;
    color: white;
    width: 100%;
    font-size: 0.9em;
    padding: 0 10px;
  }
  & p {
    margin: 0;
    color: white;
    font-weight: 400;
  }
`;
export const Box = ({
  icon, iconImg, title, subtitle, color,
}) => (
  <ContainerStyled>
    <IconContainer>
      {iconImg ? (
        <IconImgStyled src={iconImg} alt="icon" />
      ) : (
        <Icon icon={icon} color={color} />
      )}
    </IconContainer>
    <TextContainer>
      <Title>{title}</Title>
      <ColorSubtitle color={color}>{subtitle}</ColorSubtitle>
    </TextContainer>
  </ContainerStyled>
);

export const Box2 = ({
  icon, iconImg, title, gratuita, obligatoria, color,
}) => (
  <ContainerIndicadorStyled>
    <IconContainer>
      {iconImg ? (
        <IconImgStyled src={iconImg} alt="icon" height="50px" width="50px" />
      ) : (
        <Icon icon={icon} color={color} />
      )}
    </IconContainer>
    <Title className="m-0 mb-1">
      {title}
    </Title>

    {gratuita ? (
      <IndicadorContainer color="amarillo" height="82" padding="6px 6px" pbh3="5px">
        <h3>{gratuita}</h3>
        <p>Educación gratuita</p>
      </IndicadorContainer>
    ) : undefined}

    <IndicadorContainer color="verde" height="82" padding="6px 6px" ml="10px" mr="0" pbh3="5px">
      <h3>{obligatoria}</h3>
      <p>Educación obligatoria</p>
    </IndicadorContainer>

  </ContainerIndicadorStyled>
);
export const BoxIndicador = ({
  title, prescolar, primaria, secundaria,
}) => (
  <ContainerIndicadorStyled>
    <Title>{title}</Title>
    {prescolar ? (
      <IndicadorContainer color="amarillo">
        <h3>{prescolar}</h3>
        <p>Preescolar</p>
      </IndicadorContainer>
    ) : undefined}

    <IndicadorContainer color="verde">
      <h3>{primaria}</h3>
      <p>Primaria</p>
    </IndicadorContainer>
    <IndicadorContainer color="azul">
      <h3>{secundaria}</h3>
      <p>Secundaria</p>
    </IndicadorContainer>
  </ContainerIndicadorStyled>
);

export const BoxPreescolar = ({
  title,
}) => (
  <ContainerEducationStyled color="rosa">
    <Title>{title}</Title>
    <SectionContainer color="#fc9999" width="33.2%">
      <h3>Grupo interactivo</h3>
      <p>1</p>
    </SectionContainer>
    <SectionContainer color="#fb8080" width="33%">
      <h3>Grupo interactivo</h3>
      <p>2</p>
    </SectionContainer>
    <SectionContainer color="#bc6060" width="33.1%">
      <p> Transicion</p>
    </SectionContainer>
  </ContainerEducationStyled>
);
export const BoxPrimaria = ({
  title, prescolar, primaria, secundaria,
}) => (
  <ContainerEducationStyled color="verde">
    <Title>{title}</Title>
    <SectionContainer color="#afd188" width="16%">
      <p>1º</p>
    </SectionContainer>
    <SectionContainer color="#95c161" width="17%">
      <p>2º</p>
    </SectionContainer>
    <SectionContainer color="#7ab239" width="17%">
      <p>3º</p>
    </SectionContainer>
    <SectionContainer color="#5c852b" width="17%">
      <p>4º</p>
    </SectionContainer>
    <SectionContainer color="#3d591d" width="17%">
      <p>5º</p>
    </SectionContainer>
    <SectionContainer color="#324914" width="16%">
      <p>6º</p>
    </SectionContainer>
  </ContainerEducationStyled>
);
export const BoxSecundaria = ({
  title,
}) => (
  <ContainerEducationStyled color="azul">
    <Title>{title}</Title>
    <SectionContainer color="#66aad7" width="16%">
      <p>7º</p>
    </SectionContainer>
    <SectionContainer color="#338dc9" width="16%">
      <p>8º</p>
    </SectionContainer>
    <SectionContainer color="#0071bc" width="17%">
      <p>9º</p>
    </SectionContainer>
    <SectionContainer color="#00558d" width="17%">
      <p>10º</p>
    </SectionContainer>
    <SectionContainer color="#00395e" width="17%">
      <p>11º</p>
    </SectionContainer>
    <SectionContainer color="#032d44" width="17%">
      <p>12º</p>
    </SectionContainer>
  </ContainerEducationStyled>
);
