import Link from 'next/link';
import React from 'react';
import { CvButton } from './Cvbutton.styles';
const Cvbutton = () => {
  return (
    <>
      <CvButton>
        <a href="webdevCV.pdf"> Look my Resume </a>
      </CvButton>
    </>
  );
};

export default Cvbutton;
