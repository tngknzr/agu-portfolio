import React from 'react';
import { CardContent, ProfilePic, WelcomeCard } from './Card.styles';
import Cvbutton, { CvButton } from '@components/cvbutton/Cvbutton.jsx';
const Card = () => {
  return (
    <WelcomeCard>
      <h1>Full stack Web Developer</h1>
      <CardContent>
        <ProfilePic>
          <img className="profile-pic" src="elpity.jpeg" alt="profile-pic" />
        </ProfilePic>
        <article>
          Hey there! I'm a passionate entry level Full Stack Web Developer embarking on an exciting coding adventure.
          With an eagerness to learn and a love for turning ideas into code, I am motivated to grow and carve my path in
          the vast world of web development. My journey is fueled by creativity and a relentless desire to build
          meaningful and innovative solutions. As a junior developer, I'm excited to overcome challenges, learn new
          technologies, and collaborate on exciting projects. I'm currently on the lookout for my first job, and every
          line of code is a step towards realizing my dream goal: working for Valve. Join me as I document my
          experiences, share my projects, and take strides towards creating something extraordinary. Let's code and
          learn together!
        </article>
      </CardContent>
      <Cvbutton />
    </WelcomeCard>
  );
};

export default Card;
