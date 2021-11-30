import React from 'react';

import {
  Container,
  Title,
} from './styles';

interface Props {
  title: string;
  onPress: () => void;
  color?: string; 
}

export function Button({ title, color, ...rest }: Props) {
  return (
    <Container {...rest} color={color}>
      <Title>{title}</Title>
    </Container>
  );
}