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
<YTCard style={styles.card} onPress={() => { }}>
	<View style={styles.content}>
		<YTTitle style={{ marginBottom: 10 * w }}>标题文字</YTTitle>
		<YTCell leftTitle='左边内容' rightTitle='右边内容'></YTCell>
		<YTCell leftTitle='左边内容' rightTitle='右边内容'></YTCell>
		<YTCell leftTitle='左边内容' rightTitle='右边内容'></YTCell>
		<YTCell leftTitle='左边内容' rightTitle='右边内容'></YTCell>
	</View>
	<YTCardButtons btns={[{ title: "查看详情" }, { title: "查看详情", style: { color: '#1592A3' } }]}></YTCardButtons>
</YTCard>


const styles = StyleSheet.create({
	card: {},
	content: {
		paddingHorizontal: Theme.cardPaddingHorizontal,
		paddingVertical: Theme.cardPaddingVertical
	}
});
```

## YTCard Props
| Prop | Type | Default | Note |
|---|---|---|---|
| children | JSX.Element | JSX.Element[] | never[] |  | 卡片里面的内容
| title | string | '' | 卡片标题 为空则不显示
| style | ViewStyle |  | 卡片样式
| titleStyle | TextStyle | {} | 卡片标题文字样式
| onPress | Function |  | 卡片点击事件
 
 
## YTCardButtons Props
| Prop | Type | Default | Note |
|---|---|---|---|
| btns | [] | '' | 按钮数组列表
| --style | TextStyle |  | 按钮文字样式
| --title | String |  | 按钮文案
| --onPress | Function |  | 按钮点击事件
 
## Contributing

yanyulin
