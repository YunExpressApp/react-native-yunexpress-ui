/*
 * @Author: 袁康乐 yuankangle@yunexpress.cn
 * @Date: 2022-09-20 16:55:00
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2024-11-28 14:10:28
 * @FilePath: \react-native-yunexpress-ui\example\src\views\TextExample.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react'
import { ToastAndroid, View } from 'react-native'
import { Text, Button, Theme, TextInput } from 'react-native-yunexpress-ui'

export default function TextInputExample() {

    const [locale, setLocale] = useState(Theme.locale || 'zh')

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
            <TextInput locale={locale} style={{ color: '#99696a' }} defaultValue={'固定大小文本,两个fontSize优先取样式中fontSize'}/>
            <Button
                buttonRightText={'切换语言'}
                onRightPress={() => {
                    if ((locale || Theme.locale) == 'zh') {
                        setLocale('en')
                    } else {
                        setLocale('zh')
                    }
                }}
            />
        </View>
    )
}