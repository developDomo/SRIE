import styled from 'styled-components';
import Link from 'next/link';
import { withTranslation } from '../../i18n';
import {
  gray1,
  txt,
  orangeLink,
  bordes,
  bckBanderas,
} from '../../styles/colors';
import arrow from '../../public/img/home/arrow_indicadores.svg';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 4em;
  background-color: ${gray1};
`;
const Title = styled.h3`
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  font-size: 1.1em;
  padding: 0.1em
  color: ${txt};
`;

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
    height: 15px;
  }

  & img {
    width: 15px;
  }

  &:hover {
    background-color: ${orangeLink};
    & > div {
      background-color: ${bckBanderas};
    }
  }
`;

const RelatedIndicator = ({ relatedIndicators, countryName, t }) => {
  console.log(countryName);
  return (
    <>
      {relatedIndicators?.map((indicator) => (
        <Link key={`indicador-${indicator.id}`} href={`/${countryName}/indicadores/${indicator.id}`} as={`/${countryName}/indicadores/${indicator.id}`}>
          <div className="col-lg-12 mb-3 p-0">
            <Container className="d-flex  justify-content-between p-0">
              <div className="col-lg-11 m-0 py-0 pl-4 pr-2">
                <Title>
                  {t(`indicators.${indicator.code}.name`)}
                </Title>
              </div>
              <IconContainer className=" ">
                <div />
              </IconContainer>
            </Container>
          </div>
        </Link>
      ))}
    </>
  );
};

RelatedIndicator.getInitialProps = ({ t, countryName }) => ({
  namespacesRequired: ['indicators'],
  t,
  countryName,
});

export default withTranslation('indicators')(RelatedIndicator);
