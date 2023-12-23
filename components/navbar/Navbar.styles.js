import styled from 'styled-components';
import Link from 'next/link';

export const NavGrid = styled.div`
  border: 3px solid black;
  padding: 40px;
  display: flex;
  /* flex-direction: row;
  flex-wrap: nowrap; */
  justify-content: space-around;
  /* align-items: flex-end; */
  align-content: center;
`;
export const NavLink = styled(Link)`
  color: gray;
  text-decoration: none;
  font-size: larger;
`;
