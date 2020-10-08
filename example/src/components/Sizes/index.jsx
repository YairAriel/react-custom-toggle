import React, { useState } from 'react';
import styled from 'styled-components';

import Toggle from 'react-custom-toggle';

const sizeOptions = ['extraSmall', 'small', 'default', 'large', 'extraLarge'];

const Sizes = () => {
  const [isSunShining, setIsSunShining] = useState(false);
  const [selectedSize, setSelectedSize] = useState('default');

  return (
    <Container>
      <h3>Sizes</h3>
      <Box>
        <ToogleBox>
          <Toggle
            checked={isSunShining}
            onChange={setIsSunShining}
            extraSmall={selectedSize === 'extraSmall'}
            small={selectedSize === 'small'}
            large={selectedSize === 'large'}
            extraLarge={selectedSize === 'extraLarge'} />
        </ToogleBox>
        <RadioGroup onChange={(e) => setSelectedSize(e.target.value)}>
          {sizeOptions.map((size, index) => (
            <Radio htmlFor={size} className="radio" key={`size-${index}`}>
              <input
                readOnly
                type="radio"
                name="sizes"
                value={size}
                id={size}
                checked={selectedSize === size} />
              <span className="label"></span>{size}
            </Radio>
          ))}
        </RadioGroup>
        <CodeWrapper>
          <Pre>
            <code>
              {`const [isSunShining, setIsSunShining] = useState(${isSunShining})`}
            </code>
          </Pre>
          <Pre>
            <code>
              {`<Toggle checked={isSunShining} onChange={setIsSunShining} ${selectedSize === 'default' ? '' : selectedSize + ' '}/>`}
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

const ToogleBox = styled.div`
  height: 50px;
`;

const RadioGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const Radio = styled.label`
  position: relative;
  cursor: pointer;
  line-height: 20px;
  font-size: 14px;
  margin: 15px;
  display: flex;
  input {
    display: none;
    &:checked + .label {
      border-color: #63b3ed;
      &:after {
        transform: scale(1);
        transition: all .2s cubic-bezier(.35,.9,.4,.9);
        opacity: 1;
      }
    }
  }
  span {
    position: relative;
    display: block;
    float: left;
    margin-right: 10px;
    width: 16px;
    height: 16px;
    border: 2px solid #ccc;
    border-radius: 100%;
    -webkit-tap-highlight-color: transparent;
    &:after {
      content: '';
      position: absolute;
      top: 3px;
      left: 3px;
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background: #63b3ed;
      transform: scale(0);
      transition: all .2s ease;
      opacity: 0.2;
      pointer-events: none;
    }
    &:hover {
      &:after {
      transform: scale(3.6);
      }
    }
  }
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

export default Sizes;
