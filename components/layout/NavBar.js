
import {
  Navbar, Nav, NavDropdown, Col, Row,
} from 'react-bootstrap';
import { nav } from '../../pages/api/navbar';
import LinkChild from './LinkChild';
import LanguageSelector from './LanguageSelector';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: false,
      iconActive: 'fas fa-times',
      icon: 'fas fa-bars',
    };
  }

  updateCount() {
    const { condition } = !this.state;
    this.setState((prevState, props) => ({ condition }));
  }

  render() {
    const { path } = this.props;
    const { iconActive, icon, condition } = this.state;
    return (
      <>
        <Row>
          <Col>
            <Navbar expand="md">
              <Navbar.Toggle
                aria-hidden="true"
                aria-controls="basic-navbar-nav"
                className={
              condition ? iconActive : icon
            }
                onClick={() => this.updateCount()}
              />

              <Navbar.Collapse
                id="basic-navbar-nav"
                className={path === '/' ? 'CName' : ''}
              >
                <Nav className="mr-auto">
                  {nav.map((item, indexDrop) => (
                    <NavDropdown
                      title={item.label}
                      id="basic-nav-dropdown"
                      alignRight
                      key={`nav-drop-${indexDrop}`}
                    >
                      {item.items.map((item2, index) => (
                        <LinkChild
                          id={item2.id}
                          href={item2.href}
                          label={item2.label}
                          key={`linkChild-${index}`}
                        />
                      ))}
                    </NavDropdown>
                  ))}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col>
            <LanguageSelector />
          </Col>
        </Row>
        <style type="text/css">
          {`
            .nav-link{
                font-family: 'Raleway', sans-serif;
                text-transform: uppercase;
                font-weight: bold;
                color: white ;
            }
            .CName .nav-link{
                color: white !important;
            }
            a.nav-item-drop {
              color: white !important;
              display: block;
              padding: 5px 10px;
              width: 210px;
            }
            .dropdown-menu{
                background-color: #1D2D49;
            }
            .dropdown-item{
                color: white;
            }
            .dropdown-item:focus, .dropdown-item:hover,a.nav-item-drop:hover {
                color: #16181b;
                text-decoration: none;
                background-color: #0071BC;
                color: white;
            }
            .nav-item > .nav-link {
                border-bottom: 2px solid transparent;
            }
            .show.dropdown.nav-item > a{
                border-bottom: 2px solid #FBB03B;
            }
            a.CName-ative.dropdown-item{
                text-decoration: underline #FBB03B;
            }
            .nav-collapse .open>.dropdown-menu{
              display:block;
               }
               span.navbar-toggler-icon {
              background-image: none;
                 width: 0;
            }
            .navbar-light .navbar-toggler {
                color: white;
                border: none;
                margin: 9px auto 0 auto;
            }
            .fa-times:before,.fa-bars:before {
              /*color: white;*/
              font-size: 1.5em;
          }
          .navbar-light .navbar-nav .nav-link {
            color: white;
          }

          .navbar-light:hover .navbar-nav:hover .nav-link:hover {
            color: white;
          }

          .navbar-light .navbar-nav .nav-link {
            color: white;
          }
          .navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav 
          .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light 
          .navbar-nav .show>.nav-link {
            color: white
          }
        `}
        </style>
      </>
    );
  }
}
