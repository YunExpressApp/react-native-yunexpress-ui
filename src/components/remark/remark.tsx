import React, { forwardRef, Ref, useImperativeHandle, useState } from "react";
import {
	Modal,
	StyleSheet,
	Text,
	View, TouchableOpacity, TextInput, ScrollView
} from "react-native";
import { w } from '../../util/CStyle';
import Theme from '../../themes/Theme'
import i18n from '../../i18n'


export type RemarkRef = {
	show: (val?: string, callback?: Function) => void
}

export type RemarkProps = {
	maxLength?: number,
	placeholder?: string
}

const Remark = (props: RemarkProps, ref: Ref<RemarkRef>) => {

	let { maxLength = 255, placeholder } = props;
	const [modalVisible, setModalVisible] = useState(false);
	const [value, onChangeText] = useState('');
	const [cBack, setCBack] = useState<Function>(() => { });

	useImperativeHandle(ref, () => ({
		show(val?: string, callback?: Function) {
			onChangeText(val || "");
			if (callback) {
				setCBack(() => callback)
			}
			setModalVisible(true);
		}
	}))

	const save = () => {
		console.log(cBack);
		if (cBack) {
			cBack(value);
		}
		setModalVisible(false);
	}

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => {
				setModalVisible(!modalVisible);
			}}
		>
			<View style={styles.centeredView}>
				<View style={styles.contentView}>
					<View style={styles.header}>
						<TouchableOpacity activeOpacity={1} onPress={() => {
							setModalVisible(false);
						}}>
							<Text style={styles.hTxt}>{i18n.t("Cancel")}</Text>
						</TouchableOpacity>
						<TouchableOpacity activeOpacity={1} onPress={save}>
							<Text style={styles.hTxt}>{i18n.t("Save")}</Text>
						</TouchableOpacity>

					</View>
					<Text style={styles.rtip}>{i18n.t("Remarks")}</Text>
					<View style={styles.line}></View>
					<ScrollView style={styles.scrollView}>
						<View style={styles.inputView}>
							<TextInput
								placeholder={placeholder || i18n.t("InputRemark")}
								multiline={true}
								style={styles.rinput}
								maxLength={maxLength}
								onChangeText={text => onChangeText(text)}
								value={value}
								defaultValue={value}
							/>
							<Text style={styles.tip}>{value.length + "/" + maxLength}</Text>
						</View>
					</ScrollView>
				</View>
			</View>
		</Modal >
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'flex-end',
		backgroundColor: 'rgba(149, 157, 165, 0.5)',
	},
	contentView: {
		height: 548 * w,
		maxHeight: 548 * w,
		flex: 1,
		backgroundColor: 'white',
		borderTopLeftRadius: 30 * w,
		borderTopRightRadius: 30 * w,
		overflow: "hidden",
		paddingBottom: 20 * w
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 25 * w,
		paddingHorizontal: 32 * w
	},
	hTxt: {
		fontSize: Theme.defaultTitleSize,
		color: Theme.primaryColor
	},
	rtip: {
		marginLeft: 32 * w,
		marginTop: 19 * w,
		fontSize: 25 * w
	},
	line: {
		height: StyleSheet.hairlineWidth,
		backgroundColor: '#EEEEEE',
		marginVertical: 16 * w
	},
	scrollView: {
		backgroundColor: '#F9F9F9'
	},
	inputView: {
		flex: 1,

	},
	rinput: {
		paddingHorizontal: 32 * w,
		paddingVertical: 16 * w,
		backgroundColor: 'white'
	},
	tip: {
		backgroundColor: 'white',
		color: '#999999',
		paddingHorizontal: 32 * w,
		paddingBottom: 20 * w,
		textAlign: 'right'
	}

});

export default forwardRef(Remark);