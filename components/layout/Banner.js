import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import { verde } from '../../theme/colors'
import BannerIcon from '../../public/img/home/icon_cumplimiento_metas.svg'

const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${verde};
  color: white;
  height: 200px;
  padding: 25px 60px;
  & h3 {
    font-size: 1.4em;
  }
`
const TextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  & h3 {
    margin: 0;
    font-weight: 400;

    & span {
      font-weight: bold;
      display: block;
    }
  }
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  border-right: 3px solid white;
  padding-right: 20px;
  & img {
    width: 150px;
  }
`
export default class Banner extends React.Component {
  render() {
    return (
      <ContainerStyled>
        <TextContainer>
          <h3>
            Conozca el avance en el{' '}
            <span>
              Cumplimiento de Metas Política Educativa Centroamericana
            </span>
          </h3>
        </TextContainer>

        <IconContainer>
          <img src={BannerIcon} alt='icon' />
        </IconContainer>
      </ContainerStyled>
    )
  }
}