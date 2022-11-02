/*
 * @Date: 2022-08-25 16:17:15
 * @LastEditors: 1418220302@qq.com 1418220302@qq.com
 * @LastEditTime: 2022-11-02 10:05:22
 * @FilePath: \yunExpresse:\git\react-native-yunexpress-ui\src\components\modal\Bottom.tsx
 */
import React from "react";
import { Modal, ScrollView, StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import Search from "../form/Search";
import Header from "./Header";
import { w } from '../../util/CStyle';
import Title from "../title";
type BottomProps = {
	visible?: boolean,
	children?: JSX.Element | JSX.Element[] | never[],
	onClose: Function,
	onLeftPress?: Function,
	onRightPress?: Function,
	leftTitle?: string,
	rightTitle?: string,
	title?: string,
	onSearchChangeText?: Function,
	onSearchSubmitEditing?: Function,
	style?: StyleProp<ViewStyle>,
}
const Bottom = (props: BottomProps) => {
	return <Modal visible={props.visible}
		animationType={'fade'}
		transparent={true}
		onRequestClose={() => {
			props.onClose && props.onClose();
		}}>
		<View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
			<TouchableOpacity style={{ flex: 1 }} onPress={() => { props.onClose && props.onClose(); }}>

			</TouchableOpacity>
			<View style={props.style}>
				<ScrollView style={{}} keyboardShouldPersistTaps="always">
					<Header leftTitle={props.leftTitle} rightTitle={props.rightTitle} onLeftPress={props.onLeftPress} onRightPress={props.onRightPress} />
					<View style={{ backgroundColor: 'white' }}>
						{
							props.title && <Title style={{ marginHorizontal: 32 * w, marginTop: 19 * w }}>{props.title}</Title>
						}
						{
							(props.onSearchChangeText || props.onSearchSubmitEditing) && <View style={{ backgroundColor: 'white', marginTop: 16 * w }}>
								<Search style={{ marginHorizontal: 24 * w }} placeholder='请输入搜索条件' onChangeText={props.onSearchChangeText} onSubmitEditing={props.onSearchSubmitEditing} />
							</View>
						}
						{
							props.children
						}
					</View>
				</ScrollView>
			</View>
		</View>
	</Modal>
}

export default Bottom;