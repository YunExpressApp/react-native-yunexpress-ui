import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { w } from '../../util/CStyle';

const Input = () => {

	return <View style={styles.container}>
		<Text style={styles.leftTxt}>AAAAAAAAA<Text>*</Text></Text>
		<TextInput style={styles.rightTxt} placeholder="xxxxxxxxxaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" />
	</View>
}


export default Input;



const styles = StyleSheet.create({
	container: {
		height: 72 * w,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 32 * w,


	},
	leftTxt: {

	},
	rightTxt: {
		overflow: "hidden",
		backgroundColor: 'red'
	}
})