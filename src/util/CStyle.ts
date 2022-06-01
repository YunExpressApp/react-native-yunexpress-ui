/**
 * 通用样式
 * create by ykl 2020/11/5
 */
import { StyleSheet, Dimensions } from 'react-native'

//UI设计图的宽度
const designWidth: number = 750
//UI设计图的高度
const designHeight: number = 1624

//手机屏幕的宽度
export const width: number = Dimensions.get('window').width;
//手机屏幕的高度
export const height: number = Dimensions.get('window').height;
//计算手机屏幕宽度对应设计图宽度的单位宽度
export const w1: number = width / designWidth; // unitWidth 750
/** UI适配单位，用一个数乘以w */
export const w: number = width / 480; // unitWidth 480
//计算手机屏幕高度对应设计图高度的单位高度
export const h: number = height / designHeight; // unitHeight

/**
 * 常用基本样式
 */
export const CommonStyle = StyleSheet.create({
	//界面背景
	baseBackgrand: {
		flex: 1,
		backgroundColor: '#F2F2F7'
	},
	//基本文本
	baseText: {
		fontSize: 22 * w,
	},
	titleText: {
		fontSize: 22 * w,
		color: '#303030'
	},
	valueText: {
		fontSize: 22 * w,
		color: '#747474'
	},
	hintText: {
		fontSize: 22 * w,
		color: '#CCC',
	},
	//基本中等大小文本
	baseMidText: {
		fontSize: 26 * w
	},
	//横线
	line_: {
		height: StyleSheet.hairlineWidth,
		backgroundColor: '#ddd'
	},
	//竖线
	line: {
		width: StyleSheet.hairlineWidth,
		backgroundColor: '#ddd'
	},
	//标题右边文本按钮
	titleRightText: {
		padding: 25 * w,
		fontSize: 30 * w,
		paddingLeft: 5 * w
	},
	scanItem: {
		paddingLeft: 32 * w,
		paddingRight: 32 * w,
		height: 66 * w,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#eee'
	}


})

/** 通用颜色 */
export const Color = {
	blue: '#1693A4',
	blue_1693A4: '#1693A4',
	orenge: '#EF7E2D',
	grey: '#999999',
	greyBtn: '#6d6d6d',
	black: '#161717',
	borderGrey: '#E0E0E0',
	c555: '#555555',
	red: '#E43737'
}

/**
 * 格式化弹框
 * @param data1 
 * @param data2 
 */
export function myAlert(data1: any, data2: any) {
	console.log(data1);
	console.log(data2);
	if (__DEV__) {
		// @ts-ignore
		alert(JSON.stringify(data1, null, 2) + (data2 ? JSON.stringify(data2, null, 2) : ''))
	}

}

/**
 * 格式化日志打印
 * @param data1 
 * @param data2 
 */
export function myLog(data1: any, data2: any) {
	let str1: string = (data1 && (typeof (data1) == 'object')) ? JSON.stringify(data1, null, 2) : data1
	let str2: string = (data2 && (typeof (data2) == 'object')) ? JSON.stringify(data2, null, 2) : ''
	if (__DEV__ && str1)
		console.log(str1 + str2)
}