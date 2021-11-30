import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';

import { useFonts, Aldrich_400Regular } from '@expo-google-fonts/aldrich';

import theme from './src/global/styles/theme';

import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({ Aldrich_400Regular });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
