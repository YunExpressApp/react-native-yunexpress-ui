/*
 * @Author: 张贵 zhanggui@yunexpress.cn
 * @Date: 2022-11-23 10:30:00
 * @LastEditors: 张贵 zhanggui@yunexpress.cn
 * @LastEditTime: 2022-11-26 16:30:00
 * @FilePath: \react-native-yunexpress-ui\example\src\views\ScanPanelExample.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Alert } from "react-native"
// import ScanPanelCompoent from '../../../src/components/scan/ScanPanelCompoent'
import { w, Button, YTSegment, YTCell, ScanPanelCompoent } from 'react-native-yunexpress-ui'

export default function ScanPanelExample() {
    const leftNumber = 4
    const rightNumber = 1

    const [index, setIndex] = useState(0);
    const [tabIndex, setTabIndex] = useState(0);
    const screenList = [{ key: 'All', value: '173' }, { key: 'Fault', value: '02' }, { key: 'Failure', value: '03' }, { key: 'Heft', value: '203.908' }, { key: 'Nice', value: '99.8' }]
    const [screenIndex, setScreenIndex] = useState('All')
    const [scanType, setScanType] = useState('1')
    const [data, setData] = useState([1, 2])

    useEffect(() => {
        setTimeout(() => {
            // 接口请求初始化方法模拟。。。
            setScanType('2') // 请求成功，填充与子组件无关的状态
        }, 3000);
    }, [''])

    return (
        <View style={styles.container}>
            <ScanPanelCompoent>
                <View data-position="top">
                    <YTSegment.Radius leftText={`新增(${leftNumber})`} rightText={`删除(${rightNumber})`} index={index} onChange={(index: number) => {
                        setIndex(index)
                        setData([1, 2, 3, 4])
                    }} />
                    <View style={{ paddingLeft: 16 * w, paddingRight: 16 * w, marginTop: 15 * w, paddingBottom: 18 * w }}>
                        <Text style={{ marginBottom: 14 * w, color: '#999999', fontSize: 18 * w }}>标题内容</Text>
                        <YTSegment.Sub data={["标签1", "标签2"]} colors={["#1592A3", "#EF7E2C"]} index={tabIndex} onChange={(index: number) => setTabIndex(index)} />
                    </View>
                    <View style={{ paddingLeft: 16 * w, paddingRight: 16 * w, marginTop: 15 * w, paddingBottom: 18 * w }}>
                        <ScrollView horizontal={true}>
                            <View style={{ flexDirection: 'row' }}>
                                {screenList.map((item) => {
                                    return <TouchableOpacity
                                        onPress={() => {
                                            setScreenIndex(item?.key)
                                        }}>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                borderRadius: 30 * w,
                                                marginRight: 8 * w,
                                                paddingTop: 6 * w,
                                                paddingBottom: 6 * w,
                                                paddingLeft: 10 * w,
                                                paddingRight: 10 * w,
                                                backgroundColor: screenIndex === item.key ? '#1592A3' : '#F2F2F2'
                                            }}>
                                            <Text style={{ fontSize: 18 * w, color: screenIndex === item.key ? 'white' : 'black' }}>{item?.key}: </Text>
                                            <Text style={{ fontSize: 18 * w, color: screenIndex === item.key ? 'white' : '#1592A3' }}>{item?.value}</Text>
                                        </View>
                                    </TouchableOpacity>
                                })}
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <View data-position="content">
                    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <YTCell.ScanCode isDel={true} data={{ code: "删除数据", status: 1, message: "删除数据" }} onClick={()=>{  Alert.alert("删除成功"); }}/>
                        <YTCell.ScanCode data={{ code: "123456", status: 2, message: "提示信息", value: "code值信息" }}  onClick={()=>{  Alert.alert("code值信息"); }}/>
                        <YTCell.ScanCode data={{ code: "123456", status: 2, message: "提示信息", value: "code值信息" }} valueStyle={{ color: 'red' }}  onClick={()=>{  Alert.alert("code值信息"); }}/>
                        <YTCell.ScanCode data={{ code: "123456", status: 2, message: "提示信息" }} onClick={()=>{  Alert.alert("code值信息"); }}/>
                        <YTCell.ScanCode isDel={true} data={{ code: "123456", status: 1, message: "提示信息" }} onClick={()=>{  Alert.alert("提示信息"); }}/>
                        <YTCell.ScanCode isDel={true} data={{ code: "123456", status: 1, message: "提示信息" }} onClick={()=>{  Alert.alert("提示信息"); }}/>
                        {/* <Text style={{ fontSize: 18 * w, color: '#CCCCCC' }}>请扫描</Text> */}
                        <YTCell.ScanCode isFirst={true} data={{ code: "123456CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC", status: 1, message: "提示信息" }} onClick={()=>{  Alert.alert("提示信息"); }}/>
                        <YTCell.ScanCode data={{ code: "123456GGGG", status: 1, message: "提示信息" }} showDelete onDelete={() => {
                            Alert.alert("删除成功");
                        }} />
                        <YTCell.ScanCode data={{ code: "123456", status: 2, message: "提示信息", value: "code值信息" }} onClick={()=>{  Alert.alert("提示信息"); }}/>
                        <YTCell.ScanCode isDel={true} data={{ code: "123456", status: 1, message: "提示信息" }} onClick={()=>{  Alert.alert("提示信息"); }}/>
                    </View>
                </View>
                <View data-position="foot">
                    <Button
                        isBorder={false}
                        buttonLeftText={'次要操作'}
                        onLeftPress={() => {
                        }}
                        buttonRightText={'主要操作'}
                        onRightPress={() => {
                        }}
                    />
                </View>
            </ScanPanelCompoent>
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