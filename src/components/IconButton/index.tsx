import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
} from './styles';

interface Props {
  name: string;
  size: number;
  color: string;
  onPress: () => void;
}

export function IconButton({ name, size, color, ...rest }: Props) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <MaterialIcons
          name={name}
          size={size}
          color={color}
      />
    </Container>
  );
}