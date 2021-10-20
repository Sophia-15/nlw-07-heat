import styled from 'styled-components';
import banner from '../../assets/banner-girl.png';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.loginBackground} url(${banner}) no-repeat center top;

  padding: 27.5rem 5rem 0;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  strong {
    font-size: 2rem;
    line-height: 2.25rem;
  }

  .signInWithGithub {
    background: ${({ theme }) => theme.colors.yellow};
    margin-top: 2rem;
    padding: 0 2.5rem;
    height: 3.5rem;
    color: ${({ theme }) => theme.colors.black1};
    font-size: .875rem;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 1rem;
    }

    &:hover {
      filter: brightness(0.85);
    }
  }

  @media (max-width: 1122px) {
    background: none;
    padding: 0;
    height: 100%;

    strong {
      display: none;
    }

    .signInWithGithub {
      width: 100%;
    } 
  }
`;
