import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import { w, YTForm } from 'react-native-yunexpress-ui';
export default function FormExample() {

	return (
		<View style={styles.container}>
			<YTForm.Search />
			<YTForm.Input label='必选项' require numberOfLines={1} />
			<YTForm.Input label='选择项' numberOfLines={1} />
			<YTForm.Input label='输入项' numberOfLines={1} />
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