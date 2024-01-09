import Link from 'next/link';
import React from 'react';
import { CtaButton } from './Cvbutton.styles';

const CvButton = () => {
  return (
    <>
      <CtaButton>
        <Link href="webdevCV.pdf"> Look my Resume </Link>
      </CtaButton>
    </>
  );
};

export default CvButton;
