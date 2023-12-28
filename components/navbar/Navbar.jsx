'use client';
import React from 'react';
import Image from 'next/image';
import { IconLink, NavGrid, NavLink } from './Navbar.styles';
import { Logo } from '@components/logo/Logo.styles';
import Link from 'next/link';
const Navbar = () => {
  return (
    <NavGrid>
      {/* TODO: agregar flex contenedor para que quede pegado al margen izquiero */}
      <Link href="/">
        <Logo>Agustin Paredes</Logo>
      </Link>
      {/* <NavLink href="/"> */}
      {/* </NavLink> */}

      {/* TODO: agregar un flex contenedor para que los dos iconos queden pegados al lado izq de la nav */}
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
