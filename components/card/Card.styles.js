import styled from 'styled-components';

export const WelcomeCard = styled.div`
  background-color: rgb(102, 52, 127);
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  width: 50%;
  height: 50vh;
  margin: 23px;
  padding: 14px;
  border: 10px solid rgb(158, 71, 132);

  article {
    text-align: center;
  }

  h1 {
    color: rgb(210, 118, 133);
    margin-bottom: 5%;
    /* margin-bottom: 100px; */
    text-transform: uppercase;
    /* margin-right: 25%; */
  }
  article {
    color: white;
    max-width: 450px;
    /* margin-bottom: 15%; */
    font-size: 1.1em;
  }
`;

export const ProfilePic = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  img.profile-pic {
    justify-content: flex-start;
    width: 100%;
    height: auto;
    border-radius: 50%;
    max-width: 220px;
    max-height: 220px;
  }
`;
export const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;

  /* z-index: 200; */
`;
