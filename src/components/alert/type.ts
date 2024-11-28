import { StyleProp, TextStyle } from "react-native"

/**
 * 弹框属性
 */
export type AlertProps = {
    /** 是否显示弹框 */
    show?: boolean,
    /** 弹框关闭时回调，必加属性，关闭后设为不显示 */
    onClose?: Function,
    /** 弹框标题 */
    title?: string,
    /** 左边按钮点击回调 */
    onLeftPress?: Function,
    /** 右边按钮点击回调 回调返回当前State的值 */
    onRightPress?: Function,
    /** 子组件 */
    children?: any,
    /** 弹框文字样式 */
    titleStyle?: StyleProp<TextStyle>,
    /** 弹框按钮左边文字 */
    leftText?: string | undefined,
    /** 弹框按钮右边文字 */
    rightText?: string | undefined,
    /** 弹框按钮左边文字样式 */
    btnLeftTextStyle?: StyleProp<TextStyle>,
    /** 弹框按钮右边文字样式 */
    btnRightTextStyle?: StyleProp<TextStyle>,
    /** 弹框内容 */
    content?: string | undefined,
    /** 弹框内容样式 */
    contentStyle?: StyleProp<TextStyle>,
    /** 点旁边是否关闭 */
    isCancelable?: boolean
    /** 是否固定文本大小 */
    isFixed?: boolean
    /** 弹框key 用来显示不再提示功能 */
    key?: string
    /** 倒计时 */
    countdown?: number
}

/**
 * 操作可刷新属性
 */
export type AlertState = {
    /** 是否显示 */
    isVisible?: boolean,
    /** 弹框标题 */
    title: string,
    titleStyle?: StyleProp<TextStyle>,
    leftText?: string | undefined,
    rightText?: string | undefined,
    onLeftPress?: Function | undefined,
    onRightPress: Function,
    btnLeftTextStyle?: StyleProp<TextStyle>,
    btnRightTextStyle?: StyleProp<TextStyle>,
    /** 弹框内容 */
    content?: string | undefined,
    contentStyle?: StyleProp<TextStyle>,
    /** 是否只有一个按钮 */
    isOneButton?: boolean,
    isCancelable?: boolean
    key?: string
    /** 不再提示是否选中 */
    isChecked?: boolean
    checkBoxText?: string
    /** 倒计时 */
    countdown?: number
}