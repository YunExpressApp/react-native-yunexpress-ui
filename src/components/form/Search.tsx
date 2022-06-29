import React from "react";
import { TextInput, View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { w } from '../../util/CStyle';

type SearchType = {
	style?: StyleProp<ViewStyle>,
	value?: string,
	multiline?: boolean,
	numberOfLines?: number,
	onChangeText?: Function,
	onSubmitEditing?: Function,
	placeholder?: string,
	inputStyle?: StyleProp<ViewStyle>,
	maxLength?: number,
	editable?: boolean
}

const Search = (props: SearchType) => {

	let { multiline, numberOfLines = 1, onChangeText, onSubmitEditing, placeholder, style, inputStyle, maxLength, editable } = props;

	return <View style={[styles.container, style]}>
		<View style={[styles.content]}>
			<TextInput style={[styles.searchTxt, inputStyle]}
				// defaultValue={defaultValue}
				value={props.value}
				multiline={multiline}
				numberOfLines={numberOfLines}
				placeholder={placeholder || "搜索"}
				maxLength={maxLength}
				editable={editable}
				onChangeText={(val: string) => {
					onChangeText != null && onChangeText(val);
				}}
				onSubmitEditing={() => {
					onSubmitEditing != null && onSubmitEditing();
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
		paddingHorizontal: 37 * w,
		justifyContent: 'center'
	},
	searchTxt: {
		color: '#808080',
		fontSize: 20 * w
	},
})