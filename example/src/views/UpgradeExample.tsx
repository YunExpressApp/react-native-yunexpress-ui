/*
 * @Author: 张贵 zhanggui@yunexpress.cn
 * @Date: 2022-10-28 9:30:00
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2023-06-02 11:22:35
 * @FilePath: \react-native-yunexpress-ui\example\src\views\UpgradeExample.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { StyleSheet, View } from "react-native"
import { UpgradeComponents } from 'react-native-yunexpress-ui'

export default function UpgradeExample() {

    return (
        <View style={styles.container}>
            <UpgradeComponents title={"云途V1.0.2震撼来袭"} content={[
                '1.更新项A文字文字文字文字',
                '2.更新项B文字文字文字文字文字文字',
                '3.更新项C文字文字文字文字文字',
                '4.更新项D文字文字',
                '5.更新项E(溢出区域的字段滚动隐藏）'
            ]} handleOperation={() => { console.log('升级成功') }}>
                {/* <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 18, fontWeight: '300', color: '#999999' }}>标题：</Text>
                    <Text style={{ fontSize: 18, fontWeight: '300', color: '#999999' }}>信息内容11</Text>
                </View> */}
            </UpgradeComponents>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24
    }
});