import React, { useState } from "react";
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { w } from '../../util/CStyle';

type TitleSegmentType = {
	style?: StyleProp<ViewStyle>,
	data?: string[],
	index?: number,
	onChange?: Function
}

const TitleSegment = (props: TitleSegmentType) => {
	let { style, data = [], index = 0, onChange } = props;
	const [current, setCurrent] = useState(index);
	const inteClick = (index: number) => {
		setCurrent(index);
		onChange && onChange(index);
	}

	const renderItems = () => {
		let items = []
		for (let index = 0; index < data.length; index++) {
			const element = data[index];
			items.push(
				<TouchableOpacity key={index} style={styles.item} onPress={() => inteClick(index)}>
					<Text style={index == current ? styles.actText : styles.defText}>{element}</Text>
					{
						index == current && <View style={[styles.actLine]}></View>
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
		color: '#1693A4'
	},
	defText: {
		fontSize: 20 * w,
		color: '#111111'
	},
	actLine: {
		backgroundColor: '#1693A4',
		height: 3 * w,
		borderRadius: 3 * w,
		marginTop: 5 * w
	}
})

export default TitleSegment;