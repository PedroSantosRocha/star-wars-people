import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';

import { useFonts, Aldrich_400Regular } from '@expo-google-fonts/aldrich';

import theme from './src/global/styles/theme';

import { Personages } from './src/screens/Personages';

export default function App() {
  const [fontsLoaded] = useFonts({ Aldrich_400Regular });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        translucent 
        backgroundColor="transparent"
      />
      <Personages />
    </ThemeProvider>
  );
}
