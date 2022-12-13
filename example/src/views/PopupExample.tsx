/*
 * @Author: 张贵 zhanggui@yunexpress.cn
 * @Date: 2022-10-28 9:30:00
 * @LastEditors: 张贵 zhanggui@yunexpress.cn
 * @LastEditTime: 2022-11-08 9:30:00
 * @FilePath: \react-native-yunexpress-ui\example\src\views\UpgradeExample.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useRef } from 'react'
import { Alert, ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import i18n from '../../../src/i18n'
import { ActionSheetItem, w, YTBtns, YTModal, ActionSheetRef, YTForm, Button, YTRemarkItem, SearchBoxComponent, FunctionIconComponent } from 'react-native-yunexpress-ui';

export default function BtnsExample() {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const [visible5, setVisible5] = useState(false);
    const functionArray = [
        {
            icon: require('../imgs/functionIcon/transfer.png'), text: '临时转派', handleOperation: () => {
                console.log('临时转派')
                Alert.alert("临时转派");
            }
        },
        {
            icon: require('../imgs/functionIcon/bus_error.png'), text: '车辆故障', handleOperation: () => {
                console.log('车辆故障')
                Alert.alert("车辆故障");
            }
        },
        {
            icon: require('../imgs/functionIcon/map.png'), text: '高德地图', handleOperation: () => {
                console.log('高德地图')
                Alert.alert("车辆故障");
            }
        },
        {
            icon: require('../imgs/functionIcon/call.png'), text: '拨打电话', handleOperation: () => {
                console.log('拨打电话')
                Alert.alert("车辆故障");
            }
        }
    ]


    const [acIndex, setAcindex] = useState(-1);
    const actionSheetRef: any = useRef<ActionSheetRef | null>();
    const [stepNumber, setSepNumber] = useState(1)
    const [value, setValue] = useState("");
    const searchResultList = [
        { key: 'DE-DHL-R', value: 'AMS' },
        { key: 'DE-HRL-t', value: 'CDG' }
    ]

    return (
        <View style={styles.container}>
            <YTBtns.Button title={"半屏组件1"} style={{ marginTop: 50 }} enable={true} onPress={() => {
                setVisible4(true);
            }} />

            <YTBtns.Button title={"C1-1弹出式工具栏"} style={{ marginTop: 50 }} enable={true} onPress={() => {
                setVisible(true);
            }} />
            <YTBtns.Button title={"C1-2弹出式选择器"} style={{ marginTop: 50 }} enable={true} onPress={() => {
                actionSheetRef.current?.open([
                    { "name": "菜单项一", value: "1" },
                    { "name": "菜单项二", value: "2" }], acIndex, (item: ActionSheetItem, index: number) => {
                        console.log(item + "---" + index)
                        setAcindex(index);
                    });
            }} />
            <YTBtns.Button title={"C1-4弹出式"} style={{ marginTop: 50 }} enable={true} onPress={() => {
                setVisible3(true);
            }} />

            {/* ----------------------------------分割线-------------------------------------- */}
            <YTModal.Popup visible={visible} title={'操作'} leftTitle={"保存"} onRightPress={() => { setVisible(false) }} onClose={() => {
                setVisible(false);
            }}>
                <View style={{ height: 160 }}>
                    <FunctionIconComponent type={'functionType'} content={functionArray} />
                </View>
            </YTModal.Popup>

            <YTModal.ActionSheet ref={r => actionSheetRef.current = r} />

            <YTModal.Popup visible={visible3} isShowHeader={true} leftTitle={"清空"} onLeftPress={() => { }} onRightPress={() => { setVisible3(false) }} onClose={() => {
                setVisible3(false);
            }}>
                <View style={{ height: 200, paddingTop: 50 }}>
                    <SearchBoxComponent colorType={'bright'} />
                </View>
            </YTModal.Popup>

            <YTModal.Popup
                visible={visible4}
                isShowHeader={true}
                leftTitle={stepNumber > 1 ? '上一步' : ''}
                onLeftPress={() => { setSepNumber(stepNumber > 1 ? stepNumber - 1 : 1) }}
                rightTitle={stepNumber === 3 ? '保存' : '取消'}
                onRightPress={() => {
                    // setSepNumber(stepNumber === 3 ? 3 : 1)
                    stepNumber === 3 && Alert.alert("保存成功")
                    setVisible4(false)
                }}
                onClose={() => {
                    setVisible4(false);
                }}>
                <View>
                    {stepNumber === 1 &&
                        <View style={{ height: 683 * w, paddingTop: 50 * w }}>
                            <SearchBoxComponent title={"线路标要求"} placeholder={"输入线路标后或回车获取数据"} colorType={'bright'} onChangeText={(e: any) => { setValue(e) }} onSubmitEditing={(e: any) => {
                                console.log('搜索回车', e)
                                setValue(e)
                            }} />
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
                            <Button
                                style={{ marginTop: 'auto' }}
                                buttonRightText={'根据需要加按钮'}
                                onRightPress={() => { setSepNumber(stepNumber + 1) }}
                            />
                        </View>
                    }

                    {stepNumber === 2 &&
                        <View style={{ height: 683 * w, paddingTop: 50 * w }}>
                            <Text style={{ paddingLeft: 32 * w, fontSize: 25 * w, fontWeight: 'bold' }}>根据情况加标题</Text>
                            <View style={{
                                marginTop: 16 * w,
                                height: 54 * w,
                                paddingLeft: 32 * w,
                                backgroundColor: '#F9F9F9',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: 20 * w,
                                borderTopColor: '#EEEEEE',
                                borderTopWidth: 1 * w,
                                borderBottomWidth: 1 * w,
                                borderBottomColor: '#EEEEEE'
                            }}>
                                <Text style={{
                                    fontSize: 20 * w,
                                    color: '#999999',
                                }}>小标题</Text>
                            </View>
                            <ScrollView>
                                <YTForm.Search placeholder='请输入搜索关键字' />
                                <YTForm.Input label='必选项' require value={value} onChangeText={(val: string) => {
                                    setValue(val);
                                }} />
                                <YTForm.Input label='选择项' maxLength={10} editable={false} value="禁止输入" />
                                <YTForm.Input label='输入项' />
                                <YTForm.InputItem label='选择项' editable={true} value={value} onClick={() => {
                                    Alert.alert("请选择");
                                }} />
                                <YTForm.InputItem label='选择项40' style={{ height: 32, marginTop: 10 }} editable={true} value={value} onClick={() => {
                                    Alert.alert("请选择");
                                }} />
                                <YTForm.Radio label='单选项' data={["选项1", "选项2", "选项3"]} index={0} onChange={(i: number) => {
                                    Alert.alert("请选择" + i);
                                }} />

                                <YTForm.PhotosView imgUrls={["", "", "", "", ""]} max={50} title="照片" style={{ paddingHorizontal: 32 * w }} />
                            </ScrollView>
                            <Button
                                // style={{ marginBottom: 16 * w }}
                                buttonRightText={'根据需要加按钮'}
                                onRightPress={() => { setSepNumber(stepNumber + 1) }}
                            />
                        </View>
                    }

                    {stepNumber === 3 &&
                        <View style={{ height: 683 * w }}>
                            <ScrollView style={styles.contentView} keyboardShouldPersistTaps="always">
                                <Text style={styles.rtip}>{i18n.t("Remarks")}</Text>
                                <View style={styles.line}></View>
                                {/* <ScrollView style={styles.scrollView}> */}
                                <View style={styles.inputView}>
                                    <TextInput
                                        placeholder={i18n.t("InputRemark")}
                                        multiline={true}
                                        style={styles.rinput}
                                        maxLength={255}
                                        onChangeText={text => setValue(text)}
                                        value={value}
                                        defaultValue={value}
                                    />
                                    <Text style={styles.tip}>{value.length + "/" + 255}</Text>
                                </View>
                                {/* </ScrollView> */}
                            </ScrollView>
                        </View>
                    }
                </View>
            </YTModal.Popup>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sub: {
        backgroundColor: 'white',
        padding: 20 * w,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    contentView: {
        height: 548 * w,
        maxHeight: 548 * w,
        backgroundColor: 'white',
        borderTopLeftRadius: 30 * w,
        borderTopRightRadius: 30 * w,
        marginTop: 10 * w
    },
    rtip: {
        marginLeft: 32 * w,
        marginTop: 19 * w,
        fontSize: 25 * w
    },
    line: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#EEEEEE',
        marginVertical: 16 * w
    },
    scrollView: {
        backgroundColor: '#F9F9F9'
    },
    inputView: {
        flex: 1,
    },
    rinput: {
        paddingHorizontal: 32 * w,
        paddingVertical: 16 * w,
        backgroundColor: 'white'
    },
    tip: {
        backgroundColor: 'white',
        color: '#999999',
        paddingHorizontal: 32 * w,
        paddingBottom: 20 * w,
        textAlign: 'right'
    }
});