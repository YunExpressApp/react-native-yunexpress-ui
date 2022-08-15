/*
 * @Date: 2022-06-07 16:27:04
 * @LastEditors: yanyulin
 * @LastEditTime: 2022-08-15 17:12:55
 * @FilePath: \yunExpresse:\git\react-native-yunexpress-ui\example\src\views\SegmentExample.tsx
 */
import React, { useState } from 'react'
import { StyleSheet, View } from "react-native";
import { w, YTSegment } from 'react-native-yunexpress-ui';
export default function SegmentExample() {

	const [index, setIndex] = useState(0);

	return (
		<View style={styles.container}>
			<YTSegment.Title data={["标签1", "标签2"]} index={index} onChange={(index: number) => setIndex(index)} />
			<View style={{ height: 30 }}></View>
			<YTSegment.Title data={["标签1", "标签2"]} index={index} onChange={(index: number) => setIndex(index)} itemStyle={{ flex: 1, marginRight: 0 }} />
			<View style={{ height: 30 }}></View>
			<YTSegment.Sub data={["标签1", "标签2"]} colors={["#1592A3", "#EF7E2C"]} index={index} onChange={(index: number) => setIndex(index)} />
			<View style={{ height: 30 }}></View>
			<YTSegment.Radius leftText='添加' rightText='删除' index={index} onChange={(index: number) => setIndex(index)} />

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		paddingHorizontal: 32 * w,
		paddingVertical: 32 * w
	}
});