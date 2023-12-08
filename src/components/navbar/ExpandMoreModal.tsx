import React, { memo } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import i18n from '../../i18n'
import { w } from '../../util/CStyle';

type ExpandMoreModalType = {
	isShow?: boolean,
	menu?: [{
		img?: any,  //require image 对象
		title?: string,
		onPress?: Function
	}] | [],
	onClose?: Function
}

const ExpandMoreModal = (props: ExpandMoreModalType) => {
	let { menu = [], isShow, onClose } = props;

	return (
		<Modal
			statusBarTranslucent={true}
			animationType="fade"
			transparent={true}
			visible={isShow}
			onRequestClose={() => {
				onClose != null && onClose();
			}}

		>
			<View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
				<TouchableOpacity style={{ flexGrow: 1 }} onPress={() => {
					onClose != null && onClose();
				}} />
				<View style={s.content}>
					<Text style={{ fontSize: 25 * w, color: '#111111', fontWeight: 'bold', paddingTop: 40 * w, paddingLeft: 38 * w }}>{i18n.t('Operation')}</Text>
					<View style={s.list_box}>
						{
							menu != null && menu.map((item, index) => {
								return (
									<TouchableOpacity activeOpacity={1} key={`${index}`} style={s.item_box} onPress={() => {

										item.onPress != null && item.onPress();
										onClose != null && onClose();
									}}>
										{item.img != null && <Image source={item.img} style={s.item_img} />}
										<Text style={s.item_title}>{item.title ?? ""}</Text>
									</TouchableOpacity>
								)
							})
						}
					</View>
				</View>
			</View>
		</Modal>
	)
}

export default memo(ExpandMoreModal);

const s = StyleSheet.create({
	content: {
		backgroundColor: '#FFFFFF',
		borderTopLeftRadius: 30 * w,
		borderTopRightRadius: 30 * w,
		paddingBottom: 40 * w
	},
	list_box: {
		flexDirection: 'row',
		alignItems: 'center',
		flexWrap: 'wrap',
		paddingTop: 18 * w,
		// paddingLeft: 28 * w
	},
	item_box: {
		alignItems: 'center',
		// marginRight: 30 * w,
		// paddingBottom: 20 * w,
    paddingVertical:20 * w,
		minWidth: '25%',
	},
	item_img: {
		width: 50 * w,
		height: 50 * w
	},
	item_title: {
		color: '#303030',
		fontSize: 18 * w,
		marginTop: 8 * w
	}
})