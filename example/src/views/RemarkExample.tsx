import React, { useRef, useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { YTRemark, YTRemarkRef, YTTitle } from 'react-native-yunexpress-ui';

export default function RemarkExample() {

	const ytRemarkRef = useRef<YTRemarkRef | null>();
	const [value, setValue] = useState<string | null>('');
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => {
				ytRemarkRef.current?.show("", (val?: string) => {
					console.log(val || "")
					setValue(val || "");
				});
			}}>
				<YTTitle>显示</YTTitle>

			</TouchableOpacity>
			{!!value && <YTTitle>{"结果：" + value}</YTTitle>}

			<YTRemark ref={r => ytRemarkRef.current = r}></YTRemark>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 24
	}
});