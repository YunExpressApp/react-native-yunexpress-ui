/*
 * @Author: 康乐 yuankangle@yunexpress.cn
 * @Date: 2023-02-17 14:32:07
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2023-03-01 17:28:40
 * @FilePath: \ops_pdae:\git\react-native-yunexpress-ui\src\components\searchlistbox\SearchListBox.tsx
 */

import React, { forwardRef, useEffect, useState, Ref, useImperativeHandle } from "react";
import { FlatList, ListRenderItem, StyleProp, ViewStyle, TouchableOpacity, ListRenderItemInfo } from "react-native";
import { w } from "../../util/CStyle";
import BoxItem from "../boxitem";
import type { BoxItemProps } from "../boxitem/BoxItem";
import SearchBoxComponent, { SearchBoxComponentProps } from "../search/SearchBoxComponent";

declare module "react" {
    function forwardRef<T, P = {}>(
        render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
    ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

interface SearchListBoxProps<T> {
    boxProps?: BoxItemProps
    searchBoxProps?: SearchBoxComponentProps
    flatListStyle?: StyleProp<ViewStyle>
    renderItem: ListRenderItem<T>
    data: T[]
    /** 显示和搜索的字段在单个对象中的key */
    searchKey?: string
    isHideSrarch?: boolean
    /** 点击renderItem是否关闭弹框 */
    renderItemClickCloseAndCallback?: (info: ListRenderItemInfo<T>) => void
}

export interface SearchListBoxRef {
    open: (isHideSrarch?: boolean) => void
    close: () => void
}


function SearchListBox<T>(props: SearchListBoxProps<T>, ref: Ref<SearchListBoxRef>) {
    let BoxItemRef: { onShow: (isShow: boolean) => void } | null
    const [data, setData] = useState<T[]>()
    const [isHideSrarch, setIsHideSrarch] = useState<boolean>(false)

    useEffect(() => {
        if (props.data) setData(props.data)
    }, [props.data])

    useEffect(() => {
        if (props.isHideSrarch) setIsHideSrarch(props.isHideSrarch)
    }, [props.isHideSrarch])

    useImperativeHandle(ref, () => (
        {
            open(isHideSrarch) {
                if (isHideSrarch) {
                    setIsHideSrarch(true)
                }
                BoxItemRef?.onShow(true)
            },
            close() {
                BoxItemRef?.onShow(false)
            }
        }
    ))

    function getRenderItem(): ListRenderItem<T> | null | undefined {
        if (props.renderItemClickCloseAndCallback) {
            return (info) => (
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                        BoxItemRef?.onShow(false)
                        props.renderItemClickCloseAndCallback && props.renderItemClickCloseAndCallback(info)
                    }}
                >{props.renderItem(info)}</TouchableOpacity>
            )
        }
        return props.renderItem
    }

    return (
        <BoxItem
            ref={ref => BoxItemRef = ref}
            boxStyle={{ paddingTop: 0 * w, justifyContent: 'flex-end' }}
            boxContainerStyle={{ minHeight: '50%', maxHeight: '85%', flex: 0 }}
            {...props.boxProps}
            boxRightOnPress={() => {
                setData(props.data)
            }}
            onClose={() => {
                // 还原设置
                setIsHideSrarch(props.isHideSrarch || false)
                setData(props.data)
            }}
        >
            {
                !isHideSrarch ? <SearchBoxComponent
                    style={{ paddingLeft: 30 * w, paddingRight: 30 * w }}
                    hideCancel
                    onChangeText={(text) => {
                        if (text) {
                            let newData: T[] = []
                            for (let item of props?.data) {
                                // @ts-ignore
                                if (item[`${props?.searchKey}`]?.includes(text)) {
                                    newData.push(item)
                                }
                            }
                            setData(newData)
                        } else {
                            setData([...props.data])
                        }
                    }}
                    {...props.searchBoxProps}
                /> : null
            }
            <FlatList
                style={[{ paddingHorizontal: 30 * w }, props.flatListStyle]}
                onEndReachedThreshold={0.1}
                keyboardShouldPersistTaps="always"
                keyboardDismissMode='on-drag'
                keyExtractor={(_item, index) => ('' + index)}
                data={data}
                renderItem={getRenderItem()}
            />
        </BoxItem>
    )
}

export default forwardRef(SearchListBox)