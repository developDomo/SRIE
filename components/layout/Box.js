import React from 'react';
import styled from 'styled-components';
import {
  gray1,
  blue,
  blue3,
  orange2,
  orange,
  yellowRoll,
  green,
  blue4,
  blue42,
  brown2,
  pink2,
  txt,
} from '../../styles/colors';

const backgroundColors = {
  green,
  blue: blue3,
  yellow: yellowRoll,
  light_blue: blue4,
  brown: brown2,
  pink: pink2,
  orange,
  black: txt,
};

const iconColors = {
  green,
  blue,
  yellow: yellowRoll,
  light_blue: blue42,
  brown: brown2,
  pink: pink2,
  orange: orange2,
  black: txt,
};

const Title = styled.h3`
  width: 100%;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 15px;
  color: ${txt};
`;

const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  background-color: ${gray1};
  padding: 30px 20px;
  width: 100%;
  height: 250px;
`;

const ContainerIndicadorStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  background-color: ${gray1};
  padding: 10px 11px;
  width: 100%;
  height: 250px;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
`;

const Icon = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${(props) => (iconColors[props.color])};
  -webkit-mask-image: url(${(props) => props.icon});
  mask-image: url(${(props) => props.icon});
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-position: center;
`;

const IconImgStyled = styled.img`
  width: ${(props) => props.width || '80px'};
  height: ${(props) => props.height || '80px'};
`;

const ColorSubtitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: ${(props) => props.font_size || '1.8em'};
  margin: 0;
  margin-bottom: ${(props) => props.mb || '0'};
  width: 100%;
  color: ${(props) => (backgroundColors[props.color])};
`;

const IndicadorContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: white;
  font-size: 1em;
  text-align: center;
  padding: ${(props) => props.padding || '40px 8px'};
  width: 24%;
  height: ${(props) => props.height || '70px'};
  box-sizing: content-box;
  margin-left: ${(props) => props.ml || '0'};
  margin-right: ${(props) => props.mr || '10px'};
  background-color: ${(props) => (backgroundColors[props.color])};
  & h3 {
    padding-bottom: '30px';
    border-bottom: 2px solid white;
    margin: 0;
    font-size: 1.2em;
    font-weight: bold;
  }
  & p {
    margin: 0;
    margin-top: 10px;
    font-weight: 400;
    font-size: 0.8em;
  }
  &:nth-child(4) {
    margin-right: 0;
  }
`;

const getIcon = (iconImg, icon, color) => (iconImg ? (
  <IconImgStyled src={iconImg} alt="icon" />
) : (
  <Icon icon={icon} color={color} />
));

export const Box = ({
  icon,
  iconImg,
  title,
  subtitle,
  containers,
  color,
}) => {
  if (containers && containers.length > 0) {
    return (
      <>
        <ContainerIndicadorStyled>
          <IconContainer>{getIcon(iconImg || icon, color)}</IconContainer>
          <Title className="m-0 mb-1">{title}</Title>

          {containers.map((container) => (
            <IndicadorContainer
              color={container.color}
              height="82"
              padding="6px 6px 5px 6px"
              ml="10px"
              mr="0"
            >
              <h3>{container.value}</h3>
              <p>{container.title}</p>
            </IndicadorContainer>
          ))}
        </ContainerIndicadorStyled>
      </>
    );
  }
  return (
    <ContainerStyled>
      <IconContainer>{getIcon(iconImg || icon, color)}</IconContainer>
      <TextContainer>
        <Title>{title}</Title>
        <ColorSubtitle color={color}>{subtitle}</ColorSubtitle>
      </TextContainer>
    </ContainerStyled>
  );
};

export const BoxIndicador = ({
  title, containers,
}) => (
  <ContainerIndicadorStyled>
    <Title>{title}</Title>
    {containers.map((container) => (
      <IndicadorContainer color={container.color}>
        <h3>{container.value}</h3>
        <p>{container.title}</p>
      </IndicadorContainer>
    ))}

  </ContainerIndicadorStyled>
);
