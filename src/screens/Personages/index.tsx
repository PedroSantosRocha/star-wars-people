import React from 'react';
import { StyleSheet } from 'react-native';

import { PersonagesCard } from '../../components/PersonagesCard';

import {
  Container,
  Image,
  PersonagesList,
} from './styles';

export function Personages() {
  const personage = {
    name: 'Luke Skywalker',
    birthYear: '19BBY',
    photo: 'https://rollingstone.uol.com.br/media/_versions/luke_skywalker_div_lucasfilm_widelg.jpg'
  }

  return (
    <Container>
      <Image
        source={require("../../assets/backlist.jpeg")}
        style={[StyleSheet.absoluteFill]}
      />

      <PersonagesList
        data={[1,2,3,4,5,6,7,8]}
        keyExtractor={item => String(item)}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({ item }) => <PersonagesCard data={personage} />}
      />

    </Container>
  );
}