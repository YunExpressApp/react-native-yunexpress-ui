/*
 * @Author: 张贵 zhanggui@yunexpress.cn
 * @Date: 2022-11-01 9:30:00
 * @LastEditors: 张贵 zhanggui@yunexpress.cn
 * @LastEditTime: 2022-11-08 10:20:00
 * @FilePath: \react-native-yunexpress-ui\example\src\views\GenaralCardExample.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native"
import { w, GenaralCardComponent } from 'react-native-yunexpress-ui'

export default function GenaralCardExample() {
    const [isShowCard, setIsShowCard] = useState(false)
    const [componentValue, setComponentValue]: any = useState({})
    // const [isShowCard3, setIsShowCard2] = useState(false)
    // const [isShowCard2, setIsShowCard3] = useState(false)
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>

                    <Text style={{ marginRight: 20 * w }} onPress={() => {
                        setIsShowCard(true);
                        setComponentValue({
                            isPopCard: true,
                            title: 'PL2021302003212332321',
                            content: [
                                '标题:信息内容',
                                '标题:信息内容',
                                '标题:信息内容',
                                '标题:信息内容',
                                '标题:信息内容'
                            ],
                            isShowButton: true,
                            leftButtom: { text: '普通操作', color: '#999999' },
                            rightButtom: { text: '主要操作', color: '#1592A3' },
                            handleLeftOperation: () => { setIsShowCard(false) },
                            handleRightOperation: () => { console.log('点击右边的按钮') }
                        })
                    }}>预览式卡片(弹框能力)</Text>


                    <Text onPress={() => {
                        setIsShowCard(true);
                        setComponentValue({
                            isPopCard: true,
                            title: 'PL2021302003212332321',
                            isShowButton: true,
                            leftButtom: { text: '普通操作', color: '#999999' },
                            rightButtom: { text: '主要操作', color: '#999999' },
                            handleLeftOperation: () => { setIsShowCard(false) },
                            handleRightOperation: () => { console.log('点击右边的按钮') },
                            children: <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 18 * w, fontWeight: '300', color: '#999999' }}>标题：</Text>
                                <Text style={{ fontSize: 18 * w, fontWeight: '300', color: '#999999' }}>信息内容11</Text>
                            </View>
                        })
                    }}>预览式卡片2(弹框能力)</Text>

                </View>


                {isShowCard && <GenaralCardComponent
                    title={componentValue?.title || ''}
                    content={componentValue?.content || []}
                    isShowButton={componentValue?.isShowButton || false}
                    leftButtom={componentValue?.leftButtom || null}
                    rightButtom={componentValue?.rightButtom || null}
                    handleLeftOperation={componentValue?.handleLeftOperation || null}
                    handleRightOperation={componentValue?.handleRightOperation || null}
                    isPopCard={componentValue?.isPopCard || false}
                >
                    {componentValue?.children || null}
                </GenaralCardComponent>}

                <View style={{ marginTop: 20 * w }}>
                    <GenaralCardComponent
                        title={'PL2021302003212332321'}
                        isShowButton={true}
                        leftButtom={{ text: '普通操作', color: '#999999' }}
                        rightButtom={{ text: '主要操作', color: '#1592A3' }}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 18 * w, fontWeight: '300', color: '#999999', marginRight: 'auto' }}>标题：</Text>
                            <Text style={{ fontSize: 18 * w, fontWeight: '300', color: '#999999' }}>信息内容</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 18 * w, fontWeight: '300', color: '#999999', marginRight: 'auto' }}>标题：</Text>
                            <Text style={{ fontSize: 18 * w, fontWeight: '300', color: '#999999' }}>信息内容</Text>
                        </View>
                    </GenaralCardComponent>
                </View>

                <View style={{ marginTop: 6 * w }}>
                    <GenaralCardComponent
                        title={'PL2021302003212332321'}
                        isShowButton={true}
                        leftButtom={{ text: '普通操作', color: '#999999' }}
                        rightButtom={{ text: '普通操作', color: '#999999' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 18 * w, fontWeight: '300', color: '#999999', marginRight: 'auto' }}>标题：</Text>
                            <Text style={{ fontSize: 18 * w, fontWeight: '300', color: '#999999' }}>信息内容</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 18 * w, fontWeight: '300', color: '#999999', marginRight: 'auto' }}>标题：</Text>
                            <Text style={{ fontSize: 18 * w, fontWeight: '300', color: '#999999' }}>信息内容</Text>
                        </View>
                    </GenaralCardComponent>
                </View>

                <View style={{ marginTop: 6 * w }}>
                    <GenaralCardComponent title={'PL2021302003212332321'}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 18 * w, fontWeight: '300', color: '#999999', marginRight: 'auto' }}>标题：</Text>
                            <Text style={{ fontSize: 18 * w, fontWeight: '300', color: '#999999' }}>信息内容</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 18 * w, fontWeight: '300', color: '#999999', marginRight: 'auto' }}>标题：</Text>
                            <Text style={{ fontSize: 18 * w, fontWeight: '300', color: '#999999' }}>信息内容</Text>
                        </View>
                    </GenaralCardComponent>
                </View>

                <View style={{ marginTop: 6 * w }}>
                    <GenaralCardComponent title={'标题文字'}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 18 * w, fontWeight: '300', color: '#999999', marginRight: 'auto' }}>备注信息1</Text>
                        </View>
                    </GenaralCardComponent>
                </View>

            </View >
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'white',
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: 24 * w
    }
});