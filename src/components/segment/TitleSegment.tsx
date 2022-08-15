/*
 * @Date: 2022-06-07 16:33:14
 * @LastEditors: yanyulin
 * @LastEditTime: 2022-08-15 17:11:07
 * @FilePath: \yunExpresse:\git\react-native-yunexpress-ui\src\components\segment\TitleSegment.tsx
 */
import React from "react";
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { w } from '../../util/CStyle';

type TitleSegmentType = {
	style?: StyleProp<ViewStyle>,
	itemStyle?: StyleProp<ViewStyle>,
	data?: string[],
	index?: number,
	onChange?: Function
}

const TitleSegment = (props: TitleSegmentType) => {
	let { style, data = [], onChange, itemStyle } = props;
	// const [current, setCurrent] = useState(index);
	const inteClick = (index: number) => {
		onChange && onChange(index);
	}

	const renderItems = () => {
		let items = []
		for (let index = 0; index < data.length; index++) {
			const element = data[index];
			items.push(
				<TouchableOpacity key={index} style={[styles.item, itemStyle]} activeOpacity={1} onPress={() => inteClick(index)}>
					<Text style={index == props.index ? styles.actText : styles.defText}>{element}</Text>
					{
						index == props.index && <View style={[styles.actLine]}></View>
					}
				</TouchableOpacity>
			)
		}
		return items;
	}

	return (
		<View style={[styles.container, style]}>
			{renderItems()}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	item: {
		marginRight: 30 * w
	},
	actText: {
		fontSize: 20 * w,
		color: '#1693A4',
		textAlign: 'center'
	},
	defText: {
		fontSize: 20 * w,
		color: '#111111',
		textAlign: 'center'
	},
	actLine: {
		backgroundColor: '#1693A4',
		height: 3 * w,
		borderRadius: 3 * w,
		marginTop: 5 * w
	}
})

export default TitleSegment;