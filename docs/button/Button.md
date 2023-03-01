---
title: Button按钮
group:
    title: 按钮
---

## Button按钮

## Screenshots
<img src="/assets/button.gif" width="80%" height="80%"> 

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| isBorder | boolean | true | 是否有边框带圆角
| style | ViewStyle |  | 整体样式
| btnStyle | ViewStyle | {} | 按钮样式
| buttonRightText | string |  | 右边按钮文本,如果只要一个按钮不设置buttonLeftText
| btnRightTextStyle | TextStyle |  | 右边按钮文本样式
| buttonLeftText | string |  | 左边按钮文本
| btnLeftTextStyle | TextStyle |  | 左边按钮文本样式
| onRightPress | Function |  | 右边按钮点击回调函数
| onLeftPress | Function |  | 左边按钮点击回调函数

## Demo
```js
import React, { useState } from 'react'
import { Text, View } from "react-native";
import { Button } from 'react-native-yunexpress-ui'
export default function AlertExample() {
	const [text, setText] = useState('');
	return <View>
		<Text >---{text}</Text>
		<Button
			buttonRightText={'按钮1'}
			onRightPress={() => {
				setText("已点击按钮1")
			}}
		/>
		<Button
			isBorder={false}
			btnStyle={{ backgroundColor: 'green' }}
			buttonRightText={'按钮2'}
			onRightPress={() => {
				setText("已点击按钮2")
			}}
		/>
		<Button
			style={{ marginTop: 20 }}
			isBorder={false}
			buttonLeftText={'按钮3'}
			onLeftPress={() => {
				setText("已点击按钮3")
			}}
			buttonRightText={'按钮4'}
			onRightPress={() => {
				setText("已点击按钮4")
			}}
		/>
	</View>
}
```

## Contributing
create by yuankangle