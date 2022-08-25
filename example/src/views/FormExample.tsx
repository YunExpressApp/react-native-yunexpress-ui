/*
 * @Date: 2022-06-06 09:45:24
 * @LastEditors: yanyulin
 * @LastEditTime: 2022-08-25 10:04:40
 * @FilePath: \yunExpresse:\git\react-native-yunexpress-ui\example\src\views\FormExample.tsx
 */
import React, { useState } from 'react'
import { Alert, StyleSheet, View } from "react-native";
import { w, YTForm } from 'react-native-yunexpress-ui';
export default function FormExample() {

	const [value, setValue] = useState("");

	return (
		<View style={styles.container}>
			<YTForm.Search placeholder='请输入搜索关键字' />
			<YTForm.Input label='必选项' require value={value} onChangeText={(val: string) => {
				setValue(val);
			}} />
			<YTForm.Input label='选择项' maxLength={10} editable={false} value="禁止输入" />
			<YTForm.Input label='输入项' />
			<YTForm.InputItem label='选择项' editable={true} value={value} onClick={() => {
				Alert.alert("请选择");
			}} />
			<YTForm.Radio label='单选项' data={["选项1", "选项2", "选项3"]} index={0} onChange={(i: number) => {
				Alert.alert("请选择" + i);
			}} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		// paddingHorizontal: 32 * w,
		paddingVertical: 32 * w
	}
});