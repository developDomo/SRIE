import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './NavBar';
import Logo from './Logo';

const Header = ({ path }) => (
  <div className="header">
    <Container>
      <Row className="justify-content-md-between">
        <Col xs={{ order: 1, span: 3 }} sm={3}>
          <Logo path={path} />
        </Col>
        <Col xs={3} sm={{ order: 1, span: 7 }} className="navbox">
          <NavBar path={path} />
        </Col>
      </Row>
    </Container>

    <style type="text/css">
      {`
    @media (max-width: 575.98px) { 
      
      .navbar {
        padding: 0;
      }
    }

    .header {
      border-bottom: 2px solid #cecece;
      padding-top: 10px;
    }
    `}
    </style>

  </div>
);

export default Header;
