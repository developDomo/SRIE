import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { greenRoll, gray1 } from '../../styles/colors';
import BannerIcon from '../../public/img/home/icon_cumplimiento_metas.svg';
import ArrowIcon from '../../public/img/home/arrow_indicadores.svg';

const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${greenRoll};
  color: white;
  height: 200px;
  padding: 25px 0;
  & h3 {
    font-size: 1.4em;
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
export default class extends React.Component {
  render() {
    return (
      <Container>
        <ContainerStyled>
          <TextContainer>
            <h3>
              Conozca el avance en el
              <span>
                Cumplimiento de Metas Política Educativa Centroamericana
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
  }
}
