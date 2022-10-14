/** @format */

import React from 'react';
import styled from 'styled-components';

const Box = ({ children }) => <Container>{children}</Container>;

const Container = styled.div`
  border: 1px solid #eee;
  box-shadow: 1px 3px 3px #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

export default Box;
