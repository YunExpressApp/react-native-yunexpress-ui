/*
 * @Author: 康乐 yuankangle@yunexpress.cn
 * @Date: 2023-02-17 14:41:06
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2023-03-01 17:36:44
 * @FilePath: \ops_pdae:\git\react-native-yunexpress-ui\example\src\views\SearchListBoxExample.tsx
 */

import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Color, SearchListBox, SearchListBoxRef, Text, w } from 'react-native-yunexpress-ui'

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
                    text: `直接触发 不用ref关闭--${selectedItem?.value || ''}`,
                    itemProps: {
                        style: { alignItems: 'center', padding: 15 * w },
                        rightHidden: false,
                        titleStyle: { fontSize: 18, color: '#333' }
                    }
                }}
                searchBoxProps={{
                    placeholder: "输入线路标后或回车获取数据",
                    colorType: 'bright',
                }}
                searchKey={'value'}
                renderItemClickCloseAndCallback={({ item }) => {
                    setSelectedItem(item)
                }}
                renderItem={({ item }) =>
                    <View style={{ height: 60 * w, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 * w, borderBottomColor: '#eee' }} >
                        <Text>{`${item.value}`}</Text>
                    </View>
                }
            />
            <SearchListBox
                ref={ref => SearchListBoxRef = ref}
                data={data}
                boxProps={{
                    text: `搜索设置-直接触发--${selectedItem?.value || ''}`,
                    itemProps: {
                        style: { alignItems: 'center', backgroundColor: Color.blue, padding: 10 * w, marginTop: 20 * w },
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
                SearchListBoxRef?.open(true)
            }}>REF 调用触发 不显示搜索: {selectedItem?.value || ''}</Text>
            <Text style={{ marginTop: 20 * w }} onPress={() => {
                setData([
                    { key: 1, value: '大磊大大林' },
                    { key: 2, value: '会脸十月份' },
                    { key: 3, value: '需要夺需要' },
                    { key: 4, value: '林十二月' },
                    { key: 2, value: '会脸十月份2' },
                    { key: 3, value: '需要夺需要2' },
                    { key: 4, value: '林十二月2' },
                    { key: 2, value: '会脸十月份3' },
                    { key: 3, value: '需要夺需要3' },
                    { key: 4, value: '林十二月3' },
                    { key: 2, value: '会脸十月份4' },
                    { key: 3, value: '需要夺需要4' },
                    { key: 1, value: '大磊大大林4' },
                    { key: 4, value: '林十二月4' }
                ])
                SearchListBoxRef?.open()
            }}>REF调用触发 显示搜索（给搜索列表赋值后弹出）</Text>
        </View>
    )
}