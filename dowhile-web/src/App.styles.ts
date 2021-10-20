import styled from 'styled-components';

export const Container = styled.main`
  max-width: 75rem;
  height: 100vh;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 28.3125rem;
  column-gap: 7.5rem;
  position: relative;


  .contentSigned::before {
    content: "";
    height: 100vh;
    width: 26.25rem;
    background: url("./assets/background.svg") no-repeat cover;
    position: absolute;
    right: -12.5rem;
    top: 0;
  }

  @media (max-width: 1122px) {
    grid-template-columns: 1fr ;
  }
`;
