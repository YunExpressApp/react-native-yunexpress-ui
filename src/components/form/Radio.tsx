/*
 * @Date: 2022-08-25 09:22:01
 * @LastEditors: 1418220302@qq.com 1418220302@qq.com
 * @LastEditTime: 2022-12-28 16:18:32
 * @FilePath: \yunExpresse:\git\react-native-yunexpress-ui\src\components\form\radio.tsx
 */
import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from "react-native";
import { w } from '../../util/CStyle';

type RadioType = {
	label?: string,
	require?: boolean,
	onChange?: Function,
	style?: StyleProp<ViewStyle>,
	labelStyle?: StyleProp<TextStyle>,
	disable?: boolean,
	data: string[],
	index?: number
}

const Radio = (props: RadioType) => {
	let { label = '', onChange, style, labelStyle, disable, data = [] } = props;

	const [curIndex, setCurIndex] = useState(props.index);

	const renderItems = () => {
		let items: any = []
		data.map((item, i) => {
			items.push(
				<TouchableOpacity key={`${i}`} activeOpacity={1} style={styles.radio} onPress={() => {
					if (disable) {
						return;
					}
					setCurIndex(i);
					onChange && onChange(i);
				}}>
					<Image style={styles.rightImg} source={i == curIndex ? require('../../imgs/common_radio_sel.png') : require('../../imgs/common_radio_def.png')} />
					<Text style={styles.radioTxt}>{item || ""}</Text>
				</TouchableOpacity>
			)
		})
		return items;
	}
	return <View style={[styles.container, style]}>
		<Text style={[styles.leftTxt, labelStyle]}>{props.require && <Text style={styles.dot}>*</Text>}{label}</Text>
		<View style={styles.rightView}>
			{
				renderItems()
			}
		</View>
	</View>
}

export default Radio;

const styles = StyleSheet.create({
	container: {
		height: 72 * w,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 32 * w,
	},
	leftTxt: {
		color: '#303030',
		fontSize: 22 * w
	},
	rightView: {
		marginLeft: 10 * w,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
		flexWrap: 'wrap'
	},
	radio: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 15 * w
	},
	dot: {
		color: 'red'
	},
	rightImg: {
		width: 22 * w,
		height: 22 * w
	},
	radioTxt: {
		color: '#303030',
		fontSize: 20 * w,
		marginLeft: 8 * w
	}
})