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