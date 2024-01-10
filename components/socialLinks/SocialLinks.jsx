import React from 'react';
import { Items } from './SocialLinks.styles';
import Image from 'next/image';
import social from './social.json';

export const SocialLinks = () => (
  <Items>
    {social.map(({ id, name, link, icon }) => (
      <a href={link} key={id} target="_blank" aria-level={`Follow me on ${icon}`}>
        <Image width="24" height="24" src={icon} alt="name"></Image>
      </a>
    ))}
  </Items>
);
