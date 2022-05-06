
import React from "react";
import { StyleProp, StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import Theme from '../../themes/Theme'
import Title from "../title/Title";

type CardType = {
	/**
	 * 卡片里面的内容
	 */
	children?: JSX.Element | JSX.Element[] | never[],
	/**
	 * 卡片标题
	 */
	title?: string,
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

	let { children, title, style, titleStyle, onPress } = props;

	return (
		<TouchableOpacity style={[styles.container, style]} activeOpacity={1} onPress={() => {
			onPress != null && onPress();
		}}>
			{
				!!title && <Title style={[styles.title, titleStyle]}>{title || ""}</Title>
			}
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
		paddingHorizontal: Theme.cardPaddingHorizontal,
		paddingVertical: Theme.cardPaddingVertical
	},
	title: {
		marginBottom: Theme.defaultMargin10
	}
})