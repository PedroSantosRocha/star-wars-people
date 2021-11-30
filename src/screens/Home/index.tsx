import React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';
import { Signboard } from '../../components/Signboard';

import {
  Container,
  Image,
  Content,
  Footer
} from './styles';

export function Home() {
  const navigation = useNavigation();

  return (
    <Container>
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