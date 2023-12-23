import React from 'react';
import { CardContent, ProfilePic, WelcomeCard } from './Card.styles';
import Prueba from '@components/Prueba';

const Card = () => {
  return (
    <WelcomeCard>
      <ProfilePic>
        <img className="profile-pic" src="elpity.jpeg" alt="profile-pic" />
      </ProfilePic>
      <CardContent>
        <h1>Full Stack Web Developer</h1>
        <article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor autem reiciendis repudiandae soluta unde odio
          officia asperiores voluptate quisquam recusandae, vitae debitis. Laborum architecto qui earum, aperiam maxime
          eius ex sapiente eum unde accusantium. Beatae non saepe temporibus corporis delectus corrupti, hic animi ex!
          Inventore quisquam officiis earum vitae ullam?
        </article>
        <Prueba></Prueba>
      </CardContent>
    </WelcomeCard>
  );
};

export default Card;
