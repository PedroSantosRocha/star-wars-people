import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import { MotiView } from 'moti';

export const Container = styled.View`
  flex: 1;
`;

export const Image = styled.ImageBackground``;

export const Content = styled(MotiView)`
  flex: 1;
  padding: 24px;
`;

export const Footer = styled.View`
  margin: 0 24px;
  margin-bottom: ${getBottomSpace()}px;
`;
