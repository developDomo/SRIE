import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  Navbar, Nav, Form, NavDropdown, FormControl, Button,
} from 'react-bootstrap';
import Router, { withRouter } from 'next/router';
import theme from '../../styles/theme';
// import NavBar from './NavBar';
import Navigation from './Navigation';
import Logo from './Logo';
import LanguageSelector from './LanguageSelector';
import LinkChild from './LinkChild';
import { nav } from '../../pages/api/navbar';


const WhiteLine = styled.hr`
  border: 1px solid white;
  width: 100%;
  margin: 0 0 0 0;
`;

const Header = ({ router: { pathname } }) => {
  const [path, setPath] = useState(pathname);

  useEffect(() => {
    const handleRouteChange = (url) => {
      setPath(url);
    };

    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);


  return (
    <>
      <Navbar bg="dark" expand="md" className={`navbar navbar-expand-md navbar-light bg-transparent ${path !== '/' ? 'white-navbar' : ''} `}>
        <div className="container">
          <Navbar.Toggle aria-controls="basic-navbar-nav" aria-hidden="true" />
          <Navbar.Brand href="#home">
            <Logo path={path} />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              {nav.map((item) => (
                <NavDropdown
                  title={item.label}
                  id="basic-nav-dropdown"
                  className={`${path !== '/' ? 'blue-navbar-item' : ''}`}
                  alignRight
                  key={item.label}
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
            <div>
              <LanguageSelector path={path} />
            </div>
          </Navbar.Collapse>
        </div>

      </Navbar>
      <style type="text/css">
        {`

      ${path !== '/' ? 'body {background-image: none;}' : 'body {background-image: url(/img/home/bck.jpg); }'}

      .navbar-light .navbar-nav .nav-link {
        color: white;
      }

      .navbar-light .navbar-nav .nav-link:hover {
        color: white;
      }

      .navbar-light .navbar-nav .show>.nav-link {
        color: white;
      }

      .nav-link{
        font-family: 'Raleway', sans-serif;
        text-transform: uppercase;
        font-weight: bold;
        color: white ;
      }
      .navbar {
        background-color: transparent;
      }

      .blue-navbar-item a {
        color: #1D2D49 !important;
      }
      .white-navbar {
        background-color: white !important;
      }

      .dropdown-menu{
        background-color: #1D2D49;
      }

      .dropdown-item{
        color: white;
      }

      a.nav-item-drop {
        color: white !important;
        display: block;
        padding: 5px 10px;
        width: 210px;
        }

      .show.dropdown.nav-item > a {
        border-bottom: 2px solid #FBB03B;
      }

      a.nav-item-drop:hover {
        color: #16181b;
        text-decoration: none;
        background-color: #0071BC;
        color: white;
        width: 100%;
    }

    light .navbar-nav .nav-link:hover {
      color: white !important;
    }

  `}
      </style>
      <WhiteLine />
    </>
  );
};


export default withRouter(Header);
