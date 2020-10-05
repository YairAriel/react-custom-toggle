import React from 'react'
import styled from 'styled-components'

import Toggle from 'react-custom-toggle'

const App = () => {
  return (
    <Container>
      <Title>React Custom Toggle</Title>
      <h3>Installation</h3>
      <Pre>
        <code>{`npm install react-custom-toggle`}</code>
      </Pre>
      <Pre>
        <code>{`yarn add react-custom-toggle`}</code>
      </Pre>
      <h3>Usage</h3>
      <Pre>
        <code>
          {`import Toggle from 'react-custom-toggle';
          
const Example = () => <Toggle />;`}
        </code>
      </Pre>
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
  padding: 0 10vw;
`

const Title = styled.h1`
  margin-top: 5vw;
  text-align: center;
`

const Pre = styled.pre`
  border: 1px solid #ccc;
  background: #f5f5f5;
  border-radius: 4px;
  padding: 10px 20px;
  width: 576px;
  text-align: left;
`

export default App
