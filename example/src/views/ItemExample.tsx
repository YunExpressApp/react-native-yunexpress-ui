/*
 * @Author: 袁康乐 yuankangle@yunexpress.cn
 * @Date: 2022-06-13 10:22:40
 * @LastEditors: 袁康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2022-09-26 16:09:43
 * @FilePath: \react-native-yunexpress-ui\example\src\views\ButtonExample.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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