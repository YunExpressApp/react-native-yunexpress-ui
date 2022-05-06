---
title: 指引
---
# react-native-yunexpress-ui

YunExpress Component Library

## Installation

```sh
npm install react-native-yunexpress-ui
```

```sh
yarn add react-native-yunexpress-ui
```

## Usage

```js
import { Button, Alert } from 'react-native-yunexpress-ui';

// ...

<Button
    buttonLeftText={"取消"}
    buttonRightText={"确认"}
    isBorder={false}
    onLeftPress={() => {
        //...
    }}
    onRightPress={() => {
        //...
    }}
    title={this.state.title}
    btnLeftTextStyle={{ color: '#303030', fontSize: 24 }}
    btnTextStyle={{ color: '#1592A3', fontSize: 24 }}
    btnStyle={{ flex: 1, backgroundColor: '#00000000', alignItems: 'flex-start', paddingTop: 10 }}
/>
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
