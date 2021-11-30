import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const Image = styled.ImageBackground``;

export const PersonagesList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 20,
    justifyContent: 'space-around',
  },
  showsVerticalScrollIndicator: false,
})``;

