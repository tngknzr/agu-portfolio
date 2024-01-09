import styled from 'styled-components';

export const WelcomeCard = styled.div`
  background: #82b8eb;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  width: 80%;
  height: 70vh;
  margin: 23px;
  padding: 30px;

  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;

  article {
    text-align: left;
    justify-content: center;

    width: 100%;
  }

  h1 {
    color: black;
    letter-spacing: 10px;
    font-size: xx-large;
    width: auto;
    text-transform: uppercase;
  }
`;

export const ProfilePic = styled.div`
  width: 20%;
  height: auto;

  img.profile-pic {
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
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
  align-content: center;
  flex-direction: row-reverse;
  height: 80%;
  width: 90%;
`;

export const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;

  width: 70%;
  height: 70%;

  article {
    color: black;
    width: 100%;
    font-size: larger;
  }
`;
