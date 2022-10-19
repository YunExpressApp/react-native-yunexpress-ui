---
title: Item表单
---

## Item表单

## Screenshots
<img src="/assets/item.gif" width="30%" height="30%">

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| style | ViewStyle |  | 整体样式
| title | string |  | 标题
| rightText | string |  | 右边内容
| rightHidden | boolean | false | 隐藏右边图标
| onPress | Function |  | 点击事件监听
| rightInput | TextInputProps |  | 右边编辑框属性
| rightCustomView | any |  | 右边自定义组件
...

## Demo
```js
import React, { useEffect, useState } from 'react'
import { Text, View } from "react-native";
import { Item, w, Theme, CheckBox, Button } from 'react-native-yunexpress-ui'
export default function AlertExample() {
	const [text, setText] = useState('');

	useEffect(() => {
		// alert(Theme.locale)
	}, [])

	return <View>
		<Text style={{ textAlign: 'center', padding: 10 }}>--- {text || Theme.locale} ---</Text>
		<Item
			topTitle={'标题上面'}
			leftIcon={require('../imgs/common_manual_input.png')}
			title={'Item1标题'}
			subTitle={'Item1子标题'}
			titleTag={'Item1标题Tag'}
			required
			titleStyle={{ fontSize: 20 * w }}
			rightText={'右边内容'}
			rightHidden={false}
			onPress={() => {
				setText('Item1点击')
			}}
			titleBottomText={'标题下面内容'}
			bottomText={'下面内容'}
			bottomRightText={'下面右边'}
			bottomLineStyle={{ backgroundColor: '#999' }}
		/>
		<Item
			title={'*'}
			titleStyle={{ color: 'red' }}
			subTitle={'Item2标题'}
			subTitleStyle={{ fontSize: 20 * w }}
			rightInput={{
				placeholder: '请输入内容',
				style: { textAlign: 'right', fontSize: 18 * w }
			}}
			rightHidden={true}
			onPress={() => {
				setText('Item2点击')
			}}
			bottomLineStyle={{ backgroundColor: '#999' }}
		/>
		<Item
			style={{ minHeight: 70 * w, paddingTop: 10 * w }}
			title={'Item3标题'}
			onPress={() => {
				setText('Item3点击')
			}}
			rightHidden={true}
			rightCustomView={
				<Button
					style={{ width: 100 * w, height: 40 * w }}
					btnStyle={{ height: 40 * w }}
					buttonRightText={'按钮'}
					onRightPress={() => {
						setText('Item3按钮点击')
					}}
				/>
			}
			bottomText={'右边支持自定组件'}
			bottomLineStyle={{ backgroundColor: '#999' }}
		/>

		<Item
			style={{ minHeight: 70 * w, paddingTop: 5 * w }}
			title={'Item4标题'}
			showBorder
			leftTopStyle={{ minHeight: 50 * w }}
			onPress={() => {
				setText('Item4点击')
			}}
			rightHidden={true}
			rightCustomView={
				<CheckBox
					isChecked={true}
					onChecked={() => {
						setText('Item4 CheckBox点击')
					}}
				/>
			}
		/>

		<View style={{ flexDirection: 'row' }}>
			<Item
				style={{ flex: 1, alignItems: 'center' }}
				title={'Item5标题'}
				titleParentSytle={{ flex: 0 }}
				bottomText={'下面内容'}
				rightHidden
				onPress={() => {
					setText('Item5点击')
				}}
			/>
			<Item
				style={{ flex: 1, alignItems: 'center' }}
				title={'Item6标题'}
				titleParentSytle={{ flex: 0 }}
				bottomText={'下面内容'}
				rightHidden
				onPress={() => {
					setText('Item6点击')
				}}
			/>
			<Item
				style={{ flex: 1, alignItems: 'center' }}
				title={'Item7标题'}
				titleParentSytle={{ flex: 0 }}
				bottomText={'下面内容'}
				rightHidden
				onPress={() => {
					setText('Item7点击')
				}}
			/>
		</View>

	</View>
}
```

## Contributing
create by yuankangle