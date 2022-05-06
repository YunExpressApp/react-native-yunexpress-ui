import React from 'react'
import { StyleSheet, View } from "react-native";
import { YTTitle } from 'react-native-yunexpress-ui';
export default function TitleExample() {

	return (
		<View style={styles.container}>
			<YTTitle>标题组件</YTTitle>
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