/*
 * @Author: 张贵 zhanggui@yunexpress.cn
 * @Date: 2022-10-28 9:30:00
 * @LastEditors: 张贵 zhanggui@yunexpress.cn
 * @LastEditTime: 2022-11-08 9:30:00
 * @FilePath: \react-native-yunexpress-ui\example\src\views\UpgradeComponents.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import i18n from '../../i18n'
import { w } from 'react-native-yunexpress-ui'

interface UpgradeComponentsProps {
    title: string,
    content?: Array<String>,
    children?: Array<React.ReactElement> | React.ReactElement,
    handleOperation: () => any
}


export default function UpgradeComponents(props: UpgradeComponentsProps) {

    const defualtFunction = () => { }

    // 默认值
    const currentProps = {
        ...props,
        title: props?.title || i18n.t("FooterEmptyDataText"),
        content: props?.content || [],
        handleOperation: props?.handleOperation || defualtFunction
    }

    return (
        <View style={styles.container}>
            <Image style={styles.pngCss} source={require("./img/upgrade.png")} />
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
            {!!currentProps?.children && <View style={{ width: '100%', paddingLeft: 32 * w, paddingRight: 32 * w, paddingBottom: 18 * w, marginTop: 12 * w }}>
                {currentProps?.children}
            </View>}
            <TouchableOpacity style={styles.bottomCss} onPress={currentProps.handleOperation}>
                <Text style={styles.bottomTextCss}>{i18n.t("Upgrade")}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 430 * w,
        // minHeight: 502,
        backgroundColor: 'white',
        // justifyContent: 'center',
        alignItems: 'center',
        // paddingLeft: 24,
        // paddingRight: 24,
        paddingBottom: 24 * w,
        borderRadius: 24 * w
    },
    pngCss: {
        width: '100%',
        height: 194 * w,
        marginTop: -38 * w
    },
    titleCss: {
        marginTop: 12 * w,
        fontSize: 25 * w,
        fontWeight: 'bold',
        color: '#111111',
        lineHeight: 29 * w
    },
    contentCss: {
        marginTop: 8 * w,
        width: '100%',
        // backgroundColor: 'pink',
        paddingTop: 8 * w,
        paddingLeft: 32 * w,
        paddingRight: 32 * w,
        paddingBottom: 18 * w
    },
    contentTextCss: {
        display: 'flex',
        fontSize: 18 * w,
        color: '#666666',
        lineHeight: 32 * w,
    },
    bottomCss: {
        marginTop: 'auto',
        marginBottom: 8 * w,
        width: 382 * w,
        height: 68 * w,
        backgroundColor: '#1693A4',
        borderRadius: 44 * w,
        opacity: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomTextCss: {
        fontSize: 24 * w,
        fontWeight: 'bold',
        color: '#FFFFFF',
        lineHeight: 29 * w
    }
});