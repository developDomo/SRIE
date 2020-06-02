import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import {
  orange2, yellowRoll, blue42, brown2,
} from '../../styles/colors';

const Title = styled.h3` width: 100%; font-family: "Roboto", sans-serif; font-weight: bold; font-size: 1.2em; margin-bottom: 5px;`;

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
  & ${Title} 
    {
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
  min-height: 70px;
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
  padding: 3px 0px;
  height: 2px;
  background-color: ${(props) => props.color};
  width: ${(props) => props.width};
  margin-right: 0px;
  /*margin-right: 5px;*/
  box-sizing: content-box;
`;

const LineTitle = styled.div`
  padding: 3px 0px;
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  margin-right: 0px;
  box-sizing: content-box;
  text-align: center;
  font-size: 0.9em;
`;

const Boxes = ({ countryId }) => {
  if (countryId === 'bz') {
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
          </Col>
        </Row>
        <Row>
          <Col className="px-0 col-12">
            <LineContainer>
              <Line color="#fb8080" className="col-4" />
              <Line color="#7ab239" className="col-4" />
              <Line color="#0071bc" className="col-4" />
            </LineContainer>
            <LineContainer>
              <LineTitle color="#bc6060" className="col-4">
                Preescolar
              </LineTitle>
              <LineTitle color="#7ab239" className="col-4">
                Educación general básica
              </LineTitle>
              <LineTitle color="#0071bc" className="col-4">
                Educación diversificada
              </LineTitle>
            </LineContainer>
          </Col>
        </Row>
      </>
    );
  }
  if (countryId === 'cr') {
    return (
      <>
        <Row>
          <Col xs={12} sm={4} className="px-0">
            <ContainerEducationStyled color="rosa">
              <Title>Preescolar</Title>
              <SectionContainer color="#fc9999" className="col-4">
                <h3>Grupo interactivo </h3>
                <p>1</p>
              </SectionContainer>
              <SectionContainer color="#fb8080" className="col-4">
                <h3>Grupo interactivo </h3>
                <p>2</p>
              </SectionContainer>
              <SectionContainer color="#BC6060" className="col-4">
                <h3>Transición</h3>
              </SectionContainer>
            </ContainerEducationStyled>
          </Col>
          <Col xs={12} sm={4} className="px-0">
            <ContainerEducationStyled color="verde">
              <Title>Primaria</Title>
              <SectionContainer color="#afd188" width="16.67%">
                <p>1º</p>
              </SectionContainer>
              <SectionContainer color="#95c161" width="16.67%">
                <p>2º</p>
              </SectionContainer>
              <SectionContainer color="#7ab239" width="16.67%">
                <p>3º</p>
              </SectionContainer>
              <SectionContainer color="#5c852b" width="16.67%">
                <p>4º</p>
              </SectionContainer>
              <SectionContainer color="#3d591d" width="16.67%">
                <p>5º</p>
              </SectionContainer>
              <SectionContainer color="#324914" width="16.67%">
                <p>6º</p>
              </SectionContainer>
            </ContainerEducationStyled>
          </Col>
          <Col xs={12} sm={4} className="px-0">
            <ContainerEducationStyled color="azul">
              <Title>Secundaria</Title>
              <SectionContainer color="#66aad7" width="16.67%">
                <p>7º</p>
              </SectionContainer>
              <SectionContainer color="#338dc9" width="16.67%">
                <p>8º</p>
              </SectionContainer>
              <SectionContainer color="#0071bc" width="16.67%">
                <p>9º</p>
              </SectionContainer>
              <SectionContainer color="#00558d" width="16.67%">
                <p>10º</p>
              </SectionContainer>
              <SectionContainer color="#00395E" width="16.67%">
                <p>11º</p>
              </SectionContainer>
              <SectionContainer color="#032D44" width="16.67%">
                <p>12º</p>
              </SectionContainer>
            </ContainerEducationStyled>
          </Col>
        </Row>
        <Row>
          <Col className="px-0 col-12">
            <LineContainer>
              <Line color="#FB8080" width="22.2%" />
              <Line color="#BC6060" width="11.1%" />
              <Line color="#7ab239" width="50.1%" />
              <Line color="#0071bc" width="16.6%" />
            </LineContainer>
            <LineContainer>
              <LineTitle color="#FB8080" width="22.2%">
                Materno infantil
              </LineTitle>
              <LineTitle color="#BC6060" width="11.1%">
                Preescolar
              </LineTitle>
              <LineTitle color="#7ab239" width="50.1%">
                Educación general básica
              </LineTitle>
              <LineTitle color="#0071bc" width="16.6%">
                Educación diversificada
              </LineTitle>
            </LineContainer>
          </Col>
        </Row>
      </>
    );
  }
  if (countryId === 'sv') {
    return (
      <>
        <Row>
          <Col xs={12} sm={4} className="px-0">
            <ContainerEducationStyled color="rosa">
              <Title>Preescolar</Title>
              <SectionContainer color="#fc9999" className="col-4">
                <h3>Primeros grados</h3>
              </SectionContainer>
              <SectionContainer color="#fb8080" className="col-4">
                <h3>Penúltimo grado </h3>
              </SectionContainer>
              <SectionContainer color="#BC6060" className="col-4">
                <h3>Último grado</h3>
              </SectionContainer>
            </ContainerEducationStyled>
          </Col>
          <Col xs={12} sm={4} className="px-0">
            <ContainerEducationStyled color="verde">
              <Title>Primaria</Title>
              <SectionContainer color="#afd188" width="16.67%">
                <p>1º</p>
              </SectionContainer>
              <SectionContainer color="#95c161" width="16.67%">
                <p>2º</p>
              </SectionContainer>
              <SectionContainer color="#7ab239" width="16.67%">
                <p>3º</p>
              </SectionContainer>
              <SectionContainer color="#5c852b" width="16.67%">
                <p>4º</p>
              </SectionContainer>
              <SectionContainer color="#3d591d" width="16.67%">
                <p>5º</p>
              </SectionContainer>
              <SectionContainer color="#324914" width="16.67%">
                <p>6º</p>
              </SectionContainer>
            </ContainerEducationStyled>
          </Col>
          <Col xs={12} sm={4} className="px-0">
            <ContainerEducationStyled color="azul">
              <Title>Secundaria</Title>
              <SectionContainer color="#66aad7" width="16.67%">
                <p>7º</p>
              </SectionContainer>
              <SectionContainer color="#338dc9" width="16.67%">
                <p>8º</p>
              </SectionContainer>
              <SectionContainer color="#0071bc" width="16.67%">
                <p>9º</p>
              </SectionContainer>
              <SectionContainer color="#00558d" width="16.67%">
                <p>10º</p>
              </SectionContainer>
              <SectionContainer color="#00395E" width="16.67%">
                <p>11º</p>
              </SectionContainer>
              <SectionContainer color="#032D44" width="16.67%">
                <p>12º</p>
              </SectionContainer>
            </ContainerEducationStyled>
          </Col>
        </Row>
        <Row>
          <Col className="px-0 col-12">
            <LineContainer>
              <Line color="#FB8080" width="33.3%" />
              <Line color="#7ab239" width="50.1%" />
              <Line color="#0071bc" width="16.6%" />
            </LineContainer>
            <LineContainer>
              <LineTitle color="#FB8080" width="33.3%">
                Preescolar o Parvularia
              </LineTitle>
              <LineTitle color="#7ab239" width="50.1%">
                Educación básica
              </LineTitle>
              <LineTitle color="#0071bc" width="16.6%">
                Educación media
              </LineTitle>
            </LineContainer>
          </Col>
        </Row>
      </>
    );
  }
  if (countryId === 'gt') {
    return (
      <>
        <Row>
          <Col xs={12} sm={4} className="px-0">
            <ContainerEducationStyled color="rosa">
              <Title>Preescolar</Title>
              <SectionContainer color="#fc9999" className="col-4">
                <h3>Primeros grados</h3>
              </SectionContainer>
              <SectionContainer color="#fb8080" className="col-4">
                <h3>Penúltimo grado </h3>
              </SectionContainer>
              <SectionContainer color="#BC6060" className="col-4">
                <h3>Último grado</h3>
              </SectionContainer>
            </ContainerEducationStyled>
          </Col>
          <Col xs={12} sm={4} className="px-0">
            <ContainerEducationStyled color="verde">
              <Title>Primaria</Title>
              <SectionContainer color="#afd188" width="16.67%">
                <p>1º</p>
              </SectionContainer>
              <SectionContainer color="#95c161" width="16.67%">
                <p>2º</p>
              </SectionContainer>
              <SectionContainer color="#7ab239" width="16.67%">
                <p>3º</p>
              </SectionContainer>
              <SectionContainer color="#5c852b" width="16.67%">
                <p>4º</p>
              </SectionContainer>
              <SectionContainer color="#3d591d" width="16.67%">
                <p>5º</p>
              </SectionContainer>
              <SectionContainer color="#324914" width="16.67%">
                <p>6º</p>
              </SectionContainer>
            </ContainerEducationStyled>
          </Col>
          <Col xs={12} sm={4} className="px-0">
            <ContainerEducationStyled color="azul">
              <Title>Secundaria</Title>
              <SectionContainer color="#66aad7" width="16.67%">
                <p>7º</p>
              </SectionContainer>
              <SectionContainer color="#338dc9" width="16.67%">
                <p>8º</p>
              </SectionContainer>
              <SectionContainer color="#0071bc" width="16.67%">
                <p>9º</p>
              </SectionContainer>
              <SectionContainer color="#00558d" width="16.67%">
                <p>10º</p>
              </SectionContainer>
              <SectionContainer color="#00395E" width="16.67%">
                <p>11º</p>
              </SectionContainer>
              <SectionContainer color="#032D44" width="16.67%">
                <p>12º</p>
              </SectionContainer>
            </ContainerEducationStyled>
          </Col>
        </Row>
        <Row>
          <Col className="px-0 col-12">
            <LineContainer>
              <Line color="#FB8080" width="11.1%" />
              <Line color="#BC6060" width="22.2%" />
              <Line color="#7ab239" width="33.3%" />
              <Line color="#338dc9" width="16.7%" />
              <Line color="#0071bc" width="16.7%" />
            </LineContainer>
            <LineContainer>
              <LineTitle color="#FB8080" width="11.1%">
                Inicial
              </LineTitle>
              <LineTitle color="#BC6060" width="22.2%">
                Preprimaria
              </LineTitle>
              <LineTitle color="#7ab239" width="33.3%">
                Primaria
              </LineTitle>
              <LineTitle color="#338dc9" width="16.7%">
                Básico
              </LineTitle>
              <LineTitle color="#0071bc" width="16.7%">
                Educación media
              </LineTitle>
            </LineContainer>
          </Col>
        </Row>
      </>
    );
  }
  if (countryId === 'hn') {
    return (
      <>
        <Row>
          <Col xs={12} sm={4} className="px-0">
            <ContainerEducationStyled color="rosa">
              <Title>Preescolar</Title>
              <SectionContainer color="#fc9999" className="col-4">
                <h3>Primeros grados</h3>
              </SectionContainer>
              <SectionContainer color="#fb8080" className="col-4">
                <h3>Penúltimo grado </h3>
              </SectionContainer>
              <SectionContainer color="#BC6060" className="col-4">
                <h3>Último grado</h3>
              </SectionContainer>
            </ContainerEducationStyled>
          </Col>
          <Col xs={12} sm={4} className="px-0">
            <ContainerEducationStyled color="verde">
              <Title>Primaria</Title>
              <SectionContainer color="#afd188" width="16.67%">
                <p>1º</p>
              </SectionContainer>
              <SectionContainer color="#95c161" width="16.67%">
                <p>2º</p>
              </SectionContainer>
              <SectionContainer color="#7ab239" width="16.67%">
                <p>3º</p>
              </SectionContainer>
              <SectionContainer color="#5c852b" width="16.67%">
                <p>4º</p>
              </SectionContainer>
              <SectionContainer color="#3d591d" width="16.67%">
                <p>5º</p>
              </SectionContainer>
              <SectionContainer color="#324914" width="16.67%">
                <p>6º</p>
              </SectionContainer>
            </ContainerEducationStyled>
          </Col>
          <Col xs={12} sm={4} className="px-0">
            <ContainerEducationStyled color="azul">
              <Title>Secundaria</Title>
              <SectionContainer color="#66aad7" width="16.67%">
                <p>7º</p>
              </SectionContainer>
              <SectionContainer color="#338dc9" width="16.67%">
                <p>8º</p>
              </SectionContainer>
              <SectionContainer color="#0071bc" width="16.67%">
                <p>9º</p>
              </SectionContainer>
              <SectionContainer color="#00558d" width="16.67%">
                <p>10º</p>
              </SectionContainer>
              <SectionContainer color="#00395E" width="16.67%">
                <p>11º</p>
              </SectionContainer>
              <SectionContainer color="#032D44" width="16.67%">
                <p>12º</p>
              </SectionContainer>
            </ContainerEducationStyled>
          </Col>
        </Row>
        <Row>
          <Col className="px-0 col-12">
            <LineContainer>
              <Line color="#fc9999" width="11.1%" />
              <Line color="#fb8080" width="11.1%" />
              <Line color="#BC6060" width="11.1%" />
              <Line color="#7AB239" width="33.4%" />
              <Line color="#0071bc" width="33.3%" />
            </LineContainer>
            <LineContainer>
              <LineTitle color="#fc9999" width="11.1%">
                Prekinder
              </LineTitle>
              <LineTitle color="#fb8080" width="11.1%">
                Kinder
              </LineTitle>
              <LineTitle color="#BC6060" width="11.1%">
                Preparatoria
              </LineTitle>
              <LineTitle color="#7AB239" width="33.4%">
                Educación primaria
              </LineTitle>
              <LineTitle color="#0071bc" width="33.3%">
                Educación media
              </LineTitle>
            </LineContainer>
          </Col>
        </Row>
      </>
    );
  }
  if (countryId === 'ni') {
    return (
      <>
        <Row>
          <Col xs={12} sm={4} className="px-0">
            <ContainerEducationStyled color="rosa">
              <Title>Preescolar</Title>
              <SectionContainer color="#fc9999" className="col-4">
                <h3>Primeros grados</h3>
              </SectionContainer>
              <SectionContainer color="#fb8080" className="col-4">
                <h3>Penúltimo grado </h3>
              </SectionContainer>
              <SectionContainer color="#BC6060" className="col-4">
                <h3>Último grado</h3>
              </SectionContainer>
            </ContainerEducationStyled>
          </Col>
          <Col xs={12} sm={4} className="px-0">
            <ContainerEducationStyled color="verde">
              <Title>Primaria</Title>
              <SectionContainer color="#afd188" width="16.67%">
                <p>1º</p>
              </SectionContainer>
              <SectionContainer color="#95c161" width="16.67%">
                <p>2º</p>
              </SectionContainer>
              <SectionContainer color="#7ab239" width="16.67%">
                <p>3º</p>
              </SectionContainer>
              <SectionContainer color="#5c852b" width="16.67%">
                <p>4º</p>
              </SectionContainer>
              <SectionContainer color="#3d591d" width="16.67%">
                <p>5º</p>
              </SectionContainer>
              <SectionContainer color="#324914" width="16.67%">
                <p>6º</p>
              </SectionContainer>
            </ContainerEducationStyled>
          </Col>
          <Col xs={12} sm={4} className="px-0">
            <ContainerEducationStyled color="azul">
              <Title>Secundaria</Title>
              <SectionContainer color="#66aad7" width="16.67%">
                <p>7º</p>
              </SectionContainer>
              <SectionContainer color="#338dc9" width="16.67%">
                <p>8º</p>
              </SectionContainer>
              <SectionContainer color="#0071bc" width="16.67%">
                <p>9º</p>
              </SectionContainer>
              <SectionContainer color="#00558d" width="16.67%">
                <p>10º</p>
              </SectionContainer>
              <SectionContainer color="#00395E" width="16.67%">
                <p>11º</p>
              </SectionContainer>
              <SectionContainer color="#032D44" width="16.67%">
                <p>12º</p>
              </SectionContainer>
            </ContainerEducationStyled>
          </Col>
        </Row>
        <Row>
          <Col className="px-0 col-12">
            <LineContainer>
              <Line color="#FB8080" width="33.3%" />
              <Line color="#7ab239" width="33.4%" />
              <Line color="#0071bc" width="33.3%" />
            </LineContainer>
            <LineContainer>
              <LineTitle color="#FB8080" width="33.3%">
                Preescolar
              </LineTitle>
              <LineTitle color="#7ab239" width="33.4%">
                Primaria
              </LineTitle>
              <LineTitle color="#0071bc" width="33.3%">
                Secundaria
              </LineTitle>
            </LineContainer>
          </Col>
        </Row>
      </>
    );
  }
  if (countryId === 'pa') {
    return (
      <>
        <Row>
          <Col xs={12} sm={4} className="px-0">
            <ContainerEducationStyled color="rosa">
              <Title>Preescolar</Title>
              <SectionContainer color="#fc9999" className="col-4">
                <h3>Primeros grados</h3>
              </SectionContainer>
              <SectionContainer color="#fb8080" className="col-4">
                <h3>Penúltimo grado </h3>
              </SectionContainer>
              <SectionContainer color="#BC6060" className="col-4">
                <h3>Último grado</h3>
              </SectionContainer>
            </ContainerEducationStyled>
          </Col>
          <Col xs={12} sm={4} className="px-0">
            <ContainerEducationStyled color="verde">
              <Title>Primaria</Title>
              <SectionContainer color="#afd188" width="16.67%">
                <p>1º</p>
              </SectionContainer>
              <SectionContainer color="#95c161" width="16.67%">
                <p>2º</p>
              </SectionContainer>
              <SectionContainer color="#7ab239" width="16.67%">
                <p>3º</p>
              </SectionContainer>
              <SectionContainer color="#5c852b" width="16.67%">
                <p>4º</p>
              </SectionContainer>
              <SectionContainer color="#3d591d" width="16.67%">
                <p>5º</p>
              </SectionContainer>
              <SectionContainer color="#324914" width="16.67%">
                <p>6º</p>
              </SectionContainer>
            </ContainerEducationStyled>
          </Col>
          <Col xs={12} sm={4} className="px-0">
            <ContainerEducationStyled color="azul">
              <Title>Secundaria</Title>
              <SectionContainer color="#66aad7" width="16.67%">
                <p>7º</p>
              </SectionContainer>
              <SectionContainer color="#338dc9" width="16.67%">
                <p>8º</p>
              </SectionContainer>
              <SectionContainer color="#0071bc" width="16.67%">
                <p>9º</p>
              </SectionContainer>
              <SectionContainer color="#00558d" width="16.67%">
                <p>10º</p>
              </SectionContainer>
              <SectionContainer color="#00395E" width="16.67%">
                <p>11º</p>
              </SectionContainer>
              <SectionContainer color="#032D44" width="16.67%">
                <p>12º</p>
              </SectionContainer>
            </ContainerEducationStyled>
          </Col>
        </Row>
        <Row>
          <Col className="px-0 col-12">
            <LineContainer>
              <Line color="#FB8080" width="11.1%" />
              <Line color="#BC6060" width="22.2%" />
              <Line color="#7ab239" width="33.3%" />
              <Line color="#338dc9" width="16.7%" />
              <Line color="#0071bc" width="16.7%" />
            </LineContainer>
            <LineContainer>
              <LineTitle color="#FB8080" width="11.1%">
                Prejardín
              </LineTitle>
              <LineTitle color="#BC6060" width="22.2%">
                Jardín
              </LineTitle>
              <LineTitle color="#7ab239" width="33.3%">
                Primaria
              </LineTitle>
              <LineTitle color="#338dc9" width="16.7%">
                Premedia
              </LineTitle>
              <LineTitle color="#0071bc" width="16.7%">
                Media
              </LineTitle>
            </LineContainer>
          </Col>
        </Row>
      </>
    );
  }
  if (countryId === 'do') {
    return (
      <>
        <Row>
          <Col xs={12} sm={4} className="px-0">
            <ContainerEducationStyled color="rosa">
              <Title>Preescolar</Title>
              <SectionContainer color="#fc9999" className="col-4">
                <h3>Primeros grados</h3>
              </SectionContainer>
              <SectionContainer color="#fb8080" className="col-4">
                <h3>Penúltimo grado </h3>
              </SectionContainer>
              <SectionContainer color="#BC6060" className="col-4">
                <h3>Último grado</h3>
              </SectionContainer>
            </ContainerEducationStyled>
          </Col>
          <Col xs={12} sm={4} className="px-0">
            <ContainerEducationStyled color="verde">
              <Title>Primaria</Title>
              <SectionContainer color="#afd188" width="16.67%">
                <p>1º</p>
              </SectionContainer>
              <SectionContainer color="#95c161" width="16.67%">
                <p>2º</p>
              </SectionContainer>
              <SectionContainer color="#7ab239" width="16.67%">
                <p>3º</p>
              </SectionContainer>
              <SectionContainer color="#5c852b" width="16.67%">
                <p>4º</p>
              </SectionContainer>
              <SectionContainer color="#3d591d" width="16.67%">
                <p>5º</p>
              </SectionContainer>
              <SectionContainer color="#324914" width="16.67%">
                <p>6º</p>
              </SectionContainer>
            </ContainerEducationStyled>
          </Col>
          <Col xs={12} sm={4} className="px-0">
            <ContainerEducationStyled color="azul">
              <Title>Secundaria</Title>
              <SectionContainer color="#66aad7" width="16.67%">
                <p>7º</p>
              </SectionContainer>
              <SectionContainer color="#338dc9" width="16.67%">
                <p>8º</p>
              </SectionContainer>
              <SectionContainer color="#0071bc" width="16.67%">
                <p>9º</p>
              </SectionContainer>
              <SectionContainer color="#00558d" width="16.67%">
                <p>10º</p>
              </SectionContainer>
              <SectionContainer color="#00395E" width="16.67%">
                <p>11º</p>
              </SectionContainer>
              <SectionContainer color="#032D44" width="16.67%">
                <p>12º</p>
              </SectionContainer>
            </ContainerEducationStyled>
          </Col>
        </Row>
        <Row>
          <Col className="px-0 col-12">
            <LineContainer>
              <Line color="#FB8080" width="33.3%" />
              <Line color="#7ab239" width="33.4%" />
              <Line color="#0071bc" width="33.3%" />
            </LineContainer>
            <LineContainer>
              <LineTitle color="#FB8080" width="33.3%">
                Inicial
              </LineTitle>
              <LineTitle color="#7ab239" width="33.4%">
                Básico
              </LineTitle>
              <LineTitle color="#338dc9" width="33.3%">
                Medio
              </LineTitle>
            </LineContainer>
          </Col>
        </Row>
      </>
    );
  }
  return (
    <>
      <h2>Sin datos</h2>
    </>
  );
};

export default Boxes;
