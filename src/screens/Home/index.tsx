import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { MotiView } from 'moti';

import { Button } from '../../components/Button';
import { Signboard } from '../../components/Signboard';

import {
  Container,
  Image,
  Content,
  Footer
} from './styles';

export function Home() {
  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        translucent 
        backgroundColor="transparent"
      />
      <Image
        source={require("../../assets/background.png")}
        style={[StyleSheet.absoluteFill]}
      />

      <Content
        from={{
          opacity: 0,
          translateY: 800,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
        transition={{
          type: 'timing',
          duration: 15000,
        }}
      >
        <Signboard />
      </Content>

      <Footer>
        <Button title="Ver Personagens" onPress={() => {}}/>
      </Footer>
    </Container>
  );
}