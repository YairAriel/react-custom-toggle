import React from 'react';
import styled from 'styled-components';

const BasicUsage = () => (
  <>
    <h3>Installation</h3>
    <CodeExample>
      <code>{`npm install react-custom-toggle`}</code>
    </CodeExample>
    <CodeExample>
      <code>{`yarn add react-custom-toggle`}</code>
    </CodeExample>
    <h3>Usage</h3>
    <CodeExample>
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
    </CodeExample>
  </>
);

const CodeExample = styled.pre`
  border: 1px solid #ccc;
  background: #f5f5f5;
  border-radius: 4px;
  padding: 10px 20px;
  text-align: left;
  box-sizing: border-box;
  font-size: 14px;
`;

export default BasicUsage;
