import React from 'react'
import styled from 'styled-components'

import { Toggle } from 'react-custom-toggle'
import 'react-custom-toggle/dist/index.css'

const App = () => {
  return (
    <Container>
      <Toggle offText="OFF" onText="ON" large />
      <Toggle />
      <Toggle offText="No" onText="Yes" small />
      <Toggle offText="No" onText="Yes" extraSmall />
      <Toggle offText="No" onText="Yes" extraSmalll />
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
