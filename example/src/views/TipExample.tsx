/*
 * @Author: 张贵 yuankangle@yunexpress.cn
 * @Date: 2022-10-19 14:02:00
 * @LastEditors: 张贵 yuankangle@yunexpress.cn
 * @LastEditTime: 2022-10-25 16:35:15
 * @FilePath: \react-native-yunexpress-ui\example\src\views\TipExample.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import TipComponents from './TipComponent'

export default function ActionSheetExample() {
    const [index, setIndex] = useState<number>();
    const [value, setValue] = useState<string | undefined>('');

    return (
        <View style={styles.container}>
            <View style={{ ...styles.box, marginTop: 60 }}>
                <View style={{ ...styles.publicItem, ...styles.topItem }}>
                    <TipComponents placement={'top'} domSlot={<Text>Top</Text>} tipMessage={"带操作按钮的提示框 ，区域固定宽 度358px，单位记得"} />
                </View>
                <View style={{ ...styles.publicItem, ...styles.bottomItem }}>
                    <TipComponents placement={'bottom'} domSlot={<Text>Botton</Text>} tipMessage={"带操作按钮的提示框 ，区域固定宽 度358px，单位记得"} iconResource={require("../imgs/white_go.png")} />
                </View>
                <View style={{ ...styles.publicItem, ...styles.leftItem }}>
                    <TipComponents placement={'left'} domSlot={<Text>Left</Text>} tipMessage={"我是tip内容"} tipType={'warn'} />
                </View>
                <View style={{ ...styles.publicItem, ...styles.rightItem }}>
                    <TipComponents placement={'right'} domSlot={<Text>Right</Text>} tipMessage={"我是tip内容"} tipType={'error'} />
                </View>
            </View>

            <View style={{ ...styles.box, marginTop: 100, marginBottom: 100 }}>
                <View style={{ ...styles.publicItem, ...styles.topItem }}>
                    <TipComponents placement={'top'} domSlot={<Text>Top1</Text>} tipMessage={"我是tip组件"} isShowButton={true} />
                    <TipComponents placement={'top'} domSlot={<Text>Top2</Text>} tipMessage={"我是内容我是"} isShowButton={true} tipType={'warn'} />
                </View>
                <View style={{ ...styles.publicItem, ...styles.bottomItem }}>
                    <TipComponents placement={'bottom'} domSlot={<Text>Botton1</Text>} tipMessage={"带操作按钮的提示框 ，区域固定宽 度358px，单位记得换算一下"} isShowButton={true} tipType={'error'} handleOperation={() => { console.log('正在操作') }} />
                    {/* <TipComponents placement={'bottom'} domSlot={<Text>Botton2</Text>} tipMessage={"我是tip内容"} /> */}
                </View>
            </View>

            <View style={styles.box}>
                <View style={{ ...styles.publicItem, ...styles.topItem }}>
                    <TipComponents placement={'top'} domSlot={<Text>Top1</Text>} tipMessage={"使用tip类型"} bgColor={'#1693A4'} tipType={'warn'} isHideTitleIcon={true} />
                    <TipComponents placement={'top'} domSlot={<Text>Top2</Text>} tipMessage={"自我定制我"} bgColor={'#1693A4'} />
                </View>
                <View style={{ ...styles.publicItem, ...styles.bottomItem }}>
                    <TipComponents placement={'bottom'} domSlot={<Text>Botton1</Text>} tipMessage={"我是tip内容"} tipType={'error'} />
                    <TipComponents placement={'bottom'} domSlot={<Text>Botton2</Text>} tipMessage={"icon传参"} iconResource={require("../imgs/yellow_go.png")} bgColor={'#61D9EA'} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // justifyContent: 'center',
        alignItems: 'center',
        padding: 24
    },
    textCss: {
        // marginTop: 150,
        // marginLeft: 50
    },
    box: {
        // marginTop: 150,
        padding: 30,
        position: 'relative',
        width: 400,
        height: 150,
        // borderColor: 'pink',
        // borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    publicItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    topItem: {
        width: 200,
        height: 40,
        top: 0
    },
    bottomItem: {
        width: 200,
        height: 40,
        bottom: 0
    },
    leftItem: {
        width: 40,
        height: 200,
        left: 100
    },
    rightItem: {
        width: 40,
        height: 200,
        right: 100
    }
});