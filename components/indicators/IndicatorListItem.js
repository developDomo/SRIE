import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {
  gray1,
  txt,
  green1,
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
  width: 100px;
  margin-top: 15px;
`;
const Pec = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid ${txt};
  font-family: 'Roboto Slab', sans-serif;
  font-size: 1.6em;
  font-weight: 400;
  height: 100px;
  width: 20%;
  color: ${blue};
`;
const Ods = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid ${txt};
  border-right: 1px solid ${txt};
  font-family: 'Roboto Slab', sans-serif;
  font-size: 1.6em;
  font-weight: 400;
  width: 16.5%;
  height: 100px;
  color: ${red};
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;

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
    <div className="col-lg-12 mb-3 p-0">
      <Container className="d-flex  justify-content-between p-0">
        <div className="col-lg-7 m-0 py-0 pl-4 pr-2">
          <Title>
            {t(`indicators.${indicator.code}.name`)}
          </Title>
          {indicator.topics.map((topic) => (
            <Tag>{t(`topics:topics.${topic.code}`)}</Tag>
          ))}
        </div>
        <Pec>{indicator.pec_goals.map((goal) => goal.code).join('/')}</Pec>
        <Ods>4.2</Ods>
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