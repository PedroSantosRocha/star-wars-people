import React from 'react';
import { StyleSheet } from 'react-native';

import {
  Container,
  Info,
  Name,
  BirthYear,
  Photo,
} from './styles';

interface PersonageData {
  name: string;
  birthYear: string;
  photo?: string;
}

interface Props {
  data: PersonageData;
}

export function PersonagesCard({ data}: Props) {
  return (
    <Container activeOpacity={0.7}>
      <Photo
        imageStyle={{ borderRadius: 7}}
        source={{ uri: data.photo }}
        style={[StyleSheet.absoluteFill]}
      />
      <Info>
        <BirthYear>{data.birthYear}</BirthYear>
        <Name>{data.name}</Name>
      </Info>
    </Container>
  );
}