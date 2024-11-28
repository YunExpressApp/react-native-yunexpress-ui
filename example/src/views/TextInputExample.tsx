/*
 * @Author: 袁康乐 yuankangle@yunexpress.cn
 * @Date: 2022-09-20 16:55:00
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2024-11-28 17:48:56
 * @FilePath: \react-native-yunexpress-ui\example\src\views\TextExample.tsx
 */
import React, { useEffect, useRef, useState } from 'react'
import { TextInput as RnTextInput, ToastAndroid, View } from 'react-native'
import { Text, Button, Theme, TextInput } from 'react-native-yunexpress-ui'

export default function TextInputExample() {

    const [locale, setLocale] = useState(Theme.locale || 'zh')
    const textInputRef = useRef<RnTextInput>()

    useEffect(() => {
        ToastAndroid.show('当前语言' + locale, ToastAndroid.LONG);
    }, [locale])

    return (
        <View style={{ backgroundColor: '#fff' }}>
            <Text style={{ color: 'red' }} fontSize={20} locale={locale}>
                locale={locale} 文本测试
                <Text locale={locale} style={{ color: 'gray' }} fontSize={30}>Second Test</Text>
            </Text>
            <TextInput locale={locale} style={{ color: 'black', fontSize: 18 }} isFixed defaultValue={'固定大小文本，只有样式中有fontSize'} />
            <TextInput locale={locale} fontSize={14} style={{ color: 'blue' }} isFixed defaultValue={'固定大小文本，只有属性中有fontSize'}/>
            <TextInput ref={textInputRef} locale={locale} style={{ color: '#99696a' }} defaultValue={'固定大小文本,两个fontSize优先取样式中fontSize'}/>
            <Button
                buttonRightText={'切换语言'}
                onRightPress={() => {
                    if ((locale || Theme.locale) == 'zh') {
                        setLocale('en')
                        textInputRef.current?.blur()
                    } else {
                        setLocale('zh')
                        textInputRef.current?.focus()
                    }
                }}
            />
        </View>
    )
}