import React from 'react'
import styled from 'styled-components'
import { azul1, amarillo, verde, txt } from '../../styles/colors'

const TextContainer = styled.h3`
  font-family: ${(props) =>
    props.type === 'title'
      ? 'Roboto Slab'
      : props.type === 'subtitle'
      ? 'Raleway'
      : props.type === 'caption'
      ? 'Raleway'
      : 'sans-serif'};
  font-size: ${(props) =>
    props.type === 'title'
      ? '1.7em'
      : props.type === 'subtitle'
      ? '1.2em!important'
      : props.type === 'caption'
      ? '1.1em!important'
      : '1em'};
  font-weight: bold;
  font-size: 1.5em;

  text-transform: ${(props) =>
    props.type === 'title'
      ? 'uppercase'
      : props.type === 'subtitle'
      ? 'initial'
      : undefined};
  color: ${(props) =>
    props.color == 'azul'
      ? azul1
      : props.color == 'verde'
      ? verde
      : props.color == 'amarillo'
      ? amarillo
      : props.color == 'negro'
      ? txt
      : undefined};
`

const Title = ({ children, color, type }) => (
  <TextContainer color={color} type={type}>
    {children}
  </TextContainer>
)

export default Title
