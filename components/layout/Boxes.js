import React from 'react';
import styled from 'styled-components';
import {
  blue,
  blueLight,
  blueTeapot,
  blueMarlin,
  blueNightTime,
  bluePrussian,
  blueDark,
  greenSeaweed,
  greenBase,
  greenJuniper,
  greenCrocodile,
  greenPickle,
  greenSage,
  greenSageGrey,
  greenSageLight,
  greenLight,
  black,
  white,
  grayBck,
  pink,
  pink2,
  pinkRosewood,
  pinkRose,
  pinkWatermelon,
} from '../../styles/colors';

import { withTranslation } from '../../i18n';

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
  align-self: stretch;
  width:  ${(props) => (props.width ? '25%' : '100%')};
  min-height: 80px;
  background-color: ${(props) => (props.color !== '' ? props.color : `${grayBck}`)}; 
  
  ${(props) => (props.border ? `border-${props.border.side} : 10px solid${props.border.color};padding: 0 5px;` : '')}
  
  ${(props) => (props.colorTxt ? `color: ${props.colorTxt};` : `color: ${white}; `)}
  
  & p {
      ${(props) => (props.rotateTxt ? 'transform: rotate(-90deg);' : '')}
      min-width: 99px;
      margin: 0;
      line-height: 14px;
      padding: 0 6px;
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
  padding: 0 15px;
`;
const Boxes = ({ countryId, t }) => {
  if (countryId === 'bz') {
    return (
      <>
        <ContainerData>
          <ContainerBox>
            <ContainerBoxSection flexbasis="0" flexGrow={1}>
              <BoxSectioInfo color={pinkRose} flexdirection="column" rotateTxt width colorTxt={black} flexdirectionSm="column" heightSm="40px">
                <p className="text-uppercase">{t('pre_edu_label_header')}</p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color={pinkWatermelon}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
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
                  color={pink}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
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
                  border={{ side: 'left', color: pinkRosewood }}
                  colorTxt={pinkRosewood}
                  borderSm={{ side: 'top', color: pinkRosewood }}
                >
                  <p>
                    {t('pre_edu_label')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={2}>
              <BoxSectioInfo
                color={greenLight}
                flexdirection="column"
                rotateTxt
                width
                colorTxt={black}
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">{t('primary_edu_label_header')}</p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color={greenSageGrey}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
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
                  color={greenSageLight}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
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
                  color={greenSage}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>1º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenPickle}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>2º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenBase}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>3º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenCrocodile}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>4º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenJuniper}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>5º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenSeaweed}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
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
                  border={{ side: 'left', color: greenBase }}
                  colorTxt={greenBase}
                  borderSm={{ side: 'top', color: greenBase }}
                >
                  <p>
                    {t('primary_edu_label')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={2}>
              <BoxSectioInfo
                color={blueLight}
                flexdirection="column"
                rotateTxt
                width
                colorTxt={black}
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('high_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color={blueTeapot}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>7º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blueMarlin}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>8º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blue}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>9º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blueNightTime}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>10º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={bluePrussian}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>11º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blueDark}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
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
                  border={{ side: 'left', color: blue }}
                  colorTxt={blue}
                  borderSm={{ side: 'top', color: blue }}
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
            <ContainerBoxSection flexbasis="0" flexGrow={2}>
              <BoxSectioInfo color={pinkRose} flexdirection="column" rotateTxt width colorTxt={black} flexdirectionSm="column" heightSm="40px">
                <p className="text-uppercase">{t('pre_edu_label_header')}</p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color={pinkWatermelon}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('babies')}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={pink}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('maternal')}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={pink2}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('interactive_group')}
                    {' '}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={pinkRosewood}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>{t('transition')}</p>
                </BoxSectioInfo>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  flexbasis="0"
                  flexGrow={3}
                  flexdirection="column"
                  border={{ side: 'left', color: pinkWatermelon }}
                  borderSm={{ side: 'top', color: pinkWatermelon }}
                  colorTxt={pinkWatermelon}
                >
                  <p>
                    {t('maternal_infant')}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  flexbasis="0"
                  flexdirection="column"
                  border={{ side: 'left', color: pinkRosewood }}
                  colorTxt={pinkRosewood}
                  borderSm={{ side: 'top', color: pinkRosewood }}
                >
                  <p>
                    {t('')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={3}>
              <BoxSectioInfo color={greenLight} flexdirection="column" rotateTxt width colorTxt={black} flexdirectionSm="column" heightSm="40px">
                <p className="text-uppercase">{t('primary_edu_label_header')}</p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color={greenSage}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>1º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenPickle}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>2º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenBase}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>3º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenCrocodile}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>4º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenJuniper}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>5º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenSeaweed}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
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
                  border={{ side: 'left', color: greenBase }}
                  colorTxt={greenBase}
                  borderSm={{ side: 'top', color: greenBase }}
                >
                  <p>{t('basic_general_edu')}</p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={3}>
              <BoxSectioInfo
                color={blueLight}
                flexdirection="column"
                rotateTxt
                width
                colorTxt={black}
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">{t('high_edu_label_header')}</p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color={blueTeapot}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>7º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blueMarlin}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>8º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blue}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>9º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blueNightTime}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>10º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={bluePrussian}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>11º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blueDark}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
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
                  border={{ side: 'left', color: greenBase }}
                  borderSm={{ side: 'top', color: greenBase }}
                />
                <BoxSectioInfo
                  flexbasis="0"
                  flexGrow={1}
                  flexdirection="column"
                  border={{ side: 'left', color: blue }}
                  colorTxt={blue}
                  borderSm={{ side: 'top', color: blue }}
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
                color={pinkRose}
                flexdirection="column"
                rotateTxt
                width
                colorTxt={black}
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('pre_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color={pinkWatermelon}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('first_grades')}
                    {' '}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={pink}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('penultimate_grade')}
                    {' '}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={pinkRosewood}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
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
                  border={{ side: 'left', color: pinkRosewood }}
                  colorTxt={pinkRosewood}
                  borderSm={{ side: 'top', color: pinkRosewood }}
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
                color={greenLight}
                flexdirection="column"
                rotateTxt
                width
                colorTxt={black}
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('primary_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color={greenSage}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>1º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenPickle}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>2º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenBase}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>3º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenCrocodile}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>4º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenJuniper}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>5º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenSeaweed}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
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
                  border={{ side: 'left', color: greenBase }}
                  colorTxt={greenBase}
                  borderSm={{ side: 'top', color: greenBase }}
                >
                  <p>
                    {t('basic_general_edu')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={2}>
              <BoxSectioInfo
                color={blueLight}
                flexdirection="column"
                rotateTxt
                width
                colorTxt={black}
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('high_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color={blueTeapot}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>7º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blueMarlin}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>8º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blue}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>9º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blueNightTime}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>10º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={bluePrussian}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>11º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blueDark}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
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
                  border={{ side: 'left', color: greenBase }}
                  borderSm={{ side: 'top', color: greenBase }}
                />
                <BoxSectioInfo
                  flexbasis="0"
                  flexGrow={1}
                  flexdirection="column"
                  border={{ side: 'left', color: blue }}
                  colorTxt={blue}
                  borderSm={{ side: 'top', color: blue }}
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
                color={pinkRose}
                flexdirection="column"
                rotateTxt
                width
                colorTxt={black}
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('pre_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color={pinkWatermelon}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('first_grades')}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={pink}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('penultimate_grade')}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={pinkRosewood}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
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
                  border={{ side: 'left', color: pinkWatermelon }}
                  borderSm={{ side: 'top', color: pinkWatermelon }}
                  colorTxt={pinkWatermelon}
                >
                  <p>
                    {t('initial')}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  flexbasis="0"
                  flexGrow={2}
                  flexdirection="column"
                  border={{ side: 'left', color: pinkRosewood }}
                  colorTxt={pinkRosewood}
                  borderSm={{ side: 'top', color: pinkRosewood }}
                >
                  <p>
                    {t('pre_primary')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={2}>
              <BoxSectioInfo
                color={greenLight}
                flexdirection="column"
                rotateTxt
                width
                colorTxt={black}
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('primary_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color={greenSage}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>1º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenPickle}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>2º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenBase}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>3º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenCrocodile}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>4º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenJuniper}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>5º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenSeaweed}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
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
                  border={{ side: 'left', color: greenBase }}
                  colorTxt={greenBase}
                  borderSm={{ side: 'top', color: greenBase }}
                >
                  <p>
                    {t('primary')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={2}>
              <BoxSectioInfo
                color={blueLight}
                flexdirection="column"
                rotateTxt
                width
                colorTxt={black}
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('high_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color={blueTeapot}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>7º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blueMarlin}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>8º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blue}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>9º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blueNightTime}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>10º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={bluePrussian}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>11º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blueDark}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
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
                  border={{ side: 'left', color: blueMarlin }}
                  colorTxt={blueMarlin}
                  borderSm={{ side: 'top', color: blueMarlin }}
                >
                  <p>
                    {t('basic')}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  flexbasis="0"
                  flexGrow={1}
                  flexdirection="column"
                  border={{ side: 'left', color: blue }}
                  colorTxt={blue}
                  borderSm={{ side: 'top', color: blue }}
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
                color={pinkRose}
                flexdirection="column"
                rotateTxt
                width
                colorTxt={black}
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('pre_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color={pinkWatermelon}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('first_grades')}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={pink}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('penultimate_grade')}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={pinkRosewood}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
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
                  border={{ side: 'left', color: pinkWatermelon }}
                  borderSm={{ side: 'top', color: pinkWatermelon }}
                  colorTxt={pinkWatermelon}
                >
                  <p>
                    {t('pre_kindergarden')}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  flexbasis="0"
                  flexdirection="column"
                  border={{ side: 'left', color: pink }}
                  colorTxt={pink}
                  borderSm={{ side: 'top', color: pink }}
                >
                  <p>
                    {t('kindergarden')}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  flexbasis="0"
                  flexdirection="column"
                  border={{ side: 'left', color: pinkRosewood }}
                  colorTxt={pinkRosewood}
                  borderSm={{ side: 'top', color: pinkRosewood }}
                >
                  <p>
                    {t('preparatory')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={1}>
              <BoxSectioInfo
                color={greenLight}
                flexdirection="column"
                rotateTxt
                width
                colorTxt={black}
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('primary_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color={greenSage}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>1º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenPickle}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>2º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenBase}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>3º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenCrocodile}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>4º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenJuniper}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>5º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenSeaweed}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
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
                  border={{ side: 'left', color: greenBase }}
                  colorTxt={greenBase}
                  borderSm={{ side: 'top', color: greenBase }}
                >
                  <p>
                    {t('primary_edu_label')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={1}>
              <BoxSectioInfo
                color={blueLight}
                flexdirection="column"
                rotateTxt
                width
                colorTxt={black}
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('high_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color={blueTeapot}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>7º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blueMarlin}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>8º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blue}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>9º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blueNightTime}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>10º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={bluePrussian}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>11º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blueDark}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
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
                  border={{ side: 'left', color: blue }}
                  colorTxt={blue}
                  borderSm={{ side: 'top', color: blue }}
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
                color={pinkRose}
                flexdirection="column"
                rotateTxt
                width
                colorTxt={black}
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('pre_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color={pinkWatermelon}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('first_grades')}
                    {' '}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={pink}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('penultimate_grade')}
                    {' '}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={pinkRosewood}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
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
                  border={{ side: 'left', color: pinkRosewood }}
                  colorTxt={pinkRosewood}
                  borderSm={{ side: 'top', color: pinkRosewood }}
                >
                  <p>{t('pre_edu_label')}</p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={2}>
              <BoxSectioInfo
                color={greenLight}
                flexdirection="column"
                rotateTxt
                width
                colorTxt={black}
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('primary_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color={greenSage}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>1º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenPickle}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>2º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenBase}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>3º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenCrocodile}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>4º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenJuniper}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>5º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenSeaweed}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
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
                  border={{ side: 'left', color: greenBase }}
                  colorTxt={greenBase}
                  borderSm={{ side: 'top', color: greenBase }}
                >
                  <p>
                    {t('primary_edu_label')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={2}>
              <BoxSectioInfo
                color={blueLight}
                flexdirection="column"
                rotateTxt
                width
                colorTxt={black}
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('high_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color={blueTeapot}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>7º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blueMarlin}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>8º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blue}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>9º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blueNightTime}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>10º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={bluePrussian}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>11º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blueDark}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
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
                  border={{ side: 'left', color: blue }}
                  colorTxt={blue}
                  borderSm={{ side: 'top', color: blue }}
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
                color={pinkRose}
                flexdirection="column"
                rotateTxt
                width
                colorTxt={black}
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('pre_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color={pinkWatermelon}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>{t('first_grades')}</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={pink}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>{t('penultimate_grade')}</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={pinkRosewood}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
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
                  border={{ side: 'left', color: pinkWatermelon }}
                  borderSm={{ side: 'top', color: pinkWatermelon }}
                  colorTxt={pinkWatermelon}
                >
                  <p>
                    {t('pre_kindergarden')}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  flexbasis="0"
                  flexGrow={2}
                  flexdirection="column"
                  border={{ side: 'left', color: pinkRosewood }}
                  colorTxt={pinkRosewood}
                  borderSm={{ side: 'top', color: pinkRosewood }}
                >
                  <p>
                    {t('kindergarden')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={2}>
              <BoxSectioInfo
                color={greenLight}
                flexdirection="column"
                rotateTxt
                width
                colorTxt={black}
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('primary_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color={greenSage}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>1º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenPickle}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>2º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenBase}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>3º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenCrocodile}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>4º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenJuniper}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>5º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenSeaweed}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
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
                  border={{ side: 'left', color: greenBase }}
                  colorTxt={greenBase}
                  borderSm={{ side: 'top', color: greenBase }}
                >
                  <p>
                    {t('primary_edu_label')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={2}>
              <BoxSectioInfo
                color={blueLight}
                flexdirection="column"
                rotateTxt
                width
                colorTxt={black}
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('high_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color={blueTeapot}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>7º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blueMarlin}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>8º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blue}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>9º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blueNightTime}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>10º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={bluePrussian}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>11º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blueDark}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
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
                  border={{ side: 'left', color: blueMarlin }}
                  colorTxt={blueMarlin}
                  borderSm={{ side: 'top', color: blueMarlin }}
                >
                  <p>
                    {t('premedia')}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  flexbasis="0"
                  flexGrow={1}
                  flexdirection="column"
                  border={{ side: 'left', color: blue }}
                  colorTxt={blue}
                  borderSm={{ side: 'top', color: blue }}
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
                color={pinkRose}
                flexdirection="column"
                rotateTxt
                width
                colorTxt={black}
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('pre_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color={pinkWatermelon}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('first_grades')}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={pink}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>
                    {t('penultimate_grade')}
                  </p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={pinkRosewood}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
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
                  border={{ side: 'left', color: pinkWatermelon }}
                  borderSm={{ side: 'top', color: pinkWatermelon }}
                  colorTxt={pinkWatermelon}
                >
                  <p>
                    {t('initial')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={2}>
              <BoxSectioInfo
                color={greenLight}
                flexdirection="column"
                rotateTxt
                width
                colorTxt={black}
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('primary_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color={greenSage}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>1º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenPickle}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>2º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenBase}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>3º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenCrocodile}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>4º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenJuniper}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>5º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={greenSeaweed}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
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
                  border={{ side: 'left', color: greenBase }}
                  colorTxt={greenBase}
                  borderSm={{ side: 'top', color: greenBase }}
                >
                  <p>
                    {t('basic')}
                  </p>
                </BoxSectioInfo>
              </BoxSectioInfo>
            </ContainerBoxSection>
            <ContainerBoxSection flexbasis="0" flexGrow={2}>
              <BoxSectioInfo
                color={blueLight}
                flexdirection="column"
                rotateTxt
                width
                colorTxt={black}
                flexdirectionSm="column"
                heightSm="40px"
              >
                <p className="text-uppercase">
                  {t('high_edu_label_header')}
                </p>
              </BoxSectioInfo>
              <BoxSectioInfo flexdirection="column">
                <BoxSectioInfo
                  color={blueTeapot}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>7º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blueMarlin}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>8º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blue}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>9º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blueNightTime}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>10º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={bluePrussian}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
                  flexdirection="column"
                  flexdirectionSm="column"
                >
                  <p>11º</p>
                </BoxSectioInfo>
                <BoxSectioInfo
                  color={blueDark}
                  border={{ side: 'right', color: white }}
                  borderSm={{ side: 'bottom', color: white }}
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
                  border={{ side: 'left', color: greenBase }}
                  colorTxt={greenBase}
                  borderSm={{ side: 'top', color: greenBase }}
                />
                <BoxSectioInfo
                  flexbasis="0"
                  flexGrow={2}
                  flexdirection="column"
                  border={{ side: 'left', color: blue }}
                  colorTxt={blue}
                  borderSm={{ side: 'top', color: blue }}
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
