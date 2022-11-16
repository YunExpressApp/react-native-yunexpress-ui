/*
 * @Author: 袁康乐 yuankangle@yunexpress.cn
 * @Date: 2022-06-13 10:22:40
 * @LastEditors: 袁康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2022-11-10 14:00:05
 * @FilePath: \react-native-yunexpress-ui\example\src\views\AlertExample.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react'
import { Text, TextInput, ToastAndroid, View } from "react-native";
import { Alert } from 'react-native-yunexpress-ui'
export default function AlertExample() {
	let alertRef: Alert | null;
	let alertCRef: Alert | null;
	const [text, setText] = useState('');
	const [show, setShow] = useState(false);
	const [leftText, setLeftText] = useState('Cancel');

	useEffect(() => {
		if (text) {
			alertRef?.setIsCancelable(false)
			alertRef?.showOneButton('Title', '我是第二个弹框')
		}
	}, [text])

	return <View>
		<Text onPress={() => {
			setText('')
			alertRef?.show("Alert标题", () => {
				//确认键处理
				setText("已弹出Alert，并点击确认")
			}, "第二个弹框", () => { setText("") }, "再见")
		}}>请点我---{text}</Text>
		<Text onPress={() => {
			//点旁边不可关闭
			alertRef?.setIsCancelable(false)
			setLeftText("修改LeftText")
			alertRef?.showOneButton('我是标题', '我只有一个按我只有一个按我只有一个按我只有一个按我只有一个按钮我只有一个按钮我只有一个按钮我只有一个按钮按我只有一个按钮我只有一个按钮我只有一个按钮我只有一个按钮按我只有一个按钮我只有一个按钮我只有一个按钮我只有一个按钮按我只有一个按钮我只有一个按钮我只有一个按钮我只有一个按钮按我只有一个按钮我只有一个按钮我只有一个按钮我只有一个按钮')
		}}>单个按钮请点我[修改第三个弹框LeftText]</Text>
		<Text onPress={() => {
			//点旁边不可关闭
			alertRef?.show("还原LeftText", () => {
				//确认键处理
				setLeftText("")
			})
		}}>第三个弹框</Text>
		<Text onPress={() => {
			//点旁边不可关闭
			setShow(true)
		}}>第四个属性配置弹框</Text>
		<Text onPress={() => {
			//点旁边不可关闭
			alertRef?.setTextStyle({ color: 'red' }, { color: 'green' })
			alertRef?.setButtonStyle({ color: 'blue' }, { color: '#6f6' })
			alertRef?.show('改变样式', () => { }, undefined, undefined, '关闭', '内容样式改变')
		}}>第五个改变样式</Text>
		<Text onPress={() => {
			//点旁边不可关闭
			alertCRef?.show('自定义弹框', () => {
				ToastAndroid.show('点击OK', ToastAndroid.SHORT)
			}, 'OK', undefined, '关闭')
		}}>第六个自定义弹框</Text>
		<Alert leftText={leftText} ref={ref => alertRef = ref} />
		<Alert show={show} title={'show属性控制'} content={'我是内容...........'} leftText={'左边'} rightText={'右边'} onClose={() => setShow(false)} />
		<Alert ref={ref => alertCRef = ref}>
			<TextInput placeholder={'请输入内容'} />
		</Alert>
	</View>
}