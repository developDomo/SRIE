import {
  NavDropdown,
} from 'react-bootstrap';
import NavbarLink from './NavbarLink';
import navData from './data/nav-data';
import { i18n } from '../../i18n';

const LinksMainNav = ({ path }) => {
  const selectectedLanguage = i18n.language;
  if (selectectedLanguage === 'es') {
    return navData.es.map((item) => (
      <NavDropdown
        title={item.label}
        id="basic-nav-dropdown"
        className={`${path !== '/' ? 'blue-navbar-item' : ''}`}
        alignRight
        key={item.label}
      >
        {item.items.map((itemNavbar, index) => (
          <NavbarLink item={itemNavbar} index={index} />
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
      {item.items.map((itemNavbar) => (
        <NavbarLink key={itemNavbar} item={itemNavbar} />
      ))}
    </NavDropdown>
  ));
};

export default LinksMainNav;
