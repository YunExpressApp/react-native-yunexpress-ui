/*
 * @Author: 张贵 zhanggui@yunexpress.cn
 * @Date: 2022-11-7 9:30:00
 * @LastEditors: 张贵 zhanggui@yunexpress.cn
 * @LastEditTime: 2022-11-08 05:30:00
 * @FilePath: \react-native-yunexpress-ui\example\src\views\FunctionIconComponent.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableHighlight, View, Image } from "react-native"

interface FunctionIconComponentProps {
    type: string
    content: Array<{ icon: string, text: string, handleOperation: Function }>
}


export default function FunctionIconComponent(props: FunctionIconComponentProps) {
    // Item节点
    const getItemDocument = (value: { icon: string, text: string, handleOperation: Function } = {
        icon: '',
        text: '',
        handleOperation: () => { }
    }) => {
        let result = null
        const type = props?.type || ''
        switch (type) {
            case 'moduleType':
                result = <TouchableHighlight style={styles.moduleItemCss} onPress={() => { value.handleOperation() }}>
                    <View style={styles.moduleItemPaddingCss}>
                        <Image style={styles.moduleItemIconCss} source={value.icon} />
                        <Text style={styles.moduleItemTextCss}>{value?.text || ''}</Text>
                    </View>
                </TouchableHighlight>
                break;
            case 'functionType':
                result = <TouchableHighlight style={styles.functionItemCss} onPress={() => { value.handleOperation() }}>
                    <View style={styles.functionItemPaddingCss}>
                        <Image style={styles.functionItemIconCss} source={value.icon} />
                        <Text style={styles.functionItemTextCss}>{value?.text || ''}</Text>
                    </View>
                </TouchableHighlight>
                break;
        }

        return result

    }

    const fillItem = () => {
        const maxLengthComputed: any = {
            'moduleType': (props?.content?.length % 3 === 0) ? 0 : 3 - props?.content?.length % 3,
            'functionType': (props?.content?.length % 4 === 0) ? 0 : 4 - props?.content?.length % 4
        }
        const maxLength = maxLengthComputed?.[props?.type]
        const containerArray = []
        for (let index = 0; index < maxLength; index++) {
            containerArray.push(index + 1)
        }
        const fillItemCssComputed: any = {
            'moduleType': styles.fillItemCss,
            'functionType': styles.functionFillItemCss,
        }
        return containerArray.map(() => {
            return <View style={fillItemCssComputed?.[props?.type]} />
        })
    }

    // 通过类型得到容器样式
    const computedIconTypeGetCss = () => {
        let result = {}
        switch (props?.type) {
            case 'moduleType':
                result = { width: '100%' }
                break;
            case 'functionType':
                result = { width: 432, backgroundColor: '#FFFFFF', borderRadius: 14, paddingTop: 18, paddingBottom: 18, paddingLeft: 16, paddingRight: 16 }
                break;
            default:
                result = { width: '100%' }
                break;
        }
        return result
    }

    return (
        <View style={{ ...styles.container }}>
            {props?.content?.length !== 0 &&
                <View style={{ ...styles.main, ...computedIconTypeGetCss() }}>
                    {props?.content?.map((item) => {
                        return getItemDocument(item)
                    })}
                    {fillItem()}
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // minHeight: 283,
        // backgroundColor: 'pink',
        // justifyContent: 'center',
        alignItems: 'center',
        // padding: 24
    },
    main: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    functionItemCss: {
        width: 96,
        height: 96,
    },
    functionItemPaddingCss: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    functionItemIconCss: {
        width: 36,
        height: 36,
    },
    functionItemTextCss: {
        marginTop: 8,
        fontSize: 18
    },

    fillItemCss: {
        marginBottom: 15,
        marginRight: 14,
        width: 134,
        height: 134,
    },
    functionFillItemCss: {
        width: 96,
        height: 96,
    },
    moduleItemCss: {
        marginBottom: 15,
        marginRight: 14,
        width: 134,
        height: 134,
        borderRadius: 14,
        backgroundColor: '#FFFFFF'
    },
    moduleItemPaddingCss: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    moduleItemIconCss: {
        width: 52,
        height: 52
    },
    moduleItemTextCss: {
        marginTop: 20,
        fontSize: 19,
        // lineHeight: 20
    }
});