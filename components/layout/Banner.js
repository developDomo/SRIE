import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

import { greenRoll, gray1 } from '../../styles/colors';
import BannerIcon from '../../public/img/home/icon_cumplimiento_metas.svg';
import ArrowIcon from '../../public/img/home/arrow_indicadores.svg';

const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all ease-in 0.2s; 
  height: 200px;
  padding: 25px 0;
  & h3 {
    font-size: 1.4em;
  }
  &:hover{
    background-color: ${greenRoll};
  }
`;
const TextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  & h3 {
    margin: 0;
    font-weight: 400;

    & span {
      font-family: 'Roboto Slab', serif;
      font-weight: bold;
      display: block;
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  border-right: 3px solid white;
  padding-right: 20px;
  & img {
    width: 150px;
  }
`;
const Arrow = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 100%;
  &:after {
    content: '';
    display: block;
    -webkit-mask-image: url(${ArrowIcon});
    mask-image: url(${ArrowIcon});
    background-color: ${gray1};
    background-size: 20px;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    mask-position: center;
    width: 15px;
    height: 15px;
    margin-left: 10px;
  }
`;

const Banner = ({ text1, text2 }) => (
  <Container>
    <ContainerStyled>
      <TextContainer>
        <h3>
          {text1}
          <span>
            {text2}
          </span>
        </h3>
      </TextContainer>

      <IconContainer>
        <img src={BannerIcon} alt="icon" />
      </IconContainer>
      <Arrow />
    </ContainerStyled>
  </Container>
);

export default Banner;
