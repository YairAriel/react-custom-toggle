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
  width: 768px;
  padding: 0 50px;
  box-sizing: border-box;
  margin: 0 auto;
`

const Title = styled.h1`
  margin-top: 20px;
  text-align: center;
`

export default App
