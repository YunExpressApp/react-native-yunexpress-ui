/**
 * 自定义弹框控件
 * Created by ykl
 * on 16/6/17.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Modal,
    StyleProp,
    TextStyle,
    ScrollView,
} from 'react-native';
import i18n from '../../i18n';
import { Color, w } from '../../util/CStyle';
import Button from '../button';
import Text from '../text';

/**
 * 弹框属性
 */
type AlertProps = {
    /** 是否显示弹框 */
    show?: boolean,
    /** 弹框关闭时回调，必加属性，关闭后设为不显示 */
    onClose?: Function,
    /** 弹框标题 */
    title?: string,
    /** 左边按钮点击回调 */
    onLeftPress?: Function,
    /** 右边按钮点击回调 */
    onRightPress?: Function,
    /** 子组件 */
    children?: any,
    /** 弹框文字样式 */
    titleStyle?: StyleProp<TextStyle>,
    /** 弹框按钮左边文字 */
    leftText?: string | undefined,
    /** 弹框按钮右边文字 */
    rightText?: string | undefined,
    btnLeftTextStyle?: StyleProp<TextStyle>,
    btnRightTextStyle?: StyleProp<TextStyle>,
    /** 弹框内容 */
    content?: string | undefined,
    contentStyle?: StyleProp<TextStyle>,
    /** 点旁边是否关闭 */
    isCancelable?: boolean
    /** 是否固定文本大小 */
    isFixed?: boolean
    /** 弹框key 用来显示不再提示功能 */
    key?: string
}

/**
 * 操作可刷新属性
 */
