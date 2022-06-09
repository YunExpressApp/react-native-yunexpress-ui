import React, { useState } from 'react'
import { StyleSheet, View } from "react-native";
import { YTRemarkItem } from 'react-native-yunexpress-ui';

export default function RemarkExample() {
	const [value, setValue] = useState<string | undefined>('');
	return (
		<View style={styles.container}>
			<YTRemarkItem label='备注' require value={value} onChange={(val: string) => { setValue(val) }}></YTRemarkItem>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
		padding: 24
	}
});