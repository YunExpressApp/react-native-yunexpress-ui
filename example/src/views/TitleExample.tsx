import React from 'react'
import { StyleSheet, Text, View } from "react-native";
// import { myAlert } from 'react-native-yunexpress-ui';
export default function TitleExample() {

	return (
		<View style={styles.container}>
			<Text onPress={() => {
				// myAlert("1")
			}}>标题组件</Text>
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