/*
 * @Author: 袁康乐 yuankangle@yunexpress.cn
 * @Date: 2022-06-13 10:22:40
 * @LastEditors: 袁康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2022-08-26 09:36:10
 * @FilePath: \react-native-yunexpress-ui\example\src\views\ButtonExample.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react'
import { Text, View } from "react-native";
import { Button, w } from 'react-native-yunexpress-ui'
export default function AlertExample() {
	const [text, setText] = useState('');
	const [disable, setDisable] = useState<'left' | 'right' | 'all' | 'none'>('none');
	return <View>
		<Text style={{ textAlign: 'center', padding: 10 }}>--- {text} ---</Text>
		<Button
			buttonRightText={'按钮1'}
			onRightPress={() => {
				setText("按钮5和6变得不可点")
				setDisable('all')
			}}
		/>
		<Button
			isBorder={true}
			btnStyle={{ backgroundColor: 'green' }}
			buttonRightText={'按钮2'}
			onRightPress={() => {
				setText("激活按钮5 和 6")
				setDisable('none')
			}}
		/>
		<Button
			style={{ marginTop: 20 }}
			isBorder={false}
			buttonLeftText={'按钮3'}
			onLeftPress={() => {
				setText("只激活按钮5")
				setDisable('right')
			}}
			buttonRightText={'按钮4'}
			onRightPress={() => {
				setText("只激活按钮6")
				setDisable('left')
			}}
		/>
		<Button
			style={{ marginTop: 20 }}
			isBorder={false}
			buttonLeftText={'按钮5'}
			onLeftPress={() => {
				setText("已点击按钮5")
			}}
			disable={disable}
			buttonRightText={'按钮6'}
			onRightPress={() => {
				setText("已点击按钮6")
			}}
			btnStyle={{ flex: 1 }}
		/>
	</View>
}