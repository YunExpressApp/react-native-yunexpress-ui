/**
 * 多种过滤器控件
 * Created by ykl
 * on 16/6/17.
 */

import {
    View,
    TouchableOpacity,
    StyleSheet,
    StyleProp,
    ViewStyle,
    TextStyle,
    Image,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Color, w, CommonStyle } from '../../util/CStyle';
import Text from '../text';

/**
 * 过滤器属性
 */
interface FlitersViewProps {
    /** 样式 */
    style?: StyleProp<ViewStyle>,
    /** 过滤器样式 */
    flitersStyle?: StyleProp<ViewStyle>,
    /** 按钮样式 */
    btnStyle?: StyleProp<ViewStyle>,
    /** 右边按钮文本,如果只要一个按钮不设置buttonLeftText */
    buttonRightText: string,
    /** 右边按钮文本样式 */
    btnRightTextStyle?: StyleProp<TextStyle>,
    /** 左边按钮文本 */
    buttonLeftText: string,
    /** 左边按钮文本样式 */
    btnLeftTextStyle?: StyleProp<TextStyle>,
    /** 右边按钮点击回调函数 */
    onRightPress?: Function,
    /** 左边按钮点击回调函数 */
    onLeftPress?: Function,
    /** 是否可连续点击 */
    isContinuousClick?: boolean
    /** 是否固定文本大小 */
    isFixed?: boolean
    /** 内容组件 */
    children: React.ReactNode
}

//最后点击时间缀
let clickTime: number = 0

/**
 * === 过滤器组件 ===
 * 
 * 【buttonLeftText】 左边按钮文本 ----【buttonRightText】右边按钮文本
 * 
 * 【onLeftPress】 左边按钮点击回调 ---【onRightPress】 右边按钮点击回调函数
 * 
 * 【style】 总体样式 ----【flitersStyle】 过滤器样式----【btnStyle】 按钮样式
 * 
 * 【btnLeftTextStyle】 左边文本样式 ----【btnRightTextStyle】 右边文本样式
 * 
 * 【children】 内容组件
 * 
 */
export default function FlitersView(props: FlitersViewProps) {
    const [buttonLeftText, setButtonLeftText] = useState(props.buttonLeftText)
    const [buttonRightText, setButtonRightText] = useState(props.buttonRightText)

    useEffect(() => {
        setButtonLeftText(props.buttonLeftText)
    }, [props.buttonLeftText])

    useEffect(() => {
        setButtonRightText(props.buttonRightText)
    }, [props.buttonRightText])

    let preventDoubleClick = (press: Function) => {
        let now = Date.now()
        if (props.isContinuousClick) {
            press && press()
        } else if (now - clickTime > 1000) {
            clickTime = now
            press && press()
        }
    }

    let btnContainer = { ...styles.btnContainerAll }

    return (
        <View style={[CommonStyle.baseBackgrand, props.style]}>
            <View style={[btnContainer, styles.btnParent, props.flitersStyle]}>
                <TouchableOpacity
                    style={[btnContainer, props.btnStyle]}
                    activeOpacity={0.8}
                    onPress={() => props.onLeftPress && preventDoubleClick(props.onLeftPress)}>
                    <Text isFixed={props.isFixed} style={[styles.greyText, props.btnLeftTextStyle]}>{buttonLeftText}</Text>
                    <Image style={{ width: 20 * w, marginLeft: 10 * w }} resizeMode='contain' source={require('../../imgs/common_arrow_down.png')} />
                </TouchableOpacity>
                <View style={{ flex: 1 }} />
                <TouchableOpacity
                    style={[btnContainer, { justifyContent: 'flex-end' }, props.btnStyle]}
                    activeOpacity={0.8}
                    onPress={() => props.onRightPress && preventDoubleClick(props.onRightPress)}>
                    <Text isFixed={props.isFixed} style={[styles.greyText, props.btnRightTextStyle]}>{buttonRightText}</Text>
                    <Image style={{ width: 20 * w, marginLeft: 10 * w }} resizeMode='contain' source={require('../../imgs/common_arrow_down.png')} />
                </TouchableOpacity>
            </View>
            {props.children}
        </View>
    )

}

const styles = StyleSheet.create({
    greyText: {
        color: Color.grey,
        textAlign: 'center',
        fontSize: 20 * w
    },
    btnParent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20 * w
    },
    btnContainerAll: {
        color: 'white',
        height: 60 * w,
        borderColor: '#00000000',
        flexDirection: "row",
        alignItems: "center",
    }
})