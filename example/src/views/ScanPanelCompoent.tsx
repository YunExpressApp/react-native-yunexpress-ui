/*
 * @Author: 张贵 zhanggui@yunexpress.cn
 * @Date: 2022-11-23 10:30:00
 * @LastEditors: 张贵 zhanggui@yunexpress.cn
 * @LastEditTime: 2022-11-30 16:30:00
 * @FilePath: \react-native-yunexpress-ui\example\src\views\ScanPanelCompoent.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useRef, memo } from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View, TextInput, ScrollView } from "react-native"
import { w } from 'react-native-yunexpress-ui'

interface ScanPanelCompoentProps {
    data?: Array<number>
    children?: Array<React.ReactElement> | React.ReactElement
}


function ScanPanelCompoent(props: ScanPanelCompoentProps) {

    // 默认值
    const currentProps = {
        ...props
    }

    let top, content, foot
    const domList: any = currentProps?.children || []
    // console.log('插槽类型', props?.children)
    domList.forEach((item: any) => {
        if (item.props?.['data-position'] == 'top') {
            top = item?.props?.children
        } else if (item.props?.['data-position'] == 'content') {
            content = item?.props?.children
        } else if (item.props?.['data-position'] == 'foot') {
            foot = item?.props?.children
        }
    })

    console.log('children运行了,对应的props是:', props);
    console.log('--------------------------------子组件运行分割线----------------------------------')

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                {top}
            </View>
            <View style={styles.content}>
                <ScrollView>
                    {content}
                </ScrollView>
            </View>
            <View style={styles.foot}>
                {foot}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    top: {
        borderTopLeftRadius: 30 * w,
        borderTopRightRadius: 30 * w,
        backgroundColor: 'white',
        minHeight: 138 * w,
        borderBottomWidth: 1 * w,
        borderBottomColor: '#D4D4D4'
    },
    content: {
        // flex: 1
        width: '100%',
        flex: 1,
        // height: 460 * w,
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        backgroundColor: '#F7F7F7'
    },
    foot: {
        marginTop: 'auto',
        minHeight: 84 * w
    }
});

export default memo(ScanPanelCompoent, (prevProps, nextProps) => {
    // 返回false进行更新
    // 返回true不需要进行更新
    // console.log(prevProps.data === nextProps.data,prevProps, nextProps);
    return prevProps.data === nextProps.data
})