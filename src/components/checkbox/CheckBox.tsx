import React, { useState, useEffect } from 'react';
import {
    Text,
    TouchableOpacity,
    Image,
    StyleProp,
    TextStyle,
    ImageStyle,
    ViewStyle
} from 'react-native';
import { w } from '../../util/CStyle';

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
    content?: string
    /**内容文本样式 */
    contentStyle?: StyleProp<TextStyle>
    /**默认是否选中 */
    isChecked?: boolean
}

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
                <Text style={[{ fontSize: 22 * w, marginLeft: 5 * w }, props.contentStyle]}>{props.content}</Text>
            </TouchableOpacity>
        </>
    )
}