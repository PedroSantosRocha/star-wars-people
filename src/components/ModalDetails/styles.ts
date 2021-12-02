import styled from 'styled-components/native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  padding: ${getStatusBarHeight() + 24}px 24px ${getBottomSpace()}px;

  justify-content: flex-end;
`;


export const Image = styled.ImageBackground``;

export const Card = styled.View`
  width: 100%;
  height: 500px;
  margin-top: 24px;

  background-color: ${({ theme }) => theme.colors.header};
  opacity: 0.9;

  border-radius: 40px;
`;

export const Header = styled.View`
  width: 100%;
  height: 400px;`;

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

  background-color: ${({ theme }) => theme.colors.shape};

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  align-items: center;
  justify-content: center;
`;

export const AreaButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.main};
  padding: 10px;
  border-radius: 50px;
`;

export const FavoriteButton = styled.View``;
