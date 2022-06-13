import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { YTActionSheet } from 'react-native-yunexpress-ui';

export default function ActionSheetExample() {

	const [index, setIndex] = useState<number>();
	const [value, setValue] = useState<string | undefined>('');

	let data = ["a", "b", "c", "b"];
	const showChoice = () => {
		YTActionSheet.show(data, index, (index: number) => {
			setIndex(index);
			setValue(`${index} -- ${data[index]}`)
		});
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={showChoice}>
				<Text>底部点击弹出选择</Text>
				<Text>{value}</Text>
			</TouchableOpacity>
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