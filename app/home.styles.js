import styled from 'styled-components';

export const Section = styled.section`
  /* background: #e8e0d3; */
  /* background-color: rgb(192, 192, 192); */
  background: hsla(209, 72%, 72%, 1);

  background: linear-gradient(135deg, hsla(209, 72%, 72%, 1) 1%, hsla(0, 0%, 100%, 1) 100%);

  background: -moz-linear-gradient(135deg, hsla(209, 72%, 72%, 1) 1%, hsla(0, 0%, 100%, 1) 100%);

  background: -webkit-linear-gradient(135deg, hsla(209, 72%, 72%, 1) 1%, hsla(0, 0%, 100%, 1) 100%);

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#82B8EB", endColorstr="#FFFFFF", GradientType=1 );
  width: 100vw;
  height: 100vh;
  margin: 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
