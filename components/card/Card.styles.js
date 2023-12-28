import styled from 'styled-components';

export const WelcomeCard = styled.div`
  background-color: rgb(102, 52, 127);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  width: 50%;
  height: 50vh;
  margin: 23px;
  padding: 14px;
  border: 3px solid rgb(158, 71, 132);
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;

  article {
    text-align: left;
    justify-content: center;
  }

  h1 {
    color: rgb(210, 118, 133);
    margin-bottom: 5%;

    text-transform: uppercase;
  }
  article {
    color: white;
    max-width: 450px;

    font-size: 1.1em;
  }
`;

export const ProfilePic = styled.div`
  width: auto;
  height: auto;

  img.profile-pic {
    justify-content: flex-start;
    width: 100%;
    height: auto;

    border-radius: 50%;
    max-width: 220px;
    max-height: 220px;
    box-shadow:
      rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }
`;
export const CardContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  height: 100%;
  width: 90%;
  margin-right: 130px;

  padding: 0;
`;
