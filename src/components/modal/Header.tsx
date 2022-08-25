/*
 * @Date: 2022-08-25 15:30:00
 * @LastEditors: yanyulin
 * @LastEditTime: 2022-08-25 16:05:49
 * @FilePath: \yunExpresse:\git\react-native-yunexpress-ui\src\components\modal\Header.tsx
 */
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import i18n from '../../i18n'
import { w } from '../../util/CStyle';

type HeaderProps = {
	leftTitle?: string,
	rightTitle?: string,
	onLeftPress?: Function,
	onRightPress?: Function
}

const Header = (props: HeaderProps) => {
	return <View style={styles.container}>
		<TouchableOpacity activeOpacity={1} style={styles.lrOpt} onPress={() => {
			props.onLeftPress && props.onLeftPress();
		}}>
			<Text style={styles.lrTitle}>{props.leftTitle}</Text>
		</TouchableOpacity>
		<TouchableOpacity activeOpacity={1} style={styles.lrOpt} onPress={() => {
			props.onRightPress && props.onRightPress();
		}}>
			<Text style={styles.lrTitle}>{props.rightTitle || i18n.t("Cancel")}</Text>
		</TouchableOpacity>
	</View>
}

export default Header;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingTop: 25 * w,
		justifyContent: 'space-between',
		backgroundColor: 'white',
		borderTopLeftRadius: 30 * w,
		borderTopRightRadius: 30 * w,

	},
	lrTitle: {
		color: '#1592A3',
		fontSize: 22 * w
	},
	lrOpt: {
		paddingHorizontal: 32 * w,
	}
});