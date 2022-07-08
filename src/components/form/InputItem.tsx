import React from "react";
import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity, StyleProp, ViewStyle, TextStyle, KeyboardTypeOptions } from "react-native";
import { w } from '../../util/CStyle';

type InputItemType = {
	label?: string,
	value?: string,
	multiline?: boolean,
	numberOfLines?: number,
	require?: boolean,
	onClick?: Function,
	placeholder?: string,
	style?: StyleProp<ViewStyle>,
	labelStyle?: StyleProp<TextStyle>,
	inputStyle?: StyleProp<ViewStyle>,
	keyboardType?: KeyboardTypeOptions | undefined,
	editable?: boolean
}

const InputItem = (props: InputItemType) => {
	let { label = '', multiline, numberOfLines = 1, onClick, placeholder, style, labelStyle, inputStyle, keyboardType, editable } = props;
	return <TouchableOpacity activeOpacity={1} style={[styles.container, style]} onPress={() => {
		if (editable == null || editable) {
			onClick != null && onClick();
		}
	}}>
		<Text style={[styles.leftTxt, labelStyle]}>{props.require && <Text style={styles.dot}>*</Text>}{label}</Text>
		<View style={styles.rightView}>
			<TextInput style={[styles.rightTxt, inputStyle]}
				value={props.value}
				editable={false}
				multiline={multiline}
				numberOfLines={numberOfLines}
				keyboardType={keyboardType}
				placeholder={placeholder || "请选择"}
			/>
			<Image style={styles.rightImg} source={require('../../imgs/common_arrow_right.png')} />
		</View>
	</TouchableOpacity>
}

export default InputItem;

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
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	rightTxt: {
		textAlign: 'right',
		color: '#808080',
		fontSize: 20 * w,
	},
	dot: {
		color: 'red'
	},
	rightImg: {
		width: 22 * w,
		height: 22 * w
	}
})