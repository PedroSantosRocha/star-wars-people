import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  width: 48%;
  height: 230px;

  background-color: ${({ theme }) => theme.colors.header};

  margin-top: ${getStatusBarHeight()}px;
  border-radius: 7px;
`;

export const Info = styled.View`
  padding: 15px;
`;

export const BirthYear = styled.Text`
  font-family: ${({ theme }) => theme.fonts.aldrich_400};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(16)}px;

  margin-bottom: 140px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.aldrich_400};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(22)}px;
`;

export const Photo = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;
