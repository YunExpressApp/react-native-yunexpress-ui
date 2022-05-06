---
title: Card组件
---

# Card组件

## Screenshots
<img src="/assets/card.jpg" width="20%" height="20%"> 

## Usage

```js
import { YTCard } from 'react-native-yunexpress-ui';
```

## Demo

```js
<YTCard title='标题文字' onPress={() => {}}>
	<YTCell leftTitle='左边内容' rightTitle='右边内容'></YTCell>
	<YTCell leftTitle='左边内容' rightTitle='右边内容'></YTCell>
	<YTCell leftTitle='左边内容' rightTitle='右边内容'></YTCell>
	<YTCell leftTitle='左边内容' rightTitle='右边内容'></YTCell>
</YTCard>
```

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| children | JSX.Element | JSX.Element[] | never[] |  | 卡片里面的内容
| title | string | '' | 卡片标题 为空则不显示
| style | ViewStyle |  | 卡片样式
| titleStyle | TextStyle | {} | 卡片标题文字样式
| onPress | Function |  | 卡片点击事件
 
## Contributing

yanyulin
