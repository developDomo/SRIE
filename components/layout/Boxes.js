import React from 'react';
import styled from 'styled-components';
import {
  orange2, yellowRoll, blue42, brown2,
} from '../../styles/colors';
import { i18n, withTranslation } from '../../i18n';

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
// new
const ContainerBox = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.flexdirection ? props.flexdirection : 'column')};
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: stretch;
  align-content: stretch;
  flex-grow: 1;
  align-self: flex-start;
  width: 100%;
  height: 100%;
  @media (min-width: 992px) { 
    flex-direction: ${(props) => (props.flexdirectionSm ? props.flexdirectionSm : 'row')};
  }
  
`;
const ContainerBoxSection = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.flexdirection ? props.flexdirection : 'row')};
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: stretch;
  align-content: stretch;

  flex-grow: 1;
  align-self: flex-start;
  width: 100%;
  height: 100%;
  flex-grow: ${(props) => (props.flexGrow ? props.flexGrow : 1)};
  ${(props) => (props.flexbasis ? `flex-basis: ${props.flexbasis};` : '')}

  background-color: ${(props) => (props.color > 1 ? props.color : '')};
  border-width: ${(props) => (props.bw > 1 ? props.bw : '0px')};
  border-style: ${(props) => (props.bs > 1 ? props.bs : 'none')};
  border-color: ${(props) => (props.bc > 1 ? props.bc : 'transparent')};
  @media (min-width: 992px) { 
    flex-direction: ${(props) => (props.flexdirectionSm ? props.flexdirectionSm : 'column')};
    flex-grow: ${(props) => (props.flexGrow ? props.flexGrow : 1)};
    ${(props) => (props.flexbasis ? `flex-basis: ${props.flexbasis};` : '')}
  }
  
`;

