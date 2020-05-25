import React from 'react';
import Link from 'next/link';

const LinkChild = ({ label, id, href }) => {
  if (id !== null) {
    return (
      <>
        <Link
          href="/country/[countryId]"
          as={`${href}`}
        >
          <a className="nav-item-drop" href="#0">
            {label}
          </a>
        </Link>
      </>
    );
  }
  return (
    <>
      <Link href={href}>
        <a className="nav-item-drop" href="#0">
          {label}
        </a>
      </Link>
    </>
  );
};


export default LinkChild;
