/*
 * @Author: 张贵 zhanggui@yunexpress.cn
 * @Date: 2022-11-01 9:30:00
 * @LastEditors: 张贵 zhanggui@yunexpress.cn
 * @LastEditTime: 2022-11-08 10:20:00
 * @FilePath: \react-native-yunexpress-ui\example\src\views\GenaralCardComponent.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View, Dimensions } from "react-native"

interface GenaralCardComponentsProps {
    title: String,
    isPopCard?: boolean,
    content?: Array<String>,
    children?: Document,
    leftButtom?: {
        text?: String,
        color?: String
    },
    rightButtom?: {
        text?: String,
        color?: String
    },
    isShowButton?: boolean,
    handleLeftOperation?: () => any,
    handleRightOperation?: () => any
}


export default function GenaralCardComponent(props: GenaralCardComponentsProps) {

    const defualtFunction = () => { }

    // 默认值
    const currentProps = {
        ...props,
        title: props?.title || '弹框标题',
        leftButtom: {
            text: props?.leftButtom?.text || '取消',
            color: props?.leftButtom?.color || '#999999'
        },
        rightButtom: {
            text: props?.rightButtom?.text || '确定',
            color: props?.rightButtom?.color || '#1592A3'
        },
        handleLeftOperation: props?.handleLeftOperation || defualtFunction,
        handleRightOperation: props?.handleRightOperation || defualtFunction
    }

    return (
        <View style={currentProps?.isPopCard ? styles.main : null}>
            <View style={{ ...styles.container, paddingBottom: currentProps?.isShowButton ? 0 : 24 }}>
                <View style={styles.titleCss}>
                    <Text style={styles.titleTextCss}>{currentProps?.title}</Text>
                </View>
                {currentProps?.content?.length !== 0 && <View style={styles.contentCss}>
                    {
                        currentProps?.content?.map((item) => {
                            return <Text style={styles.contentTextCss}> {item} </Text>
                        })
                    }
                </View>}

                {currentProps?.children && <View style={{ paddingLeft: 24, paddingRight: 24, marginTop: 12 }}>
                    {currentProps?.children}
                </View>}

                {currentProps?.isShowButton && <View style={styles.bottomCss}>
                    <TouchableHighlight
                        style={{ ...styles.bottomItemCss, borderBottomLeftRadius: 8, borderRightWidth: 1, borderRightColor: '#E5E5E5' }}
                        onPress={currentProps.handleLeftOperation}>
                        <Text style={{ ...styles.bottomTextCss, color: currentProps?.leftButtom?.color }}>{currentProps?.leftButtom?.text}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{ ...styles.bottomItemCss, borderBottomRightRadius: 8 }}
                        onPress={currentProps.handleRightOperation}>
                        <Text style={{ ...styles.bottomTextCss, color: currentProps?.rightButtom?.color }}>{currentProps?.rightButtom?.text}</Text>
                    </TouchableHighlight>
                </View>}

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        zIndex: 1000,
        // flex: 1,
        // backgroundColor: 'pink',
        backgroundColor: 'rgba(51,51,51,0.5)',
        height: Dimensions.get('window').height - 56,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    container: {
        width: 421,
        minHeight: 100,
        backgroundColor: 'white',
        // justifyContent: 'center',
        // alignItems: 'center',
        // paddingLeft: 24,
        // paddingRight: 24,
        paddingTop: 16,
        // paddingBottom: 16,
        borderRadius: 6,
        borderColor: '#D2D2D2',
        borderWidth: 1
    },
    titleCss: {
        // marginTop: 12,
        paddingLeft: 24,
        paddingRight: 24,
    },
    titleTextCss: {
        fontSize: 22,
        color: '#111111',
        lineHeight: 29,
    },
    contentCss: {
        marginTop: 10,
        paddingLeft: 24,
        paddingRight: 24
    },
    contentTextCss: {
        marginTop: 6,
        fontSize: 18,
        color: '#999999',
        lineHeight: 21,
        fontWeight: '400'
    },
    bottomCss: {
        marginTop: 20,
        width: '100%',
        height: 68,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'rgb(251,251,251)',
        borderWidth: 1,
        borderColor: '#E5E5E5'
    },
    bottomItemCss: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomTextCss: {
        fontSize: 22,
        // color: '#999999'
    }
});