import { Text, StyleSheet, View, ScrollView, TouchableOpacity, Modal } from 'react-native'
import React, { Component } from 'react'
import { w } from '../../util/CStyle';
import i18n from '../../i18n'
import type { ActionSheetItem, ActionSheetProps, ActionSheetStatus } from './type';



export default class ActionSheet extends Component<ActionSheetProps, ActionSheetStatus> {

    constructor(props: ActionSheetProps) {
        super(props);
        this.state = {
            data: [],
            index: -1,
            visible: false,
            onItemClick: null
        }
    }

    close = () => {
        this.setState({
            visible: false
        })
    }

    open = (data: Array<ActionSheetItem>, index: number, onItemClick?: (item: ActionSheetItem) => void) => {
        this.setState({
            data, index, onItemClick, visible: true
        })
    }

    rendItems = () => {
        let { index } = this.state;
        let elements: JSX.Element[] = []
        this.state.data.map((item: ActionSheetItem, i: number) => {
            elements.push(
                <TouchableOpacity activeOpacity={1} key={`${i}`} style={styles.itemView} onPress={() => {
                    this.state.onItemClick != null && this.state.onItemClick(this.state.data[i], i);
                    this.setState({
                        index: i
                    })
                    this.close();
                }}>
                    <Text style={[index != null && index == i ? styles.itemSelTxt : styles.itemTxt]}>{item.name ?? ""}</Text>
                </TouchableOpacity>
            )
        })
        return elements;
    }

    render() {
        let { cancelText } = this.props;
        return (
            <Modal visible={this.state.visible}
                animationType={'fade'}
                transparent={true}
                onRequestClose={this.close}>
                <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={this.close}></TouchableOpacity>
                    <View style={styles.container}>
                        <ScrollView style={styles.scrollView}>
                            {this.rendItems()}
                        </ScrollView>
                        <View style={styles.lineView}></View>
                        <TouchableOpacity style={styles.cancelView} onPress={this.close}>
                            <Text style={styles.cancelTxt}>{cancelText || i18n.t("Cancel")}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderTopLeftRadius: 16 * w,
        borderTopRightRadius: 16 * w
    },
    cancelView: {
        padding: 17 * w,
        fontSize: 24 * w,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollView: {
        maxHeight: 500 * w
    },
    itemView: {
        paddingVertical: 17 * w,
        marginHorizontal: 25 * w,
        fontSize: 24 * w,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#EEEEEE',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    lineView: {
        backgroundColor: '#F5F5F5',
        height: 10 * w
    },
    cancelTxt: {
        color: '#303030',
        fontSize: 24 * w
    },
    itemTxt: {
        color: '#303030',
        fontSize: 24 * w
    },
    itemSelTxt: {
        color: '#1693A4',
        fontSize: 24 * w
    }
})