/*
 * @Author: 康乐 yuankangle@yunexpress.cn
 * @Date: 2023-02-17 11:17:01
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2023-03-01 14:24:54
 * @FilePath: \ops_pdae:\git\react-native-yunexpress-ui\src\components\panelmodal\PanelModal.tsx
 */

import React, { forwardRef, Ref, useImperativeHandle, useState } from "react"
import { Modal, StyleProp, StyleSheet, View, ViewStyle } from "react-native"
import { w } from "../../util/CStyle"

function PanelModal(props: PanelModalProps, ref: Ref<PanelModalRef>) {
    const [visible, setVisible] = useState(false)

    useImperativeHandle(ref, () => (
        {
            open() {
                setVisible(true)
            },
            close() {
                setVisible(false)
                props.onClose && props.onClose()
            }
        }
    ))
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            statusBarTranslucent={true}
        >
            <View style={[{ flex: 1, flexDirection: 'column', backgroundColor: '#0909095e', paddingTop: 70 * w }, props.style]}>
                <View style={[styles.PanelModal_Container, props.containerStyle]}>
                    {
                        props.children
                    }
                </View>
            </View>
        </Modal>
    );
}
export default forwardRef(PanelModal)
type PanelModalProps = {
    children?: React.ReactNode
    onClose?: () => void
    style?: StyleProp<ViewStyle>
    containerStyle?: StyleProp<ViewStyle>
}
export type PanelModalRef = {
    open: () => void
    close: () => void
}
const styles = StyleSheet.create({
    PanelModal_Container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "white",
        borderTopStartRadius: 30 * w,
        borderTopEndRadius: 30 * w,
    },
    Head_Operate: {
        flexDirection: 'row',
        paddingHorizontal: 32 * w
    },
    Cancel_Font: {
        fontSize: 22 * w,
        color: '#1693A4',
        textAlign: 'right',
        paddingTop: 23 * w,
        paddingBottom: 10 * w
    },
    title: {
        fontSize: 22 * w,
        color: '#111',
        paddingHorizontal: 32 * w,
        paddingVertical: 12 * w
    }
})