/*
 * @Author: 张贵 zhanggui@yunexpress.cn
 * @Date: 2022-11-01 9:30:00
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2023-02-17 18:11:47
 * @FilePath: \react-native-yunexpress-ui\example\src\views\GenaralCardComponent.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native"
import { w } from '../../util/CStyle'
import i18n from '../../i18n'

interface GenaralCardComponentsProps {
    title: string,
    isPopCard?: boolean,
    content?: Array<string>,
    children?: Document,
    leftButtom?: {
        text?: string,
        color?: string
    },
    rightButtom?: {
        text?: string,
        color?: string
    },
    isShowButton?: boolean,
    handleLeftOperation?: () => any,
    handleRightOperation?: () => any
}


export default function GenaralCardComponent(props: GenaralCardComponentsProps) {

    const defualtFunction = () => { }

    // 默认值
    const currentProps = {
        ...props,
        title: props?.title || i18n.t("FooterEmptyDataText"),
        leftButtom: {
            text: props?.leftButtom?.text || i18n.t("Cancel"),
            color: props?.leftButtom?.color || '#999999'
        },
        rightButtom: {
            text: props?.rightButtom?.text || i18n.t("Confirm"),
            color: props?.rightButtom?.color || '#1592A3'
        },
        handleLeftOperation: props?.handleLeftOperation || defualtFunction,
        handleRightOperation: props?.handleRightOperation || defualtFunction
    }

    return (
        <View style={currentProps?.isPopCard ? styles.main : null}>
            <View style={{ ...styles.container, paddingBottom: currentProps?.isShowButton ? 0 : 24 * w }}>
                <View style={styles.titleCss}>
                    <Text style={styles.titleTextCss}>{currentProps?.title}</Text>
                </View>
                {currentProps?.content?.length !== 0 && <View style={styles.contentCss}>
                    {
                        currentProps?.content?.map((item) => {
                            return <Text style={styles.contentTextCss}> {item} </Text>
                        })
                    }
                </View>}

                {currentProps?.children && <View style={{ paddingLeft: 24 * w, paddingRight: 24 * w, marginTop: 12 * w }}>
                    {currentProps?.children}
                </View>}

                {currentProps?.isShowButton && <View style={styles.bottomCss}>
                    <TouchableOpacity
                        style={{ ...styles.bottomItemCss, borderBottomLeftRadius: 8 * w, borderRightWidth: 1 * w, borderRightColor: '#E5E5E5' }}
                        onPress={currentProps.handleLeftOperation}>
                        <Text style={{ ...styles.bottomTextCss, color: currentProps?.leftButtom?.color }}>{currentProps?.leftButtom?.text}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ ...styles.bottomItemCss, borderBottomRightRadius: 8 * w }}
                        onPress={currentProps.handleRightOperation}>
                        <Text style={{ ...styles.bottomTextCss, color: currentProps?.rightButtom?.color }}>{currentProps?.rightButtom?.text}</Text>
                    </TouchableOpacity>
                </View>}

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        zIndex: 1000,
        // flex: 1,
        // backgroundColor: 'pink',
        backgroundColor: 'rgba(51,51,51,0.5)',
        height: Dimensions.get('window').height - 56,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    container: {
        width: 421 * w,
        minHeight: 100 * w,
        backgroundColor: 'white',
        // justifyContent: 'center',
        // alignItems: 'center',
        // paddingLeft: 24,
        // paddingRight: 24,
        paddingTop: 16 * w,
        // paddingBottom: 16,
        borderRadius: 6 * w,
        borderColor: '#D2D2D2',
        borderWidth: 1 * w
    },
    titleCss: {
        // marginTop: 12,
        paddingLeft: 24 * w,
        paddingRight: 24 * w
    },
    titleTextCss: {
        fontSize: 22 * w,
        color: '#111111',
        lineHeight: 29 * w
    },
    contentCss: {
        marginTop: 10 * w,
        paddingLeft: 24 * w,
        paddingRight: 24 * w
    },
    contentTextCss: {
        marginTop: 6 * w,
        fontSize: 18 * w,
        color: '#999999',
        lineHeight: 21 * w,
        fontWeight: '400'
    },
    bottomCss: {
        marginTop: 20 * w,
        width: '100%',
        height: 68 * w,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'rgb(251,251,251)',
        borderWidth: 1,
        borderColor: '#E5E5E5'
    },
    bottomItemCss: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomTextCss: {
        fontSize: 22 * w,
        // color: '#999999'
    }
});