import React, { createContext, ReactNode } from 'react';
import { DefaultTheme, ThemeProvider as StyledProvider } from 'styled-components';
import { usePersistedState } from '../hooks/usePersistedState';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface ThemeContextProps {
  toggleTheme: () => void
}

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextProps);

export function CustomThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('@dowhile2021:theme', dark);

  function toggleTheme() {
    setTheme(theme.title === 'dark' ? light : dark);
  }

  return (
    <StyledProvider theme={theme}>
      <ThemeContext.Provider value={{ toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </StyledProvider>
  );
}
