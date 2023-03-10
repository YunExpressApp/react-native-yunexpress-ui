/*
 * @Author: 袁康乐 yuankangle@yunexpress.cn
 * @Date: 2022-06-13 10:22:40
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2023-03-10 17:19:53
 * @FilePath: \react-native-yunexpress-ui\example\src\views\ButtonExample.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react'
import { ScrollView, Text, View } from "react-native";
import { FlitersView, w, YTActionSheet } from 'react-native-yunexpress-ui'
export default function FlitersViewExample() {
	let data3 = [{ key: 'YS', status: '进行中', c: 'eeee' }, { key: 'DB', status: '已完成', c: '1999-2-9' }, { key: 'AA', status: '全部', c: '...' }]
	const [leftText, setLeftText] = useState('时间')
	const [rightText, setRightText] = useState('状态')
	const [rightIndex, setRightIndex] = useState(NaN)
	return (
		<FlitersView
			buttonLeftText={leftText}
			buttonRightText={rightText}
			onLeftPress={() => {
				setLeftText('11-99-*999FD' + (rightIndex != NaN ? data3[rightIndex]?.c : ''))
			}}
			onRightPress={() => {
				YTActionSheet.showByObj(data3, ['status'], (index: number) => {
					setRightText(`${data3[index].status}`)
					setRightIndex(index)
				}, rightIndex);
			}}
		>
			<ScrollView >
				{
					[1, 2, 3, 4].map((index) => {
						return (
							<>
								<Text >================{index}=================</Text>
								<Text >=========+++=======</Text>
								<Text >=========+++=======</Text>
								<Text >=========+++=======</Text>
								<Text >=========+++=======</Text>
								<Text >=========+++=======</Text>
								<Text >=========+++=======</Text>
								<Text >=========+++=======</Text>
							</>
						)
					})

				}
			</ScrollView>
		</FlitersView>
	)
}