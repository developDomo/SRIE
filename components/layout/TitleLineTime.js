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
const LineContainer = styled.div`
  font-weight: 400;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  box-sizing: content-box;
  margin-top: 5px;
  margin-bottom: 5px;
`
const Line = styled.div`
  padding: 3px 1px;
  height: 2px;
  background-color: ${(props) => props.color};
  width: ${(props) => props.width};
  margin-right: 5px;
  box-sizing: content-box;
`
const LineColumn = styled.div``
export const TitleLineTime = ({ title, prescolar, primaria, secundaria }) => (
  <LineContainer>
    <Line color='#fb8080' width='21.5%'>
      Materno infantil
    </Line>

    <Line color='#bc6060' width='10.6%'></Line>
    <Line color='#7ab239' width='50%'></Line>
    <Line color='#0071bc' width='15.1%'></Line>
  </LineContainer>
)
