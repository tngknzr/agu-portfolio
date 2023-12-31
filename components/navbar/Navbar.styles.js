import styled from 'styled-components';
import Link from 'next/link';

export const NavGrid = styled.div`
  border-radius: 5px;
  padding: 14px;
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  /* background-color: transparent !important; */
  background: hsla(209, 72%, 72%, 1);

  background: linear-gradient(135deg, hsla(209, 72%, 72%, 1) 1%, hsla(0, 0%, 100%, 1) 100%);

  background: -moz-linear-gradient(135deg, hsla(209, 72%, 72%, 1) 1%, hsla(0, 0%, 100%, 1) 100%);

  background: -webkit-linear-gradient(135deg, hsla(209, 72%, 72%, 1) 1%, hsla(0, 0%, 100%, 1) 100%);

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#82B8EB", endColorstr="#FFFFFF", GradientType=1 );
  /* background: #a98467; */
  color: #1b150d;

  /* background: linear-gradient(to right, rgba(87, 33, 183, 1), rgba(214, 104, 205, 1)); */
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: larger;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    border-radius: 10px;
    padding: 7px;
    box-shadow:
      rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
  &:active {
    transform: scale(0.95);
    border-radius: 10px;
    padding: 7px;
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
  width: 10%;
  margin-right: 14px;
`;
