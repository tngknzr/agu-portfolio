import styled from 'styled-components';

export const WelcomeCard = styled.div`
  /* background-color: rgb(102, 52, 127); */
  background: #82b8eb;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  width: 80%;
  height: 70vh;
  margin: 23px;
  padding: 30px;
  /* border: 3px solid rgb(158, 71, 132); */
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;

  article {
    text-align: left;
    justify-content: center;
    /* border: 2px solid red; */
    width: 100%;
  }

  h1 {
    color: black;
    letter-spacing: 10px;
    /* margin-bottom: 5%; */
    font-size: xx-large;
    width: auto;
    text-transform: uppercase;
    /* border: 2px solid cyan; */
  }
`;

export const ProfilePic = styled.div`
  width: 20%;
  height: auto;
  /* border: 2px solid green; */

  img.profile-pic {
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    /* border: 2px solid green; */
    object-fit: cover;
    border-radius: 50%;
    /* max-width: 420px; */
    /* max-height: 420px; */
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
  /* margin-right: 130px; */
  /* border: 2px solid blue; */
`;
export const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  /* border: red solid 2px; */
  width: 70%;
  height: 70%;

  article {
    color: black;
    width: 100%;
    /* border: solid 2px pink; */
    font-size: larger;
  }
`;
