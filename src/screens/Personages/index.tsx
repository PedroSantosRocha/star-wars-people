import React, { useState } from 'react';
import { Modal, StyleSheet } from 'react-native';

import { PersonagesCard } from '../../components/PersonagesCard';
import { ModalDetails } from '../../components/ModalDetails';

import {
  Container,
  Image,
  PersonagesList,
} from './styles';

export function Personages() {
  const [modalVisible, setModalVisible] = useState(false);

  const personage = {
    name: 'Luke Skywalker',
    birthYear: '19BBY',
    photo: 'https://rollingstone.uol.com.br/media/_versions/luke_skywalker_div_lucasfilm_widelg.jpg'
  }

  return (
    <Container>
      <Image
        source={require("../../assets/backlist.jpeg")}
        style={[StyleSheet.absoluteFill]}
      />

      <PersonagesList
        data={[1,2,3,4,5,6,7,8]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => (
          <PersonagesCard
            onPress={() => setModalVisible(true)}
            data={personage}
          />
        )}
      />

      <Modal
        presentationStyle="pageSheet"
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ModalDetails onPress={() => setModalVisible(!modalVisible)}/>
      </Modal>
    </Container>
  );
};

