import styled from 'styled-components/native';
import { FlatList, Modal } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
`;

export const Image = styled.ImageBackground``;

export const PersonagesList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 20,
    paddingBottom: getBottomSpace() + 80,
  },
  showsVerticalScrollIndicator: false,
})``;
