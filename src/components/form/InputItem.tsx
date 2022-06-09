import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { w } from '../../util/CStyle';

type InputItemType = {
	label?: string,
	defaultValue?: string,
	multiline?: boolean,
	numberOfLines?: number,
	require?: boolean,
	onClick?: Function
}

const InputItem = (props: InputItemType) => {
	let { label = '', multiline, numberOfLines = 1, onClick } = props;
	return <TouchableOpacity activeOpacity={1} style={styles.container} onPress={() => {
		onClick != null && onClick();
	}}>
		<Text style={styles.leftTxt}>{label} {props.require && <Text style={styles.dot}>*</Text>}</Text>
		<View style={styles.rightView}>
			<TextInput style={styles.rightTxt}
				value={props.defaultValue}
				editable={false}
				multiline={multiline}
				numberOfLines={numberOfLines}
				placeholder="请输入"
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