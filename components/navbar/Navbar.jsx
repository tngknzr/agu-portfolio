'use client';
import React from 'react';
import Image from 'next/image';
import { IconLink, NavGrid, NavLink } from './Navbar.styles';
import Link from 'next/link';
const Navbar = () => {
  return (
    <NavGrid>
      <Link href="/">
        <Image src="/logo-profile.png" alt="Logo profile" width={75} height={75} />
      </Link>

      <IconLink>
        <NavLink href="https://github.com/tngknzr">
          <Image src="/github-logo-6531.svg" alt="Git logo" width={55} height={55} />
        </NavLink>
        <NavLink href="https://www.linkedin.com/in/agustin-paredes-izquierdo-883417203/">
          <Image src="/linkedin-112.svg" alt="Git logo" width={55} height={55} />
        </NavLink>
      </IconLink>
    </NavGrid>
  );
};

export default Navbar;
