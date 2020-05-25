import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Header from '../components/layout/Header';
import Title from '../components/layout/Title';
import { txt, bordes, blue4 } from '../styles/colors';

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
export default class extends React.Component {
  static async getInitialProps({ pathname }) {
    const pa = pathname;
    return { pa };
  }

  render() {
    const { pa } = this.props;
    const array = [1, 2, 3, 4, 5];
    return (
      <>
        <Header path={pa} />
        {/* Header nav */}
        <Container>
          <Row>
            <div className="col-lg-12 pr-0 text-center p-2">
              <Title color="azul" type="title">
                EQUIPO RESPONSABLE
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
                    El desarrollo de la Serie Regional de Indicadores Educativos
                    se inició en 2009 con la conducción institucional y política
                    de CECC/SICA y la coordinación técnica de la Asociación
                    Civil Educación Para Todos, para el planteo de los
                    indicadores, la integración y revisión de aportes de los
                    equipos nacionales, diseño y desarrollo de la plataforma
                    web. Durante el año 2012 se realizó un nuevo proceso de
                    trabajo y mejora de las funcionalidades del sitio, así como
                    la producción de informes nacionales.
                  </p>
                  <p>
                    La información estadística es provista y actualizada en
                    forma institucional por equipos técnicos de las áreas de
                    estadística de los Ministerios de Educación de los países
                    miembros de la CECC/SICA cuyos aportes son cruciales para el
                    contenido del sitio. A lo largo de los años, diferentes
                    personas han formado parte de los equipos nacionales, las
                    cuales han realizado aportes valiosos y fundamentales. Las
                    dependencias institucionales de los Ministerios de Educación
                    que participan de este proceso son las siguientes:
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
                    El apoyo del equipo de gestión de la CECC/SICA ha sido un
                    soporte a lo largo del proceso, en particular con las tareas
                    técnicas de Fressie Aguilar y Alejandra Sanchez, y el
                    soporte administrativo de Nidia Abarca, y Giselle Barboza.
                  </p>
                  <p>
                    El equipo de la Asociación Civil Educación Para Todos es
                    coordinado en los aspectos técnicos e institucionales por
                    Irene Kit y Sergio España.
                  </p>
                  <p>
                    En el diseño conceptual de indicadores y definición
                    comunicacional, la tarea fue coordinada por Martín Scasso,
                    con la cooperación en distintos momentos de Verónica Marino,
                    Verona Batiuk, Lujan Vago, Irene Butcher y Daniela Cura.
                  </p>
                  <p>
                    El desarrollo de la Plataforma Informática estuvo a cargo de
                    Pablo De Vas con la cooperación de Ernesto Soler y Andrés
                    Suárez. Las propuestas gráficas son un aporte de Flavia
                    Cebrian, Miriam Sátollo y Gabriella Tenner.
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
  }
}
