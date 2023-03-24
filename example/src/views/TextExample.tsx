/*
 * @Author: 袁康乐 yuankangle@yunexpress.cn
 * @Date: 2022-09-20 16:55:00
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2023-03-24 16:58:58
 * @FilePath: \react-native-yunexpress-ui\example\src\views\TextExample.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react'
import { ToastAndroid, View } from 'react-native'
import { Text, Button, Theme } from 'react-native-yunexpress-ui'

export default function TextExample() {

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
            <Text locale={locale} style={{ color: 'black', fontSize: 18 }} isFixed>固定大小文本，只有样式中有fontSize</Text>
            <Text locale={locale} fontSize={14} style={{ color: 'blue' }} isFixed>固定大小文本，只有属性中有fontSize</Text>
            <Text locale={locale} fontSize={300} style={{ color: 'green', fontSize: 10 }} isFixed>固定大小文本,两个fontSize优先取样式中fontSize</Text>
            <Text locale={locale} style={{ color: '#99696a' }} >没有设置大小文本，fontSize默认设置为20*w</Text>
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