import React, { useState } from "react";
import { TextInput, View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { w } from '../../util/CStyle';

type SearchType = {
	style?: StyleProp<ViewStyle>,
	defaultValue?: string,
	multiline?: boolean,
	numberOfLines?: number,
	onChangeText?: Function,
	onSubmitEditing?: Function,
	require?: boolean,
	placeholder?: string

}

const Search = (props: SearchType) => {

	let { defaultValue = '', multiline, numberOfLines = 1, onChangeText, onSubmitEditing, placeholder, style } = props;
	const [value, setValue] = useState(defaultValue);

	return <View style={styles.container}>
		<View style={[styles.content, style]}>
			<TextInput style={styles.searchTxt}
				defaultValue={defaultValue}
				value={value}
				multiline={multiline}
				numberOfLines={numberOfLines}
				placeholder={placeholder || "搜索"}
				onChangeText={(val: string) => {
					setValue(val);
					onChangeText != null && onChangeText(val);
				}}
				onSubmitEditing={() => {
					onSubmitEditing != null && onSubmitEditing(value);
				}}
			/>
		</View>
	</View>
}


export default Search;



const styles = StyleSheet.create({
	container: {
		height: 66 * w,
		flexDirection: 'row',
	},
	content: {
		flex: 1,
		borderRadius: 33 * w,
		backgroundColor: '#EBEBEB',
		overflow: "hidden",
		paddingHorizontal: 37 * w
	},
	searchTxt: {
		color: '#808080',
		fontSize: 20 * w
	},
})