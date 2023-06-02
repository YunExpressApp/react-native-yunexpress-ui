/*
 * @Author: 康乐 yuankangle@yunexpress.cn
 * @Date: 2023-02-17 13:42:00
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2023-06-02 11:10:34
 * @FilePath: \ops_pdae:\git\react-native-yunexpress-ui\example\src\views\BoxItemExample.tsx
 * @Description: 
 * 
 * Copyright (c) 2023 by 康乐 yuankangle@yunexpress.cn, All Rights Reserved. 
 */
import React from 'react'
import { Image, View } from "react-native";
import { BoxItem, Button, Text, w } from 'react-native-yunexpress-ui'

export default function BoxItemExample() {
    return (
        <View>
            <BoxItem
                style={{ alignItems: 'center', height: 80 * w, backgroundColor: '#969653' }}
                boxStyle={{ paddingTop: 200 * w }}
                text='测试'
                itemProps={{
                    leftTopStyle: { flex: 1 },
                    titleParentStyle: { flex: 0 },
                    titleStyle: { color: '#fff', backgroundColor: '#36562200', fontSize: 20, width: '100%', textAlign: 'center' }
                }}
                boxLeftText={'确定'}
            >
                <View style={{ marginLeft: 30 * w, flex: 1 }}>
                    <Text>你好.............</Text>
                    <Image source={require('../imgs/functionIcon/transfer.png')} />
                </View>
                <Button
                    buttonRightText='提交'
                    onRightPress={() => {

                    }}
                />
            </BoxItem>

            <BoxItem
                style={{ height: 90 * w, backgroundColor: '#fff', marginTop: 20 * w }}
                boxStyle={{ paddingTop: 0 * w, justifyContent: 'flex-end' }}
                boxContainerStyle={{ minHeight: '50%', maxHeight: '85%', flex: 0 }}
                text='测试2'
                itemProps={{
                    titleStyle: { color: '#5533dd', fontSize: 26 * w, height: 88 * w },
                    rightHidden: false
                }}
                boxLeftText={'确定'}
            >
                <View style={{ marginLeft: 30 * w, flex: 1 }}>
                    <Text>你好1.............</Text>
                    <Text>你好2.............</Text>
                    <Text>你好3.............</Text>
                    <Image source={require('../imgs/functionIcon/transfer.png')} />
                </View>
            </BoxItem>
        </View>
    )
}