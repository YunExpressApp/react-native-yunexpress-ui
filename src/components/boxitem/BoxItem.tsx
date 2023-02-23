/*
 * @Author: 康乐 yuankangle@yunexpress.cn
 * @Date: 2023-02-17 11:17:01
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2023-02-20 13:37:46
 * @FilePath: \react-native-yunexpress-ui\src\components\boxitem\BoxItem.tsx
 */

import React, { forwardRef, Ref, useImperativeHandle } from "react"
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native"
import { w } from "../../util/CStyle"
import Item from "../item"
import PanelModal from "../panelmodal"
import type { ItemProps } from "../item/Item"
import Text from "../text"
import i18n from "../../i18n"

export interface BoxItemProps {
    style?: StyleProp<ViewStyle>
    itemStyle?: StyleProp<ViewStyle>
    boxStyle?: StyleProp<ViewStyle>
    itemProps?: ItemProps
    onPress?: Function
    text?: string
    boxLeftText?: string
    boxRigthText?: string
    boxLeftOnPress?: Function
    boxRightOnPress?: Function
    children?: React.ReactNode
}

interface BoxItemRef {
    onShow: (isShow: boolean) => void
}

function BoxItem(props: BoxItemProps, ref: Ref<BoxItemRef>) {

    let PanelModalRef: { close: () => void, open: () => void } | null
    const _onPress = () => {
        PanelModalRef?.open()
        props.onPress && props.onPress()
    }

    useImperativeHandle(ref, () => (
        {
            onShow(isShow: boolean) {
                if (isShow) {
                    PanelModalRef?.open()
                } else {
                    PanelModalRef?.close()
                }
            }
        }
    ))



    return (
        <View style={[{ justifyContent: 'center' }, props.style]}>
            <Item
                style={[props.itemStyle, { backgroundColor: '#00000000' }]}
                title={props.text}
                rightHidden
                onPress={_onPress}
                {...props.itemProps}
            />
            <PanelModal
                style={props.boxStyle}
                ref={ref => PanelModalRef = ref}
            >
                <View style={{ flexDirection: 'row' }}>
                    {props.boxLeftText ?
                        <TouchableOpacity style={{ padding: 25 * w, paddingLeft: 33 * w }}
                            onPress={() => {
                                PanelModalRef?.close()
                                props.boxLeftOnPress && props.boxLeftOnPress()
                            }}>
                            <Text style={{ color: '#1693A4', fontSize: 22 * w }}>{props.boxLeftText || i18n.t(/*'返回'*/'Back')}</Text>
                        </TouchableOpacity> : null}
                    <View style={{ flex: 1 }} />
                    <TouchableOpacity style={{ padding: 25 * w, paddingRight: 33 * w }}
                        onPress={() => {
                            if (props.boxRightOnPress) {
                                if (props.boxRightOnPress()) {
                                    return
                                }
                            }
                            PanelModalRef?.close()
                        }}>
                        <Text style={{ color: '#1693A4', fontSize: 22 * w }}>{props.boxRigthText || i18n.t(/*'取消'*/'Cancel')}</Text>
                    </TouchableOpacity>
                </View>
                {
                    props.children
                }
            </PanelModal>
        </View>
    )

}

export default forwardRef(BoxItem)