import React from 'react';

import { Container, H1, Image, ContainerItems, InputLabel, Input, Button } from "./styles";

function App() {

  return (
    <Container>
      <Image/>
      <ContainerItems>
      <H1>Olá</H1>
      <InputLabel>Nome</InputLabel>
      <Input placeholder="Nome"/>

      <InputLabel>Idade</InputLabel>
      <Input placeholder="Idade"/>

      <Button>Cadastrar</Button>

      </ContainerItems>
    </Container>
  );
}

export default App;