/*
 * @Author: 张贵 zhanggui@yunexpress.cn
 * @Date: 2022-11-25 15:30:00
 * @LastEditors: 张贵 zhanggui@yunexpress.cn
 * @LastEditTime: 2022-11-30 16:30:00
 * @FilePath: \react-native-yunexpress-ui\example\src\views\UpgradeComponents.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from "react-native"
import { w } from 'react-native-yunexpress-ui'

interface StepComponentProps {
    title: string,
    type?: string,
    content?: Array<{
        isFinish?: Boolean,
        title: string,
        subTitle?: string,
        message: Array<React.ReactElement> | React.ReactElement | string,
    }>
}


export default function UpgradeComponents(props: StepComponentProps) {

    const defualtFunction = () => { }

    // 默认值
    const currentProps = {
        ...props,
        title: props?.title || '',
        type: props?.type || 'default',
        content: props?.content || []
    }

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={styles.linkList}>
                    {currentProps?.content?.map((item) => {
                        return <View style={styles.siteItem}>
                            <View style={styles.siteItemTop}>
                                {!!item?.isFinish && currentProps?.type === 'icon' && <Image style={{
                                    width: 22 * w,
                                    height: 22 * w,
                                    marginLeft: -11 * w,
                                }} source={require("./img/sign.png")} />}
                                {(currentProps?.type === 'default' || !item?.isFinish) && <Text style={[styles.sign, item?.isFinish ? styles.checkedSign : styles.defaultSign]} />}
                                <Text style={styles.siteItemTitle}>{item?.title}</Text>
                                {!!item?.title && <Text style={styles.siteItemSubTitle}>{item?.subTitle}</Text>}
                            </View>
                            <View style={styles.siteItemBottom}>
                                <Text style={styles.siteItemMessageString}>{item?.message}</Text>
                            </View>
                        </View>
                    })}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        minWidth: 254 * w
    },
    main: {
        width: '100%'
    },
    linkList: {
        display: 'flex',
        flexDirection: 'column'
    },
    siteItem: {
        // paddingLeft: 12 * w,
        paddingRight: 12 * w,
        paddingBottom: 12 * w,
        borderLeftWidth: 1 * w,
        borderLeftColor: '#C4C4C4',
        minHeight: 80 * w,
        display: 'flex',
        flexDirection: 'column'
    },
    siteItemTop: {
        marginTop: -10 * w,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkedSign: {
        backgroundColor: '#303030',
    },
    defaultSign: {
        backgroundColor: '#C4C4C4',
    },
    sign: {
        marginLeft: -6 * w,
        // backgroundColor: '#303030',
        width: 12 * w,
        height: 12 * w,
        borderRadius: 12 * w
    },
    siteItemTitle: {
        marginLeft: 6 * w,
        fontSize: 20 * w,
        color: '#303030',
        fontWeight: 'bold'
    },
    siteItemSubTitle: {
        marginLeft: 8 * w,
        fontSize: 18 * w,
        color: '#303030'
    },
    siteItemBottom: {
        paddingLeft: 12 * w,
        marginTop: 8 * w
    },
    siteItemMessageString: {
        fontSize: 18 * w,
        color: '#999999',
    },
});