type State = {
    /** 是否显示 */
    isVisible?: boolean,
    /** 弹框标题 */
    title: string,
    titleStyle?: StyleProp<TextStyle>,
    leftText?: string | undefined,
    rightText?: string | undefined,
    onLeftPress?: Function | undefined,
    onRightPress: Function,
    btnLeftTextStyle?: StyleProp<TextStyle>,
    btnRightTextStyle?: StyleProp<TextStyle>,
    /** 弹框内容 */
    content?: string | undefined,
    contentStyle?: StyleProp<TextStyle>,
    /** 是否只有一个按钮 */
    isOneButton?: boolean,
    isCancelable?: boolean
    key?: string
    isChecked?: boolean
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
    private outSizeCancelable: boolean = true
    private defaultState = {
        isVisible: false,
        title: '',
        leftText: '',
        rightText: '',
        onLeftPress: () => { },
        onRightPress: () => { },
        isOneButton: false,
        isCancelable: true,
        titleStyle: null,
        contentStyle: null,
        btnLeftTextStyle: { color: '#303030', fontSize: 24 * w },
        btnRightTextStyle: { color: '#1592A3', fontSize: 24 * w },
        isChecked: false
    }

    constructor(props: AlertProps) {
        super(props);
        this.state = this.defaultState;
    }

    /**
     * 组件属性变化时刷新
     * @param nextProps 
     * @param prevState 
     */
    static getDerivedStateFromProps(nextProps: AlertProps, prevState: State) {
        // myAlert(nextProps.show + '===' + prevState.isVisible)
        if (nextProps.show != undefined && nextProps.show != prevState.isVisible) {
            return { isVisible: nextProps.show }
        }
        if (nextProps.leftText != prevState.leftText) {
            return { leftText: prevState.leftText }
        }
        if (nextProps.rightText != prevState.rightText) {
            return { rightText: prevState.rightText }
        }
        return null
    }

    /** 刷新控制显示和关闭 */
    // UNSAFE_componentWillReceiveProps(nextProps: AlertProps) {
    //     if (nextProps.show === true || nextProps.show === false) {
    //         if (nextProps.show !== this.state.isVisible) {
    //             this.setState({ isVisible: nextProps.show });
    //         }
    //     }
    // }

    /**
     * 关闭弹框
     */
    closeModal() {
        this.state = this.defaultState;
        this.outSizeCancelable = true
        this.setState({
            ...this.state,
            isVisible: false
        }, () => {
            //如果有其它组件刷新，需要在onClose里面还原show的初始值，不然只要有刷新就会弹出
            this.props.onClose && this.props.onClose();
        });
    }

    /**
     * 显示弹框
     * @param title 
     * @param onRightPress 
     * @param rightText 
     * @param onLeftPress 
     * @param leftText 
     * @param content 
     */
    show(title: string, onRightPress: Function, rightText?: string, onLeftPress?: Function, leftText?: string, content?: string) {
        this.setState({
            title,
            content,
            leftText,
            onLeftPress,
            rightText,
            onRightPress,
            isVisible: true,
            isOneButton: false,
            isCancelable: this.outSizeCancelable
        });
    }

    showDoNotPromptAgain(key: string, props: State) {
        props.key = key
        props.isVisible = true
        props.isCancelable = this.outSizeCancelable
        this.setState(props);
    }

    /**
     * 显示一个按钮弹框
     * @param title 
     * @param content 
     */
    showOneButton(title: string, content?: string) {
        this.setState({
            title,
            content,
            rightText: '',
            onRightPress: () => { },
            isVisible: true,
            isOneButton: true,
            isCancelable: this.outSizeCancelable
        });
    }

    /**
     * 设置点弹框外面是否可以关闭弹框
     * @param isCancelable 
     */
    setIsCancelable(isCancelable: boolean) {
        this.outSizeCancelable = isCancelable
    }

    /**
     * 设置标题和内容样式
     * @param titleStyle 
     * @param contentStyle 
     */
    setTextStyle(titleStyle: StyleProp<TextStyle>, contentStyle?: StyleProp<TextStyle>) {
        // @ts-ignore
        this.state.titleStyle = titleStyle
        // @ts-ignore
        this.state.contentStyle = contentStyle
        // this.setState({
        //     titleStyle, contentStyle
        // })
    }

    /**
     * 设置按钮文本样式
     * @param btnLeftTextStyle 
     * @param btnRightTextStyle 
     */
    setButtonStyle(btnLeftTextStyle: StyleProp<TextStyle>, btnRightTextStyle: StyleProp<TextStyle>) {
        // @ts-ignore
        this.state.btnLeftTextStyle = btnLeftTextStyle
        // @ts-ignore
        this.state.btnRightTextStyle = btnRightTextStyle
    }

    /** 弹框内容 */
    renderDialog() {
        return (
            <View style={styles.modalStyle}>
                <TouchableOpacity activeOpacity={1} style={{ paddingTop: 46 * w, paddingHorizontal: 32 * w, paddingBottom: 10 * w }}>
                    <Text isFixed={this.props.isFixed} style={[{ fontSize: 25 * w, lineHeight: 25 * 1.3 * w, color: '#111', fontWeight: '500' }, this.state.titleStyle || this.props.titleStyle]}>{this.state.title || this.props.title || ""}</Text>
                    {this.state.content || this.props.content ? <ScrollView keyboardShouldPersistTaps="always" style={{ maxHeight: 500 * w }}><Text isFixed={this.props.isFixed} style={[{ fontSize: 22 * w, color: '#333', marginVertical: 8 * w, lineHeight: 22 * 1.4 * w }, this.state.contentStyle || this.props.contentStyle]}>{this.state.content || this.props.content || ""}</Text></ScrollView> : null}
                    {this.props.children}
                    {this.state.key ? <TouchableOpacity activeOpacity={0.9} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 * w }}
                        onPress={() => {
                            this.setState({ isChecked: !this.state.isChecked })
                        }}
                    >
                        <View style={{
                            height: 20 * w, width: 20 * w, borderWidth: 1, borderColor: '#999',
                            marginRight: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
                        }}>
                            {

                                this.state.isChecked && (
                                    <View style={{ height: 12 * w, width: 12 * w, backgroundColor: Color.blue }} />
                                )
                            }
                        </View>
                        <Text >{i18n.t('DoNotPromptAgain')}</Text>
                    </TouchableOpacity> : null}
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={{ flex: 1 }} />
                <Button
                    buttonLeftText={this.state.isOneButton ? undefined : (this.state.leftText || this.props.leftText || /*"取消"*/i18n.t('Cancel'))}
                    buttonRightText={this.state.rightText || this.props.rightText || /**"确认"*/i18n.t('Confirm')}
                    isBorder={false}
                    onLeftPress={() => {
                        if ((this.props.onLeftPress && !this.props.onLeftPress()))
                            this.closeModal()
                        else if ((this.state.onLeftPress && !this.state.onLeftPress()) || !this.state.onLeftPress || !this.props.onLeftPress) {
                            this.closeModal()
                        }
                    }}
                    onRightPress={() => {
                        if (this.props.onRightPress && !this.props.onRightPress(this.state))
                            this.closeModal()
                        else if (this.state.onRightPress && !this.state.onRightPress(this.state))
                            this.closeModal()
                    }}
                    btnLeftTextStyle={[{ color: '#303030', fontSize: 24 * w }, this.state.btnLeftTextStyle || this.props.btnLeftTextStyle]}
                    btnRightTextStyle={[{ color: '#1592A3', fontSize: 24 * w }, this.state.btnRightTextStyle || this.props.btnRightTextStyle]}
                    btnStyle={{ flex: 1, backgroundColor: '#00000000', alignItems: 'flex-start', paddingTop: 10 * w }}
                    isFixed={this.props.isFixed}
                />
                {/* </View> */}
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
                        onPress={() => {
                            if (this.state.isCancelable || this.props.isCancelable) this.closeModal()
                        }}>
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
        minHeight: 253 * w,
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