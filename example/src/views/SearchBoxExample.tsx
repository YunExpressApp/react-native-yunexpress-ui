/*
 * @Author: 张贵 zhanggui@yunexpress.cn
 * @Date: 2022-11-21 9:30:00
 * @LastEditors: 张贵 zhanggui@yunexpress.cn
 * @LastEditTime: 2022-11-24 9:30:00
 * @FilePath: \react-native-yunexpress-ui\example\src\views\UpgradeExample.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import SearchBoxComponent from './SearchBoxComponent'
import { w } from 'react-native-yunexpress-ui'

export default function UpgradeExample() {
    const [value, setValue] = useState('')

    return (
        <View style={styles.container}>
            <View style={{ paddingTop: 25, height: '50%', backgroundColor: 'white' }}>
                <SearchBoxComponent title={"线路标要求"} placeholder={"输入线路标后或回车获取数据"} colorType={'bright'}  onChangeText={(e: any) => { setValue(e) }} onSubmitEditing={(e: any) => {
                    console.log('搜索回车', e)
                    setValue(e)
                }} />
                {!!value &&
                    <View style={{
                        marginTop: 20 * w,
                        borderTopWidth: 2 * w,
                        borderTopColor: '#EEEEEE',
                    }}>
                        <View style={{
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
                            <Text style={{ color: '#303030', fontSize: 22 }}>DE-DHL-R</Text>
                            <Text style={{ color: '#303030', fontSize: 22 }}>AMS</Text>
                        </View>
                        <View style={{
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
                            <Text style={{ color: '#303030', fontSize: 22 }}>DE-HRL-T</Text>
                            <Text style={{ color: '#303030', fontSize: 22 }}>CDG</Text>
                        </View>
                    </View>
                }
            </View>
            <View style={{ paddingTop: 30 * w, height: '50%' }}>
                <SearchBoxComponent title={"有标题示例"} placeholder={"搜索"} colorType={'bright'} onChangeText={(e: any) => { console.log('实时输入反馈', e) }} onSubmitEditing={(e: any) => { console.log('搜索回车', e) }} />
                <View style={{ marginTop: 30 * w}}/>
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