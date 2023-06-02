/*
 * @Author: 张贵 zhanggui@yunexpress.cn
 * @Date: 2022-11-25 15:30:00
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2023-06-02 11:24:50
 * @FilePath: \react-native-yunexpress-ui\example\src\views\StepExample.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { StyleSheet, TouchableOpacity, View, Alert } from "react-native"
import { YTStatusBages, StepComponent } from 'react-native-yunexpress-ui';

export default function StepExample() {

    const routeList = [
        {
            isFinish: true,
            title: '包裹到达深圳宝安国际机场',
            subTitle: 'P3',
            message: '2021/07/18  14:29'
        }, {
            title: '包裹到达深圳宝安国际机场',
            subTitle: 'P3',
            message: '2021/07/18  14:29'
        }, {
            title: '三级标题',
            subTitle: '',
            message: '备注信息'
        },
        {
            title: '一级标题',
            subTitle: '二级标题',
            message: <TouchableOpacity onPress={() => { Alert.alert('标题组件可点击') }}><YTStatusBages>标题组件</YTStatusBages></TouchableOpacity>
        }
    ]

    return (
        <View style={styles.container}>
            <StepComponent type={'icon'} content={routeList} />
            <StepComponent content={routeList} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'white',
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: 24
    }
});