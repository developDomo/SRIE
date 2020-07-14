import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Title from '../components/layout/Title';

import { withTranslation } from '../i18n';
import { txt, bordes, blue4 } from '../styles/colors';
import CountryHeader from '../components/countries/CountryHeader';

const DirectoryContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  height: 100px;
  /* &:first-child {
    padding-top: 10px;
  }
  &:last-child {
    padding-bottom: 10px;
  } */
`;
const TitlePais = styled.div`
  border-right: 0.5px solid ${txt};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  & h3 {
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    font-size: 1.1em;
  }
`;
const InfoDirectoryContainer = styled.div`
  & h3 {
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 1.1em;
    color: ${txt};
  }
  & p {
    font-family: 'Raleway', sans-serif;
    font-style: italic;
    font-size: 1.1em;
    color: ${bordes};
  }
  & a {
    font-family: 'Raleway', sans-serif;
    font-style: italic;
    font-size: 1.1em;
    color: ${blue4};
    margin-left: 5px;
  }
`;
const ResponsibleTeam = ({ countries, t, path }) => {
  const array = [1, 2, 3, 4, 5];
  const navigation = [
    { key: 'navigation.pages.country-data' },
  ];

  return (
    <>
      <Container>
        <Row>
          <div className="col-lg-12 pr-0 text-center p-2">
            <Title color="blue" type="title">
              {t('title')}
            </Title>
          </div>
        </Row>
      </Container>
      <Container fluid className="bg-light mt-4 pb-5">
        <Row>
          <Container>
            <Row className="d-flex justify-content-betweent mt-5 mb-5 ">
              <div className="col-lg-12 font">
                <p>
                  {t('p1')}
                </p>
                <p>
                  {t('p2')}
                </p>
              </div>
              <div className="col-lg-12 bg-white mb-4 mt-3 pt-3 pb-3">
                {array.map((item) => (
                  <DirectoryContainer>
                    <TitlePais className="col-lg-3 ">
                      <h3>Costa Rica</h3>
                    </TitlePais>
                    <InfoDirectoryContainer className="col-lg-9 ">
                      <h3>
                        Dirección de Planificación Institucional -
                        Departamento de Análisis Estadístico
                      </h3>
                      <p>
                        correo electrónico:
                        <a href="mail:lore_ipsu@dolorsit.com">
                          lore_ipsu@dolorsit.com
                        </a>
                      </p>
                    </InfoDirectoryContainer>
                  </DirectoryContainer>
                ))}
              </div>
              <div className="font">
                <p>
                  {t('p3')}
                </p>
                <p>
                  {t('p4')}
                </p>
                <p>
                  {t('p5')}
                </p>
                <p>
                  {t('p6')}
                </p>
              </div>
            </Row>
          </Container>
        </Row>
      </Container>
      <style jsx>
        {`
          .font {
            font-family: 'Raleway', sans-serif;
            font-size: 1.1em;
          }
        `}
      </style>
    </>
  );
};

ResponsibleTeam.getInitialProps = async ({ pathname: path }) => {
  const res = await fetch(`${process.env.API_URL}/api/countries`);
  const countries = await res.json();

  return {
    namespacesRequired: ['reposibleTeam'],
    countries,
    path,
  };
};

export default withTranslation('reposibleTeam')(ResponsibleTeam);
