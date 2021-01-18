import { Carousel, Row, Col } from 'react-bootstrap';
import { withTranslation } from '../../i18n';

const InfoSlider = ({ t }) => (
  <>
    <Carousel>
      <Carousel.Item>
        <Row className="align-items-center">
          <Col>
            <h3>
              {/* eslint-disable-next-line react/no-danger */}
              <div dangerouslySetInnerHTML={
                { __html: t('slide1', { interpolation: { escapeValue: false } }) }
              }
              />
            </h3>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row className="align-items-center">
          <Col>
            <h3>
              {/* eslint-disable-next-line react/no-danger */}
              <div dangerouslySetInnerHTML={
                { __html: t('slide2', { interpolation: { escapeValue: false } }) }
              }
              />
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

  </>
);

export default withTranslation('homepage')(InfoSlider);
