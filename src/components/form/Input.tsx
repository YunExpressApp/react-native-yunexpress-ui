import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { w } from '../../util/CStyle';

type InputType = {
	label?: string,
	defaultValue?: string,
	multiline?: boolean,
	numberOfLines?: number,
	onChangeText?: Function,
	require?: boolean
}

const Input = (props: InputType) => {

	let { label = '', defaultValue = '', multiline, numberOfLines = 1, onChangeText, require } = props;
	const [value, setValue] = useState(defaultValue);

	return <View style={styles.container}>
		<Text style={styles.leftTxt}>{label} {require && <Text style={styles.dot}>*</Text>}</Text>
		<View style={styles.rightView}>
			<TextInput style={styles.rightTxt}
				defaultValue={defaultValue}
				value={value}
				multiline={multiline}
				numberOfLines={numberOfLines}
				placeholder="请输入"
				onChangeText={(val: string) => {
					setValue(val);
					onChangeText != null && onChangeText(val);
				}}
			/>
		</View>
	</View>
}


export default Input;



const styles = StyleSheet.create({
	container: {
		height: 72 * w,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		// paddingHorizontal: 32 * w,
	},
	leftTxt: {
		color: '#303030',
		fontSize: 22 * w
	},
	rightView: {
		marginLeft: 10 * w,
		flex: 1,
	},
	rightTxt: {
		textAlign: 'right',
		color: '#808080',
		fontSize: 20 * w
	},
	dot: {
		color: 'red'
	}
})