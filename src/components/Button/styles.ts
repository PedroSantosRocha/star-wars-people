import styled from 'styled-components/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps extends RectButtonProps {
  color?: string;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;

  padding: 20px;
  justify-content: center;
  align-items: center;

  border-radius: 7px;

  background-color: ${({ theme, color }) => color ? color : theme.colors.main};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.aldrich_400};
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.shape};
`;