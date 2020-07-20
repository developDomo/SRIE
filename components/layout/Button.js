import styled from 'styled-components';
import {
  yellow,
  blue,
  blueRoll,
  orange2,
  orange,
  yellowRoll,
  green,
  greenRoll,
  gray1,
  blue4,
  blue42,
  brown,
  brown2,
  pink,
  pink2,
  blue52,
} from '../../styles/colors';
import arrow from '../../public/img/home/arrow-more-rollover.svg';
// TODO: importar libreria de colores

export const ButtonNav = styled.button`
  outline: 0;
  border: 0;
  width: 100%;
  border-bottom: 10px solid
    ${(props) => (props.active && props.azul
    ? blueRoll
    : props.active && props.verde
      ? greenRoll
      : props.active && props.amarillo
        ? yellowRoll
        : props.azul
          ? blue
          : props.verde
            ? green
            : props.amarillo
              ? yellow
              : undefined)};
  text-transform: uppercase;
  padding: 10px 0;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
  transition: all ease-in 0.2s;
  background-color: ${(props) => (props.azul
    ? blue
    : props.verde
      ? green
      : props.amarillo
        ? yellow
        : props.celeste
          ? blue4
          : undefined)};
  color: white;
  &:hover {
    background-color: ${(props) => (props.azul
    ? blueRoll
    : props.verde
      ? greenRoll
      : props.amarillo
        ? yellowRoll
        : undefined)};
    border-bottom: 10px solid
      ${(props) => (props.azul
    ? blue
    : props.verde
      ? green
      : props.amarillo
        ? yellow
        : undefined)};
  }
`;
export const ButtonNavWithIcon = styled.button`
  outline: 0;
  border: 0;
  border-bottom: 10px solid
    ${(props) => (props.azul
    ? blueRoll
    : props.verde
      ? greenRoll
      : props.amarillo
        ? yellowRoll
        : undefined)};
  text-transform: uppercase;
  padding: 16px 48px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: all ease-in 0.2s;
  background-color: ${(props) => (props.azul
    ? blue
    : props.verde
      ? green
      : props.amarillo
        ? yellow
        : undefined)};
  color: white;
  &:hover {
    background-color: ${(props) => (props.azul
    ? blueRoll
    : props.verde
      ? greenRoll
      : props.amarillo
        ? yellowRoll
        : undefined)};
    border-bottom: 10px solid ${blue};
  }
  &:before {
    content: '';

    display: inline-block;
    -webkit-mask-image: url(${arrow});
    mask-image: url(${arrow});
    background-color: ${gray1};
    background-size: 15px 15px;
    background-repeat: no-repeat;
    width: 15px;
    height: 15px;
    margin-left: 10px;
  }
`;

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
  background-color: ${(props) => (props.azul
    ? blue
    : props.verde
      ? green
      : props.amarillo
        ? yellow
        : undefined)};
  a{
    color: white;
    &:hover {
      text-decoration: none;
    }
  }
  &:hover {
    background-color: ${blueRoll};
  }
  &:after {
    content: '';
    display: inline-block;
    -webkit-mask-image: url(${arrow});
    mask-image: url(${arrow});
    background-color: ${gray1};
    background-size: 15px 15px;
    background-repeat: no-repeat;
    width: 15px;
    height: 15px;
    margin-left: 10px;
  }
`;
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
      ${(props) => (props.color === 'azul'
    ? blue52
    : props.color === 'verde'
      ? green
      : props.color === 'amarillo'
        ? yellowRoll
        : props.color === 'celeste'
          ? blue42
          : props.color === 'cafe'
            ? brown2
            : props.color === 'naranja'
              ? orange2
              : props.color === 'rosa'
                ? pink2
                : undefined)};
  }
`;
export const IconContainer = styled.div`
  background-color: ${(props) => (props.color === 'azul'
    ? blue
    : props.color === 'verde'
      ? green
      : props.color === 'amarillo'
        ? yellow
        : props.color === 'celeste'
          ? blue4
          : props.color === 'cafe'
            ? brown
            : props.color === 'naranja'
              ? orange
              : props.color === 'rosa'
                ? pink
                : undefined)};
  margin-right: 5px;
  padding: 20px 20px;
  & img {
    width: 31px;
    height: 31px;
  }
`;
export const TextContainer = styled.div`
  background-color: ${(props) => (props.color === 'azul'
    ? blue
    : props.color === 'verde'
      ? green
      : props.color === 'amarillo'
        ? yellow
        : props.color === 'celeste'
          ? blue4
          : props.color === 'cafe'
            ? brown
            : props.color === 'naranja'
              ? orange
              : props.color === 'rosa'
                ? pink
                : undefined)};
  text-transform: capitalize;
  font-size: 1.2em;
  padding: 23px 15px;
  width: 100%;
`;
