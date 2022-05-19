/**
 * 自定义弹框控件
 * Created by ykl
 * on 16/6/17.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Modal,
    StyleProp,
    TextStyle
} from 'react-native';
import { w } from '../../util/CStyle';
import Button from '../button';

/**
 * 弹框属性
 */
type AlertProps = {
    /** 是否显示弹框 */
    show?: boolean,
    /** 弹框关闭时回调，必加属性，关闭后设为不显示 */
    onClose?: Function,
    /** 弹框内容 */
    title?: string,
    /** 左边按钮点击回调 */
    onLeftPress?: Function,
    /** 右边按钮点击回调 */
    onRightPress?: Function,
    /** 子组件 */
    children?: any,
    /** 弹框文字样式 */
    titleStyle?: StyleProp<TextStyle>
}

/**
 * 操作可刷新属性
 */
type State = {
    /** 是否显示 */
    isVisible: boolean,
    /** 弹框内容 */
    title: string,
    leftText: string | undefined,
    rightText: string | undefined,
    onLeftPress: Function | undefined,
    onRightPress: Function,
}

/**
 * === 自定义弹框 ===
 *  
 * 【show】: boolean 是否显示弹框 
 * 
 * 【onClose】: Function 弹框关闭时回调，必加属性，关闭后设为不显示
 * 
 * 【title】: string 弹框内容
 * 
 * 【onLeftPress】: Function 左边按钮点击回调
 * 
 * 【onRightPress】: Function 右边按钮点击回调
 */
export default class Alert extends Component<AlertProps, State> {

    constructor(props: AlertProps) {
        super(props);
        this.state = {
            isVisible: this.props.show || false,
            title: '',
            leftText: '',
            rightText: '',
            onLeftPress: () => { },
            onRightPress: () => { },
        };
    }

    /** 刷新控制显示和关闭 */
    UNSAFE_componentWillReceiveProps(nextProps: AlertProps) {
        if (nextProps.show === true || nextProps.show === false) {
            if (nextProps.show !== this.state.isVisible) {
                this.setState({ isVisible: nextProps.show });
            }
        }
    }

    /** 关闭弹框 */
    closeModal() {
        this.setState({
            isVisible: false
        });
        //如果有其它组件刷新，需要在onClose里面还原show的初始值，不然只要有刷新就会弹出
        this.props.onClose && this.props.onClose();
    }

    show(title: string, onRightPress: Function, rightText?: string, onLeftPress?: Function, leftText?: string) {
        this.setState({
            title,
            leftText,
            onLeftPress,
            rightText,
            onRightPress,
            isVisible: true,
        });
    }

    /** 弹框内容 */
    renderDialog() {
        return (
            <View style={styles.modalStyle}>
                <View style={{ paddingTop: 46 * w, paddingHorizontal: 32 * w }}>
                    <Text style={[{ fontSize: 25 * w, color: '#111', fontWeight: '500' }, this.props.titleStyle]}>{this.state.title || this.props.title || ""}</Text>
                    {this.props.children}
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <Button
                        buttonLeftText={this.state.leftText || "取消"}
                        buttonRightText={this.state.rightText || "确认"}
                        isBorder={false}
                        onLeftPress={() => {
                            if ((this.props.onLeftPress && !this.props.onLeftPress()) || !this.props.onLeftPress)
                                this.closeModal()
                            else if ((this.state.onLeftPress && !this.state.onLeftPress()) || !this.state.onLeftPress) {
                                this.closeModal()
                            }
                        }}
                        onRightPress={() => {
                            if (this.props.onRightPress && !this.props.onRightPress())
                                this.closeModal()
                            else if (this.state.onRightPress && !this.state.onRightPress())
                                this.closeModal()
                        }}
                        btnLeftTextStyle={{ color: '#303030', fontSize: 24 * w }}
                        btnRightTextStyle={{ color: '#1592A3', fontSize: 24 * w }}
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