import React from 'react';
import { Details, Flex, FooterBar, Wrapper } from './Footer.styles';
import Image from 'next/image';
import { SocialLinks } from '@components/socialLinks/SocialLinks';
import { Container } from '@components/common/container/Container.styles';

// const Footer = () => {
//   return (
//     <FooterBar>
//     </FooterBar>
//   );
// };

// export default Footer;

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h4>Agustin Paredes</h4>

        <SocialLinks />
        <span>Lorem ipsum, dolor sit amet consectetur {new Date().getFullYear()} | Made with Next JS.</span>
      </Details>
    </Flex>
  </Wrapper>
);
