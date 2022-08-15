/*
 * @Date: 2022-06-16 12:02:51
 * @LastEditors: yanyulin
 * @LastEditTime: 2022-08-15 17:21:03
 * @FilePath: \yunExpresse:\git\react-native-yunexpress-ui\src\components\btns\Button.tsx
 */

import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { w } from '../../util/CStyle';

// props类型
interface IProps {
	title?: String,
	enable?: Boolean;  //true: 可用状态 false:禁用 
	onPress?: Function;
	style?: StyleProp<ViewStyle>,
	textStyle?: StyleProp<TextStyle>,
	radius?: boolean,
	leftTitle?: string,
	leftOnPress?: Function;
	leftEnable?: Boolean;  //true: 可用状态 false:禁用 
}
export default function Button(props: IProps) {
	let { title = '', enable, onPress, style, radius, leftTitle, leftOnPress } = props;
	return (
		<View style={[styles.bottomBtns, { borderRadius: radius ? 42 * w : 0 }, style]}>
			{
				leftTitle != null && <TouchableOpacity style={[styles.leftBtn, style]} activeOpacity={0.5} onPress={() => {
					if ((props.leftEnable == null || props.leftEnable) && leftOnPress != null) {
						leftOnPress();
					}
				}}>
					<Text style={[styles.btnTxt, props.textStyle]}>{leftTitle || ""}</Text>
				</TouchableOpacity>
			}
			<TouchableOpacity style={[enable ? styles.btn : styles.btnDis]} activeOpacity={enable ? 0.5 : 1} onPress={() => {
				if (enable && onPress != null) {
					onPress();
				}
			}}>
				<Text style={[styles.btnTxt, props.textStyle]}>{title || ""}</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	bottomBtns: {
		flexDirection: 'row',
		height: 84 * w,
		overflow: 'hidden'
	},
	btn: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#1693A4',
		flex: 1
	},
	btnDis: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#DDE6E9',
		flex: 1
	},
	btnTxt: {
		color: '#FFFFFF',
		fontSize: 24 * w
	},
	leftBtn: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#555555',
		paddingHorizontal: 50 * w
	},
})