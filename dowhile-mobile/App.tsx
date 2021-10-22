import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import { Home } from './src/screens/Home';
import dark from './src/styles/themes/dark';
import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={dark}>
      <AuthProvider>
        <StatusBar style="light" translucent />
        <Home />
      </AuthProvider>
    </ThemeProvider>
  );
}
