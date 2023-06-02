/*
 * @Author: 张贵 zhanggui@yunexpress.cn
 * @Date: 2022-11-7 9:30:00
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2023-06-02 11:14:52
 * @FilePath: \react-native-yunexpress-ui\example\src\views\FunctionIconExample.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import React from 'react'
import { StyleSheet, View } from "react-native"
import { w, FunctionIconComponent } from 'react-native-yunexpress-ui'

export default function FunctionIconExample() {
    const moduleArray = [
        {
            icon: require('../imgs/iconExample/buy_off.png'), text: '揽收', handleOperation: () => { console.log('揽收') }
        },
        {
            icon: require('../imgs/iconExample/car_examine.png'), text: '车辆检查', handleOperation: () => { console.log('车辆检查') }
        },
        {
            icon: require('../imgs/iconExample/bag_weight.png'), text: '袋号核重', handleOperation: () => { console.log('袋号核重') }
        },
        {
            icon: require('../imgs/iconExample/bag_levite.png'), text: '袋号入仓', handleOperation: () => { console.log('袋号入仓') }
        },
        {
            icon: require('../imgs/iconExample/binding_car.png'), text: '出车绑定', handleOperation: () => { console.log('出车绑定') }
        },
        {
            icon: require('../imgs/iconExample/user_search.png'), text: '客户查询', handleOperation: () => { console.log('客户查询') }
        },
        // {
        //     icon: require('../imgs/iconExample/aog_scan.png'), text: '到货扫描', handleOperation: () => { console.log('到货扫描') }
        // },
        // {
        //     icon: require('../imgs/iconExample/car_arrive.png'), text: '车辆到达', handleOperation: () => { console.log('车辆到达') }
        // },
        // {
        //     icon: require('../imgs/iconExample/cargo_levite.png'), text: '货物核重', handleOperation: () => { console.log('货物核重') }
        // },
        // {
        //     icon: require('../imgs/iconExample/truck_deliver.png'), text: '装车发货', handleOperation: () => { console.log('装车发货') }
        // },
        // {
        //     icon: require('../imgs/iconExample/completed_classes.png'), text: '已完成班次', handleOperation: () => { console.log('已完成班次') }
        // },
        // {
        //     icon: require('../imgs/iconExample/unfinished_classes.png'), text: '待完成班次', handleOperation: () => { console.log('待完成班次') }
        // },
    ]

    const functionArray = [
        {
            icon: require('../imgs/functionIcon/transfer.png'), text: '临时转派', handleOperation: () => { console.log('临时转派') }
        },
        {
            icon: require('../imgs/functionIcon/bus_error.png'), text: '车辆故障', handleOperation: () => { console.log('车辆故障') }
        },
        {
            icon: require('../imgs/functionIcon/map.png'), text: '高德地图', handleOperation: () => { console.log('高德地图') }
        },
        {
            icon: require('../imgs/functionIcon/call.png'), text: '拨打电话', handleOperation: () => { console.log('拨打电话') }
        },
        {
            icon: require('../imgs/functionIcon/sell_out.png'), text: '无货', handleOperation: () => { console.log('无货') }
        },
        {
            icon: require('../imgs/functionIcon/user_cancel.png'), text: '客户取消', handleOperation: () => { console.log('客户取消') }
        },
        {
            icon: require('../imgs/functionIcon/operation_name.png'), text: '操作名称', handleOperation: () => { console.log('操作名称') }
        },
        {
            icon: require('../imgs/functionIcon/change_date.png'), text: '客户改期', handleOperation: () => { console.log('客户改期') }
        },
    ]

    return (
        <View style={styles.container}>
            <FunctionIconComponent type={'moduleType'} content={moduleArray} />
            <View style={{ height: 30 * w }}></View>
            <FunctionIconComponent type={'functionType'} content={functionArray} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20 * w,
        flex: 1,
        flexDirection: 'column',
        // backgroundColor: 'white',
        // justifyContent: 'center',
        // alignItems: 'center'
    }
});