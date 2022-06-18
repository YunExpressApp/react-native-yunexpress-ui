import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { w } from '../../util/CStyle';

type SubBtnProps = {
	style?: StyleProp<ViewStyle>,
	leftStyle?: StyleProp<TextStyle>,
	rightStyle?: StyleProp<TextStyle>,
	leftText?: string,
	rightText?: string,
	index?: number, //选中的索引
	active?: boolean, //是否为选中状态
	onClick?: Function
}
const SubBtn = (props: SubBtnProps) => {
	return <TouchableOpacity activeOpacity={1} style={[styles.container, { backgroundColor: props.active ? '#1592A3' : '#F2F6F6' }, props.style]} onPress={() => {
		if (props.onClick != null) {
			props.onClick(props.index);
		}
	}}>
		<Text style={[styles.lText, { color: props.active ? 'white' : '#303030' }, props.leftStyle]}>{props.leftText || ""}</Text>
		<Text style={[styles.rText, { color: props.active ? 'white' : '#1592A3' }, props.rightStyle]}>{props.rightText || ""}</Text>
	</TouchableOpacity>
}

export default SubBtn;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignSelf: 'flex-start',
		backgroundColor: '#F2F6F6',
		alignItems: 'center',
		paddingHorizontal: 16 * w,
		paddingVertical: 10 * w,
		borderRadius: 22 * w,
		marginRight: 8 * w,
		marginBottom: 8 * w
	},
	lText: {
		color: '#303030',
		fontSize: 18 * w,
	},
	rText: {
		color: '#1592A3',
		fontSize: 18 * w,
	}
});