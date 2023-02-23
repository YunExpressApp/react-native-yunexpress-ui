/*
 * @Author: 康乐 yuankangle@yunexpress.cn
 * @Date: 2023-02-17 14:41:06
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2023-02-20 14:44:52
 * @FilePath: \react-native-yunexpress-ui\example\src\views\SearchListBoxExample.tsx
 */

import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Color, myAlert, SearchListBox, SearchListBoxRef, Text, w } from 'react-native-yunexpress-ui'

export default function name(params: any) {
    let SearchListBoxRef: SearchListBoxRef | null = null
    const dataDefault = [
        { key: 1, value: 'hhhhadd' },
        { key: 3, value: 'hhhhb' },
        { key: 4, value: 'cdddb' },
        { key: 2, value: '磊在在城在abc' }
    ]
    const [data, setData] = useState<Array<{ key: number, value: string }>>(dataDefault)
    const [selectedItem, setSelectedItem] = useState<{ key: number, value: string }>()
    return (
        <View>
            <SearchListBox
                ref={ref => SearchListBoxRef = ref}
                data={data}
                boxProps={{
                    text: `搜索设置-直接触发--${selectedItem?.value || ''}`,
                    itemProps: {
                        style: { alignItems: 'center', backgroundColor: Color.blue, padding: 10 * w },
                        titleParentSytle: { flex: 0 },
                        titleStyle: { fontSize: 20, color: '#fff' }
                    }
                }}
                searchBoxProps={{
                    placeholder: "输入线路标后或回车获取数据",
                    colorType: 'bright',
                }}
                searchKey={'value'}
                renderItem={({ item }) =>
                    <TouchableOpacity
                        style={{ height: 60 * w, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 * w, borderBottomColor: '#eee' }}
                        onPress={() => {
                            // myAlert(item)
                            setSelectedItem(item)
                            SearchListBoxRef?.close()
                        }}>
                        <Text>{`${item.value}`}</Text>
                    </TouchableOpacity>
                }
            />
            <Text style={{ marginTop: 20 * w }} onPress={() => {
                SearchListBoxRef?.open()
            }}>REF 调用触发: {selectedItem?.value || ''}</Text>
            <Text style={{ marginTop: 20 * w }} onPress={() => {
                setData([
                    { key: 1, value: '大磊大大林' },
                    { key: 2, value: '会脸十月份' },
                    { key: 3, value: '需要夺需要' },
                    { key: 4, value: '林十二月' }
                ])
                SearchListBoxRef?.open()
            }}>给搜索列表赋值后弹出</Text>
        </View>
    )
}