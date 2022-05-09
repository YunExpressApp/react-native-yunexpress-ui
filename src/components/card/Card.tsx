
import React from "react";
import { StyleProp, StyleSheet, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import Theme from '../../themes/Theme'

type CardType = {
	/**
	 * 卡片里面的内容
	 */
	children?: JSX.Element | JSX.Element[] | never[],
	/**
	 * 卡片样式
	 */
	style?: StyleProp<ViewStyle>,
	/**
	 * 卡片标题样式
	 */
	titleStyle?: StyleProp<TextStyle>,

	/**
	 * 卡片点击事件
	 */
	onPress?: Function
}

export default function Card(props: CardType) {

	let { children, style, onPress } = props;

	return (
		<TouchableOpacity style={[styles.container, style]} activeOpacity={1} onPress={() => {
			onPress != null && onPress();
		}}>
			{children}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		borderRadius: Theme.cardRadius,
		borderWidth: Theme.cardBorderWith,
		borderColor: Theme.cardBorderColor,
		width: '100%',
		backgroundColor: '#FFFFFF',
		overflow: 'hidden'
	},
	title: {
		marginBottom: Theme.defaultMargin10
	}
})