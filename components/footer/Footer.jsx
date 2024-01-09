import React from 'react';
import { FooterBar } from './Footer.styles';
import Image from 'next/image';

const Footer = () => {
  return (
    <FooterBar>
      <Image src="blue-42596.svg" width={2200} height={300} loading="eager" alt="" />
    </FooterBar>
  );
};

export default Footer;
