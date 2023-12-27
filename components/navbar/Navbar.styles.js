import styled from 'styled-components';
import Link from 'next/link';

export const NavGrid = styled.div`
  /* border: 4px solid rgb(158, 71, 132); */
  border-radius: 5px;
  padding: 14px;
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  background: linear-gradient(to right, rgb(55, 48, 107), rgb(158, 71, 132));
`;
export const NavLink = styled(Link)`
  color: rgb(210, 118, 133);
  text-decoration: none;
  font-size: larger;
  transition: all 0.3s ease;

  &:hover {
    /* background-color: rgb(65, 58, 127); */
    transform: scale(1.05); /* Increase size on hover */
    border-radius: 10px;
    box-shadow:
      rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
  &:active {
    /* background-color: rgb(45, 38, 87); */
    transform: scale(0.95); /* Decrease size on click */
    border-radius: 10px;
    box-shadow:
      rgba(0, 0, 0, 0.3) 0px 12px 24px,
      rgba(0, 0, 0, 0.27) 0px 8px 8px;
  }
`;
export const IconLink = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  /* border: 3px solid red; */
  width: 10%;
  margin-right: 14px;
`;
