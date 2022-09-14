/*
 * @Date: 2022-06-16 11:00:59
 * @LastEditors: yanyulin
 * @LastEditTime: 2022-09-14 18:20:03
 * @FilePath: \yunExpresse:\git\react-native-yunexpress-ui\example\src\views\BtnsExample.tsx
 */
import React, { useState } from 'react'
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { w, YTBtns } from 'react-native-yunexpress-ui';
export default function BtnsExample() {

	const [value, setValue] = useState(0);

	const onClick = (index: number) => {
		setValue(index);
	}
	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={styles.sub}>
					<YTBtns.Sub leftText='左边值:' rightText='右边值' index={0} />
					<YTBtns.Sub leftText='左边值:' rightText='右边值' index={1} active={value == 1} onClick={onClick} />
					<YTBtns.Sub leftText='左边值:' rightText='右边值' index={2} active={value == 2} onClick={onClick} />
					<YTBtns.Sub leftText='左边值:' rightText='右边值' index={3} active={value == 3} onClick={onClick} />
					<YTBtns.Sub leftText='左边值:' rightText='右边值' index={4} active={value == 4} onClick={onClick} />
					<YTBtns.Sub leftText='左边值:' rightText='右边值' index={5} active={value == 5} onClick={onClick} />
					<YTBtns.Sub leftText='左边值:' rightText='右边值' index={6} active={value == 6} onClick={onClick} />
				</View>
				<View style={{ height: 10 }} />
				<YTBtns.Button title={"按钮"} />
				<View style={{ height: 10 }} />
				<YTBtns.Button title={"按钮"} enable={true} onPress={() => { }} />
				<View style={{ height: 10 }} />
				<YTBtns.Button title={"按钮"} radius enable={true} onPress={() => { }} />
				<View style={{ height: 10 }} />
				<YTBtns.Button title={"按钮"} leftTitle="左边按钮" enable={false} onPress={() => { }} leftEnable={false} leftOnPress={() => {
					Alert.alert("AAA");
				}} />
				<View style={{ height: 10 }} />
				<YTBtns.Button title={"按钮"} leftTitle="左边按钮" onPress={() => { }} />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	sub: {
		backgroundColor: 'white',
		padding: 20 * w,
		flexDirection: 'row',
		flexWrap: 'wrap'
	}
});