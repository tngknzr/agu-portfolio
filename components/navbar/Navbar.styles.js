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
