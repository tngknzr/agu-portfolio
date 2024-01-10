import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 15vh;
  background: hsla(209, 72%, 72%, 1);
  background-image: url(./blue-42596.svg);
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  @media (max-width: 1960px) {
    padding: 14rem 0 4rem;
  }
`;
export const Flex = styled.div`
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;
export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
    }

    & :first-child,
    & :last-child {
      margin: 0;
    }
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  h2 {
    margin-top: 36px;
  }

  a,
  span {
    color: black;
  }
  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }
`;
