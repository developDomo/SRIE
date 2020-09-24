import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Row from 'react-bootstrap/Row';
import { withTranslation } from '../../i18n';
import {
  gray1,
  grayBck,
  txt,
  orangeLink,
  bordes,
  bckBanderas,
} from '../../styles/colors';

import arrow from '../../public/img/home/arrow_indicadores.svg';


const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  border-left: 1px solid #1D2D49;
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
    min-height: 15px;
  }

  & img {
    width: 15px;
  }

  
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  min-height: 4em;
  background-color: ${gray1};
  cursor: pointer;

  &:hover {
    background-color: ${grayBck};
  }
  
  &:hover ${IconContainer} {
    background-color: ${orangeLink};
    & > div {
      background-color: ${bckBanderas};
    }
  }
`;
const Title = styled.h3`
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  font-size: 1.1em;
  padding: 0.1em;
  color: ${txt};
`;


const RelatedIndicatorList = ({ relatedIndicators, countryName, t }) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <>
      {relatedIndicators?.map((indicator) => (
        <Link
          key={`indicador-${indicator.id}`}
          href={`/${countryName}/indicadores/${indicator.id}`}
          as={`/${countryName}/indicadores/${indicator.id}`}
        >
          <Row className="mb-3 p-0 col-10 center mx-auto">
            <Container
              className="d-flex flex-row justify-content-between p-0"
            >
              <div className="col-md-11 col-8">
                <Title>
                  {t(`indicators.${indicator.id}.metadata.title`)}
                </Title>
              </div>
              <IconContainer className="col-md-1 col-2">
                <div />
              </IconContainer>
            </Container>
          </Row>
        </Link>
      ))}
    </>
  );
};

RelatedIndicatorList.getInitialProps = ({ t, countryName }) => ({
  namespacesRequired: ['indicators'],
  t,
  countryName,
});

export default withTranslation('indicators')(RelatedIndicatorList);
