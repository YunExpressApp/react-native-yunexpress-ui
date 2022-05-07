export type ThemeType = {
	themes?: Object,
	set?: Function,
	isPad?: boolean,
	isIPhoneX?: boolean,
	fitIPhoneX?: boolean,
	isLandscape?: boolean,
	statusBarHeight?: number | undefined,
	screenInset?: any | undefined,
	screenColor?: string,
	primaryColor?: string,
	secondaryColor?: string,
	defaultColor?: string,
	defaultTextColor?: string,
	defaultTitleSize?: number,
	defaultSubTitleSize?: number,
	defaultCellLineHeight?: number,
	pageColor?: string,
	defaultMargin10?: number | undefined,
	//Card
	cardRadius?: number,
	cardBorderWith?: number | undefined,
	cardBorderColor?: string,
	cardPaddingHorizontal?: number | undefined,
	cardPaddingVertical?: number | undefined,

	cellTitleColor?: string | undefined,
	padding?: Function,
	w: number
};