/*
 * @Author: your name
 * @Date: 2021-09-26 10:24:58
 * @LastEditTime: 2021-09-27 12:12:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \AwesomeProjecte:\git\yunExpress\app\components\YTOptCell.tsx
 */
import React from 'react';
import { Image, StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import { w } from '../../util/CStyle';

interface DataType {
	status?: number; //status:1 成功 2 失败
	message?: string; //message: 提示信息
	code?: string; //code:显示的code
}

// props类型
interface IProps {
	style?: StyleProp<ViewStyle>,
	isFirst?: boolean; //是否为第一行
	isDel?: boolean; //是否为删除操作
	data?: DataType; // 格式 {status: 1, message: '', code: ''}   
	onClick?: Function
}
export default function ScanCode(props: IProps) {

	let { data = {}, isFirst, isDel, onClick, style } = props;
	let { status, message, code } = data;

	let img = require("../../imgs/common_status_success.png");
	let txtStyle = {};
	switch (status) {
		case 1: {
			//成功 
			if (message) {
				img = isDel ? require("../../imgs/common_status_warning.png") : require("../../imgs/warning.png");
			} else {
				img = isDel ? require("../../imgs/common_status_del.png") : require("../../imgs/common_status_success.png");
			}
			txtStyle = { color: isDel ? '#EF7E2D' : '#111111' };
		}
			break;
		case 2: {
			//失败
			img = require("../../imgs/common_status_error.png");
			txtStyle = { color: '#EF7E2D' };
		}
			break;
	}

	//第一行特殊标记
	var cbg = {};
	if (isFirst) {
		cbg = { backgroundColor: (status == 1 ? '#E6F3F3' : '#FFF8F5') };
	} else {
		cbg = { backgroundColor: '#F7F7F7' };
	}

	return (
		<TouchableOpacity style={[styles.cell, cbg, style]} activeOpacity={1} onPress={() => {
			onClick != null && onClick();
		}}>
			<Image style={styles.cImg} resizeMode="center" source={img} />
			<Text style={[styles.cTxt, txtStyle]}>{code || ''}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	cell: {
		height: 70 * w,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 26 * w,
	},
	cImg: {
		width: 25 * w,
		height: 25 * w
	},
	cTxt: {
		fontSize: 22 * w,
		color: '#111111',
		marginLeft: 21 * w
	},
})