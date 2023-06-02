/*
 * @Author: 袁康乐 yuankangle@yunexpress.cn
 * @Date: 2022-06-13 10:22:40
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2023-06-02 10:20:02
 * @FilePath: \react-native-yunexpress-ui\example\src\views\ButtonExample.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from "react-native";
import { Item, w, Theme, CheckBox, Button, myAlert } from 'react-native-yunexpress-ui'
export default function AlertExample() {
	const [text, setText] = useState('');

	useEffect(() => {
		// alert(Theme.locale)
	}, [])

	return <ScrollView>
		<Text style={{ textAlign: 'center', padding: 10 }}>--- {text + '--' + Theme.locale} ---</Text>
		<Item
			topTitle={'标题上面'}
			leftIcon={require('../imgs/common_manual_input.png')}
			title={'Item1标题'}
			subTitle={'Item1子标题'}
			subTitleStyle={{ fontSize: 15 * w }}
			titleTagContentSytle={{ borderRadius: 20 * w, paddingLeft: 10 * w, paddingRight: 10 * w }}
			titleTag={'Item1-Tag'}
			titleTagStyle={{ fontSize: 14 * w }}
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
			bottomLineStyle={{ backgroundColor: '#999', marginBottom: 10 * w }}
		/>
		<View style={{ height: 10 * w }} />
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
		<View style={{ height: 10 * w, backgroundColor: 'white' }} />
		<View style={{ height: 10 * w }} />
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
		<View style={{ height: 10 * w, backgroundColor: 'white' }} />
		<View style={{ height: 10 * w }} />
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
		<View style={{ height: 10 * w }} />
		<View style={{ flexDirection: 'row' }}>
			<Item
				style={{ flex: 1, alignItems: 'center', paddingRight: 0 * w, paddingLeft: 0 * w, paddingVertical: 10 * w }}
				title={'Item5'}
				titleParentStyle={{ alignItems: 'center' }}
				bottomText={'下面内容'}
				rightHidden
				onPress={() => {
					setText('Item5点击')
				}}
			/>
			<Item
				style={{ flex: 1, alignItems: 'center', paddingRight: 0 * w, paddingLeft: 0 * w, paddingVertical: 10 * w }}
				title={'Item6'}
				titleParentStyle={{ alignItems: 'center' }}
				bottomText={'下面内容'}
				rightHidden
				onPress={() => {
					setText('Item6点击')
				}}
			/>
			<Item
				style={{ flex: 1, alignItems: 'center', paddingRight: 0 * w, paddingLeft: 0 * w, paddingVertical: 10 * w }}
				title={'Item7'}
				titleParentStyle={{ alignItems: 'center' }}
				bottomText={'下面内容'}
				bottomContentStyle={{ alignItems: 'center' }}
				rightHidden
				onPress={() => {
					setText('Item7点击')
				}}
			/>
		</View>
		<View style={{ height: 10 * w }} />
		<Item
			style={{ minHeight: 60 * w }}
			required
			topTitle={'Item8 Top标题，输入换行'}
			bottomLineStyle={{ marginTop: 6 * w }}
			rightInput={{
				style: { textAlign: 'left', padding: 0, /*maxWidth: 300 * w*/flex: 1, fontSize: 22 * w },
				multiline: true,
				placeholder: '请你输入这辆从大厅开到天空飞车的车牌号',
				maxLength: 50,
				onChangeText: (text: string) => {
					console.log(text)
				}
			}}
			rightHidden
		/>
		<View style={{ height: 10 * w, backgroundColor: 'white' }} />
		<View style={{ height: 10 * w }} />
		<View style={{ height: 10 * w, backgroundColor: 'white' }} />
		<Item
			title={'Item9 标题 上下都有线'}
			leftTopStyle={{ minHeight: 70 * w, borderTopWidth: 1 * w, borderColor: '#eee' }}
			bottomLineStyle={{ backgroundColor: '#eee' }}
			rightIcon={require('../imgs/yellow_close.png')}
			rightIconOnPress={() => {
				myAlert('点击删除')
			}}
		/>
		<View style={{ height: 10 * w, backgroundColor: 'white' }} />
		<Item
			style={{ marginTop: 10 * w, minHeight: 80 * w }}
			title='Item10 标题可换行标题可换行标题可换行'
			rightText='右边的内容'
			titleParentStyle={{ flex: 1 }}
			rightContentStyle={{ flex: 0 }}
			rightHidden
		/>
		<View style={{ height: 10 * w }} />
		<Item
			style={{ marginTop: 10 * w, minHeight: 90 * w }}
			title='Item11 标题带标签标题可换行标题可换行'
			rightText='右边的内容'
			titleTag='标签'
			titleParentStyle={{ flex: 1 }}
			titleContentStyle={{ flex: 1 }}
			titleStyle={{ flex: 1 }}
			rightContentStyle={{ flex: 0 }}
			rightHidden
			showRedDot
		/>
		<View style={{ height: 10 * w }} />
	</ScrollView>
}