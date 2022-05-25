import React from 'react'
import { StyleSheet, View } from "react-native";
import { YTStatusBages } from 'react-native-yunexpress-ui';
export default function StatusBadgeExample() {

	return (
		<View style={styles.container}>
			<YTStatusBages>标题组件</YTStatusBages>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 24
	}
});