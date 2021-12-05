import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { MotiView } from 'moti';


export const Container = styled.View`
  flex: 1;

  padding: 20px;
`;

export const Image = styled.ImageBackground``;

export const Content = styled(MotiView)``;

export const Card = styled.View`
  width: 100%;
  height: ${RFPercentage(30)}px;

  margin-top: ${getStatusBarHeight()}px;

  background-color: ${({ theme }) => theme.colors.header};

  border-radius: 20px;
`;

export const Header = styled.View`
  flex: 1;
`;

export const Photo = styled.Image`
  width: 100%;
  height: 180px;

  border-radius: 20px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.aldrich_400};
  color: ${({ theme }) => theme.colors.text_background};
  font-size: ${RFValue(20)}px;
`;

export const Footer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  padding: 20px;
  height: 80px;

  border-radius: 20px;

  background-color: ${({ theme }) => theme.colors.header};
`;