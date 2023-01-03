# react-custom-toggle

> A customizable toggle-switch component for react

[Demo and docs](https://react-custom-toggle.netlify.app/)

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
import React, { useState } from 'react';
import Toggle from 'react-custom-toggle';
     
const Example = () => {
  const [isSunShining, setIsSunShining] = useState(false);

  return (
    <Toggle checked={isSunShining} onChange={setIsSunShining} />
  );
};
```

## **Props**

| Name       | Type       | Required | Description                                          | 
| -----------| ---------- | -------- | ---------------------------------------------------- |
| `checked`  | `boolean`  | `true`   | Determines whehter the toggle is checked or not      |
| `onChange` | `function` | `true`   | A function to handle the changes in the toggle state |

#### Sizes

Only single size can be picked. The toggle has a medium size by default (if no size specified)

| Name         | Type      | Default | Description                           |
| ------------ | --------- | ------- | ------------------------------------- |
| `extraLarge` | `boolean` | `false` | Set an extra large size to the toggle |
| `large`      | `boolean` | `false` | Set a large size to the toggle        |
| `small`      | `boolean` | `false` | Set a small size to the toggle        |
| `extraSmall` | `boolean` | `false` | Set an extra small size to the toggle |

#### Texts

| Name      | Type     | Default | Description                      |
| --------- | -------- | ------- | -------------------------------- |
| `onText`  | `string` | ''      | Text attached to the 'on' state  |
| `offText` | `string` | ''      | Text attached to the 'off' state |

#### Colors

| Name           | Type     | Default                                                                  | Description                                  |
| -------------- | -------- | ------------------------------------------------------------------------ | -------------------------------------------- |
| `colorOn`      | `string` | ![#68d391](https://via.placeholder.com/15/68d391/68d391.png) `#68d391` | Background color of the Toggle in 'on' mode  |
| `colorOff`     | `string` | ![#fc8181](https://via.placeholder.com/15/fc8181/fc8181.png) `#fc8181` | Background color of the Toggle in 'off' mode |
| `textColorOn`  | `string` | `inherit`                                                                | Color of the 'on' text                       |
| `textColorOff` | `string` | `inherit`                                                                | Color of the 'off' text                      |

#### Other props

| Name       | Type      | Default | Description             |
| ---------- | --------- | ------- | ----------------------- |
| `disabled` | `boolean` | `false` | Set the Toggle disabled |

## License

MIT © [YairAriel](https://github.com/YairAriel)
