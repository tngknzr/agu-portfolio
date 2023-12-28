'use client';
import React from 'react';
import Image from 'next/image';
import { IconLink, NavGrid, NavLink } from './Navbar.styles';
import { Logo } from '@components/logo/Logo.styles';
import Link from 'next/link';
const Navbar = () => {
  return (
    <NavGrid>
      <Link href="/">
        <Logo>Agustin Paredes</Logo>
      </Link>

      <IconLink>
        <NavLink href="https://github.com/tngknzr">
          <Image src="/github-logo-6531.svg" alt="Git logo" width={25} height={25} />
        </NavLink>
        <NavLink href="https://www.linkedin.com/in/agustin-paredes-izquierdo-883417203/">
          <Image src="/linkedin-112.svg" alt="Git logo" width={25} height={25} />
        </NavLink>
      </IconLink>
    </NavGrid>
  );
};

export default Navbar;
