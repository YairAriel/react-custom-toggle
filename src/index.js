import React from 'react'
import styled from 'styled-components';

export const Toggle = ({ offText, onText, large, small }) => {
  return (
    <Container>
      {offText && <span>{offText}</span>}
      <Wrapper large={large} small={small}>
        <Input type="checkbox" large={large} small={small} />
        <Slider large={large} small={small} />
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
  margin: 0 0.5rem;
  ${props => {
    if (props.large) {
      return `
        width: 100px;
        height: 50px;
      `
    } else if (props.small) {
      return `
        width: 60px;
        height: 30px;
      `
    } else {
      return `
        width: 80px;
        height: 40px;
      `
    }
  }}
`;

const Input = styled.input`
  display: none;
  &:checked + span {
  background: #68D391;
  &::before {
    ${props => {
      if (props.large) {
        return `
          transform: translateX(48px) rotateZ(360deg);
        `
      } else if (props.small) {
        return `
          transform: translateX(28px) rotateZ(360deg);
        `
      } else {
        return `
          transform: translateX(38px) rotateZ(360deg);
        `
      }
    }}
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
  ${props => {
    if (props.large) {
      return `
        padding-inline-start: 6px;
      `
    } else if (props.small) {
      return `
        padding-inline-start: 4px;
      `
    } else {
      return `
        padding-inline-start: 5px;
      `
    }
  }}
  &::before {
    content: '';
    position: absolute;
    background: conic-gradient(#F7FAFC, #EDF2F7, #E2E8F0, #CBD5E0, #A0AEC0);
    transition: 300ms;
    border-radius: 50%;
    ${props => {
    if (props.large) {
      return `
        width: 40px;
        height: 40px;
        top: 5px;
      `
    } else if (props.small) {
      return `
        width: 24px;
        height: 24px;
        top: 3px;
      `
    } else {
      return `
        width: 32px;
        height: 32px;
        top: 4px;
      `
    }
  }}
  }
`;
