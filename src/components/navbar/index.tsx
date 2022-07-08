import React, { useState, memo } from 'react';
import { BackHandler, ColorValue, Image, StatusBar, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { w } from '../../util/CStyle';
import i18n from '../../i18n'
import ExpandMoreModal from './ExpandMoreModal';
import ManualInputModal from './ManualInputModal';
export const HeadContext = React.createContext({});

type NavBarType = {
	title?: string,  //标题
	style?: StyleProp<ViewStyle>,
	containerStyle?: StyleProp<ViewStyle>,
	backgroundColor?: ColorValue;  // 导航栏背景色
	navigation?: any,
	leftOnClick?: Function,  //导航栏左边返回箭头的点击事件
	hideRightView?: boolean, //影藏导航栏右边View
	hideMannualInput?: boolean, //影藏手动输入
	rightView?: JSX.Element, // 导航栏右边View
	rightOnClick?: Function, //导航栏右边点击按钮事件
	rightMenus?: [{
		img?: any,  //require image 对象
		title?: string, //标题
		onPress?: Function //点击事件
	}] | [],

}
const NavBar = (props: NavBarType) => {

	const { title, style, rightView, hideRightView, containerStyle,
		navigation, leftOnClick, rightOnClick, rightMenus = [],
		hideMannualInput, backgroundColor } = props;

	const [showMore, setShowMore] = useState(false);
	const [showManualInput, setShowManualInput] = useState(false);

	let menu: any = rightMenus;
	if (!hideMannualInput) {
		let item: any = {
			img: require("../../imgs/common_manual_input.png"),
			title: i18n.t("ManuallyInput"),
			onPress: () => {
				setShowMore(false);
				setShowManualInput(true)
			}
		};
		menu = [item].concat(rightMenus);
	}
	const _handleGoBack = () => {
		if (leftOnClick) {
			leftOnClick()
		} else {
			if (navigation && navigation.canGoBack()) {
				navigation.goBack()
			} else {
				BackHandler.exitApp()
			}
		}
	}

	const _handleClickRightBtn = () => {
		if (rightOnClick) {
			rightOnClick();
			return;
		}
		setShowMore(true);
	}

	const _handleDefaultRightView = () => {
		if (hideRightView) {
			return <View style={{ width: 50 * w }}></View>
		} else {
			return (
				<TouchableOpacity onPress={_handleClickRightBtn}>
					<Image
						source={require('../../imgs/common_nav_more.png')}
						style={{ width: 50 * w, height: 55 * w }}
					/>
				</TouchableOpacity>
			)
		}
	}

	let bgColor = backgroundColor || 'white';

	return (
		<HeadContext.Provider value={{}}>
			<View style={[{ paddingTop: StatusBar.currentHeight }, { backgroundColor: bgColor }, style]}>
				<View style={[s.container, { backgroundColor: bgColor }, containerStyle]}>
					<TouchableOpacity style={s.left_box} onPress={_handleGoBack}>
						<Image source={require('../../imgs/common_nav_back.png')} style={s.back_img} />
					</TouchableOpacity>
					<View style={[{ flex: 1, paddingRight: 14, }, s.center]}>
						<Text numberOfLines={1} ellipsizeMode="tail" style={s.title}
							onPress={() => {
								// ScanManager.getFocus(true)
								// props?.route && myAlert(props?.route)
							}} >{title}</Text>
					</View>
					{
						rightView ? rightView : _handleDefaultRightView()
					}
				</View>
				<ExpandMoreModal
					isShow={showMore}
					menu={menu}
					onClose={() => {
						setShowMore(false);
					}}
				/>
				<ManualInputModal
					isShow={showManualInput}
					onClose={() => {
						setShowManualInput(false);
					}}
				/>
			</View>
		</HeadContext.Provider>
	)
}

export default memo(NavBar);

const s = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 64 * w,
		paddingHorizontal: 20 * w,
		backgroundColor: 'white'
	},
	left_box: {
		flexDirection: 'row',
		alignItems: 'center',
		height: '100%',
		paddingRight: 14
	},
	back_img: {
		width: 10 * w,
		height: 20 * w,
		marginRight: 8 * w,
	},
	back_text: {
		fontSize: 22 * w,
		color: '#303030'
	},
	title: {
		fontSize: 28 * w,
		color: '#111111',
		fontWeight: 'bold',
	},
	center: {
		flexGrow: 1,
		textAlign: 'left',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: "flex-start",

	},
})