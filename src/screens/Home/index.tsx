import React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';
import { Signboard } from '../../components/Signboard';

import { StackNavigationProp } from '@react-navigation/stack';

import {
  Container,
  Image,
  Content,
  Footer
} from './styles';

interface NavigationProps {
  navigation: StackNavigationProp<any, any>;
}

export function Home({ navigation }: NavigationProps) {

  return (
    <Container>
      <Image
        source={require("../../assets/background.jpeg")}
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
          duration: 10000,
        }}
      >
        <Signboard />
      </Content>

      <Footer>
        <Button
          title="Ver Personagens"
          onPress={() => { navigation.navigate('Tabs') }}/>
      </Footer>
    </Container>
  );
}