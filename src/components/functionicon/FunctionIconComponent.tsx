/*
 * @Author: 张贵 zhanggui@yunexpress.cn
 * @Date: 2022-11-7 9:30:00
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2023-02-17 18:11:11
 * @FilePath: \react-native-yunexpress-ui\example\src\views\FunctionIconComponent.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native"
import { w } from '../../util/CStyle'


interface FunctionIconComponentProps {
    type: string
    content: Array<{ icon: string, text: string, handleOperation: Function }>
}


export default function FunctionIconComponent(props: FunctionIconComponentProps) {
    // Item节点
    const getItemDocument = (value: { icon: any, text: string, handleOperation: Function } = {
        icon: '',
        text: '',
        handleOperation: () => { }
    }) => {
        let result = null
        const type = props?.type || ''
        switch (type) {
            case 'moduleType':
                result = <TouchableOpacity style={styles.moduleItemCss} onPress={() => { value.handleOperation() }}>
                    <View style={styles.moduleItemPaddingCss}>
                        <Image style={styles.moduleItemIconCss} source={value.icon} />
                        <Text style={styles.moduleItemTextCss}>{value?.text || ''}</Text>
                    </View>
                </TouchableOpacity>
                break;
            case 'functionType':
                result = <TouchableOpacity style={styles.functionItemCss} onPress={() => { value.handleOperation() }}>
                    <View style={styles.functionItemPaddingCss}>
                        <Image style={styles.functionItemIconCss} source={value.icon} />
                        <Text style={styles.functionItemTextCss}>{value?.text || ''}</Text>
                    </View>
                </TouchableOpacity>
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
                result = { width: 432 * w, backgroundColor: '#FFFFFF', borderRadius: 14 * w, paddingTop: 18 * w, paddingBottom: 18 * w, paddingLeft: 16 * w, paddingRight: 16 * w }
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
        width: 96 * w,
        height: 96 * w,
    },
    functionItemPaddingCss: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    functionItemIconCss: {
        width: 36 * w,
        height: 36 * w,
    },
    functionItemTextCss: {
        marginTop: 8 * w,
        fontSize: 18 * w
    },

    fillItemCss: {
        marginBottom: 15 * w,
        // marginRight: 14 * w,
        width: 134 * w,
        height: 134 * w,
    },
    functionFillItemCss: {
        width: 96 * w,
        height: 96 * w,
    },
    moduleItemCss: {
        marginBottom: 15 * w,
        marginRight: 14 * w,
        width: 134 * w,
        height: 134 * w,
        borderRadius: 14 * w,
        backgroundColor: '#FFFFFF'
    },
    moduleItemPaddingCss: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    moduleItemIconCss: {
        width: 52 * w,
        height: 52 * w
    },
    moduleItemTextCss: {
        marginTop: 20 * w,
        fontSize: 19 * w,
        // lineHeight: 20
    }
});