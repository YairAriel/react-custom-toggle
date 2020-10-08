import React from 'react';
import styled from 'styled-components';

const BasicUsage = () => (
  <>
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
        {`
import React, { useState } from 'react';
import Toggle from 'react-custom-toggle';
     
const Example = () => {
  const [isSunShining, setIsSunShining] = useState(false);

  return (
    <Toggle checked={isSunShining} onChange={setIsSunShining} />
  );
};`}
      </code>
    </Pre>
  </>
);

const Pre = styled.pre`
  border: 1px solid #ccc;
  background: #f5f5f5;
  border-radius: 4px;
  padding: 10px 20px;
  text-align: left;
  box-sizing: border-box;
  font-size: 14px;
`;

export default BasicUsage;
