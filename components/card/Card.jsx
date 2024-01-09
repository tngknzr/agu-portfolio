import React from 'react';
import { ArticleContent, CardContent, ProfilePic, WelcomeCard } from './Card.styles';
import CvButton from '@components/cvbutton/Cvbutton.jsx';
import Image from 'next/image';
import agusCv from '/public/agupicopti.jpg';
const Card = () => {
  return (
    <WelcomeCard>
      <h1>Full stack Web Developer</h1>
      <CardContent>
        <ProfilePic>
          <Image
            className="profile-pic"
            src={agusCv}
            alt="profile-pic"
            loading="eager"
            width={1000}
            height={1300}
          ></Image>
        </ProfilePic>
        <ArticleContent>
          <article>
            Hey there! I'm fresh out of a rigorous boot camp with Ironhack, where I delved into the world of web
            development. I've gained hands-on experience with a stack that includes JavaScript, CSS, React, MongoDB,
            Mongoose, Node.js, DOM manipulation, Canvas, Postman, and Axios. My GitHub is loaded with various projects,
            and I invite you to take a look at what I've been building.
          </article>
          <br />
          <article>
            I am currently seeking opportunities to embark on my professional journey as a web developer. I bring to the
            table attributes such as effective teamwork, a strong sense of responsibility, and a commitment to
            continuous self-improvement through ongoing education. My decision to pursue this field stems from a genuine
            enthusiasm for overcoming challenges, and I am eager to apply my skills in a practical business context.
          </article>
          <br />
          <article>
            I appreciate your time in considering my application and am eager to contribute my skills and dedication to
            your team. I'm excited about the prospect of joining your company and contributing to its success. Thanks
            for this opportunity, and I'm looking forward to the possibility of working together!
          </article>
        </ArticleContent>
      </CardContent>
      <CvButton />
    </WelcomeCard>
  );
};

export default Card;
