/*
 * @Date: 2022-06-06 09:45:24
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2023-06-02 11:17:49
 * @FilePath: \yunExpresse:\git\react-native-yunexpress-ui\example\src\views\ModalExample.tsx
 */
import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View } from "react-native";
import { ActionSheetItem, ActionSheetRef, w, YTBtns, YTModal } from 'react-native-yunexpress-ui';
export default function ModalExample() {

	const [visible, setVisible] = useState(false);

	const [acIndex, setAcindex] = useState(-1);
	const actionSheetRef = useRef<ActionSheetRef | null>();


	return (
		<View style={styles.container}>
			<YTModal.Header />

			<YTBtns.Button title={"弹出Modal"} style={{ marginTop: 50 }} enable={true} onPress={() => {
				setVisible(true);
			}} />


			<YTBtns.Button title={"弹出ActionSheet"} style={{ marginTop: 50 }} enable={true} onPress={() => {
				actionSheetRef.current?.open([{ "name": "a", value: "1" },
				{ "name": "b", value: "2" },
				{ "name": "c", value: "3" },
				{ "name": "d", value: "4" },
				{ "name": "e", value: "5" }], acIndex, (item: ActionSheetItem, index: number) => {
					console.log(item + "---" + index)
					setAcindex(index);
				});
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
			{/**@ts-ignore */}
			<YTModal.ActionSheet ref={actionSheetRef} />
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