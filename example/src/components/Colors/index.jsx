/** @format */

import React, { useState } from 'react';
import styled from 'styled-components';
import Toggle from 'react-custom-toggle';

import { Box, TextField } from '../common';

const Colors = () => {
  const [isSunShining, setIsSunShining] = useState(false);
  const [isThatRight, setIsThatRight] = useState(false);
  const [colorOff, setColorOff] = useState('#ed8936');
  const [colorOn, setColorOn] = useState('#63b3ed');
  const [textColorOff, setTextColorOff] = useState('violet');
  const [textColorOn, setTextColorOn] = useState('royalblue');

  return (
    <Container>
      <h3>Colors</h3>
      <Box>
        <h4>Background colors</h4>
        <ToggleBox>
          <Toggle
            checked={isSunShining}
            onChange={setIsSunShining}
            colorOff={colorOff}
            colorOn={colorOn}
          />
        </ToggleBox>
        <InputWrapper>
          <TextField label="colorOff" value={colorOff} changeHandler={setColorOff} />
          <TextField label="colorOn" value={colorOn} changeHandler={setColorOn} />
        </InputWrapper>
        <pre>
          <code>{`const [isSunShining, setIsSunShining] = useState(${isSunShining});`}</code>
        </pre>
        <pre>
          <code>
            {`<Toggle checked={isSunShining} onChange={setIsSunShining} 
  colorOff="${colorOff}" colorOn="${colorOn}" />`}
          </code>
        </pre>
      </Box>
      <Box>
        <h4>Texts colors</h4>
        <ToggleBox>
          <Toggle
            checked={isThatRight}
            onChange={setIsThatRight}
            offText="OFF"
            onText="ON"
            textColorOff={textColorOff}
            textColorOn={textColorOn}
          />
        </ToggleBox>
        <InputWrapper>
          <TextField label="textColorOff" value={textColorOff} changeHandler={setTextColorOff} />
          <TextField label="textColorOn" value={textColorOn} changeHandler={setTextColorOn} />
        </InputWrapper>

        <pre>
          <code>{`const [isThatRight, setIsThatRight] = useState(${isThatRight});`}</code>
        </pre>
        <pre>
          <code>
            {`<Toggle checked={isThatRight} onChange={setIsThatRight} offText="OFF"
  onText="ON" textColorOff="${textColorOff}" textColorOn="${textColorOn}" />`}
          </code>
        </pre>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  margin: 3em 0;
`;

const ToggleBox = styled.div`
  margin: 2em 0;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default Colors;
