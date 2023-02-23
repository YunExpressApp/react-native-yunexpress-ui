import React, { useState } from 'react'
import { ScrollView, View } from "react-native";
import { BoxItem, Text, w } from 'react-native-yunexpress-ui'

export default function BoxItemExample() {
    return (
        <View>
            <BoxItem
                style={{ alignItems: 'center', height: 50, backgroundColor: '#969653' }}
                boxStyle={{ paddingTop: 200 * w }}
                text='测试'
                itemProps={{
                    titleParentSytle: { flex: 0 },
                    titleStyle: { color: '#fff', fontSize: 20 }
                }}
            >
                <View>
                    <Text>你好</Text>
                </View>
            </BoxItem>
        </View>
    )
}