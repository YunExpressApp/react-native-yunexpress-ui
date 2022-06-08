import React, { useState } from "react";
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { w } from '../../util/CStyle';

type SubSegmentType = {
	style?: StyleProp<ViewStyle>,
	data?: string[],
	index?: number,
	onChange?: Function
}

const SubSegment = (props: SubSegmentType) => {
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
				<TouchableOpacity activeOpacity={1} key={index} style={index == current ? styles.actItem : styles.item} onPress={() => inteClick(index)}>
					<Text style={index == current ? styles.actText : styles.defText}>{element}</Text>

				</TouchableOpacity>
			)
		}
		return items;
	}

	return (
		<View style={[styles.container, style]}>
			<View style={styles.content}>
				{renderItems()}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: 46 * w
	},
	content: {
		backgroundColor: '#F2F2F2',
		borderRadius: 12 * w,
		flexDirection: 'row',
		padding: 4 * w,
		borderColor: '#D4D4D4',
		borderWidth: 1 * w
	},
	item: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	actItem: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: 38 * w,
		borderRadius: 8 * w,
		backgroundColor: 'white'
	},
	actText: {
		fontSize: 20 * w,
		color: '#1693A4'
	},
	defText: {
		fontSize: 20 * w,
		color: '#303030'
	},
	actLine: {
		backgroundColor: '#1693A4',
		height: 3 * w,
		borderRadius: 3 * w,
		marginTop: 5 * w
	}
})

export default SubSegment;