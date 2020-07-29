import { Carousel, Row, Col } from 'react-bootstrap';
import { withTranslation } from '../../i18n';

const InfoSlider = ({ t }) => (
  <>
    <Carousel>
      <Carousel.Item>
        <Row className="align-items-center">
          <Col>
            <h3>
              {t('slide1')}
            </h3>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row className="align-items-center">
          <Col>
            <h3>
              {t('slide2')}
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

export default withTranslation('homepage')(InfoSlider);
