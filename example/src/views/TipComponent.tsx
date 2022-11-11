/*
 * @Author: 张贵 zhanggui@yunexpress.cn
 * @Date: 2022-10-19 14:02:00
 * @LastEditors: 张贵 zhanggui@yunexpress.cn
 * @LastEditTime: 2022-10-25 16:35:15
 * @FilePath: \react-native-yunexpress-ui\example\src\views\TipComponent.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useRef, useLayoutEffect, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Image, Button } from "react-native"
import { w } from 'react-native-yunexpress-ui'
interface TipComponentProps {
    content: Document,
    placement: String,
    tipMessage?: String,
    bgColor?: String,
    textColor?: String,
    isHideTitleIcon?: Boolean,
    isShowButton?: Boolean,
    tipType?: String,
    iconResource?: Image,
    spaceBetween?: number,
    offsetNumber?: number,
    boxWidthNumber?: number,
    handleOperation?: Function,
    rightIconHandleOperation?: Function
}

export default function TipComponent(props: TipComponentProps) {
    // const ref: any = useRef(null as null | HTMLDivElement);
    const ref = useRef<View | null>(null);
    const contentRef = useRef<View | null>(null);
    const [visible, setVisible] = useState(false);
    const [staticVisible, setStaticVisible] = useState(true)
    const [lightSpotWidth, setLightSpotWidth] = useState(0);
    const [lightSpotHeight, setLightSpotHeight] = useState(0);
    const [contentWidth, setContentWidth] = useState(0);

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
        spaceBetween: props?.spaceBetween || 0, // 间距
        boxWidthNumber: props?.boxWidthNumber || 0,
        handleOperation: props?.handleOperation || defualtFunction,
        rightIconHandleOperation: props?.rightIconHandleOperation || defualtFunction,
        offsetNumber: props?.offsetNumber || 6 * w
    }

    const domSlotClick = () => {
        setVisible(visible ? false : true)
    }

    // 计算tip框方向
    const computedPlacement = () => {
        let result: any = { top: 0, bottom: 0, left: 0, right: 0 }
        const iconSpace = currentProps?.isShowButton ? 18 * w : 28 * w
        switch (currentProps?.placement) {
            case 'top':
                result = { top: -(lightSpotHeight + currentProps?.spaceBetween) }
                break;
            case 'topLeft':
                result = { top: -(lightSpotHeight + currentProps?.spaceBetween), left: -(lightSpotWidth / 2 - iconSpace - currentProps?.offsetNumber) }
                break;
            case 'topRight':
                result = { top: -(lightSpotHeight + currentProps?.spaceBetween), right: -(lightSpotWidth / 2 - iconSpace - currentProps?.offsetNumber) }
                break;
            case 'bottom':
                result = { bottom: -(lightSpotHeight + currentProps?.spaceBetween) }
                break;
            case 'bottomLeft':
                result = { bottom: -(lightSpotHeight + currentProps?.spaceBetween), left: -(lightSpotWidth / 2 - iconSpace - currentProps?.offsetNumber) } //  left: -(lightSpotWidth - (contentWidth / 2))
                break;
            case 'bottomRight':
                result = { bottom: -(lightSpotHeight + currentProps?.spaceBetween), right: -(lightSpotWidth / 2 - iconSpace - currentProps?.offsetNumber) } // right: -(lightSpotWidth - (contentWidth / 2))
                break;
            case 'left':
                result = { left: -(contentWidth + currentProps?.spaceBetween) }
                break;
            case 'right':
                result = { right: -(contentWidth + currentProps?.spaceBetween) }
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
                console.log('大大', x, y, width, height, pageX, pageY);
                setLightSpotWidth(width)
                setLightSpotHeight(height)
            });
        }
    }

    const tipContentRef = () => {
        if (contentRef) {
            contentRef?.current?.measure((x, y, width, height, pageX, pageY) => {
                console.log('小', x, y, width, height, pageX, pageY);
                setContentWidth(width)
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
            result = require("../imgs/yellow_go.png")
        }
        if (currentProps?.tipType === 'error') {
            result = require("../imgs/white_go.png")
        }
        return result
    }

    // 计算箭头指向
    const tipArrowsComputedCss = () => {
        const moveDistance = -14 * w
        let result: any = {
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: 'transparent',
            borderLeftColor: 'transparent',
        }
        result.borderTopColor = currentProps?.placement === 'top' || currentProps?.placement === 'topLeft' || currentProps?.placement === 'topRight' ? tipTypeComputedColor('bgColor')?.backgroundColor : 'transparent'
        result.borderBottomColor = currentProps?.placement === 'bottom' || currentProps?.placement === 'bottomLeft' || currentProps?.placement === 'bottomRight' ? tipTypeComputedColor('bgColor')?.backgroundColor : 'transparent'
        result.borderLeftColor = currentProps?.placement === 'left' ? tipTypeComputedColor('bgColor')?.backgroundColor : 'transparent'
        result.borderRightColor = currentProps?.placement === 'right' ? tipTypeComputedColor('bgColor')?.backgroundColor : 'transparent'
        if (currentProps?.placement === 'top' || currentProps?.placement === 'topLeft' || currentProps?.placement === 'topRight') {
            result.bottom = moveDistance
            result.right = currentProps?.placement === 'topLeft' ? 12 * w : null
            result.left = currentProps?.placement === 'topRight' ? 12 * w : null
        }
        if (currentProps?.placement === 'bottom' || currentProps?.placement === 'bottomLeft' || currentProps?.placement === 'bottomRight') {
            result.top = moveDistance
            result.right = currentProps?.placement === 'bottomLeft' ? 12 * w : null
            result.left = currentProps?.placement === 'bottomRight' ? 12 * w : null
        }
        if (currentProps?.placement === 'left') {
            result.right = moveDistance
        }
        if (currentProps?.placement === 'right') {
            result.left = moveDistance
        }
        return result
    }


    // 计算盒子长度
    const computedBoxWidth = () => {
        let result = null
        if (currentProps?.isShowButton) {
            result = { maxWidth: currentProps?.boxWidthNumber * w || 358 * w }
        } else if (currentProps?.placement !== 'static') {
            result = { maxWidth: currentProps?.boxWidthNumber * w || 420 * w }
        } else if (currentProps?.placement === 'static') {
            result = { width: currentProps?.boxWidthNumber * w || 480 * w }
        }
        return result
    }

    return (
        <View style={{ ...styles.container }}>
            {staticVisible && currentProps?.placement === 'static' &&
                <View style={{ ...computedPlacement(), ...styles.staticTipBox, ...tipTypeComputedColor('bgColor'), ...computedBoxWidth(), paddingRight: currentProps?.isShowButton && !currentProps?.isHideTitleIcon ? 12 * w : 28 * w, }}>
                    <View style={{ ...styles.tipTitle, width: '100%' }}>
                        <Text style={{ ...tipTypeComputedColor('color'), fontSize: 12 * w, lineHeight: 20 * w }}>{currentProps?.tipMessage}</Text>
                        {!currentProps?.isHideTitleIcon &&
                            <TouchableHighlight onPress={() => {
                                currentProps.rightIconHandleOperation()
                                setStaticVisible(false)
                            }} style={styles.arrow}>
                                <Image style={{
                                    width: 14 * w,
                                    height: 14 * w
                                }} source={tipIconComputedColor() || require("../imgs/white_close.png")} />
                            </TouchableHighlight>
                        }
                    </View>
                </View>
            }
            {currentProps?.placement !== 'static' &&
                <TouchableHighlight style={styles.tipTitle} onPress={domSlotClick}>{currentProps?.content || ''}</TouchableHighlight >
            }

            {visible &&
                <View ref={ref} onLayout={tipBoxRef} style={{ ...computedPlacement(), ...styles.tipBox, ...tipTypeComputedColor('bgColor'), ...computedBoxWidth(), paddingRight: (currentProps?.isHideTitleIcon || (currentProps?.isShowButton && !currentProps?.isHideTitleIcon)) ? 12 * w : 28 * w, }}>
                    <View style={{ ...styles.tipMessageBox }}>
                        <View ref={contentRef} onLayout={tipContentRef} style={{ ...styles.tipTitle }}>
                            <Text style={{ ...tipTypeComputedColor('color'), ...styles.tipTextCss }}>{currentProps?.tipMessage}</Text>
                        </View>
                        {(!currentProps?.isShowButton && !currentProps?.isHideTitleIcon) &&
                            <TouchableHighlight onPress={() => {
                                currentProps.rightIconHandleOperation()
                                setVisible(false)
                            }} style={styles.arrow}>
                                <Image style={{
                                    width: 14 * w,
                                    height: 14 * w
                                }} source={tipIconComputedColor() || require("../imgs/white_close.png")} />
                            </TouchableHighlight>
                        }
                    </View>
                    {currentProps?.isShowButton &&
                        <View style={{ ...styles.handleBox }}>
                            <Text style={{ ...styles.handleBoxCancle, marginRight: 3 * w }} onPress={handleCancle}>取消</Text>
                            <Text style={{ ...styles.handleBoxMove, marginLeft: 3 * w }} onPress={() => { currentProps?.handleOperation() }}>操作</Text>
                        </View>
                    }
                    <View style={{ ...tipArrowsComputedCss(), ...styles.inArrow }}></View>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    tipMessageBox: {
        position: 'relative',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        // paddingRight: 12
    },
    inArrow: {
        width: 12 * w,
        height: 12 * w,
        borderWidth: 8 * w,
        // borderTopColor: 'transparent',
        // borderRightColor: 'transparent',
        // borderBottomColor: 'transparent',
        // borderLeftColor: '#fff',
        position: 'absolute'
        // left: 12
    },
    handleBox: {
        marginLeft: 'auto',
        marginTop: 6 * w,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    handleBoxCancle: {
        fontSize: 12 * w,
        color: '#CCCCCC',
    },
    handleBoxMove: {
        fontSize: 12 * w,
        color: '#61D9EA',
    },
    arrow: {
        zIndex: 1000,
        position: 'absolute',
        right: -16 * w,
        width: 14 * w,
        height: 14 * w
    },
    container: {
        // flex: 1,
        // backgroundColor: 'pink',
        // maxWidth: 420,
        minWidth: 160 * w,
        minHeight: 54 * w,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    tipTitle: {
        width: '100%',
        // paddingRight: 8 * w,
        // flex: 1,
        // position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tipTextCss: {
        fontSize: 12 * w, lineHeight: 20 * w
    },
    tipBox: {
        flexShrink: 0,
        minWidth: 100 * w,
        // height: 34,
        paddingLeft: 12 * w,
        paddingBottom: 12 * w,
        paddingTop: 12 * w,
        borderRadius: 4 * w,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    staticTipBox: {
        flexShrink: 0,
        // width: 480,
        // height: 34,
        paddingLeft: 12 * w,
        paddingBottom: 12 * w,
        paddingTop: 12 * w,
        // borderRadius: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    tipBoxContent: {

    }
});