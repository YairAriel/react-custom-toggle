import React from 'react'
import styled from 'styled-components'

import { Toggle } from 'react-custom-toggle'
import 'react-custom-toggle/dist/index.css'

const App = () => {
  return (
    <Container>
      <Toggle offText="OFF" onText="ON" extraLarge offColor="red" onColor="green" />
      <Toggle offText="OFF" onText="ON" large offColor="red" onColor="blue" />
      <Toggle offText="OFF" onText="ON" />
      <Toggle offText="OFF" onText="ON" small />
      <Toggle offText="OFF" onText="ON" extraSmall />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 200px;
`

export default App
