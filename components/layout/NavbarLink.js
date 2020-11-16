import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  NavDropdown,
} from 'react-bootstrap';

const NavbarLink = ({ item, index }) => {
  const router = useRouter();
  const path = router.asPath;

  if (item.isCountry) {
    return (
      <NavDropdown.Item eventKey={index}>
        <Link href="/[id]" as={`/${item.href}`} key={item.href}>
          <a className={`${path === `/${item.href}` ? 'nav-item-drop active-link' : 'nav-item-drop'}`}>{item.label}</a>
        </Link>
      </NavDropdown.Item>
    );
  }
  return (
    <NavDropdown.Item eventKey={index}>
      <Link href={`/${item.href}`} key={item.href}>
        <a className={`${path === `/${item.href}` ? 'nav-item-drop active-link' : 'nav-item-drop'}`}>{item.label}</a>
      </Link>
    </NavDropdown.Item>
  );
};

export default NavbarLink;
