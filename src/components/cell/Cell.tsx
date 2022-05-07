
import React from "react";
import { StyleProp, StyleSheet, Text, View, TextStyle } from "react-native"
import Theme from '../../themes/Theme'

type CellType = {
	leftTitle?: string,
	leftStyle?: StyleProp<TextStyle>,
	rightTitle?: string,
	rightStyle?: StyleProp<TextStyle>,
}


export default function Cell(props: CellType) {
	let { leftTitle, leftStyle, rightTitle, rightStyle } = props;
	return (
		<View style={styles.container}>
			<Text style={[styles.ltitle, leftStyle]}>{leftTitle || ""}</Text>
			<Text style={[styles.rtitle, rightStyle]}>{rightTitle || ""}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		paddingVertical: 8 * Theme.w
	},
	ltitle: {
		color: Theme.cellTitleColor,
		fontSize: Theme.defaultSubTitleSize,
		flex: 1
	},
	rtitle: {
		color: Theme.cellTitleColor,
		fontSize: Theme.defaultSubTitleSize,
		flex: 1,
		textAlign: 'right'
	}
})