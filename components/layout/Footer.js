import theme from "../../styles/theme";
import { Container,Row,Col,Image } from "react-bootstrap";
import Link from "next/link";

const Footer = () => (
  <>
  <Col className="footer">
    <Container>
      <Row>
        <Col xs={12} sm={6} className="d-none d-sm-block">
          <p>Con el apoyo de:</p>
          <Col className="imgfooter">
            <a href="#" target="_blank"> 
              <img src="/img/home/logo-UNESCO_UIS.png" alt="UNESCO"/></a>
            <a href="#" target="_blank"> 
              <img src="/img/home/logo-unicef.png" alt="UNICEF"/></a>
            <a href="#" target="_blank"> 
              <img src="/img/home/logo-CEPAL.png" alt="CEPAL"/></a>
          </Col>
        </Col>
        <Col xs={12} sm={2}></Col>
        <Col xs={12} sm={4} >
          <a href="#" target="_blank" className="d-block pb-2"> 
            <img src="/img/home/CECC-SICA.png" alt="CECC-SICA"/>
          </a>
          
          <p className="small mb-2">Adipiscing elit, sed diam nonummy nibh euismod Tincidunt ut laoreet Dolore magna aliquam erat volutpat Sed diam nonummy nibh</p>
          <a href="#" target="_blank" className="ico-fb"> 
            Facebook
          </a>
          <a href="#" target="_blank" className="ico-tw"> 
            Twitter
          </a>
        </Col>
      </Row>
      
    </Container>
  </Col>
  <Col className="copyright p-0">
    <p className="text-white text-center w-100 font-italic"><small> Derechos reservados</small></p>
  </Col>
  <style type="text/css">{`
      .footer {
        background-color: #cccccc;
        padding: 2em 0;
      }
      .imgfooter{
        display: flex;
        justify-content: space-between;
      }
      .copyright p{
        background-color: #006A9B;
      }
     
    `}</style>
    <style jsx>{`
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
    `}</style>
  </>
);

export default Footer;
