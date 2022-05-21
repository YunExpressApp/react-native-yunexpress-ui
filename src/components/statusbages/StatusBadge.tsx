import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native"
import Theme from '../../themes/Theme'
import { w } from '../../util/CStyle';
type StatusBadgeType = {
	children?: string,
	style?: StyleProp<ViewStyle>,
	textStyle?: StyleProp<TextStyle>,
	color?: string
}


export default function StatusBadge(props: StatusBadgeType) {
	let { children, style, color, textStyle } = props;
	return (
		<View style={[styles.container, style, { backgroundColor: color ? color : Theme.primaryColor }]}>
			<Text style={[styles.title, textStyle]}>{children || ""}</Text>
		</View>

	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Theme.primaryColor,
		justifyContent: 'center',
		alignContent: 'center',
		height: 39 * w,
		paddingVertical: 8 * w,
		paddingHorizontal: 30 * w,
		borderBottomStartRadius: 16 * w,
		borderTopEndRadius: 10 * w
	},
	title: {
		color: '#FFFFFF',
		fontSize: 17 * w,
		fontWeight: '400',

	}
})