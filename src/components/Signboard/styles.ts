import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  margin-top: ${getStatusBarHeight()}px;
`;

export const SignboardEffect = styled.Text`
  font-family: ${({ theme }) => theme.fonts.aldrich_400};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.text_background};
  text-align: center;
`;