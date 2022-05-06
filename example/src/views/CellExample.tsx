import React from 'react'
import { StyleSheet, View } from "react-native";
import { YTCell } from 'react-native-yunexpress-ui';
export default function CellExample() {

	return (
		<View style={styles.container}>
			<YTCell leftTitle='左边内容' rightTitle='右边内容'></YTCell>
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