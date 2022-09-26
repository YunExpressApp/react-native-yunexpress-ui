/*
 * @Author: 袁康乐 yuankangle@yunexpress.cn
 * @Date: 2022-06-13 10:22:40
 * @LastEditors: 袁康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2022-09-26 16:19:36
 * @FilePath: \react-native-yunexpress-ui\src\components\checkbox\CheckBox.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useEffect } from 'react';
import {
    TouchableOpacity,
    Image,
    StyleProp,
    TextStyle,
    ImageStyle,
    ViewStyle,
} from 'react-native';
import { w } from '../../util/CStyle';
import Text from '../text';

type CheckBox = {
    /**默认未选中图标 */
    defImg?: any
    /**已选中图标 */
    selImg?: any
    /**图标样式 */
    imgStyle?: StyleProp<ImageStyle>
    /**整体样式 */
    style?: StyleProp<ViewStyle>
    /**选中监听回调函数 */
    onChecked?: Function
    /**单选内容文本 */
    content?: React.ReactNode[] | string
    /**内容文本样式 */
    contentStyle?: StyleProp<TextStyle>
    /**默认是否选中 */
    isChecked?: boolean
    /** 是否固定文本大小 */
    isFixed?: boolean
}

/**
 * content?: string
 * --
 * 单选内容文本
 * 
 * isChecked?: boolean
 * --
 * 默认是否选中
 * 
 * onChecked?: Function
 * --
 * 选中监听回调函数
 * @param props 
 */
export default function CheckBox(props: CheckBox) {

    const [isChecked, setChecked] = useState(props?.isChecked || false)

    let defImg = require('./img/common_radio_def.png') || props.defImg
    let selImg = require('./img/common_radio_sel.png') || props.selImg

    useEffect(() => {

    })

    return (
        <>
            <TouchableOpacity style={[{ flexDirection: 'row', alignItems: 'center' }, props.style]}
                activeOpacity={1}
                onPress={() => {
                    setChecked(!isChecked)
                    props?.onChecked && props?.onChecked(!isChecked)
                }}>
                <Image resizeMode={'contain'} style={[{ width: 30 * w, height: 30 * w }, props.imgStyle]} source={isChecked ? selImg : defImg} />
                <Text isFixed={props.isFixed} style={[{ fontSize: 22 * w, marginLeft: 5 * w }, props.contentStyle]}>{props.content || ''}</Text>
            </TouchableOpacity>
        </>
    )
}