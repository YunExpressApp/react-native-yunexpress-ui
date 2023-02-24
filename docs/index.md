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
import { Theme } from 'react-native-yunexpress-ui';

// 国际化语言设置

Theme.setI18n("en"); // fr-法语 en-英语 zh-中文    默认 en

```
## Theme参数方法
| params/methods | Type | Default | Note |
|---|---|---|---|
| isPad | boolean |  | 判断是否为iPad
| isIPhoneX | boolean |  | 判断是为iPhoneX
| isLandscape | boolean |  | 判断横竖屏
| statusBarHeight | number | 20 | 状态栏的高度
| screenInset | any |  | 手机屏幕可用区域
| primaryColor | string | #1592A3 | 主体颜色
| defaultTextColor | string | #111111 | 主体字体颜色
| defaultTitleSize | number | 22 | 主体标题字体大小
| defaultSubTitleSize | number | 18 | 主体二级标题字体大小
| defaultCellLineHeight | number | 30 | cell高度
| pageColor | string | #fff | 组件默认背景色
| cardRadius | number | 10 | 卡片圆角
| cardBorderWith | number | 1 | 卡片边框宽度
| cardBorderColor | number | 1 | 卡片边框颜色
| cardPaddingHorizontal | number | 24 | 卡片水平内边距
| cardPaddingVertical | number | 16 | 卡片垂直内边距
| w | number | 16 | 
| locale | string | en | 国际化语言 

## Contributing

yuankangle、longjiang、yanyulin

## License

MIT
