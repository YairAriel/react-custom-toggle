import React, { useState } from 'react';
import styled from 'styled-components';

import Toggle from 'react-custom-toggle';
import TextField from '../common/TextField';

const Texts = () => {
  const [isSunShining, setIsSunShining] = useState(false);
  const [textForOff, setTextForOff] = useState('OFF');
  const [textForOn, setTextForOn] = useState('ON');

  return (
    <Container>
      <h3>Texts</h3>
      <Box>
        <Toggle
          checked={isSunShining}
          onChange={setIsSunShining}
          offText={textForOff}
          onText={textForOn}
        />
        <InputWrapper>
          <TextField label="textOff" value={textForOff} changeHandler={setTextForOff} />
          <TextField label="textOn" value={textForOn} changeHandler={setTextForOn} />
        </InputWrapper>
        <CodeWrapper>
          <Pre>
            <code>
              {`const [isSunShining, setIsSunShining] = useState(${isSunShining});`}
            </code>
          </Pre>
          <Pre>
            <code>
              {`<Toggle checked={isSunShining} onChange={setIsSunShining} 
  offText="${textForOff}" onText="${textForOn}" />`}
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

const Box = styled.div`
  border: 1px solid #eee;
  box-shadow: 1px 3px 3px #ccc;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CodeWrapper = styled.div`
  height: 140px;
`;

const Pre = styled.pre`
  border: 1px solid #ccc;
  background: #f5f5f5;
  border-radius: 4px;
  padding: 10px 20px;
  min-width: 50%;
  text-align: left;
  line-height: 22px;
  font-size: 14px;
`;

export default Texts;
