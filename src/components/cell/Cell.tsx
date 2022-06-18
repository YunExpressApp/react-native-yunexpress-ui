import { Text, StyleSheet, StyleProp, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Theme from '../../themes/Theme'
import ScanCode from './ScanCode'

type CellType = {
	style?: StyleProp<ViewStyle>,
	leftTitle?: string,
	leftStyle?: StyleProp<TextStyle>,
	rightTitle?: string,
	rightStyle?: StyleProp<TextStyle>,
	onClick?: Function
}

export default class Cell extends Component<CellType, any> {

	static ScanCode = ScanCode

	render() {
		let { leftTitle, leftStyle, rightTitle, rightStyle, onClick } = this.props;
		return (
			<TouchableOpacity style={[styles.container, this.props.style]} activeOpacity={1} onPress={() => {
				onClick != null && onClick();
			}}>
				<Text style={[styles.ltitle, leftStyle]}>{leftTitle || ""}</Text>
				<Text style={[styles.rtitle, rightStyle]}>{rightTitle || ""}</Text>
			</TouchableOpacity>
		)
	}
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