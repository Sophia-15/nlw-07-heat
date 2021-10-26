import styled from 'styled-components';
import background from '../../assets/background.svg';

export const Container = styled.main`
  max-width: 75rem;
  height: 100vh;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 28.3125rem;
  column-gap: 7.5rem;
  position: relative;

  &::before {
    content: "";
    height: 100vh;
    width: 35%;
    background: url(${background}) no-repeat;
    background-size: cover;
    position: absolute;
    right: -16%;
    top: 0;
  }

  @media (max-width: 1122px) {
    grid-template-columns: 1fr ;

    &::before {
      display: none;
    }
  }
`;
