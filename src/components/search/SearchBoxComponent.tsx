/*
 * @Author: 张贵 zhanggui@yunexpress.cn
 * @Date: 2022-11-21 9:30:00
 * @LastEditors: 1418220302@qq.com 1418220302@qq.com
 * @LastEditTime: 2022-12-28 16:40:42
 * @FilePath: \react-native-yunexpress-ui\example\src\views\SearchBoxComponent.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, TextInput } from "react-native"
import i18n from '../../i18n'
import { w } from 'react-native-yunexpress-ui'

interface SearchBoxComponentProps {
    searchList?: Array<Object>,
    title?: string,
    placeholder?: string,
    colorType?: string,  // bright深色 tint浅色
    onChangeText?: (e: any) => any
    onSubmitEditing?: (e: any) => any
    onCancelText?: () => any
}


export default function SearchBoxComponent(props: SearchBoxComponentProps) {
    const inputRef: any = useRef(null);
    const [value, setValue] = useState('')
    const [isGetFocus, setIsGetFocus] = useState(false)
    const defualtFunction = () => { }

    // 默认值
    const currentProps = {
        ...props,
        searchList: props?.searchList || [],
        onChangeText: props?.onChangeText || defualtFunction,
        onSubmitEditing: props?.onSubmitEditing || defualtFunction,
        onCancelText: props?.onCancelText || defualtFunction
    }

    const searchKeywordGetValue = (val: string) => {
        const result: object[] = []
        const resourceList = currentProps?.searchList
        resourceList.forEach((item) => {
            if (Object.values(item).join('')?.indexOf(val) !== -1) {
                result.push(item)
            }
        })
        return result
    }

    return (
        <View style={styles.container}>
            {currentProps?.title && <Text style={styles.title}>{currentProps?.title}</Text>}
            <View style={styles.main}>
                <TextInput
                    ref={inputRef}
                    style={[styles.rightTxt, {
                        width: isGetFocus ? 360 * w : 432 * w,
                        backgroundColor: currentProps?.colorType === 'bright' ? '#EBEBEB' : '#FFFFFF'
                    }]}
                    clearButtonMode={'always'}
                    numberOfLines={1}
                    placeholder={currentProps?.placeholder || i18n.t("Search")}
                    onFocus={() => {
                        setIsGetFocus(true)
                        inputRef.current.focus()
                    }}
                    onChangeText={(val: string) => {
                        setValue(val)
                        currentProps?.onChangeText(val)
                    }}
                    // 键盘点击输入或者确定的回调
                    onSubmitEditing={() => {
                        if (!!currentProps?.searchList?.length) {
                            currentProps?.onSubmitEditing(searchKeywordGetValue(value))
                        } else {
                            currentProps?.onSubmitEditing(value)
                        }
                    }}
                />
                {isGetFocus && <Text style={styles.cancleText} onPress={() => {
                    setIsGetFocus(false)
                    inputRef.current.clear()
                    inputRef.current.blur()
                    currentProps?.onCancelText()
                }}>{i18n.t("Cancel")}</Text>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingLeft: 24 * w,
        paddingRight: 24 * w,
    },
    main: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
        // justifyContent: 'center'
    },
    rightTxt: {
        // width: '100%',
        height: 66 * w,
        // textAlign: 'right',
        paddingLeft: 34 * w,
        paddingRight: 34 * w,
        color: '#303030',
        fontSize: 20 * w,
        borderRadius: 40 * w,
        backgroundColor: '#FFFFFF'
    },
    title: {
        marginBottom: 20 * w,
        fontSize: 25 * w,
        color: '#111111',
        fontWeight: 'bold'
    },
    inputBox: {
        width: 432 * w,
        height: 66 * w
    },
    cancleText: {
        marginLeft: 20 * w,
        fontSize: 22 * w,
        color: '#1592A3'
    }
});