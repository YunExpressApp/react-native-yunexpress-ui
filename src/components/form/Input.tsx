import React from "react";
import { Text, TextInput, View, StyleSheet, StyleProp, ViewStyle, TextStyle, KeyboardTypeOptions } from "react-native";
import { w } from '../../util/CStyle';

type InputType = {
	label?: string,
	value?: string,
	multiline?: boolean,
	onChangeText?: Function,
	require?: boolean,
	placeholder?: string,
	style?: StyleProp<ViewStyle>,
	labelStyle?: StyleProp<TextStyle>,
	inputStyle?: StyleProp<ViewStyle>,
	maxLength?: number,
	keyboardType?: KeyboardTypeOptions | undefined,
	editable?: boolean

}

const Input = (props: InputType) => {
	let { label = '', multiline, onChangeText, require, placeholder, style, labelStyle, inputStyle, maxLength, editable, keyboardType } = props;

	return <View style={[styles.container, style]}>
		<Text style={[styles.leftTxt, labelStyle]}>{require && <Text style={styles.dot}>*</Text>}{label}</Text>
		<View style={styles.rightView}>
			<TextInput style={[styles.rightTxt, inputStyle]}
				value={props.value}
				multiline={multiline}
				numberOfLines={1}
				placeholder={placeholder || "请输入"}
				maxLength={maxLength}
				editable={editable}
				keyboardType={keyboardType}
				onChangeText={(val: string) => {
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
		paddingHorizontal: 32 * w,
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