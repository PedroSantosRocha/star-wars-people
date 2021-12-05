import styled from 'styled-components/native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  padding: ${getStatusBarHeight() + 24}px 24px ${getBottomSpace()}px;

  justify-content: flex-end;
`;

export const BackButtonModal = styled.TouchableOpacity`
  align-self: center;

  margin-bottom: 20px;
`;

export const Image = styled.ImageBackground``;

export const Card = styled.View`
  width: 100%;
  height: ${RFPercentage(60)}px;
  margin-top: 24px;

  background-color: ${({ theme }) => theme.colors.header};

  border-radius: 40px;
`;

export const Header = styled.View`
  width: 100%;
  height: 350px;`;

export const Infos = styled.View`
  padding: 28px;
`;

export const Info = styled.Text`
  font-family: ${({ theme }) => theme.fonts.aldrich_400};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.shape};

  margin-bottom: 10px;
`;

export const Photo = styled.Image`
  width: 100%;
  height: 180px;

  border-radius: 30px;
`;

export const Footer = styled.View`
  width: 100%;
  height: 100px;

  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.main};

  align-items: center;
  justify-content: center;
`;
