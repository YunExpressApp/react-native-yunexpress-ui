/*
 * @Date: 2022-06-06 09:45:24
 * @LastEditors: yanyulin
 * @LastEditTime: 2022-08-25 17:15:20
 * @FilePath: \yunExpresse:\git\react-native-yunexpress-ui\example\src\views\ModalExample.tsx
 */
import React, { useState } from 'react'
import { StyleSheet, Text, View } from "react-native";
import { w, YTBtns, YTForm, YTModal } from 'react-native-yunexpress-ui';
export default function ModalExample() {

	const [visible, setVisible] = useState(false);

	return (
		<View style={styles.container}>
			<YTModal.Header />

			<YTBtns.Button title={"弹出Modal"} style={{ marginTop: 50 }} enable={true} onPress={() => {
				setVisible(true);
			}} />

			<YTModal.Bottom
				visible={visible}
				onClose={() => {
					setVisible(false);
				}}
				onRightPress={() => {
					setVisible(false);
				}}
				title="标题"
				onSearchChangeText={() => { }}
			>
				<View style={{ height: 200 }}>
					<Text>aaaaaaaaaaaa</Text>
				</View>
			</YTModal.Bottom>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'gray',
		paddingVertical: 32 * w
	}
});