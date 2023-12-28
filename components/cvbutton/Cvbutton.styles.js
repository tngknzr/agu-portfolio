import styled from 'styled-components';

export const CvButton = styled.button`
  a {
    color: rgb(158, 71, 132);
    text-decoration: none;
  }
  margin-top: 2%;
  margin-bottom: 5%;

  text-decoration: none;
  border: 2px solid rgb(158, 71, 132);
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(55, 48, 107);
  font-size: large;
  font-weight: bold;
  box-shadow:
    rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(65, 58, 127);
    transform: scale(1.05);
    box-shadow:
      rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
  &:active {
    background-color: rgb(45, 38, 87);
    transform: scale(0.95);
    box-shadow:
      rgba(0, 0, 0, 0.3) 0px 12px 24px,
      rgba(0, 0, 0, 0.27) 0px 8px 8px;
  }
`;
