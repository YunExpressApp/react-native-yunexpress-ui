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

type Props = {
    title: string,
    isBorder: boolean,
    style: any,
    btnStyle: any,
    buttonRightText: string,
    buttonLeftText: string,
    btnTextStyle: any,
    btnLeftTextStyle: any,
    onRightPress: Function,
    onLeftPress: Function,
}

/**
 * 按钮文本 buttonText
 * 按钮事件 onPress
 * 按钮样式 btnStyle
 * 文本样式 btnTextStyle
 * 总体样式 style
 */
export default class Button extends React.Component<Props> {

    static defaultProps = {
        buttonText: 'Confirm',     //默认按钮文案
        isBorder: true,
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
                    <Text style={[styles.white, { fontSize: 24 * w }, this.props.btnTextStyle]}>{this.props.buttonRightText}</Text>
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