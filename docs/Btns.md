---
title: Btns辅助按钮组件
---

# Btns辅助按钮组件

## Screenshots
<img src="/assets/btns.gif" width="20%" height="20%"> 

## Usage

```js
import { YTBtns } from 'react-native-yunexpress-ui';
```

## Demo

```js
//YTBtns.Sub
<YTBtns.Sub leftText='左边值:' rightText='右边值' index={0} />
<YTBtns.Sub leftText='左边值:' rightText='右边值' index={1} active={value == 1} onClick={onClick} />
<YTBtns.Sub leftText='左边值:' rightText='右边值' index={2} active={value == 2} onClick={onClick} />
<YTBtns.Sub leftText='左边值:' rightText='右边值' index={3} active={value == 3} onClick={onClick} />
<YTBtns.Sub leftText='左边值:' rightText='右边值' index={4} active={value == 4} onClick={onClick} />

//YTBtns.Button
<YTBtns.Button title={"按钮"} /> 
<YTBtns.Button title={"按钮"} enable={true} onPress={() => { }} />
<YTBtns.Button title={"按钮"} radius enable={true} onPress={() => { }} />
<YTBtns.Button title={"按钮"} leftTitle="左边按钮" enable={true} onPress={() => { }} />
<YTBtns.Button title={"按钮"} leftTitle="左边按钮不可点击" enable={true} onPress={() => { }} leftEnable={false} leftOnPress={() => {}} />
<YTBtns.Button title={"按钮"} leftTitle="左边按钮" onPress={() => { }} />

```

## YTBtns.Sub Props
| Prop | Type | Default | Note |
|---|---|---|---|
| style | ViewStyle | {} | 按钮样式
| leftStyle | TextStyle | {} | 左边文字样式
| rightStyle | TextStyle | {} | 右边文字样式
| leftText | string | '' | 左边文字
| rightText | string | '' | 右边文字
| index | number |   | 索引属性
| active | boolean |   | 是否为选中状态
| onClick | Function |   | 点击事件

## YTBtns.Button Props
| Prop | Type | Default | Note |
|---|---|---|---|
| style | ViewStyle | {} | 按钮样式
| title | string |  | 按钮文案
| enable | Boolean | false | 按钮状态 true: 可点击状态 false:不可点击状态 
| onPress | Function |  | 点击事件
| textStyle | TextStyle |  | 按钮文字样式
| radius | boolean | false | 是否为圆角按钮 true:圆角 false:非圆角 
| leftTitle | string |  | 左边按钮文案 为空时左边按钮不显示  默认不显示
| leftOnPress | Function |  | 左边按钮的点击事件
| leftEnable | Boolean | true | 左边按钮状态 true: 可点击状态 false:不可点击状态 

## YTBtns.Popup Props
| Prop | Type | Default | Note |
|---|---|---|---|
| visible | boolean | false | 按钮状态 true: 显示 false:不可显示 
| title | string |  | 标题文案
| isShowHeader | boolean |  | 是否显示头部组件
| leftTitle | string |  | 头部组件左侧按钮文案
| rightTitle | string |  | 头部组件右侧按钮文案
| onClose | Function |  | 关闭弹框后的回调
| onLeftPress | Function |  | 点击左侧按钮后的回调
| onRightPress | Function |  | 点击右侧按钮后的回调
| children | Array\<React.ReactElement\> \| React.ReactElement |  | 子节点
| style | StyleProp\<ViewStyle\> |  | 组件外框样式

## Contributing

yanyulin
