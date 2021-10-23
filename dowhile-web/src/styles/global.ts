import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  }

  body {
    color: ${({ theme }) => theme.colors.gray3};
    background: ${({ theme }) => theme.colors.background};
  }

  @media (max-width: 1255px) {
    body {
      margin: 0 5%;
    }
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 760px) {
    html {
      font-size: 88.5%;
    }
  }
`;
