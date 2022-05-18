/**
 * 互动自定义控件
 * Created by ykl
 * on 16/6/17.
 */

import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    StyleProp,
    ViewStyle,
    TextStyle,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Color, w } from '../../util/CStyle';

/**
 * 按钮属性
 */
interface ButtonProps {
    /** 是否有边框 */
    isBorder?: boolean,
    /** 样式 */
    style?: StyleProp<ViewStyle>,
    /** 按钮样式 */
    btnStyle?: StyleProp<ViewStyle>,
    /** 右边按钮文本,如果只要一个按钮不设置buttonLeftText */
    buttonRightText: string,
    /** 右边按钮文本样式 */
    btnRightTextStyle?: StyleProp<TextStyle>,
    /** 左边按钮文本 */
    buttonLeftText?: string | undefined,
    /** 左边按钮文本样式 */
    btnLeftTextStyle?: StyleProp<TextStyle>,
    /** 右边按钮点击回调函数 */
    onRightPress: Function,
    /** 左边按钮点击回调函数 */
    onLeftPress?: Function,
}

/**
 * === 自定义按钮 ===
 * 
 * 【buttonLeftText】 左边按钮文本 ----【buttonRightText】右边按钮文本
 * 
 * 【onLeftPress】 左边按钮点击回调 ---【onRightPress】 右边按钮点击回调函数
 * 
 * 【style】 总体样式 ---------------------【btnStyle】 按钮样式
 * 
 * 【btnLeftTextStyle】 左边文本样式 ----【btnRightTextStyle】 右边文本样式
 * 
 */
export default function Button(props: ButtonProps) {

    const [buttonLeftText, setButtonLeftText] = useState(props.buttonLeftText)
    const [buttonRightText, setButtonRightText] = useState(props.buttonRightText)

    useEffect(() => {
        setButtonLeftText(props.buttonLeftText)
    }, [props.buttonLeftText])

    useEffect(() => {
        setButtonRightText(props.buttonRightText)
    }, [props.buttonRightText])

    // static defaultProps = {
    //     /** 按钮文案 */
    //     buttonText: 'Confirm',     //默认按钮文案
    //     /** 是否有边框 */
    //     isBorder: true,
    //     /** 样式 */
    //     style: undefined
    // };


    let borderStyle = props.isBorder ? { borderRadius: 42 * w, borderWidth: 1, margin: 10 * w } : null
    let btnContainer = { ...styles.btnContainerAll, ...borderStyle }
    return (
        <View style={[btnContainer, styles.btnParent, props.style]}>
            {buttonLeftText ? <TouchableOpacity
                style={[btnContainer, { backgroundColor: Color.c555, flex: 0.34 }, props.btnStyle]}
                activeOpacity={0.8}
                onPress={() => props.onLeftPress && props.onLeftPress()}>
                <Text style={[styles.white, { fontSize: 24 * w }, props.btnLeftTextStyle]}>{buttonLeftText}</Text>
            </TouchableOpacity> : null}
            <TouchableOpacity
                style={[btnContainer, { backgroundColor: Color.blue, flex: buttonLeftText ? 0.66 : 1 }, props.btnStyle]}
                activeOpacity={0.8}
                onPress={() => props.onRightPress && props.onRightPress()}>
                <Text style={[styles.white, { fontSize: 24 * w }, props.btnRightTextStyle]}>{buttonRightText}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    white: {
        color: "white",
        flex: 1,
        textAlign: 'center',
    },
    btnParent: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    btnContainerAll: {
        color: 'white',
        height: 84 * w,
        borderColor: '#00000000',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    }
})