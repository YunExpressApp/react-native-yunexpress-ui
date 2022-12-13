/*
 * @Author: 张贵 zhanggui@yunexpress.cn
 * @Date: 2022-11-23 10:30:00
 * @LastEditors: 张贵 zhanggui@yunexpress.cn
 * @LastEditTime: 2022-11-30 16:30:00
 * @FilePath: \react-native-yunexpress-ui\example\src\views\ScanPanelCompoent.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useRef, memo } from 'react'
import { Modal, TouchableOpacity, Image, StyleSheet, Text, View, TextInput, ScrollView, StyleProp, ViewStyle } from "react-native"
import Title from "../title";
import Header from "./Header";
import { w } from 'react-native-yunexpress-ui'

interface PopupCompoentProps {
    visible?: boolean,
    isShowHeader?: boolean,
    onClose?: Function,
    onLeftPress?: Function,
    onRightPress?: Function,
    leftTitle?: string,
    rightTitle?: string,
    title?: string,
    data?: Array<number>
    children?: Array<React.ReactElement> | React.ReactElement,
    style?: StyleProp<ViewStyle>,
}


function PopupCompoent(props: PopupCompoentProps) {

    // 默认值
    const currentProps = {
        ...props
    }

    return <Modal visible={props.visible}
        animationType={'fade'}
        transparent={true}
        onRequestClose={() => {
            props.onClose && props.onClose();
        }}>
        <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => { props.onClose && props.onClose(); }}>

            </TouchableOpacity>
            <View style={props.style}>
                <ScrollView style={{}} keyboardShouldPersistTaps="always">
                    {props?.isShowHeader && <Header leftTitle={props.leftTitle} rightTitle={props.rightTitle} onLeftPress={props.onLeftPress} onRightPress={props.onRightPress} />}
                    <View style={{
                        backgroundColor: 'white',
                        borderTopLeftRadius: props?.isShowHeader ? 0 : 30 * w,
                        borderTopRightRadius: props?.isShowHeader ? 0 : 30 * w,
                    }}>
                        {
                            props.title && <Title style={{ marginHorizontal: 32 * w, marginTop: 19 * w }}>{props.title}</Title>
                        }
                        {
                            props.children
                        }
                    </View>
                </ScrollView>
            </View>
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default memo(PopupCompoent)