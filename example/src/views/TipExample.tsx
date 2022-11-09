/*
 * @Author: 张贵 zhanggui@yunexpress.cn
 * @Date: 2022-10-19 14:02:00
 * @LastEditors: 张贵 zhanggui@yunexpress.cn
 * @LastEditTime: 2022-10-25 16:35:15
 * @FilePath: \react-native-yunexpress-ui\example\src\views\TipExample.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import TipComponents from './TipComponent'

export default function TipExample() {
    const [index, setIndex] = useState<number>();
    const [value, setValue] = useState<string | undefined>('');

    return (
        <View style={styles.container}>
            <View style={{ ...styles.box, marginTop: 80 }}>
                <View style={{ ...styles.publicItem, ...styles.topItem }}>
                    <TipComponents placement={'topLeft'} content={<Text>TL</Text>} tipMessage={"tip弹框"} />
                    <TipComponents placement={'top'} content={<Text>Top</Text>} tipMessage={"tip弹框"} />
                    <TipComponents placement={'topRight'} content={<Text>TR</Text>} tipMessage={"区域最宽tip弹框"} />
                </View>
                <View style={{ ...styles.publicItem, ...styles.bottomItem }}>
                    <TipComponents placement={'bottomLeft'} content={<Text>BL</Text>} tipMessage={"宽tip弹框px"} iconResource={require("../imgs/white_go.png")} isHideTitleIcon={true} />
                    <TipComponents placement={'bottom'} content={<Text>Botton</Text>} tipMessage={"宽tip弹框px宽tip弹框px宽tip弹框px宽tip弹框px宽tip弹框px宽tip弹框px"} iconResource={require("../imgs/white_go.png")} isHideTitleIcon={true} />
                    <TipComponents placement={'bottomRight'} content={<Text>BR</Text>} tipMessage={"tip弹框"} iconResource={require("../imgs/white_go.png")} />
                </View>
                <View style={{ ...styles.publicItem, ...styles.leftItem }}>
                    <TipComponents placement={'left'} content={<Text>Left</Text>} tipMessage={"我是tip内容"} tipType={'warn'} />
                </View>
                <View style={{ ...styles.publicItem, ...styles.rightItem }}>
                    <TipComponents placement={'right'} content={<Text>Right</Text>} tipMessage={"我是tip内容"} tipType={'error'} rightIconHandleOperation={() => { console.log('触发了右侧按钮') }} />
                </View>
            </View>

            <View style={{ ...styles.box, marginTop: 80, marginBottom: 110 }}>
                <View style={{ ...styles.publicItem, ...styles.topItem }}>
                    <TipComponents placement={'topLeft'} content={<Text>TL</Text>} tipMessage={"区域固定宽度358px组件"} isShowButton={true} />
                    <TipComponents placement={'topRight'} content={<Text>TR</Text>} tipMessage={"我是内容我是 ，区域固定宽度358px，单位记得换算一下带操作按钮的提示框"} isShowButton={true} tipType={'warn'} />
                </View>
                <View style={{ ...styles.publicItem, ...styles.bottomItem }}>
                    <TipComponents placement={'bottomLeft'} content={<Text>BL</Text>} tipMessage={"区域固定宽 度358px，单位记得换算一下带操作按钮的提示框, 最小160px ，"} isShowButton={true} tipType={'error'} handleOperation={() => { console.log('正在操作') }} />
                    <TipComponents placement={'bottomRight'} content={<Text>BR</Text>} tipMessage={"我是tip内容区域长度480px ，超出字段换行"} isShowButton={true} />
                </View>
            </View>

            <View style={{ minHeight: 280 }}>
                <TipComponents placement={'static'} content={<Text>Top1</Text>} tipMessage={"区域长度480px ，超出字段换行, 最小160px"} tipType={'error'} iconResource={require("../imgs/white_close.png")} />
                <View style={{ height: 2 }}></View>
                <TipComponents placement={'static'} content={<Text>Top1</Text>} tipMessage={"区域长度480px ，超出字段换行, 最小160px"} tipType={'error'} isHideTitleIcon={true} />
                <View style={{ height: 2 }}></View>
                <TipComponents placement={'static'} content={<Text>Top1</Text>} tipMessage={"区域长度480px ，超出字段换行, 最小160px"} tipType={'error'} rightIconHandleOperation={() => { console.log('触发了右侧按钮') }} />
                <View style={{ height: 2 }}></View>
                <TipComponents placement={'static'} content={<Text>Top1</Text>} tipMessage={"区域长度480px ，超出字段换行, 最小160px"} tipType={'warn'} iconResource={require("../imgs/yellow_close.png")} />
                <View style={{ height: 2 }}></View>
                <TipComponents placement={'static'} content={<Text>Top1</Text>} tipMessage={"区域长度480px ，超出字段换行, 最小160px"} tipType={'warn'} isHideTitleIcon={true} />
                <View style={{ height: 2 }}></View>
                <TipComponents placement={'static'} content={<Text>Top1</Text>} tipMessage={"区域长度480px ，超出字段换行, 最小160px"} tipType={'warn'} />
                <View style={{ height: 2 }}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: 'scroll',
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textCss: {
        // marginTop: 150,
        // marginLeft: 50
    },
    box: {
        flex: 1,
        // marginTop: 150,
        padding: 30,
        position: 'relative',
        width: 400,
        height: 150,
        // backgroundColor: 'pink',
        // borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    publicItem: {
        // backgroundColor: 'pink',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    topItem: {
        width: 320,
        height: 40,
        top: 0
    },
    bottomItem: {
        width: 420,
        height: 40,
        bottom: 0
    },
    leftItem: {
        width: 40,
        // height: 200,
        left: 60
    },
    rightItem: {
        width: 40,
        // height: 200,
        right: 60
    }
});