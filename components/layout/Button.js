import styled from 'styled-components'
import {
  amarillo,
  azul,
  azull_roll,
  naranja_2,
  naranja,
  amarillo_roll,
  verde,
  verde_roll,
  gris1,
  azul4,
  azul4_2,
  cafe,
  cafe_2,
  rosa,
  rosa_2,
  azul5_2,
} from '../../styles/colors'
import arrow from '../../public/img/home/arrow-more-rollover.svg'
//TODO: importar libreria de colores

export const ButtonNav = styled.button`
  outline: 0;
  border: 0;
  width: 100%;
  border-bottom: 10px solid
    ${(props) =>
      props.active && props.azul
        ? azull_roll
        : props.active && props.verde
        ? verde_roll
        : props.active && props.amarillo
        ? amarillo_roll
        : props.azul
        ? azul
        : props.verde
        ? verde
        : props.amarillo
        ? amarillo
        : undefined};
  text-transform: uppercase;
  padding: 10px 0;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
  transition: all ease-in 0.2s;
  background-color: ${(props) =>
    props.azul
      ? azul
      : props.verde
      ? verde
      : props.amarillo
      ? amarillo
      : props.celeste
      ? azul4
      : undefined};
  color: white;
  &:hover {
    background-color: ${(props) =>
      props.azul
        ? azull_roll
        : props.verde
        ? verde_roll
        : props.amarillo
        ? amarillo_roll
        : undefined};
    border-bottom: 10px solid
      ${(props) =>
        props.azul
          ? azul
          : props.verde
          ? verde
          : props.amarillo
          ? amarillo
          : undefined};
  }
`
export const ButtonNavWithIcon = styled.button`
  outline: 0;
  border: 0;
  border-bottom: 10px solid
    ${(props) =>
      props.azul
        ? azull_roll
        : props.verde
        ? verde_roll
        : props.amarillo
        ? amarillo_roll
        : undefined};
  text-transform: uppercase;
  padding: 16px 48px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: all ease-in 0.2s;
  background-color: ${(props) =>
    props.azul
      ? azul
      : props.verde
      ? verde
      : props.amarillo
      ? amarillo
      : undefined};
  color: white;
  &:hover {
    background-color: ${(props) =>
      props.azul
        ? azull_rolls
        : props.verde
        ? verde_roll
        : props.amarillo
        ? amarillo_roll
        : undefined};
    border-bottom: 10px solid ${azul};
  }
  &:before {
    content: '';

    display: inline-block;
    -webkit-mask-image: url(${arrow});
    mask-image: url(${arrow});
    background-color: ${gris1};
    background-size: 15px 15px;
    background-repeat: no-repeat;
    width: 15px;
    height: 15px;
    margin-left: 10px;
  }
`

export const ButtonNavIndicadores = styled.button`
  display: flex;
  align-items: center;
  outline: 0;
  border: 0;
  border-radius: 20px;
  text-align: left;
  text-transform: uppercase;
  padding: 5px 18px 5px 20px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: all ease-in 0.2s;
  background-color: ${(props) =>
    props.azul
      ? azul
      : props.verde
      ? verde
      : props.amarillo
      ? amarillo
      : undefined};
  color: white;
  &:hover {
    background-color: ${azull_roll};
  }
  &:after {
    content: '';
    display: inline-block;
    -webkit-mask-image: url(${arrow});
    mask-image: url(${arrow});
    background-color: ${gris1};
    background-size: 15px 15px;
    background-repeat: no-repeat;
    width: 15px;
    height: 15px;
    margin-left: 10px;
  }
`
export const ButtonContainer = styled.button`
  display: flex;
  outline: 0;
  border: 0;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  text-align: left;

  font-size: 14px;
  cursor: pointer;
  transition: all ease-in 0.9s;
  width: 100%;
  color: white;
  & div {
    border-bottom: 10px solid white;
  }

  &:hover div {
    border-bottom: 10px solid
      ${(props) =>
        props.color === 'azul'
          ? azul5_2
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
          : undefined};
  }
`
export const IconContainer = styled.div`
  background-color: ${(props) =>
    props.color === 'azul'
      ? azul
      : props.color === 'verde'
      ? verde
      : props.color === 'amarillo'
      ? amarillo
      : props.color === 'celeste'
      ? azul4
      : props.color === 'cafe'
      ? cafe
      : props.color === 'naranja'
      ? naranja
      : props.color === 'rosa'
      ? rosa
      : undefined};
  margin-right: 5px;
  padding: 20px 20px;
  & img {
    width: 31px;
    height: 31px;
  }
`
export const TextContainer = styled.div`
  background-color: ${(props) =>
    props.color === 'azul'
      ? azul
      : props.color === 'verde'
      ? verde
      : props.color === 'amarillo'
      ? amarillo
      : props.color === 'celeste'
      ? azul4
      : props.color === 'cafe'
      ? cafe
      : props.color === 'naranja'
      ? naranja
      : props.color === 'rosa'
      ? rosa
      : undefined};
  text-transform: capitalize;
  font-size: 1.2em;
  padding: 23px 15px;
  width: 100%;
`
