import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import upperFirst from 'lodash/upperFirst';
import Title from '../components/layout/Title';
import { withTranslation } from '../i18n';
import { blue4, bordes, txt } from '../styles/colors';
import CountryHeader from '../components/countries/CountryHeader';

import { ContainerPage } from '../components/layout/ContainerPageContent';
import CountryService from '../services/Country.service';

const DirectoryContainer = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    height: 100px;
`;
const TitlePais = styled.div`
    display: flex;

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
        margin: 0 0 2px 0;
    }

    & p {
        font-family: 'Raleway', sans-serif;
        font-size: 1.1em;
        color: ${bordes};
    }

    & a {
        font-family: 'Raleway', sans-serif;
        font-style: italic;
        font-size: 1.1em;
        color: ${blue4};
    }

    & strong {
        display: block;
    }
`;

const ResponsibleTeam = ({
  t,
}) => {
  const contributorsCountries = [{
    country: 'Belice',
    title: t('policyAndPlanningUnit'),
    email: 'yvonne.flowers@moe.gov.bz',
    contact: 'Yvonne Flowers',
  },
  {
    country: 'Costa Rica',
    title: t('institutionalPlanningDirectorateStatisticalAnalysisDepartment'),
    email: 'dixie.brenes.vindas@mep.go.cr',
    contact: 'Dixie Brenes Vindas',
  },
  {
    country: 'El Salvador',
    title: t('planningDirectorateStatisticsDepartment'),
    email: 'carla.martinez@mined.gob.sv',
    contact: 'Carla Martínez',
  },
  {
    country: 'Guatemala',
    title: t('educationalPlanningDirectorateStatisticsDepartment'),
    email: 'jcorellana@mineduc.gob.gt',
    contact: 'Julio Cesar Orellana Orantes',
  },
  {
    country: 'Honduras',
    title: t('managementPlanningAndEvaluationUnitInfotechnologyUnit'),
    email: 'kathia.funes@se.gob.hn',
    contact: 'Kathia Funes',
  },
  {
    country: 'Nicaragua',
    title: t('generalPlanningDirectorateStatisticsDirectorate'),
    email: 'mendietav@mined.gob.ni',
    contact: 'Ruth Valeria Mendieta',
  },
  {
    country: 'Panamá',
    title: t('nationalDirectorateOfEducationalPlanningStatisticsDepartment'),
    email: 'carmen.forero@meduca.gob.pa',
    contact: 'Carmen Forero',
  },
  {
    country: 'República Dominicana',
    title: t('officeOfEducationalPlanningAndDevelopmentDepartmentOfStatistics'),
    email: 'henry.mercedes@minerd.gob.do',
    contact: 'Henry Mercedes Vales',
  },
  ];

  const breadcrumbPage = {
    name: t('responsibleTeam'),
    url: 'equipo-responsable',
  };

  return (
    <>
      <CountryHeader
        page={breadcrumbPage}
        active="country-data"
      />

      <Title color="blue" type="title" textCenter>
        {t('title')}
      </Title>
      <ContainerPage className="bg-light">
        <Container>
          <Row className="d-sm-flex justify-content-center">
            <Container>
              <Row className="d-flex justify-content-center mt-5 mb-5 ">
                <div className="col-sm-8">
                  <p>
                    {t('p1')}
                  </p>
                  <p>
                    {t('p2')}
                  </p>
                  <p>
                    {t('p3')}
                  </p>
                  <p>
                    {t('p4')}
                  </p>
                </div>
                <div className="col-sm-8 mb-4 mt-3 pt-3 pb-3">
                  {contributorsCountries.map(({
                    country,
                    title,
                    contact,
                    email,
                  }) => (
                    <Row className="mb-2 pt-2 bg-white">
                      <TitlePais className="col-12">
                        <h3>{country}</h3>
                      </TitlePais>
                      <InfoDirectoryContainer className="col-12">
                        <h3 className="mb-3">
                          {title}
                        </h3>
                        <p className="">
                          <strong>
                            {`${upperFirst(t('contact'))}: `}
                          </strong>
                          {contact}
                        </p>
                        <p>
                          <strong>
                            {`${upperFirst(t('email'))}:`}
                          </strong>
                          <a href={`mail:${email}`}>
                            {email}
                          </a>
                        </p>
                      </InfoDirectoryContainer>
                    </Row>
                  ))}
                </div>
                <div className="col-sm-8">
                  <p>
                    {t('p5')}
                  </p>
                </div>
              </Row>
            </Container>
          </Row>
        </Container>
      </ContainerPage>
    </>
  );
};

export const getServerSideProps = async () => {
  const countries = await CountryService.findAll();
  return {
    props: { countries },
  };
};

ResponsibleTeam.defaultProps = { i18nNamespaces: ['responsibleTeam'] };

export default withTranslation('responsibleTeam')(ResponsibleTeam);
