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
import { CustomThemeProvider } from './contexts/ThemeContext';

export function App() {
  return (
    <CustomThemeProvider>
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/rooms/:room_id" component={Room} />
        <Route path="/choose" component={ChooseRoom} />
      </Router>
      <GlobalStyle />
    </CustomThemeProvider>

  );
}
