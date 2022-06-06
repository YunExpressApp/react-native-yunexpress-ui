import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import { YTForm } from 'react-native-yunexpress-ui';
export default function FormExample() {

	return (
		<View style={styles.container}>
			<YTForm.Input />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	}
});