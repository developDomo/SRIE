import theme from "../../styles/theme";
import { Carousel, Row, Col } from "react-bootstrap";

const InfoSlider = () => (
  <>
    <Carousel>
      <Carousel.Item>
        <Row className="align-items-center"><Col>
          <h3>
            1-SRIE es una plataforma para la consulta del estado de los
            principales indicadores educativos en los países de la región de
            Centroamerica y Caribe, de mira al compromiso de cumplimiento de las
            metas de la Política Educativa Centroamericana (PEC 2013‐2030) y del
            Objetivo 4 de la Agenda 2030 de Objetivos de Desarrollo Sostenible.
          </h3>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row className="align-items-center"><Col>
          <h3>
            2-SRIE es una plataforma para la consulta del estado de los
            principales indicadores educativos en los países de la región de
            Centroamerica y Caribe, de mira al compromiso de cumplimiento de las
            metas de la Política Educativa Centroamericana (PEC 2013‐2030) y del
            Objetivo 4 de la Agenda 2030 de Objetivos de Desarrollo Sostenible.
          </h3>
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
    <style type="text/css">
      {`
    h3 {
      color: white;
      text-align: center;
      font-size: 1.3em;
    }
    `}
    </style>
    {/* <style jsx>{`
      h3 {
        color: white;
        text-align: center;
        font-size: 1.3em;
      }
      .carousel-item{
        height:200px;
      }
    `}</style> */}
  </>
);

export default InfoSlider;
