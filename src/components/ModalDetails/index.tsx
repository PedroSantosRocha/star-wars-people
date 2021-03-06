import React from 'react';
import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components';
import { MotiView } from 'moti';

import {
  Container,
  BackButtonModal,
  Image,
  Card,
  Header,
  Infos,
  Photo,
  Footer,
  AreaButton,
  Info,
} from './styles';
import { IconButton } from '../IconButton';

interface PersonageProps {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

interface Props {
  data?: PersonageProps;
  onPress: () => void;
}

export function ModalDetails({ data, ...rest }: Props) {
  const theme = useTheme();

  return (
      <Container>
        <Image
          source={require("../../assets/backmodal.png")}
          style={[StyleSheet.absoluteFill]}
        />

        <MotiView
          from={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            type: 'timing',
            duration: 1500,
          }}
          >

          <BackButtonModal {...rest} activeOpacity={0.7}>
            <MaterialIcons
              name="expand-more"
              size={50}
              color={theme.colors.shape}
            />
          </BackButtonModal>

          <Photo
            source={{ uri: 'https://rollingstone.uol.com.br/media/_versions/luke_skywalker_div_lucasfilm_widelg.jpg' }}
          />

          <Card>
            <Header>
            <Infos>
              <Info>Nome: Luke Skywalker</Info>
              <Info>Altura: 172</Info>
              <Info>Peso: 77</Info>
              <Info>Cor do cabelo: Blond</Info>
              <Info>Cor da pele: Fair</Info>
              <Info>Cor do olho: Blue</Info>
              <Info>Aniversário: 19BBY</Info>
              <Info>Gênero: Male</Info>
            </Infos>

            </Header>

            <Footer>
              <IconButton
                onPress={() => {}}
                name="favorite"
                size={50}
                color={theme.colors.main}
              />
            </Footer>
          </Card>
        </MotiView>
      </Container>
  );
}