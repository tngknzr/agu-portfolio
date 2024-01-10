import React from 'react';
import { Details, Flex, Wrapper } from './Footer.styles';
import { SocialLinks } from '@components/socialLinks/SocialLinks';
import { Container } from '@components/common/container/Container.styles';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Agustin Paredes</h2>
        <SocialLinks />
        <span>Solutions hunter {new Date().getFullYear()} | Made with Next JS.</span>
      </Details>
    </Flex>
  </Wrapper>
);
