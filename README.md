# react-custom-toggle

> A customizable toggle-switch component for react

[![NPM](https://img.shields.io/npm/v/react-custom-toggle.svg)](https://www.npmjs.com/package/react-custom-toggle) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install react-custom-toggle
```

Or

```bash
yarn add react-custom-toggle
```

## Usage

```jsx
import Toggle from 'react-custom-toggle'

const Example = () => <Toggle />
```

## **Props**

#### Texts

| Name      | Type     | Default | Description                      |
| --------- | -------- | ------- | -------------------------------- |
| `onText`  | `string` | ''      | Text attached to the 'on' state  |
| `offText` | `string` | ''      | Text attached to the 'off' state |

#### Colors

| Name           | Type     | Default                                                                  | Description                                  |
| -------------- | -------- | ------------------------------------------------------------------------ | -------------------------------------------- |
| `colorOn`      | `string` | ![#68d391](https://via.placeholder.com/15/68d391/000000?text=+)`#68d391` | Background color of the Toggle in 'on' mode  |
| `colorOff`     | `string` | ![#fc8181](https://via.placeholder.com/15/fc8181/000000?text=+)`#fc8181` | Background color of the Toggle in 'off' mode |
| `textColorOn`  | `string` | `inherit`                                                                | Color of the 'on' text                       |
| `textColorOff` | `string` | `inherit`                                                                | Color of the 'off' text                      |

#### Sizes

| Name         | Type      | Default | Description                     |
| ------------ | --------- | ------- | ------------------------------- |
| `extraLarge` | `boolean` | `false` | Set the Toggle extra large size |
| `large`      | `boolean` | `false` | Set the Toggle large size       |
| `small`      | `boolean` | `false` | Set the Toggle small size       |
| `extraSmall` | `boolean` | `false` | Set the Toggle extra small size |

#### Other props

| Name       | Type      | Default | Description             |
| ---------- | --------- | ------- | ----------------------- |
| `disabled` | `boolean` | `false` | Set the Toggle disabled |

## License

MIT © [YairAriel](https://github.com/YairAriel)
