import {
  Container, Row, Col,
} from 'react-bootstrap';
import Router, { withRouter } from 'next/router';
import { i18n, withTranslation } from '../../i18n';

const Footer = ({ t, router: { query } }) => (
  <>
    <Col className="footer" hidden={query.share === 'true'}>
      <Container>
        <Row>
          <Col xs={12} sm={7} className="d-none d-sm-block">
            <p className="p-text-fontslab">
              {t('footer.support')}
            </p>
            <Col className="imgfooter">
              <a href="http://uis.unesco.org/" target="_blank" rel="noreferrer">
                <img src="/img/home/logo-unesco-uis.png" alt="UNESCO" />
              </a>
              <a href="https://www.unicef.org/" target="_blank" rel="noreferrer">
                <img src="/img/home/logo-unicef.png" alt="UNICEF" />
              </a>
              <a href={`https://www.cepal.org/${i18n.language || 'es'}`} target="_blank" rel="noreferrer">
                <img src="/img/home/logo-cepal.png" alt="CEPAL" />
              </a>
            </Col>
          </Col>
          <Col xs={12} sm={1} />
          <Col xs={12} sm={4}>
            <a href="#0" target="_blank" className="d-block pb-2">
              <img src="/img/home/CECC-SICA.png" alt="CECC-SICA" />
            </a>
            <p className="small mb-2">
              <strong>
                {t('footer.address-label')}
              </strong>
              {t('footer.address')}
            </p>
            <p className="small mb-2">
              <strong>
                {t('footer.tel')}
              </strong>
              {' (506) 2248-0542.'}
            </p>
            <p className="small mb-2">
              <strong>
                {t('footer.email')}
              </strong>
            </p>
            <a href="https://www.facebook.com/CECCSG" target="_blank" rel="noreferrer" className="ico-fb">
              Facebook
            </a>
            <a href="https://twitter.com/CECCSICA" target="_blank" rel="noreferrer" className="ico-tw">
              Twitter
            </a>
          </Col>
        </Row>

      </Container>
    </Col>
    <Col className="copyright p-0" hidden={query.share === 'true'}>
      <p className="text-white text-center w-100 font-italic">
        <small>
          {t('footer.copy')}
        </small>
      </p>
    </Col>
    <style type="text/css">
      {`
      .footer {
        background-color: #cccccc;
        padding: 2em 0;
      }
      .imgfooter{
        display: flex;
        
      }
      .imgfooter a{
        display: block;
        
      }
      .imgfooter img{
        width: 90%;
        margin: auto;
        display: block;
      }
      .copyright p{
        background-color: #006A9B;
      }
      .p-text-fontslab{
        font-family: 'Roboto Slab', serif;
        margin-bottom: 15px;
      }
     
    `}
    </style>
    <style jsx>
      {`
    .ico-fb,.ico-tw{
        font-size: 0;
        padding: 10px;
        background-repeat: no-repeat;
        margin: 15px 5px 0 0;
        padding: 15px;
        border-radius: 50%;
        text-align: center;
        background-position: center; 
        transition: 0.2s
      }
      .ico-fb{
        background-image: url("/img/home/social-facebook-blue.svg");
        border: 1px solid #3B5998;
        background-size: 35%;
      }
      .ico-tw{
        background-image: url("/img/home/social-twitter-blue.svg");
        border: 1px solid #55ACEE;
        background-size: 60%;
      }
      .ico-fb:hover{
        background-image: url("/img/home/social-facebook-white.svg");
        border: 1px solid #3B5998;
        background-size: 35%;
        background-color: #3B5998;
      }
      .ico-tw:hover{
        background-image: url("/img/home/social-twitter-white.svg");
        border: 1px solid #55ACEE;
        background-size: 60%;
        background-color: #55ACEE;
      }
      p{
        color: #006A9B;
      }
    `}
    </style>
  </>
);

Footer.getInitialProps = async () => ({
  namespacesRequired: ['footer'],
});

export default withRouter(withTranslation('footer')(Footer));
