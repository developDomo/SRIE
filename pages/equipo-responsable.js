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
  text-align: center;
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
  const contributorsCountries = [{
    country: 'Belice',
    title: t('policyAndPlanningUnit'),
    email: 'lore_ipsu@dolorsit.com',
  },
  {
    country: 'Costa Rica',
    title: t('institutionalPlanningDirectorateStatisticalAnalysisDepartment'),
    email: 'lore_ipsu@dolorsit.com',
  },
  {
    country: 'El Salvador',
    title: t('planningDirectorateStatisticsDepartment'),
    email: 'lore_ipsu@dolorsit.com',
  },
  {
    country: 'Guatemala',
    title: t('educationalPlanningDirectorateStatisticsDepartment'),
    email: 'lore_ipsu@dolorsit.com',
  },
  {
    country: 'Honduras',
    title: t('managementPlanningAndEvaluationUnitInfotechnologyUnit'),
    email: 'lore_ipsu@dolorsit.com',
  },
  {
    country: 'Nicaragua',
    title: t('generalPlanningDirectorateStatisticsDirectorate'),
    email: 'lore_ipsu@dolorsit.com',
  },
  {
    country: 'Panamá',
    title: t('nationalDirectorateOfEducationalPlanningStatisticsDepartment'),
    email: 'lore_ipsu@dolorsit.com',
  },
  {
    country: 'República Dominicana',
    title: t('officeOfEducationalPlanningAndDevelopmentDepartmentOfStatistics'),
    email: 'lore_ipsu@dolorsit.com',
  },
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
      <div className="bg-light mt-4 pb-5">
        <Row>
          <Container>
            <Row className="d-flex justify-content-center mt-5 mb-5 ">
              <div className="col-sm-8">
                <p>
                  {t('p1')}
                </p>
                <p>
                  {t('p2')}
                </p>
              </div>
              <div className="col-sm-8 bg-white mb-4 mt-3 pt-3 pb-3">
                {contributorsCountries.map((item) => (
                  <DirectoryContainer>
                    <TitlePais className="col-lg-3 ">
                      <h3>{item.country}</h3>
                    </TitlePais>
                    <InfoDirectoryContainer className="col-lg-9 ">
                      <h3>
                        {item.title}
                      </h3>
                      <p>
                        {`${t('email')}:`}
                        <a href={`mail:${item.email}`}>
                          {item.email}
                        </a>
                      </p>
                    </InfoDirectoryContainer>
                  </DirectoryContainer>
                ))}
              </div>
              <div className="col-sm-8">
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
      </div>
    </>
  );
};

ResponsibleTeam.getInitialProps = async ({ pathname: path }) => {
  const res = await fetch(`${process.env.API_URL}/api/countries`);
  const countries = await res.json();

  return {
    namespacesRequired: ['responsibleTeam'],
    countries,
    path,
  };
};

export default withTranslation('responsibleTeam')(ResponsibleTeam);
