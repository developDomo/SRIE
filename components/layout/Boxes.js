import React from 'react';
import {
  Row, Col,
} from 'react-bootstrap';
import styled from 'styled-components';

import {
  orange2,
  yellowRoll,
  blue42,
  brown2,
} from '../../styles/colors';

const Title = styled.h3`
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 5px;
`;
const ContainerEducationStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  font-family: "Roboto", sans-serif;
  flex-basis: auto;
  background-color: ${(props) => (props.color === 'azul'
    ? '#cce3f2'
    : props.color === 'verde'
      ? ' #caf0b0'
      : props.color === 'amarillo'
        ? yellowRoll
        : props.color === 'celeste'
          ? blue42
          : props.color === 'cafe'
            ? brown2
            : props.color === 'naranja'
              ? orange2
              : props.color === 'rosa'
                ? '#fdcccc'
                : 'black')};
  padding: 0;
  width: 100%;
  min-height: 120px;
  & ${Title} {
    padding: 3px 1px;
    text-transform: uppercase;
    text-align: center;
    color: black;
    font-weight: 400;
  }
`;
const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: ${(props) => props.width};
  padding: 1px 1px;
  min-height: 120px;
  background-color: ${(props) => props.color};
  & h3 {
    margin: 0;
    color: white;
    width: 100%;
    font-size: 0.8em;
  }
  & p {
    margin: 0;
    color: white;
    font-weight: 400;
  }
`;
const LineContainer = styled.div`
  font-weight: 400;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  box-sizing: content-box;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const Line = styled.div`
  padding: 3px 1px;
  height: 2px;
  background-color: ${(props) => props.color};
  width: ${(props) => props.width};
  margin-right: 0px;
  /*margin-right: 5px;*/
  box-sizing: content-box;
`;
const LineTitle = styled.div`
  padding: 3px 1px;
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  margin-right: 5px;
  box-sizing: content-box;
  text-align: center;
  font-size: 0.9em;
`;

const Boxes = ({ countryId }) => {
  if (countryId === 'bh') {
    return (
      <>
        <Row>
          <Col xs={12} sm={4} className="px-0">
            <ContainerEducationStyled color="rosa">
              <Title>Preescolar</Title>
              <SectionContainer color="#fc9999" width="50%">
                <h3>Preescolar nivel</h3>
                <p>1</p>
              </SectionContainer>
              <SectionContainer color="#fb8080" width="50%">
                <h3>Preescolar nivel</h3>
                <p>2</p>
              </SectionContainer>
            </ContainerEducationStyled>
            <LineContainer>
              <Line color="#fb8080" width="100%" />
              {/* <Line color='#bc6060' width='10.6%'></Line>
                <Line color='#7ab239' width='50%'></Line>
                <Line color='#0071bc' width='15.1%'></Line> */}
            </LineContainer>
            <LineContainer>
              {/* <LineTitle color="#fb8080" width="21.5%">
                Materno infantil
              </LineTitle> */}
              <LineTitle color="#bc6060" width="100%">
                Preescolar
              </LineTitle>
              {/* <LineTitle color="#7ab239" width="50%">
                Educación general básica
              </LineTitle>
              <LineTitle color="#0071bc" width="15.1%">
                Educación diversificada
              </LineTitle> */}
            </LineContainer>
          </Col>
          <Col xs={12} sm={4} className="px-0">
            <ContainerEducationStyled color="verde">
              <Title>Primaria</Title>
              <SectionContainer color="#c1d4ac" width="12.5%">
                <p>Infant 1</p>
              </SectionContainer>
              <SectionContainer color="#bcda9c" width="12.5%">
                <p>Infant 2</p>
              </SectionContainer>
              <SectionContainer color="#afd188" width="12.5%">
                <p>1º</p>
              </SectionContainer>
              <SectionContainer color="#95c161" width="12.5%">
                <p>2º</p>
              </SectionContainer>
              <SectionContainer color="#7ab239" width="12.5%">
                <p>3º</p>
              </SectionContainer>
              <SectionContainer color="#5c852b" width="12.5%">
                <p>4º</p>
              </SectionContainer>
              <SectionContainer color="#3d591d" width="12.5%">
                <p>5º</p>
              </SectionContainer>
              <SectionContainer color="#324914" width="12.5%">
                <p>6º</p>
              </SectionContainer>
            </ContainerEducationStyled>
            <LineContainer>
              {/* <Line color='#fb8080' width='100%'></Line> */}
              <Line color="#324914" width="100%" />
              {/* <Line color='#7ab239' width='50%'></Line>
                <Line color='#0071bc' width='15.1%'></Line> */}
            </LineContainer>
          </Col>
          <Col xs={12} sm={4} className="px-0">
            <ContainerEducationStyled color="azul">
              <Title>Secundaria</Title>
              <SectionContainer color="#66aad7" width="25%">
                <p>7º</p>
              </SectionContainer>
              <SectionContainer color="#338dc9" width="25%">
                <p>8º</p>
              </SectionContainer>
              <SectionContainer color="#0071bc" width="25%">
                <p>9º</p>
              </SectionContainer>
              <SectionContainer color="#00558d" width="25%">
                <p>10º</p>
              </SectionContainer>
            </ContainerEducationStyled>
            <LineContainer>
              {/* <Line color='#fb8080' width='100%'></Line> */}
              <Line color="#0071bc" width="100%" />
              {/* <Line color='#7ab239' width='100%'></Line> */}
              {/* <Line color='#0071bc' width='15.1%'></Line> */}
            </LineContainer>
          </Col>
        </Row>
      </>
    );
  }
  if (countryId === 'cr') {
    return <div>{countryId}</div>;
  }
  if (countryId === 'su') {
    return <div>{countryId}</div>;
  }
  if (countryId === 'gt') {
    return <div>{countryId}</div>;
  }
  if (countryId === 'ho') {
    return <div>{countryId}</div>;
  }
  if (countryId === 'nu') {
    return <div>{countryId}</div>;
  }
  if (countryId === 'pm') {
    return <div>{countryId}</div>;
  }
  if (countryId === 'dr') {
    return <div>{countryId}</div>;
  }
  return <div />;
};

export default Boxes;
