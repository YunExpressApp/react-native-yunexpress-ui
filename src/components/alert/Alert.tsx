import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Modal
} from 'react-native';
import { w } from '../../util/CStyle';
import Button from '../button';

type Props = {
    show: boolean,
    onClose: Function,
    title: string,
    onLeftPress: Function,
    onRightPress: Function,
}

type State = {
    isVisible: boolean,
    title: string
}

export default class Alert extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            isVisible: this.props.show || false,
            title: '',
        };
    }

    //刷新控制显示和关闭
    UNSAFE_componentWillReceiveProps(nextProps: Props) {
        if (nextProps.show != this.state.isVisible)
            this.setState({ isVisible: nextProps.show });
    }

    //关闭弹框
    closeModal() {
        this.setState({
            isVisible: false
        });
        //如果有其它组件刷新，需要在onClose里面还原show的初始值，不然只要有刷新就会弹出
        this.props.onClose && this.props.onClose();
    }

    renderDialog() {
        return (
            <View style={styles.modalStyle}>
                <View style={{ paddingTop: 46 * w, paddingHorizontal: 32 * w }}>
                    <Text style={{ fontSize: 25 * w, color: '#111', fontWeight: '500' }}>{this.props.title ? this.props.title : ""}</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <Button
                        buttonLeftText={"取消"}
                        buttonRightText={"确认"}
                        isBorder={false}
                        onLeftPress={() => {
                            if ((this.props.onLeftPress && !this.props.onLeftPress()) || !this.props.onLeftPress)
                                this.closeModal()
                        }}
                        onRightPress={() => {
                            if (this.props.onRightPress && !this.props.onRightPress())
                                this.closeModal()
                        }}
                        title={this.state.title}
                        btnLeftTextStyle={{ color: '#303030', fontSize: 24 * w }}
                        btnTextStyle={{ color: '#1592A3', fontSize: 24 * w }}
                        btnStyle={{ flex: 1, backgroundColor: '#00000000', alignItems: 'flex-start', paddingTop: 10 * w }}
                    />
                </View>
            </View>
        )
    }

    render() {
        return (
            <Modal
                transparent={true}
                visible={this.state.isVisible}
                animationType={'fade'}
                onRequestClose={() => this.closeModal()}>
                <View style={styles.container}>
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                        activeOpacity={1}
                        onPress={() => this.closeModal()}>
                        {this.renderDialog()}
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    borderBottom: {
        flex: 1,
        borderBottomWidth: 0.5 * w,
        borderColor: '#333',
        justifyContent: 'center',
        height: 100 * w,
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(149, 157, 165, 0.5)',
    },
    selectOtherModalTitle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 90 * w,
    },

    selectModalTitleTxt: {
        fontSize: 30 * w,
        color: '#4e4e4e',
        // fontWeight: 'bold'
    },
    modalStyle: {
        width: 386 * w,
        height: 253 * w,
        zIndex: 99999,
        borderRadius: 10 * w,
        backgroundColor: '#ffffff',
    },
    optArea: {
        flex: 1,
        flexDirection: 'column',
        width: 750 * w,
        marginTop: 12 * w,
        marginBottom: 12 * w,
    },
    item: {
        flexDirection: 'row',
        paddingLeft: 20 * w,
        paddingRight: 20 * w,
        alignItems: 'center',
    },
    itemText: {
        fontSize: 30 * w,
        color: '#333'
    },
    cancel: {
        width: 550 * w,
        height: 30 * w,
        marginTop: 12,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    selectModalRowTxt: {
        fontSize: 28 * w,
        color: "#666",
    },
    searchImage: {
        width: 30 * w,
        height: 30 * w,
        marginLeft: 41 * w,
    },
    searchWord: {
        fontSize: 30 * w,
        padding: 0,
        marginLeft: 13 * w,
        flex: 1,
    },
});