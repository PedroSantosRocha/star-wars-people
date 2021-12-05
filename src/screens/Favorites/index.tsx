import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from 'styled-components';

import { IconButton } from '../../components/IconButton';

import {
  Container,
  Image,
  Content,
  Card,
  Header,
  Name,
  Photo,
  Footer,
} from './styles';

export function Favorites() {
  const theme = useTheme();

  return (
    <Container>
      <Image
        source={require("../../assets/background.jpeg")}
        style={[StyleSheet.absoluteFill]}
      />

      <Content
        from={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          type: 'timing',
          duration: 1500,
        }}
      >
        <Card>
          <Header>
            <Photo
              source={{ uri: 'https://rollingstone.uol.com.br/media/_versions/luke_skywalker_div_lucasfilm_widelg.jpg' }}
            />
          </Header>
          <Footer>
            <Name>Luke Skaywalker</Name>
            <IconButton
              onPress={() => {}}
              name="delete"
              size={35}
              color={theme.colors.main}
            />
          </Footer>
        </Card>
      </Content>

    </Container>
  );
}