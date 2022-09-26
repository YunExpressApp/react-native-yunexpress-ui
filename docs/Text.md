---
title: Text文本
---

## Text文本

## Screenshots
<img src="/assets/text.gif" width="80%" height="80%">

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| style | TextStyle |  | 整体样式
| fontSize | number |  | 文本大小
| locale | string |  | 语言 如:zh en

## Demo
```js
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
                <Text locale={locale} fontSize={30} style={{ color: 'green', fontSize: 14 }} isFixed>固定大小文本</Text>
            </Text>
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
```

## Contributing
create by yuankangle