import {
  Navbar, Nav, NavDropdown,
} from 'react-bootstrap';
import NavbarLink from './NavbarLink';
import navData from './data/nav-data';

const LinksMainNav = ({ lang, path }) => {
  if (lang === 'es') {
    return navData.es.map((item) => (
      <NavDropdown
        title={item.label}
        id="basic-nav-dropdown"
        className={`${path !== '/' ? 'blue-navbar-item' : ''}`}
        alignRight
        key={item.label}
      >
        {item.items.map((itemNavbar, index) => (
          <NavbarLink item={itemNavbar} />
        ))}
      </NavDropdown>
    ));
  }
  return navData.en.map((item) => (
    <NavDropdown
      title={item.label}
      id="basic-nav-dropdown"
      className={`${path !== '/' ? 'blue-navbar-item' : ''}`}
      alignRight
      key={item.label}
    >
      {item.items.map((itemNavbar, index) => (
        <NavbarLink item={itemNavbar} />
      ))}
    </NavDropdown>
  ));

  // return lang;
};

export default LinksMainNav;
