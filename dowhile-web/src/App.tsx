import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { GlobalStyle } from './styles/global';
import { usePersistedState } from './hooks/usePersistedState';

import dark from './styles/themes/dark';
import light from './styles/themes/light';
import { Login } from './pages/Login';
import { Room } from './pages/Room';
import { ChooseRoom } from './pages/ChooseRoom';

export function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('@dowhile2021:theme', dark);

  function toggleTheme() {
    setTheme(theme.title === 'dark' ? light : dark);
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/rooms/:room_id" component={Room} />
        <Route path="/choose" component={ChooseRoom} />
      </Router>
      <GlobalStyle />
    </ThemeProvider>

  );
}
