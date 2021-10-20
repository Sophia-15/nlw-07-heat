import React, { useContext } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { Container } from './App.styles';
import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';
import { SendMessageForm } from './components/SendMessageForm';
import { AuthContext } from './contexts/AuthContext';

import { GlobalStyle } from './styles/global';
import { usePersistedState } from './utils/usePersistedState';

import dark from './styles/themes/dark';
import light from './styles/themes/light';

export function App() {
  const { user } = useContext(AuthContext);

  const [theme, setTheme] = usePersistedState<DefaultTheme>('@dowhile2021:theme', dark);

  function toggleTheme() {
    setTheme(theme.title === 'dark' ? light : dark);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container className={!!user ? 'contentSigned' : ''}>
        <MessageList toggleTheme={toggleTheme} />
        { !!user ? <SendMessageForm /> : <LoginBox /> }
        <GlobalStyle />
      </Container>
    </ThemeProvider>

  );
}
