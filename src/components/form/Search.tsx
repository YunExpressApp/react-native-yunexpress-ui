/*
 * @Date: 2022-06-07 11:09:55
 * @LastEditors: 1418220302@qq.com 1418220302@qq.com
 * @LastEditTime: 2022-09-28 17:14:21
 * @FilePath: \yunExpresse:\git\react-native-yunexpress-ui\src\components\form\Search.tsx
 */
import React from "react";
import { TextInput, View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import i18n from '../../i18n'
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
				placeholder={placeholder || i18n.t("Search")}
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
		backgroundColor: '#F7F7F7',
		overflow: "hidden",
		paddingHorizontal: 37 * w,
		justifyContent: 'center'
	},
	searchTxt: {
		color: '#808080',
		fontSize: 20 * w
	},
})