const BoxSectioInfo = styled.div`
  display: ${(props) => (props.dflex ? props.dflex : 'flex')};
  flex-direction: ${(props) => (props.flexdirection ? props.flexdirection : 'row')};
  justify-content: center;
  flex-wrap: nowrap;
  align-items: stretch;
  align-content: stretch;
  flex-grow: ${(props) => (props.flexGrow ? props.flexGrow : 1)};
  ${(props) => (props.flexbasis ? `flex-basis: ${props.flexbasis};` : '')}
  align-self: flex-start;
  width:  ${(props) => (props.width ? '25%' : '100%')};
  height: 100%;
  background-color: ${(props) => (props.color !== '' ? props.color : '#cecece')}; 
  
  ${(props) => (props.border ? `border-${props.border.side} : 10px solid${props.border.color};padding: 0 5px;` : '')}
  
  ${(props) => (props.colorTxt ? `color: ${props.colorTxt};` : 'color: #fff; ')}
  
  & p {
      ${(props) => (props.rotateTxt ? 'transform: rotate(-90deg);' : '')}
      min-width: 99px;
      margin: 0;
      line-height: 14px;
      font-size: 0.8rem;
      & span {
        font-size: 1.3em;
        display: block;
      }
    }
  @media (min-width: 992px) {
    border: none;
    min-width: inherit;
    flex-direction: ${(props) => (props.flexdirectionSm ? props.flexdirectionSm : 'row')};
    flex-grow: ${(props) => (props.flexGrow ? props.flexGrow : 1)};
    ${(props) => (props.flexbasis ? `flex-basis: ${props.flexbasis};` : '')}
    ${(props) => (props.borderSm ? `border-${props.borderSm.side} : 5px solid${props.borderSm.color};padding: 5px 0;` : '')}
    width:  ${(props) => (props.widthSm ? '25%' : '100%')};
    min-height: ${(props) => (props.heightSm ? props.heightSm : '80px')};
    & p {
      transform: none;
      min-width: initial;
    }
  }
  
`;
const ContainerData = styled.div`
  position: relative;
  width: 100%;
  height: 1000px;
  padding: 0 15px;
  @media (min-width: 992px) { 
    height: 200px;
  }
  
`;
const Boxes = ({ countryId, t }) => {
  if (countryId === 'bz') {
    return (
      <>
        <ContainerData>
          <ContainerBox>
            <ContainerBoxSection flexbasis="0" flexGrow={1}>
              <BoxSectioInfo color="#fdcccc" flexdirection="column" rotateTxt width colorTxt="#000" flexdirectionSm="column" heightSm="40px">
                <p className="text-uppercase">{t('pre_edu_label_header')}</p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color="#fc9999"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('pre_edu_label')}
                    {' '}
                    {t('level')}
                    <span>1</span>
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#fb8080"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('pre_edu_label')}
                    {' '}
                    {t('level')}
                    <span>2</span>
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  flexbasis="0"
                  flexdirection="column"
                  border={{ side: 'left', color: '#BC6060' }}
                  colorTxt="#BC6060"
                  borderSm={{ side: 'top', color: '#BC6060' }}
                >
                  <p>
                    {t('pre_edu_label')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={2}>
              <BoxSectioInfo color="#caf0b0" flexdirection="column" rotateTxt width colorTxt="#000" flexdirectionSm="column" heightSm="40px">
                <p className="text-uppercase">{t('primary_edu_label_header')}</p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color="#c1d4ac"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('infant')}
                    {' '}
                    1
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#bcda9c"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('infant')}
                    {' '}
                    2
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#afd188"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>1º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#95c161"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>2º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#7ab239"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>3º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#5c852b"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>4º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#3d591d"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>5º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#324914"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>6º</p>
                </BoxSectioInfo>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  flexbasis="0"
                  flexdirection="column"
                  border={{ side: 'left', color: '#7ab239' }}
                  colorTxt="#7ab239"
                  borderSm={{ side: 'top', color: '#7ab239' }}
                >
                  <p>
                    {t('primary_edu_label')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={2}>
              <BoxSectioInfo
                color="#cce3f2"
                flexdirection="column"
                rotateTxt
                width
                colorTxt="#000"
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('high_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color="#66aad7"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>7º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#338dc9"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>8º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#0071bc"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>9º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#00558d"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>10º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#00395E"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>11º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#032D44"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>12º</p>
                </BoxSectioInfo>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  flexbasis="0"
                  flexGrow={1}
                  flexdirection="column"
                  border={{ side: 'left', color: '#0071bc' }}
                  colorTxt="#0071bc"
                  borderSm={{ side: 'top', color: '#0071bc' }}
                >
                  <p>
                    {t('high_edu_label')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
          </ContainerBox>
        </ContainerData>
      </>
    );
  }
  if (countryId === 'cr') {
    return (
      <>
        <ContainerData>
          <ContainerBox>
            <ContainerBoxSection flexbasis="0" flexGrow={1}>
              <BoxSectioInfo color="#fdcccc" flexdirection="column" rotateTxt width colorTxt="#000" flexdirectionSm="column" heightSm="40px">
                <p className="text-uppercase">{t('pre_edu_label_header')}</p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color="#fc9999"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('interactive_group')}
                    {' '}
                    <span>1</span>
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#fb8080"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('interactive_group')}
                    {' '}
                    <span>2</span>
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#BC6060"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>{t('transition')}</p>
                </BoxSectioInfo>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  flexbasis="0"
                  flexGrow={2}
                  flexdirection="column"
                  border={{ side: 'left', color: '#fc9999' }}
                  borderSm={{ side: 'top', color: '#fc9999' }}
                  colorTxt="#fc9999"
                >
                  <p>
                    {t('maternal_infant')}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  flexbasis="0"
                  flexdirection="column"
                  border={{ side: 'left', color: '#BC6060' }}
                  colorTxt="#BC6060"
                  borderSm={{ side: 'top', color: '#BC6060' }}
                >
                  <p>
                    {t('pre_edu_label')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={2}>
              <BoxSectioInfo color="#caf0b0" flexdirection="column" rotateTxt width colorTxt="#000" flexdirectionSm="column" heightSm="40px">
                <p className="text-uppercase">{t('primary_edu_label_header')}</p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color="#afd188"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>1º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#95c161"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>2º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#7ab239"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>3º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#5c852b"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>4º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#3d591d"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>5º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#324914"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>6º</p>
                </BoxSectioInfo>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  flexbasis="0"
                  flexdirection="column"
                  border={{ side: 'left', color: '#7ab239' }}
                  colorTxt="#7ab239"
                  borderSm={{ side: 'top', color: '#7ab239' }}
                >
                  <p>{t('basic_general_edu')}</p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={2}>
              <BoxSectioInfo
                color="#cce3f2"
                flexdirection="column"
                rotateTxt
                width
                colorTxt="#000"
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">{t('high_edu_label_header')}</p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color="#66aad7"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>7º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#338dc9"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>8º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#0071bc"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>9º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#00558d"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>10º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#00395E"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>11º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#032D44"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>12º</p>
                </BoxSectioInfo>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  flexbasis="0"
                  flexGrow={1}
                  flexdirection="column"
                  border={{ side: 'left', color: '#7ab239' }}
                  borderSm={{ side: 'top', color: '#7ab239' }}
                />
                <BoxSectioInfo
                  flexbasis="0"
                  flexGrow={1}
                  flexdirection="column"
                  border={{ side: 'left', color: '#0071bc' }}
                  colorTxt="#0071bc"
                  borderSm={{ side: 'top', color: '#0071bc' }}
                >
                  <p>{t('diversified_education')}</p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
          </ContainerBox>
        </ContainerData>
      </>
    );
  }
  if (countryId === 'sv') {
    return (
      <>
        <ContainerData>
          <ContainerBox>
            <ContainerBoxSection flexbasis="0" flexGrow={1}>
              <BoxSectioInfo
                color="#fdcccc"
                flexdirection="column"
                rotateTxt
                width
                colorTxt="#000"
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('pre_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color="#fc9999"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('first_grades')}
                    {' '}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#fb8080"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('penultimate_grade')}
                    {' '}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#BC6060"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>{t('last_grade')}</p>
                </BoxSectioInfo>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  flexbasis="0"
                  flexdirection="column"
                  border={{ side: 'left', color: '#BC6060' }}
                  colorTxt="#BC6060"
                  borderSm={{ side: 'top', color: '#BC6060' }}
                >
                  <p>
                    {t('pre_edu_label')}
                    {' '}
                    {t('or')}
                    {' '}
                    {t('nursery_school')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={2}>
              <BoxSectioInfo
                color="#caf0b0"
                flexdirection="column"
                rotateTxt
                width
                colorTxt="#000"
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('primary_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color="#afd188"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>1º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#95c161"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>2º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#7ab239"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>3º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#5c852b"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>4º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#3d591d"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>5º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#324914"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>6º</p>
                </BoxSectioInfo>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  flexbasis="0"
                  flexdirection="column"
                  border={{ side: 'left', color: '#7ab239' }}
                  colorTxt="#7ab239"
                  borderSm={{ side: 'top', color: '#7ab239' }}
                >
                  <p>
                    {t('basic_general_edu')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={2}>
              <BoxSectioInfo
                color="#cce3f2"
                flexdirection="column"
                rotateTxt
                width
                colorTxt="#000"
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('high_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color="#66aad7"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>7º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#338dc9"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>8º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#0071bc"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>9º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#00558d"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>10º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#00395E"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>11º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#032D44"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>12º</p>
                </BoxSectioInfo>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  flexbasis="0"
                  flexGrow={1}
                  flexdirection="column"
                  border={{ side: 'left', color: '#7ab239' }}
                  borderSm={{ side: 'top', color: '#7ab239' }}
                />
                <BoxSectioInfo
                  flexbasis="0"
                  flexGrow={1}
                  flexdirection="column"
                  border={{ side: 'left', color: '#0071bc' }}
                  colorTxt="#0071bc"
                  borderSm={{ side: 'top', color: '#0071bc' }}
                >
                  <p>{t('media_education')}</p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
          </ContainerBox>
        </ContainerData>
      </>
    );
  }
  if (countryId === 'gt') {
    return (
      <>
        <ContainerData>
          <ContainerBox>
            <ContainerBoxSection flexbasis="0" flexGrow={1}>
              <BoxSectioInfo
                color="#fdcccc"
                flexdirection="column"
                rotateTxt
                width
                colorTxt="#000"
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('pre_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color="#fc9999"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('first_grades')}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#fb8080"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('penultimate_grade')}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#BC6060"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('last_grade')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  flexbasis="0"
                  flexdirection="column"
                  border={{ side: 'left', color: '#fc9999' }}
                  borderSm={{ side: 'top', color: '#fc9999' }}
                  colorTxt="#fc9999"
                >
                  <p>
                    {t('initial')}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  flexbasis="0"
                  flexGrow={2}
                  flexdirection="column"
                  border={{ side: 'left', color: '#BC6060' }}
                  colorTxt="#BC6060"
                  borderSm={{ side: 'top', color: '#BC6060' }}
                >
                  <p>
                    {t('pre_primary')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={2}>
              <BoxSectioInfo
                color="#caf0b0"
                flexdirection="column"
                rotateTxt
                width
                colorTxt="#000"
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('primary_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color="#afd188"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>1º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#95c161"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>2º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#7ab239"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>3º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#5c852b"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>4º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#3d591d"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>5º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#324914"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>6º</p>
                </BoxSectioInfo>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  flexbasis="0"
                  flexdirection="column"
                  border={{ side: 'left', color: '#7ab239' }}
                  colorTxt="#7ab239"
                  borderSm={{ side: 'top', color: '#7ab239' }}
                >
                  <p>
                    {t('primary')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={2}>
              <BoxSectioInfo
                color="#cce3f2"
                flexdirection="column"
                rotateTxt
                width
                colorTxt="#000"
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('high_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color="#66aad7"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>7º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#338dc9"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>8º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#0071bc"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>9º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#00558d"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>10º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#00395E"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>11º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#032D44"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>12º</p>
                </BoxSectioInfo>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  flexbasis="0"
                  flexGrow={1}
                  flexdirection="column"
                  border={{ side: 'left', color: '#338dc9' }}
                  colorTxt="#338dc9"
                  borderSm={{ side: 'top', color: '#338dc9' }}
                >
                  <p>
                    {t('basic')}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  flexbasis="0"
                  flexGrow={1}
                  flexdirection="column"
                  border={{ side: 'left', color: '#0071bc' }}
                  colorTxt="#0071bc"
                  borderSm={{ side: 'top', color: '#0071bc' }}
                >
                  <p>
                    {t('diversified_education')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
          </ContainerBox>
        </ContainerData>
      </>
    );
  }
  if (countryId === 'hn') {
    return (
      <>
        <ContainerData>
          <ContainerBox>
            <ContainerBoxSection flexbasis="0" flexGrow={1}>
              <BoxSectioInfo
                color="#fdcccc"
                flexdirection="column"
                rotateTxt
                width
                colorTxt="#000"
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('pre_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color="#fc9999"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('first_grades')}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#fb8080"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('penultimate_grade')}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#BC6060"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('last_grade')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  flexbasis="0"
                  flexdirection="column"
                  border={{ side: 'left', color: '#fc9999' }}
                  borderSm={{ side: 'top', color: '#fc9999' }}
                  colorTxt="#fc9999"
                >
                  <p>
                    {t('pre_kindergarden')}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  flexbasis="0"
                  flexdirection="column"
                  border={{ side: 'left', color: '#fb8080' }}
                  colorTxt="#fb8080"
                  borderSm={{ side: 'top', color: '#fb8080' }}
                >
                  <p>
                    {t('kindergarden')}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  flexbasis="0"
                  flexdirection="column"
                  border={{ side: 'left', color: '#BC6060' }}
                  colorTxt="#BC6060"
                  borderSm={{ side: 'top', color: '#BC6060' }}
                >
                  <p>
                    {t('preparatory')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={1}>
              <BoxSectioInfo
                color="#caf0b0"
                flexdirection="column"
                rotateTxt
                width
                colorTxt="#000"
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('primary_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color="#afd188"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>1º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#95c161"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>2º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#7ab239"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>3º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#5c852b"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>4º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#3d591d"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>5º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#324914"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>6º</p>
                </BoxSectioInfo>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  flexbasis="0"
                  flexdirection="column"
                  border={{ side: 'left', color: '#7ab239' }}
                  colorTxt="#7ab239"
                  borderSm={{ side: 'top', color: '#7ab239' }}
                >
                  <p>
                    {t('primary_edu_label')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={1}>
              <BoxSectioInfo
                color="#cce3f2"
                flexdirection="column"
                rotateTxt
                width
                colorTxt="#000"
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('high_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color="#66aad7"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>7º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#338dc9"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>8º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#0071bc"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>9º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#00558d"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>10º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#00395E"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>11º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#032D44"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>12º</p>
                </BoxSectioInfo>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  flexbasis="0"
                  flexGrow={1}
                  flexdirection="column"
                  border={{ side: 'left', color: '#0071bc' }}
                  colorTxt="#0071bc"
                  borderSm={{ side: 'top', color: '#0071bc' }}
                >
                  <p>
                    {t('media_education')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
          </ContainerBox>
        </ContainerData>
      </>
    );
  }
  if (countryId === 'ni') {
    return (
      <>
        <ContainerData>
          <ContainerBox>
            <ContainerBoxSection flexbasis="0" flexGrow={1}>
              <BoxSectioInfo
                color="#fdcccc"
                flexdirection="column"
                rotateTxt
                width
                colorTxt="#000"
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('pre_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color="#fc9999"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('first_grades')}
                    {' '}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#fb8080"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('penultimate_grade')}
                    {' '}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#BC6060"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('last_grade')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  flexbasis="0"
                  flexdirection="column"
                  border={{ side: 'left', color: '#BC6060' }}
                  colorTxt="#BC6060"
                  borderSm={{ side: 'top', color: '#BC6060' }}
                >
                  <p>{t('pre_edu_label')}</p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={2}>
              <BoxSectioInfo
                color="#caf0b0"
                flexdirection="column"
                rotateTxt
                width
                colorTxt="#000"
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('primary_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color="#afd188"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>1º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#95c161"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>2º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#7ab239"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>3º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#5c852b"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>4º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#3d591d"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>5º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#324914"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>6º</p>
                </BoxSectioInfo>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  flexbasis="0"
                  flexdirection="column"
                  border={{ side: 'left', color: '#7ab239' }}
                  colorTxt="#7ab239"
                  borderSm={{ side: 'top', color: '#7ab239' }}
                >
                  <p>
                    {t('primary_edu_label')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={2}>
              <BoxSectioInfo
                color="#cce3f2"
                flexdirection="column"
                rotateTxt
                width
                colorTxt="#000"
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('high_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color="#66aad7"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>7º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#338dc9"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>8º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#0071bc"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>9º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#00558d"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>10º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#00395E"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>11º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#032D44"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>12º</p>
                </BoxSectioInfo>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  flexbasis="0"
                  flexGrow={1}
                  flexdirection="column"
                  border={{ side: 'left', color: '#0071bc' }}
                  colorTxt="#0071bc"
                  borderSm={{ side: 'top', color: '#0071bc' }}
                >
                  <p>{t('high_edu_label')}</p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
          </ContainerBox>
        </ContainerData>
      </>
    );
  }
  if (countryId === 'pa') {
    return (
      <>
        <ContainerData>
          <ContainerBox>
            <ContainerBoxSection flexbasis="0" flexGrow={1}>
              <BoxSectioInfo
                color="#fdcccc"
                flexdirection="column"
                rotateTxt
                width
                colorTxt="#000"
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('pre_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color="#fc9999"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>{t('first_grades')}</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#fb8080"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>{t('penultimate_grade')}</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#BC6060"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('last_grade')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  flexbasis="0"
                  flexdirection="column"
                  border={{ side: 'left', color: '#fc9999' }}
                  borderSm={{ side: 'top', color: '#fc9999' }}
                  colorTxt="#fc9999"
                >
                  <p>
                    {t('pre_kindergarden')}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  flexbasis="0"
                  flexGrow={2}
                  flexdirection="column"
                  border={{ side: 'left', color: '#BC6060' }}
                  colorTxt="#BC6060"
                  borderSm={{ side: 'top', color: '#BC6060' }}
                >
                  <p>
                    {t('kindergarden')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={2}>
              <BoxSectioInfo
                color="#caf0b0"
                flexdirection="column"
                rotateTxt
                width
                colorTxt="#000"
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('primary_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color="#afd188"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>1º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#95c161"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>2º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#7ab239"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>3º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#5c852b"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>4º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#3d591d"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>5º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#324914"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>6º</p>
                </BoxSectioInfo>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  flexbasis="0"
                  flexdirection="column"
                  border={{ side: 'left', color: '#7ab239' }}
                  colorTxt="#7ab239"
                  borderSm={{ side: 'top', color: '#7ab239' }}
                >
                  <p>
                    {t('primary_edu_label')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={2}>
              <BoxSectioInfo
                color="#cce3f2"
                flexdirection="column"
                rotateTxt
                width
                colorTxt="#000"
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('high_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color="#66aad7"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>7º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#338dc9"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>8º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#0071bc"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>9º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#00558d"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>10º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#00395E"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>11º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#032D44"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>12º</p>
                </BoxSectioInfo>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  flexbasis="0"
                  flexGrow={1}
                  flexdirection="column"
                  border={{ side: 'left', color: '#338dc9' }}
                  colorTxt="#338dc9"
                  borderSm={{ side: 'top', color: '#338dc9' }}
                >
                  <p>
                    {t('premedia')}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  flexbasis="0"
                  flexGrow={1}
                  flexdirection="column"
                  border={{ side: 'left', color: '#0071bc' }}
                  colorTxt="#0071bc"
                  borderSm={{ side: 'top', color: '#0071bc' }}
                >
                  <p>
                    {t('media_education')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
          </ContainerBox>
        </ContainerData>
      </>
    );
  }
  if (countryId === 'do') {
    return (
      <>
        <ContainerData>
          <ContainerBox>
            <ContainerBoxSection flexbasis="0" flexGrow={1}>
              <BoxSectioInfo
                color="#fdcccc"
                flexdirection="column"
                rotateTxt
                width
                colorTxt="#000"
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('pre_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color="#fc9999"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('first_grades')}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#fb8080"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('penultimate_grade')}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#BC6060"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('last_grade')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  flexbasis="0"
                  flexdirection="column"
                  border={{ side: 'left', color: '#fc9999' }}
                  borderSm={{ side: 'top', color: '#fc9999' }}
                  colorTxt="#fc9999"
                >
                  <p>
                    {t('initial')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={2}>
              <BoxSectioInfo
                color="#caf0b0"
                flexdirection="column"
                rotateTxt
                width
                colorTxt="#000"
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('primary_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color="#afd188"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>1º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#95c161"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>2º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#7ab239"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>3º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#5c852b"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>4º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#3d591d"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>5º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#324914"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>6º</p>
                </BoxSectioInfo>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  flexbasis="0"
                  flexdirection="column"
                  border={{ side: 'left', color: '#7ab239' }}
                  colorTxt="#7ab239"
                  borderSm={{ side: 'top', color: '#7ab239' }}
                >
                  <p>
                    {t('basic')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={2}>
              <BoxSectioInfo
                color="#cce3f2"
                flexdirection="column"
                rotateTxt
                width
                colorTxt="#000"
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('high_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color="#66aad7"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>7º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#338dc9"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>8º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#0071bc"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>9º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#00558d"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>10º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#00395E"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>11º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color="#032D44"
                  border={{ side: 'right', color: '#fff' }}
                  borderSm={{ side: 'bottom', color: '#fff' }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>12º</p>
                </BoxSectioInfo>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  flexbasis="0"
                  flexGrow={1}
                  flexdirection="column"
                  border={{ side: 'left', color: '#7ab239' }}
                  colorTxt="#7ab239"
                  borderSm={{ side: 'top', color: '#7ab239' }}
                />
                <BoxSectioInfo
                  flexbasis="0"
                  flexGrow={2}
                  flexdirection="column"
                  border={{ side: 'left', color: '#0071bc' }}
                  colorTxt="#0071bc"
                  borderSm={{ side: 'top', color: '#0071bc' }}
                >
                  <p>
                    {t('middle')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
          </ContainerBox>
        </ContainerData>
      </>
    );
  }
  return (
    <>
      <h2>Sin datos</h2>
    </>
  );
};

export default withTranslation('educational-data-structure')(Boxes);
