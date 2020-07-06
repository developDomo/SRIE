import React from 'react';
import Link from 'next/link';

const LinkIsCountry = ({ item2, path }) => {
  if (item2.isCountry) {
    return (
      <Link href="/[id]" as={`/${item2.href}`} key={item2.href}>
        <a className={`${path === `/${item2.href}` ? 'nav-item-drop active-link' : 'nav-item-drop'}`}>{item2.label}</a>
      </Link>
    );
  }
  return (
    <Link href={`/${item2.href}`} key={item2.href}>
      <a className={`${path === `/${item2.href}` ? 'nav-item-drop active-link' : 'nav-item-drop'}`}>{item2.label}</a>
    </Link>
  );
};

export default LinkIsCountry;
