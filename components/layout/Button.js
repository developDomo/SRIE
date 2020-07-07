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
    ${(props) => (props.active && props.blue
    ? blueRoll
    : props.active && props.green
      ? greenRoll
      : props.active && props.yellow
        ? yellowRoll
        : props.blue
          ? blue
          : props.green
            ? green
            : props.yellow
              ? yellow
              : 'transparent')};
  text-transform: uppercase;
  padding: 10px 0;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
  transition: all ease-in 0.2s;
  background-color: ${(props) => (props.blue
    ? blue
    : props.green
      ? green
      : props.yellow
        ? yellow
        : props.light_blue
          ? blue4
          : 'transparent')};
  color: white;
  &:hover {
    background-color: ${(props) => (props.blue
    ? blueRoll
    : props.green
      ? greenRoll
      : props.yellow
        ? yellowRoll
        : 'transparent')};
    border-bottom: 10px solid
      ${(props) => (props.blue
    ? blue
    : props.green
      ? green
      : props.yellow
        ? yellow
        : 'transparent')};
  }
`;
export const ButtonNavWithIcon = styled.button`
  outline: 0;
  border: 0;
  border-bottom: 10px solid
    ${(props) => (props.blue
    ? blueRoll
    : props.green
      ? greenRoll
      : props.yellow
        ? yellowRoll
        : 'transparent')};
  text-transform: uppercase;
  padding: 16px 48px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: all ease-in 0.2s;
  background-color: ${(props) => (props.blue
    ? blue
    : props.green
      ? green
      : props.yellow
        ? yellow
        : 'transparent')};
  color: white;
  &:hover {
    background-color: ${(props) => (props.blue
    ? blueRoll
    : props.green
      ? greenRoll
      : props.yellow
        ? yellowRoll
        : 'transparent')};
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
  background-color: ${(props) => (props.blue
    ? blue
    : props.green
      ? green
      : props.yellow
        ? yellow
        : 'transparent')};
  color: white;
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
export const ButtonContainer = styled.div`
  display: flex;
  outline: 0;
  border: 0;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  text-align: left;
  padding: 0;
  font-size: 14px;
  cursor: pointer;
  background-color: 'transparent';
  transition: all ease-in 0.9s;
  width: 100%;
  color: white;
  & div {
    border-bottom: 10px solid white;
  }

  &:hover div {
    border-bottom: 10px solid
      ${(props) => (props.color === 'blue'
    ? blue52
    : props.color === 'green'
      ? green
      : props.color === 'yellow'
        ? yellowRoll
        : props.color === 'light_blue'
          ? blue42
          : props.color === 'brown'
            ? brown2
            : props.color === 'orange'
              ? orange2
              : props.color === 'pink'
                ? pink2
                : 'transparent')};
  }
`;
export const IconContainer = styled.div`
  background-color: ${(props) => (props.color === 'blue'
    ? blue
    : props.color === 'green'
      ? green
      : props.color === 'yellow'
        ? yellow
        : props.color === 'light_blue'
          ? blue4
          : props.color === 'brown'
            ? brown
            : props.color === 'orange'
              ? orange
              : props.color === 'pink'
                ? pink
                : 'white')};
  margin-right: 5px;
  padding: 20px 20px;
  & img {
    width: 31px;
    height: 31px;
  }
`;
export const TextContainer = styled.div`
  background-color: ${(props) => (props.color === 'blue'
    ? blue
    : props.color === 'green'
      ? green
      : props.color === 'yellow'
        ? yellow
        : props.color === 'light_blue'
          ? blue4
          : props.color === 'brown'
            ? brown
            : props.color === 'orange'
              ? orange
              : props.color === 'pink'
                ? pink
                : 'white')};
  text-transform: capitalize;
  font-size: 1.2em;
  padding: 23px 15px;
  width: 100%;
`;
