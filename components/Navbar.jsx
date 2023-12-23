import React from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div id="nav-grid">
      <Link className="nav-link" href="/">
        Home
      </Link>
      <Link className="nav-link" href="/contact">
        Contact me
      </Link>
      <Link className="nav-link" href="https://github.com/tngknzr">
        <Image src="/github-logo-6531.svg" alt="Git logo" width={10} height={10} />
      </Link>

      <Link className="nav-link" href="https://www.linkedin.com/in/agustin-paredes-izquierdo-883417203/">
        <Image src="/linkedin-112.svg" alt="Git logo" width={10} height={10} />
      </Link>
    </div>
  );
};

export default Navbar;
