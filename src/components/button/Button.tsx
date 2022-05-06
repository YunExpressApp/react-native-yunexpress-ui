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
} from 'react-native'
import React from 'react'
import { Color, w } from '../../util/CStyle';

/**
 * 按钮属性
 */
interface ButtonProps {
    /** 是否有边框 */
    isBorder: boolean,
    /** 样式 */
    style: any,
    /** 按钮样式 */
    btnStyle: any,
    /** 右边按钮文本 */
    buttonRightText: string,
    /** 右边按钮文本样式 */
    btnRightTextStyle: any,
    /** 左边按钮文本 */
    buttonLeftText: string,
    /** 左边按钮文本样式 */
    btnLeftTextStyle: any,
    /** 右边按钮点击回调函数 */
    onRightPress: Function,
    /** 左边按钮点击回调函数 */
    onLeftPress: Function,
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
export default class Button extends React.Component<ButtonProps> {

    static defaultProps = {
        /** 按钮文案 */
        buttonText: 'Confirm',     //默认按钮文案
        /** 是否有边框 */
        isBorder: true,
        /** 样式 */
        style: undefined
    };

    render() {
        let borderStyle = this.props.isBorder ? { borderRadius: 42 * w, borderWidth: 1, margin: 10 * w } : null
        let btnContainer = { ...styles.btnContainerAll, ...borderStyle }
        return (
            <View style={[btnContainer, styles.btnParent, this.props.style]}>
                {this.props.buttonLeftText ? <TouchableOpacity
                    style={[btnContainer, { backgroundColor: Color.c555, flex: 0.34 }, this.props.btnStyle]}
                    activeOpacity={0.8}
                    onPress={() => this.props.onLeftPress && this.props.onLeftPress()}>
                    <Text style={[styles.white, { fontSize: 24 * w }, this.props.btnLeftTextStyle]}>{this.props.buttonLeftText}</Text>
                </TouchableOpacity> : null}
                <TouchableOpacity
                    style={[btnContainer, { backgroundColor: Color.blue, flex: this.props.buttonLeftText ? 0.66 : 1 }, this.props.btnStyle]}
                    activeOpacity={0.8}
                    onPress={() => this.props.onRightPress && this.props.onRightPress()}>
                    <Text style={[styles.white, { fontSize: 24 * w }, this.props.btnRightTextStyle]}>{this.props.buttonRightText}</Text>
                </TouchableOpacity>
            </View>
        )
    }
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