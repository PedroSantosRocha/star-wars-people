import React from 'react';
import { StyleSheet } from 'react-native';
import { MotiView } from 'moti';

import {
  Container,
  Personage,
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
  onPress: () => void;
}

export function PersonagesCard({ data, ...rest }: Props) {
  return (
    <Container {...rest} activeOpacity={0.7}>
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
      <Personage>
        <Photo
          imageStyle={{ borderRadius: 30}}
          source={{ uri: data.photo }}
          style={[StyleSheet.absoluteFill]}
          resizeMode="contain"
        />
        <Info>
          <BirthYear>{data.birthYear}</BirthYear>
          <Name>{data.name}</Name>
        </Info>
      </Personage>
      </MotiView>
    </Container>
  );
}