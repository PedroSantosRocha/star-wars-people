import React from 'react';

import {
  Container,
  SignboardEffect,
} from './styles';

export function Signboard() {
  return (
    <Container>
      <SignboardEffect>
        Episódio I
        {'\n'}
        {'\n'}
        OS PERSONAGENS
        {'\n'}
        {'\n'}
        No STAR WARS PEOPLE
        você terá acesso 
        a uma lista exclusiva 
        de personagens de 
        uma das séries de filmes
        mais queridas de todos
        os tempos.
        Não apenas acesso a lista,
        mas também a detalhes
        específicos dos personagens,
        e por fim também poderá
        escolher seus favoritos!
      </SignboardEffect>
    </Container>
  );
}