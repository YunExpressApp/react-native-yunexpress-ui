/*
 * @Author: 张贵 zhanggui@yunexpress.cn
 * @Date: 2022-11-21 9:30:00
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2023-02-20 13:41:28
 * @FilePath: \react-native-yunexpress-ui\example\src\views\SearchBoxComponent.tsx
 */
import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, TextInput, StyleProp, ViewStyle } from "react-native"
import { w } from '../../util/CStyle';
import i18n from '../../i18n'

export interface SearchBoxComponentProps {
    style?: StyleProp<ViewStyle>,
    searchList?: Array<Object>,
    title?: string,
    placeholder?: string,
    colorType?: string,  // bright深色 tint浅色
    onChangeText?: (e: any) => any
    onSubmitEditing?: (e: any) => any
    onCancelText?: () => any
    hideCancel?: boolean
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
        <View style={[styles.container, props.style]}>
            {currentProps?.title && <Text style={styles.title}>{currentProps?.title}</Text>}
            <View style={styles.main}>
                <TextInput
                    ref={inputRef}
                    style={[styles.rightTxt, {
                        flex: isGetFocus && !props.hideCancel ? 0.85 : 1,
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
                {isGetFocus && !props.hideCancel && <Text style={[styles.cancleText, { flex: 0.15 }]} onPress={() => {
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