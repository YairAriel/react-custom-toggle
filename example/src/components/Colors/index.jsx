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
        <ToogleBox>
          <Toggle
            checked={isSunShining}
            onChange={setIsSunShining}
            colorOff={colorOff}
            colorOn={colorOn}
          />
        </ToogleBox>
        <InputWrapper>
          <TextField label="colorOff" value={colorOff} changeHandler={setColorOff} />
          <TextField label="colorOn" value={colorOn} changeHandler={setColorOn} />
        </InputWrapper>
        <CodeWrapper>
          <Pre>
            <code>{`const [isSunShining, setIsSunShining] = useState(${isSunShining});`}</code>
          </Pre>
          <Pre>
            <code>
              {`<Toggle checked={isSunShining} onChange={setIsSunShining} 
  colorOff="${colorOff}" colorOn="${colorOn}" />`}
            </code>
          </Pre>
        </CodeWrapper>
      </Box>
      <Box>
        <h4>Texts colors</h4>
        <ToogleBox>
          <Toggle
            checked={isThatRight}
            onChange={setIsThatRight}
            offText="OFF"
            onText="ON"
            textColorOff={textColorOff}
            textColorOn={textColorOn}
          />
        </ToogleBox>
        <InputWrapper>
          <TextField label="textColorOff" value={textColorOff} changeHandler={setTextColorOff} />
          <TextField label="textColorOn" value={textColorOn} changeHandler={setTextColorOn} />
        </InputWrapper>

        <CodeWrapper>
          <Pre>
            <code>{`const [isThatRight, setIsThatRight] = useState(${isThatRight});`}</code>
          </Pre>
          <Pre>
            <code>
              {`<Toggle checked={isThatRight} onChange={setIsThatRight} offText="OFF"
  onText="ON" textColorOff="${textColorOff}" textColorOn="${textColorOn}" />`}
            </code>
          </Pre>
        </CodeWrapper>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  margin: 30px 0;
`;

const ToogleBox = styled.div`
  height: 50px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CodeWrapper = styled.div`
  height: 110px;
`;

const Pre = styled.pre`
  border: 1px solid #ccc;
  background: #f5f5f5;
  border-radius: 4px;
  padding: 10px 20px;
  text-align: left;
  font-size: 14px;
`;

export default Colors;
