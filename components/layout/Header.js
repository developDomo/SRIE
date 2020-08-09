import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  Navbar, Nav,
} from 'react-bootstrap';

import Router, { withRouter } from 'next/router';
import Link from 'next/link';
import { theme, getThemeProperty } from '../../styles/theme';

import Logo from './Logo';
import LanguageSelector from './LanguageSelector';
import LinksMainNav from './LinksMainNav';
import NavbarLink from './NavbarLink';

import navData from './data/nav-data';

const WhiteLine = styled.hr`
  background-color: white;
  height: 1px;
  margin: 0 0 0 0;
  width: 100%;
`;


const Header = ({ router: { pathname, query } }) => {
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
      <Navbar
        bg="dark"
        expand="md"
        className={`navbar navbar-expand-md navbar-light bg-transparent ${path !== '/' ? 'white-navbar' : ''} `}
        hidden={query.share === 'true'}
      >
        <div className="container">
          <Navbar.Toggle aria-controls="basic-navbar-nav" aria-hidden="true" />
          <Navbar.Brand href="#home">
            <Logo path={path} />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <LinksMainNav />
            </Nav>
            <div>
              <LanguageSelector path={path} />
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <style type="text/css">
        {`

      ${path === '/'
          ? `body { background-image: ${getThemeProperty('navbar.home.body.background-image')};} 
            .nav-item > a {border-bottom: 2px solid transparent;}`
          : `body { background-image: ${getThemeProperty('navbar.otherPages.body.background-image')};} 
            .nav-item > a {border-bottom: 2px solid ${theme.navbar.primaryFontColor};}`
        }

      .navbar-light .navbar-nav .nav-link {
        color: ${theme.navbar.primaryFontColor};
      }

      .navbar-light .navbar-nav .nav-link:hover {
        color: ${theme.navbar.primaryFontColor};
      }

      .navbar-light .navbar-nav .show>.nav-link {
        color: ${theme.navbar.primaryFontColor};
      }

      .nav-link{
        font-family: 'Raleway', sans-serif;
        text-transform: uppercase;
        font-weight: bold;
        color: ${theme.navbar.primaryFontColor};
      }
      .navbar {
        background-color: transparent;
      }

      .blue-navbar-item a {
        color: ${theme.navbar.dropdownMenuColor} !important;
      }
      .white-navbar {
        background-color: ${theme.navbar.primaryFontColor} !important;
      }

      .dropdown-menu{
        background-color: ${theme.navbar.dropdownMenuColor};
      }

      .dropdown-item{
        color: ${theme.navbar.primaryFontColor};
      }

      a.nav-item-drop {
        color: ${theme.navbar.primaryFontColor} !important;
        display: block;
        padding: 5px 10px;
        width: 210px;
        margin: 0 15px;
        }
      .show.dropdown.nav-item > a {
        border-bottom: 2px solid ${theme.navbar.underlineMenuColor};
      }
      .active-link {
        border-bottom: 2px solid ${theme.navbar.underlineMenuColor};
      }
      a.nav-item-drop:hover {
        color: #16181b;
        text-decoration: none;
        background-color: ${theme.navbar.menuHoverColor};
        color: ${theme.navbar.primaryFontColor};
        
    }

    light .navbar-nav .nav-link:hover {
      color: ${theme.navbar.primaryFontColor} !important;
    }
  `}
      </style>
      {path === '/' ? <WhiteLine /> : ''}
    </>
  );
};

export default withRouter(Header);
