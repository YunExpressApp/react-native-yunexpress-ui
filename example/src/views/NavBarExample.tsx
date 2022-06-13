import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import { YTNavBar } from 'react-native-yunexpress-ui';
export default function NavBarExample() {

	return (
		<View style={styles.container}>
			<YTNavBar title='navbar标题' rightMenus={[

			]} />

			{/* img: require('../imgs/common/common_manual_input.png.png'),
	// 	title: i18n.t('Task.ManuallyInput'), */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	}
});