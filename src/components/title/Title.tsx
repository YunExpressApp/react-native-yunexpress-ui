import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native"
import Theme from '../../themes/Theme'

type TitleType = {
	children?: string,
	style?: StyleProp<TextStyle>,
}


export default function Title(props: TitleType) {
	let { children, style } = props;
	return (
		<Text style={[styles.title, style]}>{children || ""}</Text>
	)
}

const styles = StyleSheet.create({
	title: {
		color: Theme.defaultTextColor,
		fontSize: Theme.defaultTitleSize,
		fontWeight: 'bold'
	}
})