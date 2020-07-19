import React from 'react'
import styled from 'styled-components'

export const Toggle = ({
  offText,
  onText,
  extraLarge,
  large,
  small,
  extraSmall,
  colorOn,
  colorOff,
  textColorOff,
  textColorOn
}) => (
  <Container>
    {offText && (
      <OffText
        extraLarge={extraLarge}
        large={large}
        small={small}
        extraSmall={extraSmall}
        textColorOff={textColorOff}
      >
        {offText}
      </OffText>
    )}
    <Wrapper
      extraLarge={extraLarge}
      large={large}
      small={small}
      extraSmall={extraSmall}
    >
      <Input
        type='checkbox'
        extraLarge={extraLarge}
        large={large}
        small={small}
        extraSmall={extraSmall}
      />
      <Slider
        extraLarge={extraLarge}
        large={large}
        small={small}
        extraSmall={extraSmall}
      />
    </Wrapper>
    {onText && (
      <OnText
        extraLarge={extraLarge}
        large={large}
        small={small}
        extraSmall={extraSmall}
        textColorOn={textColorOn}
      >
        {onText}
      </OnText>
    )}
  </Container>
)

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Text = styled.span`
  font-family: inherit;
  ${(props) => {
    if (props.extraLarge) {
      return `
        font-size: 1.4em;
      `
    } else if (props.large) {
      return `
        font-size: 1.2em;
      `
    } else if (props.small) {
      return `
        font-size: 0.8em;
      `
    } else if (props.extraSmall) {
      return `
        font-size: 0.6em;
      `
    } else {
      return `
        font-size: 1em;
      `
    }
  }}
`

const OffText = styled(Text)`
  color: ${(props) => (props.textColorOff ? props.textColorOff : 'inherit')};
`

const OnText = styled(Text)`
  color: ${(props) => (props.textColorOn ? props.textColorOn : 'inherit')};
`

const Wrapper = styled.label`
  position: relative;
  display: block;
  margin: 0 0.5rem;
  ${(props) => {
    if (props.extraLarge) {
      return `
        width: 100px;
        height: 50px;
      `
    } else if (props.large) {
      return `
        width: 80px;
        height: 40px;
      `
    } else if (props.small) {
      return `
        width: 40px;
        height: 20px;
      `
    } else if (props.extraSmall) {
      return `
        width: 20px;
        height: 10px;
      `
    } else {
      return `
        width: 60px;
        height: 30px;
      `
    }
  }}
`

const Input = styled.input`
  display: none;
  &:checked + span {
    background: #68d391;
    &::before {
      ${(props) => {
        if (props.extraLarge) {
          return `
            transform: translateX(48px) rotateZ(360deg);
        `
        } else if (props.large) {
          return `
            transform: translateX(38px) rotateZ(360deg);
        `
        } else if (props.small) {
          return `
            transform: translateX(18px) rotateZ(360deg);
        `
        } else if (props.extraSmall) {
          return `
            transform: translateX(8px) rotateZ(360deg);
        `
        } else {
          return `
            transform: translateX(28px) rotateZ(360deg);
        `
        }
      }}
    }
  }
`

const Slider = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  cursor: pointer;
  background: #fc8181;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2),
    inset 0 3px 8px 0 rgba(0, 0, 0, 0.3);
  border-radius: 36px;
  transition: 300ms;
  transition-delay: 200ms;
  ${(props) => {
    if (props.extraLarge) {
      return `
        padding-inline-start: 6px;
      `
    } else if (props.large) {
      return `
        padding-inline-start: 5px;
      `
    } else if (props.small) {
      return `
        padding-inline-start: 3px;
      `
    } else if (props.extraSmall) {
      return `
        padding-inline-start: 2px;
      `
    } else {
      return `
        padding-inline-start: 4px;
      `
    }
  }}
  &::before {
    content: '';
    position: absolute;
    background: conic-gradient(#f7fafc, #edf2f7, #e2e8f0, #cbd5e0, #a0aec0);
    transition: 300ms;
    border-radius: 50%;
    ${(props) => {
      if (props.extraLarge) {
        return `
          width: 40px;
          height: 40px;
          top: 5px;
      `
      } else if (props.large) {
        return `
          width: 32px;
          height: 32px;
          top: 4px;
      `
      } else if (props.small) {
        return `
          width: 16px;
          height: 16px;
          top: 2px;
      `
      } else if (props.extraSmall) {
        return `
          width: 8px;
          height: 8px;
          top: 1px;
      `
      } else {
        return `
          width: 24px;
          height: 24px;
          top: 3px;
      `
      }
    }}
  }
`
