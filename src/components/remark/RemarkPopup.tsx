
import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View, TouchableOpacity, TextInput, ScrollView
} from "react-native";
import { w } from '../../util/CStyle';
import Theme from '../../themes/Theme'
import i18n from '../../i18n'

type RemarkPopupProps = {
	maxLength?: number,  //备注最大长度
	placeholder?: string,
	onClose?: Function,
	onConfirm?: Function,
	// callback: Function,
	defValue?: string,
  disable?: boolean
}

export default class RemarkPopup extends Component<RemarkPopupProps, any> {

	static overlayView: any | null;
	constructor(props: any) {
		super(props);
		this.state = {
			value: props.defValue || ""
		}
	}

	// static showView = (defValue: string, callback: Function) => {
	// 	let overlayView = (
	// 		<Dialog.PullView ref={v => this.overlayView = v} side='bottom' modal={false} containerStyle={{ backgroundColor: 'transparent' }}>
	// 			<RemarkModal onClose={() => {
	// 				this.overlayView && this.overlayView.close();
	// 			}} onConfirm={(val: string) => {
	// 				callback(val);
	// 				this.overlayView && this.overlayView.close();
	// 			}} callback={callback} defValue={defValue} />
	// 		</Dialog.PullView>
	// 	);
	// 	Dialog.show(overlayView);
	// }

	render() {
		let { placeholder, maxLength = 255, onClose, onConfirm, disable } = this.props;
		let { value } = this.state;
		return (
			<ScrollView style={styles.contentView} keyboardShouldPersistTaps="always">
				<View style={styles.header}>
					<TouchableOpacity activeOpacity={1} onPress={() => { onClose && onClose(); }}>
						<Text style={styles.hTxt}>{i18n.t("Cancel")}</Text>
					</TouchableOpacity>
          {
            disable && <Text style={styles.hTxt}></Text>
          } 
          {
            !disable && <TouchableOpacity activeOpacity={1} onPress={() => { onConfirm && onConfirm(value); }}>
              <Text style={styles.hTxt}>{i18n.t("Save")}</Text>
            </TouchableOpacity>
          }
					
				</View>
				<Text style={styles.rtip}>{i18n.t("Remarks")}</Text>
				<View style={styles.line}></View>
				{/* <ScrollView style={styles.scrollView}> */}
				<View style={styles.inputView}>
					<TextInput
						placeholder={placeholder || i18n.t("InputRemark")}
						multiline={true}
						style={styles.rinput}
						maxLength={maxLength}
            editable={!disable}
						onChangeText={text => this.setState({ value: text })}
						value={value}
						defaultValue={value}
					/>
					<Text style={styles.tip}>{value.length + "/" + maxLength}</Text>
				</View>
				{/* </ScrollView> */}
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	pullView: {
		height: 548 * w,
		maxHeight: 548 * w,
		backgroundColor: 'white',
		borderTopLeftRadius: 30 * w,
		borderTopRightRadius: 30 * w,
		marginTop: 50 * w
	},
	centeredView: {
		flex: 1
	},
	contentView: {
		height: 548 * w,
		maxHeight: 548 * w,
		backgroundColor: 'white',
		borderTopLeftRadius: 30 * w,
		borderTopRightRadius: 30 * w,
		marginTop: 50 * w
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