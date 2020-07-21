import React from 'react'
import styled from 'styled-components'

import { Toggle } from 'react-custom-toggle'
import 'react-custom-toggle/dist/index.css'

const App = () => {
  return (
    <Container>
      <Toggle
        offText='OFF'
        onText='ON'
        extraLarge
        colorOff='#ED8936'
        colorOn='#63B3ED'
        textColorOff='#f12c6b'
        textColorOn='#07e207'
      />
      <Toggle
        offText='OFF'
        onText='ON'
        large
        colorOff='orange'
        colorOn='blue'
        textColorOff='red'
        textColorOn='lightgreen'
      />
      <Toggle offText='OFF' onText='ON' />
      <Toggle disabled />
      <Toggle offText='OFF' onText='ON' small />
      <Toggle offText='OFF' onText='ON' extraSmall />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 200px;
`

export default App
