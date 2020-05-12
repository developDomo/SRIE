import theme from "../../styles/theme";
import NavBar from "../layout/NavBar";
// import Navigation from "../layout/Navigation";
import Logo from "../layout/Logo";
import { Container, Row, Col } from "react-bootstrap";

const Header = props => (
  <div className="header">
    <Container>
      <Row className="justify-content-md-between">
        <Col xs={{ order: 1 }} sm={3} >
          <Logo path={props.path} />
        </Col>
        <Col xs={3} sm={{order:1,span:'auto'}} className="navbox">
          <NavBar path={props.path}/>
        </Col>
      </Row>
    </Container>

    <style jsx>{`
      
    `}</style>

    <style type="text/css">{`
    @media (max-width: 575.98px) { 
      
      .navbar {
        padding: 0;
      }
    }
    `}</style>

  </div>
);

export default Header;
