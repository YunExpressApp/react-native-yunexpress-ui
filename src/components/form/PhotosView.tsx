/*
 * @Author: 1418220302@qq.com 1418220302@qq.com
 * @Date: 2022-06-09 18:13:54
 * @LastEditors: 1418220302@qq.com 1418220302@qq.com
 * @LastEditTime: 2022-10-20 18:21:20
 * @FilePath: \yunExpresse:\git\react-native-yunexpress-ui\src\components\form\InputItem.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { View, StyleSheet, Image, ViewStyle, TouchableOpacity, TouchableWithoutFeedback, StyleProp, TextStyle } from "react-native";
import { w } from '../../util/CStyle';
import Title from "../title";

type CFunction = (index?: number) => void

type PhotosViewType = {
    imgUrls?: string[],
    max?: number,
    title?: string,
    style?: StyleProp<ViewStyle>,
    titleStyle?: StyleProp<TextStyle>,
    onDel?: CFunction,
    onView?: CFunction,
    onAdd?: CFunction,
    enableEdit?: boolean
}

const PhotosView = (props: PhotosViewType) => {
    let { max = 1, enableEdit } = props || {};
    if (enableEdit == null) {
        enableEdit = true;
    }
    const renderItems = () => {
        let items = []
        if (!props.imgUrls) {
            return null;
        }
        for (let index = 0; index < props.imgUrls.length; index++) {
            const element = props.imgUrls[index];
            items.push(
                <TouchableOpacity activeOpacity={1} onPress={() => {
                    props.onView && props.onView(index);
                }} style={styles.item} key={`${index}`}>
                    {
                        enableEdit && <TouchableWithoutFeedback onPress={() => {
                            props.onDel && props.onDel(index);
                        }}>
                            <View style={styles.closeOp}>
                                <View style={styles.close}>
                                    <Image style={styles.closeImg} resizeMode="center" source={require('../../imgs/common_wx.png')}></Image>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    }
                    <Image style={styles.tmp_img} source={{ uri: element }}></Image>
                </TouchableOpacity>
            )
        }
        return items;
    }

    return <View style={[styles.container, props.style]}>
        {
            props.title && <Title style={props.titleStyle}>{props.title || "照片"}</Title>
        }
        <View style={styles.items}>
            {renderItems()}
            {
                ((!props.imgUrls || props.imgUrls.length < max) && enableEdit) && <TouchableOpacity onPress={() => {
                    props.onAdd && props.onAdd();
                }}
                    style={styles.item}>
                    <Image style={styles.add_img} source={require('../../imgs/common_add_img.png')}></Image>
                </TouchableOpacity>
            }
        </View>
    </View>
}

export default PhotosView;

const styles = StyleSheet.create({
    container: {

    },
    items: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 12 * w
    },
    item: {
        width: '30%',
        aspectRatio: 1,
        height: '100%',
        margin: '1.5%',
        borderRadius: 8 * w,
        borderWidth: 1 * w,
        borderColor: '#DADADA',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    tmp_img: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    add_img: {
        width: 30 * w,
        height: 30 * w
    },
    itemTxt: {
        textAlign: 'center',
        fontSize: 20 * w,
        marginTop: 10 * w
    },
    closeOp: {
        position: 'absolute',
        zIndex: 100,
        right: 0,
        top: 0,
    },
    close: {
        backgroundColor: '#303030',
        borderTopRightRadius: 8 * w,
        borderTopLeftRadius: 4 * w,
        width: 28 * w,
        height: 28 * w,
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 10 * w,
        marginBottom: 10 * w,
    },
    closeImg: {
        width: 18 * w,
        height: 18 * w,
        alignSelf: 'center'
    }
})