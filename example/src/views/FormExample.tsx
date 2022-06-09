import React, { useState } from 'react'
import { StyleSheet, View } from "react-native";
import { w, YTForm } from 'react-native-yunexpress-ui';
export default function FormExample() {

	const [value, setValue] = useState("JJJJJJJJJJ");

	return (
		<View style={styles.container}>
			<YTForm.Search />
			<YTForm.Input label='必选项' require numberOfLines={1} />
			<YTForm.Input label='选择项' numberOfLines={1} />
			<YTForm.Input label='输入项' numberOfLines={1} />
			<YTForm.InputItem label='选择项' defaultValue={value} onClick={() => {
				setValue("XXXXXXXX")
			}} />
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