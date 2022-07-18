/*
 * @Date: 2022-06-13 09:49:54
 * @LastEditors: yanyulin
 * @LastEditTime: 2022-07-14 13:48:51
 * @FilePath: \yunExpresse:\git\react-native-yunexpress-ui\src\components\navbar\ManualInputModal.tsx
 */
import React, { useState, memo } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Modal, NativeModules, Alert } from 'react-native';
import i18n from '../../i18n'
import { w } from '../../util/CStyle';

type ManualInputModalType = {
	isShow?: boolean,
	onClose?: Function
}

// --------------------手动输入--------------------------
const ManualInputModal = (props: ManualInputModalType) => {
	const { isShow, onClose } = props;
	const [inputVal, setInputVal] = useState('');

	const _handleInput = (val?: string) => {
		setInputVal(val || "")
	}

	const _handleConfirm = () => {
		if (!inputVal) {
			Alert.alert(i18n.t('ManualInputPlz'));
			return
		};
		NativeModules.Scanner?.inputTextToScanner(inputVal);
		onClose != null && onClose();
		setInputVal("");
	}

	return (
		<Modal
			statusBarTranslucent={true}
			animationType="fade"
			transparent={true}
			visible={isShow}
		>
			<View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
				<TouchableOpacity style={{ flexGrow: 1 }} onPress={() => { onClose != null && onClose(); }} />
				<View style={s.content}>
					<View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 37 * w }}>
						<TouchableOpacity onPress={() => { onClose != null && onClose(); }}>
							<Text style={{ color: '#1693A4', fontSize: 22 * w }}>{i18n.t('Cancel')}</Text>
						</TouchableOpacity>
					</View>
					<View style={s.input_box}>
						<TextInput
							style={[s.base_input, { textAlignVertical: 'top' }]}
							value={inputVal}
							multiline={true}
							numberOfLines={1}
							onChangeText={_handleInput}
							keyboardType={'default'}
							underlineColorAndroid={"transparent"}
							placeholder={i18n.t('ManualInputPlz')}
						/>
					</View>
					<TouchableOpacity style={s.btn_box} onPress={_handleConfirm}>
						<Text style={{ color: '#FFFFFF', fontSize: 24 * w }}>{i18n.t('Confirm')}</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	)
}

export default memo(ManualInputModal);

const s = StyleSheet.create({
	content: {
		backgroundColor: '#FFFFFF',
		borderTopLeftRadius: 30 * w,
		borderTopRightRadius: 30 * w,
		height: 650 * w,
		paddingHorizontal: 33 * w,
		paddingTop: 23 * w
	},
	base_input: {
		fontSize: 20 * w,
		color: '#111111'
	},
	input_box: {
		backgroundColor: '#F7F7F7',
		paddingVertical: 20 * w,
		paddingLeft: 20 * w,
		borderRadius: 8 * w
	},
	btn_box: {
		backgroundColor: '#1693A4',
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 20 * w,
		borderRadius: 44 * w,
		marginTop: 30 * w
	}
})