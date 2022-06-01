import React, { useEffect } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Theme } from 'react-native-yunexpress-ui';
import ComponentMenu from './Menu';

interface ItemType {
	item: {
		name: string;
		descr: String;
	};
}

export default function Home({ navigation }: any) {

	const DATA = ComponentMenu.map(item => (
		{ name: item.name, descr: item.descr }
	))

	useEffect(() => {
		// Theme.setI18n("en");
		Theme.locale = "zh";
	}, []);

	const renderItem = ({ item }: ItemType) => {
		return (
			<TouchableOpacity style={styles.item} onPress={() => {
				navigation.navigate(item.name)
			}}>
				<Text style={styles.title}>{item.descr}</Text>
				<Image style={styles.arrow} source={require("../imgs/common_arrow_right.png")} />
			</TouchableOpacity>
		);
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={DATA}
				renderItem={renderItem}
				ItemSeparatorComponent={() => <View style={styles.line}></View>}
				keyExtractor={(item, index) => `${index}`}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	item: {
		padding: 10,
		flexDirection: 'row',
		alignItems: 'center'
	},
	title: {
		fontSize: 15,
		flex: 1
	},
	arrow: {
		width: 15,
		height: 15
	},
	line: {
		height: StyleSheet.hairlineWidth,
		width: '100%',
		backgroundColor: '#f5f5f5'
	}
});