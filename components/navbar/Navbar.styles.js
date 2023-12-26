import styled from 'styled-components';
import Link from 'next/link';

export const NavGrid = styled.div`
  border: 4px solid rgb(158, 71, 132);
  border-radius: 5px;
  padding: 40px;
  display: flex;
  height: 20px;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  background: linear-gradient(to right, rgb(55, 48, 107), rgb(158, 71, 132));
`;
export const NavLink = styled(Link)`
  color: rgb(210, 118, 133);
  text-decoration: none;
  font-size: larger;
`;
