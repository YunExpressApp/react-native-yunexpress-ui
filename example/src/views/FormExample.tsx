/*
 * @Date: 2022-06-06 09:45:24
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2023-02-24 11:08:28
 * @FilePath: \yunExpresse:\git\react-native-yunexpress-ui\example\src\views\FormExample.tsx
 */
import React, { useState } from 'react'
import { Alert, ScrollView, StyleSheet, Text, ToastAndroid, View } from "react-native";
import { w, YTForm } from 'react-native-yunexpress-ui';
export default function FormExample() {

	const [value, setValue] = useState("aaaaaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
	const [imageUrls, setImageUrls] = useState<string[]>([])

	return (
		<View style={styles.container}>
			<ScrollView>
				<YTForm.Search placeholder='请输入搜索关键字' />
				<YTForm.Input label='必选项' require value={value} onChangeText={(val: string) => {
					setValue(val);
				}} />
				<YTForm.Input label='选择项' maxLength={10} editable={false} value="禁止输入" />
				<YTForm.Input label='输入项' />
				<YTForm.InputItem label='选择项' editable={true} value={value} onClick={() => {
					Alert.alert("请选择");
				}} />
				<YTForm.InputItem label='选择项40' style={{ height: 32, marginTop: 10 }} editable={true} value={value} onClick={() => {
					Alert.alert("请选择");
				}} />
				<YTForm.Radio label='单选项' data={["选项1", "选项2", "选项3"]} index={0} onChange={(i: number) => {
					Alert.alert("请选择" + i);
				}} />

				<YTForm.PhotosView require imgUrls={["", ""]} max={50} title="照片" style={{ paddingHorizontal: 32 * w }} />
				<YTForm.PhotosView
					require
					onAdd={() => {
						ToastAndroid.show('添加', ToastAndroid.LONG)
						imageUrls.push('http://1211212')
						setImageUrls([...imageUrls])
					}}
					onDel={(r) => {
						ToastAndroid.show('删除' + r, ToastAndroid.LONG)
					}}
					onView={(r) => {
						ToastAndroid.show('显示' + r, ToastAndroid.LONG)
					}}
					imgUrls={imageUrls} max={50} title={<View><Text>拍照</Text></View>} style={{ paddingHorizontal: 32 * w }} />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		paddingHorizontal: 32 * w,
		paddingVertical: 32 * w
	}
});