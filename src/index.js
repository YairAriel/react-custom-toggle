import React from 'react'
import styled from 'styled-components';

export const Toggle = ({ offText, onText }) => {
  return (
    <Container>
      {offText && <span>{offText}</span>}
      <Wrapper>
        <Input type="checkbox" />
        <Slider />
      </Wrapper> 
      {onText && <span>{onText}</span>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.label`
  position: relative;
  display: block;
  width: 80px;
  height: 40px;
  margin: 0 0.5rem;
`;

const Input = styled.input`
  display: none;
  &:checked + span {
  background: #68D391;
  &::before {
    transform: translateX(38px) rotateZ(360deg);
  }
}
`;

const Slider = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  cursor: pointer;
  background: #FC8181;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2), inset 0 3px 8px 0 rgba(0, 0, 0, 0.3);
  border-radius: 36px;
  transition: 300ms;
  transition-delay: 200ms;
  padding-inline-start: 5px;
  &::before {
    content: '';
    position: absolute;
    background: conic-gradient(#F7FAFC, #EDF2F7, #E2E8F0, #CBD5E0, #A0AEC0);
    transition: 300ms;
    width: 32px;
    height: 32px;
    top: 4px;
    border-radius: 50%;
  }
`;
