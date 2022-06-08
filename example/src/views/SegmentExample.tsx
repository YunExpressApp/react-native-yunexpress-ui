import React from 'react'
import { StyleSheet, View } from "react-native";
import { w, YTSegment } from 'react-native-yunexpress-ui';
export default function SegmentExample() {

	return (
		<View style={styles.container}>
			<YTSegment.Title data={["标签1", "标签2"]} />
			<View style={{ height: 30 }}></View>
			<YTSegment.Sub data={["标签1", "标签2"]} />
			<View style={{ height: 30 }}></View>
			<YTSegment.Radius leftText='添加' rightText='删除' />

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