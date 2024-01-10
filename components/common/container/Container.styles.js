import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 601) {
    width: 90%;
    margin: auto;
  }

  @media (min-width: 993) {
    width: 80%;
    margin: auto;
  }
`;
