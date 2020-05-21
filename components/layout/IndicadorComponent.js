import React from 'react'
import styled from 'styled-components'
import {
  gris1,
  txt,
  verde1,
  azul,
  rojo,
  bordes,
  bck_banderas,
} from '../../styles/colors'
import arrow from '../../public/img/home/arrow_indicadores.svg'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 130px;
  background-color: ${gris1};
`
const Title = styled.h3`
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  font-size: 1.1em;
  color: ${txt};
`
export const Tag = styled.h4`
  background-color: ${verde1};
  font-family: 'Raleway', sans-serif;
  padding: 5px;
  color: white;
  font-size: 0.9em;
  text-align: center;
  width: 100px;
  margin-top: 15px;
`
const Pec = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid ${txt};
  font-family: 'Roboto Slab', sans-serif;
  font-size: 1.6em;
  font-weight: 400;
  height: 100px;
  width: 20%;
  color: ${azul};
`
const Ods = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid ${txt};
  border-right: 1px solid ${txt};
  font-family: 'Roboto Slab', sans-serif;
  font-size: 1.6em;
  font-weight: 400;
  width: 16.5%;
  height: 100px;
  color: ${rojo};
`
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;

  & div {
    display: flex;
    justify-content: center;
    -webkit-mask-image: url(${arrow});
    mask-image: url(${arrow});
    background-color: ${bordes};
    background-size: 20px;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    mask-position: center;
    width: 15px;
    height: 15px;
  }

  & img  {
    width: 15px;
  }

  &:hover {
    background-color: ${azul};
    & > div {
      background-color: ${bck_banderas};
    }
  }
`

const IndicadorComponent = ({ children, icon }) => (
  <Container className='d-flex  justify-content-between p-0'>
    <div className='col-lg-7 m-0 py-0 pl-4 pr-2'>
      <Title>
        Tasa de participación en la enseñanza organizada un año antes de la edad
        oficial de ingreso en la educación primaria, desglosada por sexo
      </Title>
      <Tag>Participación</Tag>
    </div>

    <Pec>2.2/3.1</Pec>

    <Ods>4.2</Ods>

    <IconContainer className=' '>
      <div></div>
    </IconContainer>
  </Container>
)

export default IndicadorComponent
