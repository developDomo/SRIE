import React from 'react'
import { Row, Col, Container, Image, CardImg } from 'react-bootstrap'
import styled from 'styled-components'

import {
  gris1,
  amarillo,
  azul,
  azull_roll,
  naranja_2,
  naranja,
  amarillo_roll,
  verde,
  verde_roll,
  azul4,
  azul4_2,
  cafe,
  cafe_2,
  rosa,
  rosa_2,
  azul5_2,
} from '../../theme/colors'
import BannerIcon from '../../public/img/home/icon_cumplimiento_metas.svg'
import arrow from '../../public/img/home/arrow-more-rollover.svg'

const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  background-color: ${gris1};
  padding: 30px 20px;
  width: 300px;
  min-height: 120px;
`
const ContainerIndicadorStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  background-color: ${gris1};
  padding: 10px 20px;
  width: 300px;
  min-height: 120px;
`
const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
const Icon = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${(props) =>
    props.color === 'azul'
      ? azul
      : props.color === 'verde'
      ? verde
      : props.color === 'amarillo'
      ? amarillo_roll
      : props.color === 'celeste'
      ? azul4_2
      : props.color === 'cafe'
      ? cafe_2
      : props.color === 'naranja'
      ? naranja_2
      : props.color === 'rosa'
      ? rosa_2
      : 'black'};
  -webkit-mask-image: url(${(props) => props.icon});
  mask-image: url(${(props) => props.icon});
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-position: center;
`
const IconImgStyled = styled.img`
  width: 80px;
  height: 80px;
`

const Title = styled.h3`
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 5px;
`
const ColorSubtitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 1.8em;
  margin: 0;
  width: 100%;
  color: ${(props) =>
    props.color === 'azul'
      ? azul
      : props.color === 'verde'
      ? verde
      : props.color === 'amarillo'
      ? amarillo_roll
      : props.color === 'celeste'
      ? azul4
      : props.color === 'cafe'
      ? cafe_2
      : props.color === 'naranja'
      ? naranja
      : props.color === 'rosa'
      ? rosa_2
      : 'black'};
`
const IndicadorContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: white;
  font-size: 1em;
  text-align: center;
  padding: 40px 8px;
  width: 25%;
  margin-right: 10px;
  background-color: ${(props) =>
    props.color === 'azul'
      ? azul
      : props.color === 'verde'
      ? verde
      : props.color === 'amarillo'
      ? amarillo_roll
      : props.color === 'celeste'
      ? azul4
      : props.color === 'cafe'
      ? cafe_2
      : props.color === 'naranja'
      ? naranja
      : props.color === 'rosa'
      ? rosa_2
      : 'black'};
  & h3 {
    padding-bottom: 30px;
    border-bottom: 2px solid white;
    margin: 0;
  }
  & p {
    margin: 0;
    font-weight: 400;
  }
  &:nth-child(4) {
    margin-right: 0;
  }
`
export const Box = ({ icon, iconImg, title, subtitle, color }) => (
  <ContainerStyled>
    <IconContainer>
      {iconImg ? (
        <IconImgStyled src={iconImg} />
      ) : (
        <Icon icon={icon} color={color} />
      )}
    </IconContainer>
    <TextContainer>
      <Title>{title}</Title>
      <ColorSubtitle color={color}>{subtitle}</ColorSubtitle>
    </TextContainer>
  </ContainerStyled>
)
export const BoxIndicador = ({ title, prescolar, primaria, secundaria }) => (
  <ContainerIndicadorStyled>
    <TextContainer>
      <Title>{title}</Title>
      <IndicadorContainer color='amarillo'>
        <h3>{prescolar}</h3>
        <p>Preescolar</p>
      </IndicadorContainer>
      <IndicadorContainer color='verde'>
        <h3>{primaria}</h3>
        <p>Primaria</p>
      </IndicadorContainer>
      <IndicadorContainer color='azul'>
        <h3>{secundaria}</h3>
        <p>Secundaria</p>
      </IndicadorContainer>
    </TextContainer>
  </ContainerIndicadorStyled>
)
