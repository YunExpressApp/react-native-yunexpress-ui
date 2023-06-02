/*
 * @Author: 张贵 zhanggui@yunexpress.cn
 * @Date: 2022-11-21 9:30:00
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2023-06-02 11:20:54
 * @FilePath: \ops_pdae:\git\react-native-yunexpress-ui\example\src\views\SearchBoxExample.tsx
 */
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native"
import { w, SearchBoxComponent } from 'react-native-yunexpress-ui'

export default function UpgradeExample() {
    const [_value, setValue] = useState('')
    const resourceList = [
        { key: 'DE-DHL-R', value: 'AMS' },
        { key: 'DE-HRL-t', value: 'CDG' },
        { key: 'TOP1', value: 'BAB' },
        { key: 'AOLIGEI', value: 'ASDF' }
    ]
    const [searchResultList, setSearchResultList] = useState([])

    return (
        <View style={styles.container}>
            <View style={{ paddingTop: 25, height: '50%', backgroundColor: 'white' }}>
                <SearchBoxComponent
                    searchList={resourceList}
                    title={"线路标要求"}
                    placeholder={"输入线路标后或回车获取数据"}
                    colorType={'bright'}
                    onChangeText={(e: any) => { setValue(e) }}
                    onSubmitEditing={(e: any) => {
                        setSearchResultList(e)
                        console.log('搜索回车', e)
                        setValue(e)
                    }} />
                {/* {!!value && */}
                <View style={{
                    marginTop: 20 * w,
                    borderTopWidth: 2 * w,
                    borderTopColor: '#EEEEEE',
                }}>
                    {searchResultList.map((item: any) => {
                        return <TouchableOpacity onPress={() => { Alert.alert('DE-DHL-R') }} style={{
                            flexDirection: 'row',
                            width: '100%',
                            paddingLeft: 32 * w,
                            paddingRight: 32 * w,
                            paddingTop: 16 * w,
                            paddingBottom: 16 * w,
                            borderBottomWidth: 2 * w,
                            borderBottomColor: '#EEEEEE',
                            justifyContent: 'space-between'
                        }}>
                            <Text style={{ color: '#303030', fontSize: 22 }}>{item?.key || ''}</Text>
                            <Text style={{ color: '#303030', fontSize: 22 }}>{item?.value || ''}</Text>
                        </TouchableOpacity>
                    })}
                </View>
                {/* } */}
            </View>
            <View style={{ paddingTop: 30 * w, height: '50%' }}>
                <SearchBoxComponent title={"有标题示例"} placeholder={"搜索"} colorType={'bright'} onChangeText={(e: any) => { console.log('实时输入反馈', e) }} onSubmitEditing={(e: any) => { console.log('搜索回车', e) }} />
                <View style={{ marginTop: 30 * w }} />
                <SearchBoxComponent placeholder={"无标题展示"} colorType={'tink'} onChangeText={(e: any) => { console.log('实时输入反馈', e) }} onSubmitEditing={(e: any) => { console.log('搜索回车', e) }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 50
        // backgroundColor: 'white',
        // justifyContent: 'center',
        // alignItems: 'center',
        // padding: 24
    }
});