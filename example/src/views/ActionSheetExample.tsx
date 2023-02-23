/*
 * @Author: 1418220302@qq.com 1418220302@qq.com
 * @Date: 2022-06-10 16:34:12
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2023-02-23 15:16:31
 * @Module Name: 
 * @Description: 
 */
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { w, YTActionSheet } from 'react-native-yunexpress-ui';

export default function ActionSheetExample() {

	const [index, setIndex] = useState<number>();
	const [value, setValue] = useState<string | undefined>('');

	let data = ["a", "b", "c", "b"];
	const showChoice = () => {
		YTActionSheet.show(data, index, (index: number) => {
			setIndex(index);
			setValue(`${index} -- ${data[index]}`)
		});
	}

	let data2 = [
		<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
			<Text style={{ fontSize: 24 * w }}>选项一</Text>
			<Text style={{ fontSize: 24 * w }}>xxxx</Text>
		</View>,
		<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
			<Text style={{ fontSize: 24 * w }}>选项二</Text>
			<Text style={{ fontSize: 24 * w }}>xxxx</Text>
		</View>
	];
	const showChoice2 = () => {
		YTActionSheet.show(data2, index, (index: number) => {
			setIndex(index);
			setValue(`${index} -- ${data[index]}`)
		});
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={showChoice}>
				<Text>底部点击弹出选择</Text>
				<Text>{value}</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={showChoice2}>
				<Text>底部点击弹出选择2</Text>
				<Text>{value}</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => {
				YTActionSheet.showByObj([{ a: 'bb', b: '122', c: 'eeee' }, { a: 'cc', b: 666, c: '1999-2-9' }], ['a'], (index: number) => {
					setIndex(index);
					setValue(`${index} -- ${data[index]}`)
				}, index);
			}}>
				<Text>底部点击弹出选择3</Text>
				<Text>{value}</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
		padding: 24
	}
});