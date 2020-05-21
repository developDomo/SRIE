import Link from 'next/link'
import Header from '../components/layout/Header'
import { Container, Row, Breadcrumb } from 'react-bootstrap'

import {
  ButtonNav,
  ButtonNavWithIcon,
  ButtonNavIndicadores,
} from '../components/layout/Button'
import CrFlag from '../public/img/home/bandera-costa_rica.png'
import FlagNameComponent from '../components/layout/FlagNameComponent'
import IndicadorComponent, {
  Tag,
} from '../components/layout/IndicadorComponent'
import NavSecundaryCountries from '../components/layout/NavSecundaryCountries'
import Title from '../components/layout/Title'
import PecIcon from '../public/img/home/icon_pec_indicadores.svg'
import styled from 'styled-components'
import { txt } from '../theme/colors'
import { GraficoCompuestoComponent } from '../components/layout/Grafico'

const IconImg = styled.img`
  width: 18px;
  height: 18px;
`
const Divider = styled.span`
  display: block;
  width: 100%;
  border-bottom: 1px solid ${txt};
  margin-top: 20px;
`
export default class extends React.Component {
  static async getInitialProps({ pathname }) {
    let pa = pathname
    return { pa }
  }

  render() {
    const { pa } = this.props
    const array = [1, 2, 3, 4, 5]
    return (
      <>
        <Header path={pa} />
        <NavSecundaryCountries />
        <Container className='p-0'>
          <Breadcrumb className='bg-white-ol'>
            <Breadcrumb.Item className='bg-white' href='#'>
              Inicio
            </Breadcrumb.Item>
            <Breadcrumb.Item href='https://getbootstrap.com/docs/4.0/components/breadcrumb/'>
              Costa Rica
            </Breadcrumb.Item>
            <Breadcrumb.Item href='https://getbootstrap.com/docs/4.0/components/breadcrumb/'>
              Indicadores Educativos
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              Tasa de participación en la enseñanza organizada un año antes de
              la edad oficial de ingreso...
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
        <Container>
          <Row className='d-flex justify-content-betweent mt-5 mb-5'>
            <div className='col-lg-4 '>
              <FlagNameComponent icon={CrFlag}>Costa Rica</FlagNameComponent>
            </div>
            <Row className='col-lg-8 d-flex justify-content-end p-0'>
              <div className='col-lg-2 pr-0'>
                <ButtonNav amarillo>Dato Pais</ButtonNav>
              </div>

              <div className='col-lg-3 pr-0'>
                <ButtonNav azul active>
                  INDICADORES EDUCATIVOS
                </ButtonNav>
              </div>
              <div className='col-lg-2 pr-0'>
                <ButtonNav verde>AVANCE 2021</ButtonNav>
              </div>
            </Row>
            <Divider></Divider>
          </Row>
        </Container>
        <Container>
          <Row>
            <div className='col-lg-12 mb-3 text-center'>
              <Title color='negro' type='title'>
                Indicadores Educativos
              </Title>
            </div>
          </Row>
        </Container>

        <Container fluid className='bg-light p-5'>
          <Row>
            <Container>
              <GraficoCompuestoComponent />
            </Container>
          </Row>
        </Container>
        <style type='text/css'>{`
      .imgUrlCountry img{
        width: 50px;
        height: 30px;
        margin-top: 7px;
      }
      .bg-white-ol > ol {
        background:white;
        padding:0;
      }
    `}</style>
      </>
    )
  }
}
