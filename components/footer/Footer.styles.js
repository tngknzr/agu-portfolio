import styled from 'styled-components';

// export const FooterBar = styled.div`
//   width: 100vw;
//   height: fit-content;
//   display: block;
//   border: red solid 2px;

// `;

export const Wrapper = styled.div`
  padding: 28rem 0 4rem 0;
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
  display: flex;
  align-items: flex-end;
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
  h2,
  a,
  span {
    color: red;
  }
  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }
`;
