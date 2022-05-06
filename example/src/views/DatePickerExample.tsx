import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from "react-native";
import { YTDatePicker } from 'react-native-yunexpress-ui';
export default function DatePickerExample() {

	return (
		<View style={styles.container}>
			<Text>测试</Text>
			<YTDatePicker></YTDatePicker>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center'
	}
});