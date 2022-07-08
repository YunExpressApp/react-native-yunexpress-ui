---
title: NavBar导航栏组件
---

# NavBar导航栏组件

## Screenshots
<img src="/assets/navbar.gif" width="20%" height="20%"> 

## Usage

```js
import { YTNavBar } from 'react-native-yunexpress-ui';
```

## Demo

```js
<YTNavBar title='navbar标题'/>
```

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| title | string | '' | 标题
| style | ViewStyle | {} | 自定义背景样式
| containerStyle | ViewStyle | {} | 自定义导航条背景样式
| backgroundColor | string | '' | 导航栏背景色
| navigation | any |   | 传入的导航组件API
| leftOnClick | Function |   | 导航栏左边返回箭头的点击事件
| hideRightView | boolean | false  | 影藏导航栏右边View
| hideMannualInput | boolean | false  | 影藏导航栏右边菜单中的手动输入
| rightView | JSX.Element |   | 自定义导航栏右边View
| rightOnClick | Function |   | 导航栏右边点击按钮事件
| rightMenus | [RightMenus] |   | RightMenus属性参考下面对象

## Props RightMenus
| Prop | Type | Default | Note |
|---|---|---|---|
| img | any |  | require(image路径)
| title | string |  | 标题
| onPress | Function |  | 点击事件


## Contributing

yanyulin
