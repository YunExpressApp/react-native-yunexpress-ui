// ThemeDefault.js
'use strict';

import { w } from '../util/CStyle'
import type { ThemeType } from './ThemeType';


//primary color
const primaryColor = '#337ab7';
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
}

export default ThemeDefault;

