
import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View } from "react-native";
import Theme from '../../themes/Theme'

type CardButtonsType = {

	btns: [
		{
			title: string,
			onPress?: Function,
			style?: StyleProp<TextStyle>
		}
	] | any

}

export default function CardButtons(props: CardButtonsType) {

	let { btns } = props;

	const renderBtns = () => {
		let buttons = []
		for (let i = 0; i < btns.length; i++) {
			let { title, onPress, style } = btns[i];
			buttons.push(
				<TouchableOpacity key={`${i}`} style={[styles.defbtn, { borderRightWidth: i != btns.length - 1 ? 1 * Theme.w : 0 }]} activeOpacity={1} onPress={() => {
					onPress != null && onPress();
				}}>
					<Text style={[styles.title, style]}>{title || ""}</Text>
				</TouchableOpacity>
			)
		}
		return buttons;
	}

	return (
		<View style={styles.container}>
			{
				renderBtns()
			}
		</View>

	)
}

const styles = StyleSheet.create({
	container: {
		height: 68 * Theme.w,
		backgroundColor: '#FAFAFA',
		overflow: 'hidden',
		borderTopColor: '#E5E5E5',
		borderTopWidth: 1 * Theme.w,
		flexDirection: 'row',

	},
	defbtn: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderRightColor: '#E5E5E5'
	},
	title: {
		fontSize: 22 * Theme.w,
		color: '#999999',
		fontWeight: "400"
	}
})