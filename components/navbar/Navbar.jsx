'use client';
import React from 'react';
import Image from 'next/image';
import { IconLink, NavGrid, NavLink } from './Navbar.styles';
import Link from 'next/link';
import { SocialLinks } from '@components/socialLinks/SocialLinks';

const Navbar = () => {
  return (
    <NavGrid>
      <Link href="/">
        <Image src="/logo-profile.png" alt="Logo profile" width={75} height={75} />
      </Link>
    </NavGrid>
  );
};

export default Navbar;
