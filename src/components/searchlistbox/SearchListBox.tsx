/*
 * @Author: 康乐 yuankangle@yunexpress.cn
 * @Date: 2023-02-17 14:32:07
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2023-02-27 11:30:18
 * @FilePath: \react-native-yunexpress-ui\src\components\searchlistbox\SearchListBox.tsx
 */

import React, { forwardRef, useEffect, useState, Ref, useImperativeHandle } from "react";
import { FlatList, ListRenderItem, StyleProp, ViewStyle } from "react-native";
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
    searchKey?: string
}

export interface SearchListBoxRef {
    open: () => void
    close: () => void
}

function SearchListBox<T>(props: SearchListBoxProps<T>, ref: Ref<SearchListBoxRef>) {
    let BoxItemRef: { onShow: (isShow: boolean) => void } | null
    const [data, setData] = useState<T[]>()

    useEffect(() => {
        if (props.data) setData(props.data)
    }, [props.data])

    useImperativeHandle(ref, () => (
        {
            open() {
                BoxItemRef?.onShow(true)
            },
            close() {
                BoxItemRef?.onShow(false)
                setData(props.data)
            }
        }
    ))

    return (
        <BoxItem
            ref={ref => BoxItemRef = ref}
            boxStyle={{ paddingTop: 0 * w, justifyContent: 'flex-end' }}
            boxContainerStyle={{ minHeight: '50%', maxHeight: '85%', flex: 0 }}
            {...props.boxProps}
            boxRightOnPress={() => {
                setData(props.data)
            }}
        >
            <SearchBoxComponent
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
            />
            <FlatList
                style={[{ paddingHorizontal: 30 * w }, props.flatListStyle]}
                onEndReachedThreshold={0.1}
                keyboardShouldPersistTaps="always"
                keyboardDismissMode='on-drag'
                keyExtractor={(_item, index) => ('' + index)}
                data={data}
                renderItem={props.renderItem}
            />
        </BoxItem>
    )
}

export default forwardRef(SearchListBox)