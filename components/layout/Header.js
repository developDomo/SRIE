import { Container, Row, Col } from 'react-bootstrap';
import theme from '../../styles/theme';
import NavBar from './NavBar';
import Navigation from './Navigation';
import Logo from './Logo';
import LanguageSelector from './LanguageSelector';

const Header = ({ path }) => (
  <div className="header">
    <Container>
      <Row className="justify-content-md-between">
        <Col xs={{ order: 1 }} sm={3}>
          <Logo path={path} />
        </Col>
        <Col xs={3} sm={{ order: 1, span: 9 }} className="navbox">
          <NavBar path={path} />
        </Col>
      </Row>
    </Container>

    <style jsx>
      {`
      
    `}
    </style>

    <style type="text/css">
      {`
    @media (max-width: 575.98px) { 
      
      .navbar {
        padding: 0;
      }
    }
    `}
    </style>

  </div>
);

export default Header;
