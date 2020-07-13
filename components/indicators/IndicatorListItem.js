import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {
  gray1,
  txt,
  black,
  green1,
  grayBck,
  blue,
  red,
  bordes,
  bckBanderas,
} from '../../styles/colors';
import arrow from '../../public/img/home/arrow_indicadores.svg';
import { withTranslation } from '../../i18n';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 130px;
  background-color: ${gray1};
`;
const Title = styled.h3`
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  font-size: 1.1em;
  color: ${txt};
`;
export const Tag = styled.h4`
  background-color: ${green1};
  font-family: 'Raleway', sans-serif;
  padding: 5px;
  color: white;
  font-size: 0.9em;
  text-align: center;
  width: max-content;
  margin-top: 15px;
`;
const Pec = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align:center;
  border-left: 2px solid ${grayBck};
  font-family: 'Roboto Slab', sans-serif;
  font-size: 1.6em;
  font-weight: 400;
  height: 90px;
  color: ${blue};
`;
const Ods = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 2px solid ${grayBck};
  font-family: 'Roboto Slab', sans-serif;
  font-size: 1.6em;
  font-weight: 400;
  height: 90px;
  color: ${red};
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 40px;
  border-left:  1px solid ${black};
  position: absolute;
  right: 0;
  & div {
    display: flex;
    justify-content: center;
    -webkit-mask-image: url(${arrow});
    mask-image: url(${arrow});
    background-color: ${bordes};
    background-size: 20px;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    mask-position: center;
    width: 15px;
    height: 15px;
  }

  & img {
    width: 15px;
  }

  &:hover {
    background-color: ${blue};
    & > div {
      background-color: ${bckBanderas};
    }
  }
`;

const IndicatorListItem = ({ t, indicator, countryName }) => (
  <Link key={`indicador-${indicator.code}`} href={`/${countryName}/indicadores/${indicator.id}`} as={`/${countryName}/indicadores/${indicator.id}`}>
    <div className="col-lg-12 mb-3 p-0  position-relative">
      <Container className="d-flex p-3">
        <div className="col-lg-8 m-0 p-0">
          <Title>
            {t(`indicators.${indicator.code}.name`)}
          </Title>
          {indicator.topics.map((topic) => (
            <Tag>{t(`topics:topics.${topic.code}`)}</Tag>
          ))}
        </div>
        <div className="col-lg-2 m-0 p-0">
          <Pec>{indicator.pec_goals.map((goal) => goal.code).join('/')}</Pec>
        </div>
        <div className="col-lg-2 m-0 p-0 pr-4">
          <Ods>{indicator.ods4_goals.map((goal) => goal.code).join('/')}</Ods>
        </div>
        <IconContainer className=" ">
          <div />
        </IconContainer>
      </Container>
    </div>
  </Link>
);

IndicatorListItem.getInitialProps = async () => ({
  namespacesRequired: ['indicators', 'topics'],
});

export default withTranslation(['indicators', 'topics'])(IndicatorListItem);
