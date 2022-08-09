/*
 * @Author: 袁康乐 yuankangle@yunexpress.cn
 * @Date: 2022-06-13 10:22:40
 * @LastEditors: 袁康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2022-08-09 15:12:55
 * @FilePath: \react-native-yunexpress-ui\example\src\views\ButtonExample.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
			isBorder={true}
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