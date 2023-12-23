'use client';
import React from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import { NavGrid, NavLink } from './Navbar.styles';

const Navbar = () => {
  return (
    <NavGrid>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/contact">Contact me</NavLink>
      <NavLink href="https://github.com/tngknzr">
        <Image src="/github-logo-6531.svg" alt="Git logo" width={25} height={25} />
      </NavLink>
      <NavLink href="https://www.linkedin.com/in/agustin-paredes-izquierdo-883417203/">
        <Image src="/linkedin-112.svg" alt="Git logo" width={25} height={25} />
      </NavLink>
    </NavGrid>
  );
};

export default Navbar;
