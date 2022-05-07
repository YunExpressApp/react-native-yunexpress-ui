import React from 'react'
import { StyleSheet, View } from "react-native";
import { YTCard, YTCell, YTTitle, Theme, w } from 'react-native-yunexpress-ui';
export default function CardExample() {

	return (
		<View style={styles.container}>
			<YTCard style={styles.card} onPress={() => { }}>
				<YTTitle style={{ marginBottom: 10 * w }}>标题文字</YTTitle>
				<YTCell leftTitle='左边内容' rightTitle='右边内容'></YTCell>
				<YTCell leftTitle='左边内容' rightTitle='右边内容'></YTCell>
				<YTCell leftTitle='左边内容' rightTitle='右边内容'></YTCell>
				<YTCell leftTitle='左边内容' rightTitle='右边内容'></YTCell>
			</YTCard>
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
	},
	card: {
		paddingHorizontal: Theme.cardPaddingHorizontal,
		paddingVertical: Theme.cardPaddingVertical
	}
});