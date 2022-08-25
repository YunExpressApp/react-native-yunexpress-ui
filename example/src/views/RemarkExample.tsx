/*
 * @Date: 2022-05-31 10:37:21
 * @LastEditors: yanyulin
 * @LastEditTime: 2022-08-25 14:55:34
 * @FilePath: \yunExpresse:\git\react-native-yunexpress-ui\example\src\views\RemarkExample.tsx
 */
import React, { useState } from 'react'
import { StyleSheet, View } from "react-native";
import { YTRemarkItem } from 'react-native-yunexpress-ui';

export default function RemarkExample() {
	const [value, setValue] = useState<string | undefined>('');
	return (
		<View style={styles.container}>
			{/* <Modal visible={true} >
				<View style={{ flex: 1, backgroundColor: 'yellow' }}>
					<YTRemarkItem label='备注1' require value={value} onChange={(val: string) => { setValue(val) }}></YTRemarkItem>
				</View>
			</Modal> */}
			<YTRemarkItem label='备注' require value={value} onChange={(val: string) => { setValue(val) }}></YTRemarkItem>
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