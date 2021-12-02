import React from 'react';
import { StyleSheet } from 'react-native';
import { MotiView } from 'moti';

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
      <MotiView
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
        <Container activeOpacity={0.7}>
            <Photo
              imageStyle={{ borderRadius: 20}}
              source={{ uri: data.photo }}
              style={[StyleSheet.absoluteFill]}
              resizeMode='contain'
            />
            <Info>
              <BirthYear>{data.birthYear}</BirthYear>
              <Name>{data.name}</Name>
            </Info>
        </Container>
      </MotiView>
  );
}