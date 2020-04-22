import React from 'react'
import styled from 'styled-components'
import { azul1 } from '../../theme/colors'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`

const IconContainer = styled.div`
  width: 15%;
  margin-right: 5px;
  & img {
    width: 50px;
    height: 30px;
  }
`
const TextContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 2.5em;
  color: ${azul1};
`
const FlagNameComponent = ({ children, icon }) => (
  <Container>
    <IconContainer>
      <img src={icon} alt='icon' />
    </IconContainer>
    <TextContainer>{children}</TextContainer>
  </Container>
)

export default FlagNameComponent
