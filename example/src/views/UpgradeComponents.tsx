/*
 * @Author: 张贵 zhanggui@yunexpress.cn
 * @Date: 2022-10-28 9:30:00
 * @LastEditors: 张贵 zhanggui@yunexpress.cn
 * @LastEditTime: 2022-11-08 9:30:00
 * @FilePath: \react-native-yunexpress-ui\example\src\views\UpgradeComponents.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native"

interface UpgradeComponentsProps {
    title: String,
    content?: Array<String>,
    children?: Document,
    handleOperation: () => any
}


export default function UpgradeComponents(props: UpgradeComponentsProps) {

    const defualtFunction = () => { }

    // 默认值
    const currentProps = {
        ...props,
        title: props?.title || '弹框标题',
        content: props?.content || [],
        handleOperation: props?.handleOperation || defualtFunction
    }

    return (
        <View style={styles.container}>
            <Image style={styles.pngCss} source={require("../imgs/upgrade.png")} />
            <Text style={styles.titleCss}>{currentProps?.title}</Text>
            {currentProps?.content?.length !== 0 &&
                <View style={styles.contentCss}>
                    {
                        currentProps?.content.map((item) => {
                            return <Text style={styles.contentTextCss}> {item} </Text>
                        })
                    }
                </View>
            }
            {currentProps?.children && <View style={{ width: '100%', paddingLeft: 32, paddingRight: 32, paddingBottom: 18, marginTop: 12 }}>
                {currentProps?.children}
            </View>}
            <TouchableHighlight style={styles.bottomCss} onPress={currentProps.handleOperation}>
                <Text style={styles.bottomTextCss}>升级</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 430,
        // minHeight: 502,
        backgroundColor: 'white',
        // justifyContent: 'center',
        alignItems: 'center',
        // paddingLeft: 24,
        // paddingRight: 24,
        paddingBottom: 24,
        borderRadius: 24
    },
    pngCss: {
        width: '100%',
        height: 194,
        marginTop: -38
    },
    titleCss: {
        marginTop: 12,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#111111',
        lineHeight: 29
    },
    contentCss: {
        marginTop: 8,
        width: '100%',
        // backgroundColor: 'pink',
        paddingTop: 8,
        paddingLeft: 32,
        paddingRight: 32,
        paddingBottom: 18
    },
    contentTextCss: {
        display: 'flex',
        fontSize: 18,
        color: '#666666',
        lineHeight: 32,
    },
    bottomCss: {
        marginTop: 'auto',
        marginBottom: 8,
        width: 382,
        height: 68,
        backgroundColor: '#1693A4',
        borderRadius: 44,
        opacity: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomTextCss: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        lineHeight: 29
    }
});