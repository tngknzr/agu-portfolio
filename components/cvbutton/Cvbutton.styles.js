import styled from 'styled-components';

export const CvButton = styled.a`
  margin-top: 5%;
  a {
    color: rgb(210, 118, 133);
    text-decoration: none;
    border: 4px solid rgb(158, 71, 132);
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
      transform: scale(1.05); /* Increase size on hover */
      box-shadow:
        rgba(0, 0, 0, 0.25) 0px 14px 28px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px;
    }
    &:active {
      background-color: rgb(45, 38, 87);
      transform: scale(0.95); /* Decrease size on click */
      box-shadow:
        rgba(0, 0, 0, 0.3) 0px 12px 24px,
        rgba(0, 0, 0, 0.27) 0px 8px 8px;
    }
  }
`;
