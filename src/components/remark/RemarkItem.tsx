/*
 * @Date: 2022-06-02 15:49:40
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2023-06-06 09:55:30
 * @FilePath: \yunExpresse:\git\react-native-yunexpress-ui\src\components\remark\RemarkItem.tsx
 */
import React, { memo, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, StyleProp, ViewStyle, Modal, TextStyle } from 'react-native';
import i18n from '../../i18n'
import { w } from '../../util/CStyle';
import RemarkPopup from './RemarkPopup';


type RemarkItemProps = {
	value?: string | undefined,
	label?: string,
	style?: StyleProp<ViewStyle>,
	labelStyle?: StyleProp<TextStyle>,
	onChange?: Function,
	require?: boolean
}

const RemarkItem = (props: RemarkItemProps) => {
	const { label, style, onChange, require, labelStyle } = props;
	// const [val, setVal] = useState<string | undefined>(value);
	const [visible, setVisible] = useState(false);
	return (
		<TouchableOpacity style={[s.container, style]} onPress={() => {
			// RemarkDialog.showView(props.value || "", (val: string) => {
			// 	// setVal(val);
			// 	onChange && onChange(val);
			// });
			setVisible(true)
		}}>
			<View style={s.left_box}>
				<Text style={[{ color: '#303030', fontSize: 22 * w, marginRight: 5 * w }, labelStyle]}>
					{require && <Text style={{ color: 'red' }}>*</Text>}
					{label}
				</Text>
			</View>
			{
				props.value ? (
					<View style={{ maxWidth: 300 * w }}>
						<Text numberOfLines={1} ellipsizeMode={'tail'} style={{ color: '#303030', fontSize: 20 * w }}>{props.value || ""}</Text>
					</View>
				) : (
					<Text style={{ color: '#CCCCCC', fontSize: 20 * w }}>{i18n.t("InputRemark")}</Text>
				)
			}
			<Modal visible={visible}
				animationType={'fade'}
				transparent={true}
				onRequestClose={() => {
					setVisible(false)
				}}>
				<View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
					<TouchableOpacity style={{ flex: 1 }} onPress={() => { setVisible(false) }}>

					</TouchableOpacity>
					<RemarkPopup defValue={props.value || ""} onConfirm={(value: string) => {
						onChange && onChange(value);
						setVisible(false)
					}} onClose={() => {
						setVisible(false)
					}} />
				</View>
			</Modal>
		</TouchableOpacity>
	)
}

export default memo(RemarkItem);

const s = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 20 * w,
		backgroundColor: '#FFFFFF',
		paddingHorizontal: 32 * w,
		justifyContent: 'space-between',
	},
	left_box: {
		flexDirection: 'row',
	}
})