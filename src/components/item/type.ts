import type { StyleProp, ViewStyle, TextStyle, TextInputProps, ImageStyle } from "react-native"
/** Item属性 */
export type ItemProps = {
    /** 左边图标 */
    leftIcon?: any,
    /** 左边图标样式 */
    leftIconStyle?: StyleProp<ImageStyle>,
    /** 是否显示右边图标，默认显示右指向的箭头小图标 */
    rightHidden?: boolean,
    /** 右边图标 */
    rightIcon?: any,
    /** 右边图标样式 */
    rightIconStyle?: StyleProp<ImageStyle>,
    /** 右边图标点击事件 */
    rightIconOnPress?: Function,
    /** 是否显示菊花 */
    showLoading?: boolean,
    /** 标题 */
    title?: string,
    /** 标题样式 */
    titleStyle?: StyleProp<TextStyle>,
    /** 子标题 */
    subTitle?: string,
    /** 子标题颜色 */
    subTitleColor?: string,
    /** 子标题样式 */
    subTitleStyle?: StyleProp<TextStyle>,
    /** 子标题右边内容 */
    titleTag?: string,
    /** 子标题右边内容样式 */
    titleTagStyle?: StyleProp<TextStyle>,
    /** 子标题父组件样式 */
    titleTagContentSytle?: StyleProp<ViewStyle>,
    /** 标题父组件外层样式 */
    titleContentStyle?: StyleProp<ViewStyle>,
    /** 标题下面内容 */
    titleBottomText?: string,
    /** 标题下面内容样式 */
    titleBottomStyle?: StyleProp<TextStyle>,
    /** 标题下面右边内容 */
    titleBottomRightText?: string,
    /** 标题下面右边内容样式 */
    titleBottomRightStyle?: StyleProp<TextStyle>,
    /** 标题下面父组件样式 */
    titleBottomContentStyle?: StyleProp<ViewStyle>,
    /** 最下面内容 */
    bottomText?: string,
    /** 最下面内容样式 */
    bottomStyle?: StyleProp<TextStyle>,
    /** 最下面右边内容 */
    bottomRightText?: string,
    /** 最下面右边内容样式 */
    bottomRightStyle?: StyleProp<TextStyle>,
    /** 最下面右边父组件样式 */
    bottomContentStyle?: StyleProp<ViewStyle>,
    /** 最下面线条样式 要在最底部要设置 midContentStyle={{flex: 1}} */
    bottomLineStyle?: StyleProp<ViewStyle>,
    /** 标题右边父组件样式 */
    rightContentStyle?: StyleProp<ViewStyle>,
    /** 标题右边内容 */
    rightText?: string,
    /** 标题右边内容样式 */
    rightTextStyle?: StyleProp<TextStyle>,
    /** 标题右边的右边内容 */
    rightText2?: string,
    /** 标题右边的右边内容样式 */
    rightText2Style?: StyleProp<TextStyle>,
    /** 标题右边输入框属性 */
    rightInput?: TextInputProps,
    /** 标题右边自定义组件 */
    rightCustomView?: any,
    /** 是否可以点击 */
    disabled?: boolean,
    /** 点击效果 */
    activeOpacity?: number,
    /** 标题上面内容 */
    topTitle?: string,
    /** 标题上面内容样式 */
    topTitleStyle?: StyleProp<TextStyle>,
    /** 点击事件 */
    onPress?: Function,
    /** 长按事件 */
    onLongPress?: Function,
    /** 核心部位样式 */
    midContentStyle?: StyleProp<ViewStyle>,
    /** 是否显示边框 */
    showBorder?: boolean,
    /** topTitle是否有必填的红色星号 */
    required?: boolean,
    /** 总父组件样式 */
    style?: StyleProp<ViewStyle>,
    /** 标题父组件样式 */
    titleParentStyle?: StyleProp<ViewStyle>,
    /** 是否固定文本大小 */
    isFixed?: boolean
}