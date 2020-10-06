import React from 'react'
import styled from 'styled-components'

import BasicUsage from './components/BasicUsage'
import Sizes from './components/Sizes'
import Toggle from 'react-custom-toggle'

const App = () => {
  return (
    <Container>
      <Title> React Custom Toggle </Title>
      <BasicUsage />
      <Sizes />
      {/* <Toggle
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
      <Toggle offText='OFF' onText='ON' extraSmall /> */}
    </Container>
  )
}

const Container = styled.div`
  padding: 0 10vw;
`

const Title = styled.h1`
  margin-top: 3vw;
  text-align: center;
`

export default App
