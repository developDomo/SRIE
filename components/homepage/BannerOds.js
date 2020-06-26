import { Row, Col } from 'react-bootstrap';
import { withTranslation } from '../../i18n';

const BannerOds = ({ t }) => (
  <>
    <a className="BannerOds-link" href="https://www.un.org/sustainabledevelopment/es/education/" target="_blank" rel="noreferrer">
      <Row className="BannerOds container-fluid py-5 py-sm-4 py-lg-1 ">
        <Row className="align-items-center">
          <Col xs={12} md={12} lg={6}>
            <h3 className="text-center text-lg-left">{t('textSilder')}</h3>
          </Col>
          <Col xs={12} md={7} lg={4} className="d-flex d-sm-block justify-content-center justify-content-sm-end">
            <img src="/img/home/4Educacion_de_calidad.svg" className="col-10 img-fluid d-block m-xs-auto float-sm-right" alt="ODS4" />
          </Col>
          <Col xs={4} sm={2} md={3} lg={2} className="d-none d-sm-block">
            <img src="/img/home/ico-libro-banner-ODS4.svg" className="img-fluid" alt="ODS4" />
          </Col>
        </Row>

        <style type="text/css">
          {`
            a.BannerOds-link:hover{
              text-decoration: none;
            }
            .BannerOds {
                background-image: url(/img/home/bannerODS4-xs.png);
                background-size: contain;
                color: white;
                margin: 2em 0;
                padding: 15px;
            }
            @media (min-width: 576px) { 
              .BannerOds {
                background-image: url(/img/home/bannerODS4.jpg);
                background-size: cover;
              }
            }
            .BannerOds h3 {
                font-size: 1.3em;
                text-align: left;
                font-family: 'Roboto', sans-serif;
            }
            .txt-nun{
                font-size: 4em;
            }
            .BannerOds p{
                margin-bottom: 0;
            }
            .txt-descrip p {
                font-size: 1.5em;
                font-weight: bold;
                line-height: 32px;
                text-transform: uppercase;
            }
        `}
        </style>
      </Row>
    </a>
  </>
);
export default withTranslation('homepage')(BannerOds);
