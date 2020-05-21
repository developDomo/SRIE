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
} from '../../styles/colors'
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
const LineTitle = styled.div`
  padding: 3px 1px;
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  margin-right: 5px;
  box-sizing: content-box;
  text-align: center;
  font-size: 0.9em;
`

export const LineTime = ({ timeLineEducationProps }) => (
  <LineContainer>
    {timeLineEducationProps.map((item, index) => (
      <Line color={item.color} width={item.width} key={`line-${index}`}></Line>
    ))}
  </LineContainer>
)

export const TitleLineTime = ({ timeLineEducationProps }) => (
  <LineContainer>
    {timeLineEducationProps.map((item, index) => (
      <LineTitle
        color={item.color}
        width={item.width}
        key={`LineTitle-${index}`}
      >
        {item.title}
      </LineTitle>
    ))}
  </LineContainer>
)
