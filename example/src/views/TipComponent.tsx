/*
 * @Author: 张贵 yuankangle@yunexpress.cn
 * @Date: 2022-10-19 14:02:00
 * @LastEditors: 张贵 yuankangle@yunexpress.cn
 * @LastEditTime: 2022-10-25 16:35:15
 * @FilePath: \react-native-yunexpress-ui\example\src\views\TipExample.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useRef, useLayoutEffect, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Image, Button } from "react-native"

interface TipComponentProps {
    domSlot: Document,
    placement: String,
    tipMessage?: String,
    bgColor?: String,
    textColor?: String,
    isHideTitleIcon?: Boolean,
    isShowButton?: Boolean,
    tipType?: String,
    iconResource?: Image,
    spaceBetween?: number,
    handleOperation?: any
}

export default function TipComponent(props: TipComponentProps) {
    // const ref: any = useRef(null as null | HTMLDivElement);
    const ref = useRef<View | null>(null);
    const [value, setValue] = useState<string | undefined>('');
    const [visible, setVisible] = useState(false);
    const [lightSpotWidth, setLightSpotWidth] = useState(0);
    const [lightSpotHeight, setLightSpotHeight] = useState(0);

    const defualtFunction = () => { }

    // 默认值
    const currentProps = {
        ...props,
        tipMessage: props?.tipMessage || '区域最宽长度420px ，超出字段换行',
        bgColor: props?.bgColor || '#111111',
        textColor: props?.textColor || '#FFFFFF',
        isHideTitleIcon: props?.isHideTitleIcon || false,
        isShowButton: props?.isShowButton || false,
        tipType: props?.tipType || false, // tip框套餐类型  默认/警告warn/错误error
        iconResource: props?.iconResource || null,
        spaceBetween: props?.spaceBetween || 14, // 间距
        handleOperation: props?.handleOperation || defualtFunction
    }

    const domSlotClick = () => {
        setVisible(visible ? false : true)
    }

    // 计算tip框方向
    const computedPlacement = () => {
        let result: any = { top: 0, bottom: 0, left: 0, right: 0 }
        switch (currentProps?.placement) {
            case 'top':
                result = { top: -(lightSpotHeight + currentProps?.spaceBetween) }
                break;
            case 'bottom':
                result = { bottom: -(lightSpotHeight + currentProps?.spaceBetween) }
                break;
            case 'left':
                result = { left: -(lightSpotWidth + currentProps?.spaceBetween) }
                break;
            case 'right':
                result = { right: -(lightSpotWidth + currentProps?.spaceBetween) }
                break;
            default:
                result = { top: 0, bottom: 0, left: 0, right: 0 }
                break;
        }
        console.log('obk', result)
        return result
    }

    const handleCancle = () => {
        domSlotClick()
    }

    const tipBoxRef = () => {
        if (ref) {
            ref?.current?.measure((x, y, width, height, pageX, pageY) => {
                console.log(x, y, width, height, pageX, pageY);
                setLightSpotWidth(width)
                setLightSpotHeight(height)
            });
        }
    }

    // 计算颜色组合
    const tipTypeComputedColor = (type: String) => {
        let result = type === 'color' ? { color: currentProps?.textColor || '#FFFFFF' } : { backgroundColor: currentProps?.bgColor || '#111111' }
        // 套件组合warn
        if (currentProps?.tipType === 'warn' && type === 'color') {
            result = { color: '#E8971E' }
        }
        if (currentProps?.tipType === 'warn' && type === 'bgColor') {
            result = { backgroundColor: '#FFF1E0' }
        }
        // 套件组合error
        if (currentProps?.tipType === 'error' && type === 'color') {
            result = { color: '#FFFFFF' }
        }
        if (currentProps?.tipType === 'error' && type === 'bgColor') {
            result = { backgroundColor: '#E05757' }
        }
        return result
    }
    // 计算图标
    const tipIconComputedColor = () => {
        let result = currentProps?.iconResource || ''
        if (currentProps?.iconResource) {
            return result
        }
        if (currentProps?.tipType === 'warn') {
            result = require("../imgs/yellow_close.png")
        }
        if (currentProps?.tipType === 'error') {
            result = require("../imgs/white_go.png")
        }
        return result
    }

    // 计算箭头指向
    const tipArrowsComputedCss = () => {
        const moveDistance = -16
        let result: any = {
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: 'transparent',
            borderLeftColor: 'transparent',
        }
        result.borderTopColor = currentProps?.placement === 'top' ? tipTypeComputedColor('bgColor')?.backgroundColor : 'transparent'
        result.borderBottomColor = currentProps?.placement === 'bottom' ? tipTypeComputedColor('bgColor')?.backgroundColor : 'transparent'
        result.borderLeftColor = currentProps?.placement === 'left' ? tipTypeComputedColor('bgColor')?.backgroundColor : 'transparent'
        result.borderRightColor = currentProps?.placement === 'right' ? tipTypeComputedColor('bgColor')?.backgroundColor : 'transparent'
        if (currentProps?.placement === 'top') {
            result.bottom = moveDistance
        }
        if (currentProps?.placement === 'bottom') {
            result.top = moveDistance
        }
        if (currentProps?.placement === 'left') {
            result.right = moveDistance
        }
        if (currentProps?.placement === 'right') {
            result.left = moveDistance
        }
        return result
    }

    return (
        <View style={styles.container}>
            <TouchableHighlight style={styles.tipTitle} onPress={domSlotClick}>{currentProps?.domSlot || ''}</TouchableHighlight >
            {visible &&
                <View ref={ref} onLayout={tipBoxRef} style={{ ...computedPlacement(), ...styles.tipBox, ...tipTypeComputedColor('bgColor'), paddingRight: currentProps?.isShowButton && !currentProps?.isHideTitleIcon ? 8 : 22, }}>
                    <View style={{ ...styles.tipTitle }}>
                        <Text style={{ ...tipTypeComputedColor('color'), fontSize: 12, lineHeight: 20 }}>{currentProps?.tipMessage}</Text>
                        {(!currentProps?.isShowButton && !currentProps?.isHideTitleIcon) &&
                            <TouchableHighlight onPress={() => { setVisible(false) }} style={styles.arrow}>
                                <Image style={{
                                    width: 14,
                                    height: 14
                                }} source={tipIconComputedColor() || require("../imgs/white_close.png")} />
                            </TouchableHighlight>
                        }
                    </View>
                    {currentProps?.isShowButton &&
                        <View style={{ ...styles.handleBox }}>
                            <Text style={{ ...styles.handleBoxCancle, marginRight: 3 }} onPress={handleCancle}>取消</Text>
                            <Text style={{ ...styles.handleBoxMove, marginLeft: 3 }} onPress={currentProps?.handleOperation}>操作</Text>
                        </View>
                    }
                    <View style={{ ...tipArrowsComputedCss(), ...styles.inArrow }}></View>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    inArrow: {
        width: 12,
        height: 12,
        borderWidth: 8,
        // borderTopColor: 'transparent',
        // borderRightColor: 'transparent',
        // borderBottomColor: 'transparent',
        // borderLeftColor: '#fff',
        position: 'absolute',
        // top: -9
    },
    handleBox: {
        marginLeft: 'auto',
        marginTop: 6,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    handleBoxCancle: {
        fontSize: 12,
        color: '#CCCCCC',
    },
    handleBoxMove: {
        fontSize: 12,
        color: '#61D9EA',
    },
    arrow: {
        zIndex: 1000,
        position: 'absolute',
        right: -18,
        width: 14,
        height: 14
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    tipTitle: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tipBox: {
        flexShrink: 0,
        minWidth: 100,
        // height: 34,
        paddingLeft: 12,
        paddingBottom: 12,
        paddingTop: 12,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    tipBoxContent: {

    }
});