import React from 'react';
import Link from 'next/link';

const NavbarLink = ({ item, path }) => {
  if (item.isCountry) {
    return (
      <Link href="/[id]" as={`/${item.href}`} key={item.href}>
        <a className={`${path === `/${item.href}` ? 'nav-item-drop active-link' : 'nav-item-drop'}`}>{item.label}</a>
      </Link>
    );
  }
  return (
    <Link href={`/${item.href}`} key={item.href}>
      <a className={`${path === `/${item.href}` ? 'nav-item-drop active-link' : 'nav-item-drop'}`}>{item.label}</a>
    </Link>
  );
};

export default NavbarLink;
