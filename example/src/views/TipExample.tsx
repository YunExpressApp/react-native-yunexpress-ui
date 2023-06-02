/*
 * @Author: 张贵 zhanggui@yunexpress.cn
 * @Date: 2022-10-19 14:02:00
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2023-06-02 11:22:05
 * @FilePath: \react-native-yunexpress-ui\example\src\views\TipExample.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { StyleSheet, Text, View, ScrollView } from "react-native"
import { w, TipComponents } from 'react-native-yunexpress-ui'

export default function TipExample() {
    // const [index, setIndex] = useState<number>();
    // const [value, setValue] = useState<string | undefined>('');

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ marginTop: 0 * w }}>
                    <TipComponents placement={'static'} content={<Text>Top1</Text>} tipMessage={"区域长度480px ，超出字段换行, 最小160px"} tipType={'error'} iconResource={require("../imgs/white_close.png")} />
                    <View style={{ height: 1 * w }}></View>
                    <TipComponents placement={'static'} content={<Text>Top1</Text>} tipMessage={"区域长度480px ，超出字段换行, 最小160px"} tipType={'error'} isHideTitleIcon={true} />
                    <View style={{ height: 1 * w }}></View>
                    <TipComponents placement={'static'} content={<Text>Top1</Text>} tipMessage={"区域长度480px ，超出字段换行, 最小160px"} tipType={'error'} rightIconHandleOperation={() => { console.log('触发了右侧按钮') }} />
                    <View style={{ height: 1 * w }}></View>
                    <TipComponents placement={'static'} content={<Text>Top1</Text>} tipMessage={"区域长度480px ，超出字段换行, 最小160px"} tipType={'warn'} iconResource={require("../imgs/yellow_close.png")} />
                    <View style={{ height: 1 * w }}></View>
                    <TipComponents placement={'static'} content={<Text>Top1</Text>} tipMessage={"区域长度480px ，超出字段换行, 最小160px"} tipType={'warn'} isHideTitleIcon={true} />
                    <View style={{ height: 1 * w }}></View>
                    <TipComponents placement={'static'} content={<Text>Top1</Text>} tipMessage={"区域长度480px ，超出字段换行, 最小160px"} tipType={'warn'} />
                    <View style={{ height: 1 * w }}></View>
                </View>
                <View style={{ ...styles.box, marginTop: 30 * w, marginBottom: 30 * w }}>
                    <View style={{ ...styles.publicItem, ...styles.topItem }}>
                        <TipComponents placement={'topLeft'} content={<Text>TL</Text>} tipMessage={"tip弹框"} />
                        <TipComponents placement={'top'} content={<Text>Top</Text>} tipMessage={"tip弹框 ，超出字段最小160px"} />
                        <TipComponents placement={'topRight'} content={<Text>TR</Text>} tipMessage={"区域最宽tip弹框"} />
                    </View>
                    <View style={{ ...styles.publicItem, ...styles.bottomItem }}>
                        <TipComponents placement={'bottomLeft'} content={<Text>BL</Text>} tipMessage={"宽tip弹框px"} iconResource={require("../imgs/white_go.png")} isHideTitleIcon={true} />
                        <TipComponents placement={'bottom'} content={<Text>Botton</Text>} tipMessage={"宽tip弹框px"} iconResource={require("../imgs/white_go.png")} isHideTitleIcon={true} />
                        <TipComponents placement={'bottomRight'} content={<Text>BR</Text>} tipMessage={"tip弹框"} iconResource={require("../imgs/white_go.png")} />
                    </View>
                    <View style={{ ...styles.publicItem, ...styles.leftItem }}>
                        <TipComponents placement={'left'} content={<Text>Left</Text>} tipMessage={"我是tip内容"} tipType={'warn'} />
                    </View>
                    <View style={{ ...styles.publicItem, ...styles.rightItem }}>
                        <TipComponents placement={'right'} content={<Text>Right</Text>} tipMessage={"我是tip内容"} tipType={'error'} rightIconHandleOperation={() => { console.log('触发了右侧按钮') }} />
                    </View>
                </View>

                <View style={{ ...styles.box, minHeight: 150 * w }}>
                    <View style={{ ...styles.publicItem, ...styles.topItem }}>
                        <TipComponents placement={'topLeft'} content={<Text>TL</Text>} tipMessage={"区域固定宽度358px组件"} isShowButton={true} />
                        <TipComponents placement={'topRight'} content={<Text>TR</Text>} tipMessage={"我是内容我是 ，区域固定宽度358px，单位记得换算一下带操作按钮的提示框"} isShowButton={true} tipType={'warn'} />
                    </View>
                    <View style={{ ...styles.publicItem, ...styles.bottomItem }}>
                        <TipComponents placement={'bottomLeft'} content={<Text>BL</Text>} tipMessage={"区域固定宽 度358px，单位记得换算一下带操作按钮的提示框, 最小160px ，"} isShowButton={true} tipType={'error'} handleOperation={() => { console.log('正在操作') }} />
                        <TipComponents placement={'bottomRight'} content={<Text>BR</Text>} tipMessage={"我是tip内容区域长度480px ，超出字段换行"} isShowButton={true} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: 'scroll',
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 200 * w
    },
    textCss: {
        // marginTop: 150,
        // marginLeft: 50
    },
    box: {
        flex: 1,
        // marginTop: 150,
        padding: 30 * w,
        position: 'relative',
        width: 350 * w,
        height: 150 * w,
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
        width: 280 * w,
        height: 40 * w,
        top: 0
    },
    bottomItem: {
        width: 280 * w,
        height: 40 * w,
        bottom: 0
    },
    leftItem: {
        width: 40 * w,
        // height: 200,
        left: 60 * w
    },
    rightItem: {
        width: 40 * w,
        // height: 200,
        right: 60 * w
    }
});