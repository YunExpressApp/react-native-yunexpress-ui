/*
 * @Author: 袁康乐 yuankangle@yunexpress.cn
 * @Date: 2022-06-13 10:22:40
 * @LastEditors: 袁康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2022-09-26 10:17:04
 * @FilePath: \react-native-yunexpress-ui\src\themes\ThemeDefault.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// ThemeDefault.js
'use strict';

import { w } from '../util/CStyle'
import type { ThemeType } from './ThemeType';


//primary color
const primaryColor = '#1592A3';
//secondary color
const secondaryColor = '#5bc0de';
//default color
const defaultColor = '#fff';
//default text color
const defaultTextColor = '#111111';
//默认的圆角
const defaultRadius = 10 * w;

const margin10 = 10 * w;

const ThemeDefault: ThemeType = {
	//General
	screenColor: '#444',
	primaryColor: primaryColor,
	secondaryColor: secondaryColor,
	defaultColor: defaultColor,
	defaultTextColor: defaultTextColor,
	defaultTitleSize: 22 * w,
	defaultSubTitleSize: 18 * w,
	defaultCellLineHeight: 30 * w,
	pageColor: '#fff',
	defaultMargin10: margin10,
	//Card
	cardRadius: defaultRadius,
	cardBorderWith: 1 * w,
	cardBorderColor: '#D4D4D4',
	cardPaddingHorizontal: 24 * w,
	cardPaddingVertical: 16 * w,
	// border: 1px solid #D4D4D4;
	//Cell
	cellTitleColor: '#999999',
	w,
	locale: 'zh'
}

export default ThemeDefault;

