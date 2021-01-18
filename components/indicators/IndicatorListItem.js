import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import {
  gray1,
  grayBck,
  txt,
  blue,
  red,
  bordes,
  bckBanderas,
} from '../../styles/colors';
import arrow from '../../public/img/home/arrow_indicadores.svg';
import { withTranslation } from '../../i18n';
import TopicTag from '../layout/TopicTag';

const ItemContainer = styled(Container)`
  flex-wrap: wrap;
  align-items: center;
  cursor: pointer;
  background-color:${(props) => (props.onHover ? grayBck : gray1)}; 
`;
const Title = styled.h3`
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  font-size: 1.1em;
  color: ${txt};
`;

const Pec = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid ${txt};
  font-family: 'Roboto Slab', sans-serif;
  font-size: 1.6em;
  font-weight: 400;
  height: 100%;
  color: ${blue};
`;
const Ods = styled(Pec)`
  color: ${red};
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  background-color:${(props) => (props.onHover ? blue : 'transparent')}; 
  height: 100%;
  border-left: ${(props) => (props.onHover ? '1px solid transparent' : '1px solid black;')};

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
  & > div {
    background-color: ${(props) => (props.onHover ? bckBanderas : bordes)};
  }
  & img {
    width: 15px;
  }
`;

const IndicatorListItem = ({ t, indicator, countryName }) => {
  const [onHover, setOnHover] = useState(false);

  const {
    id, code, topics, pec_goals, ods4_goals,
  } = indicator;

  const onChangeOnHover = () => {
    setOnHover(!onHover);
  };

  return (
    <Link key={`indicador-${code}`} href={`/${countryName}/indicadores/${id}`} as={`/${countryName}/indicadores/${id}`}>
      <ItemContainer
        className=" mb-3 p-0"
        onMouseOver={onChangeOnHover}
        onFocus={onChangeOnHover}
        onMouseOut={onChangeOnHover}
        onBlur={onChangeOnHover}
        onHover={onHover}
      >
        <Row>
          <Col className="m-0 py-0 pl-4">
            <Title className="pt-2 pb-1">
              {t(`indicators.${code}.name`)}
            </Title>
            {topics.map((topic) => (
              <TopicTag topicCode={topic.code} />
            ))}
          </Col>
          <Col className="d-none d-sm-block px-0" sm={2}>
            <Pec>{pec_goals.map((goal) => goal.code).join('/')}</Pec>
          </Col>
          <Col className="d-none d-sm-block px-0" sm={2}>
            <Ods>{ods4_goals.map((goal) => goal.code).join('/')}</Ods>
          </Col>
          <Col xs={3} sm={2} lg={1}>
            <IconContainer onHover={onHover}>
              <div />
            </IconContainer>
          </Col>
        </Row>
      </ItemContainer>
    </Link>
  );
};

IndicatorListItem.getInitialProps = async () => ({
  namespacesRequired: ['indicators', 'topics'],
});

export default withTranslation(['indicators', 'topics'])(IndicatorListItem);
