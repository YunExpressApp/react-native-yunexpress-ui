/*
 * @Author: 康乐 yuankangle@yunexpress.cn
 * @Date: 2022-06-13 09:31:56
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2024-11-28 14:44:01
 * @FilePath: \react-native-yunexpress-ui\src\components\alert\Alert.tsx
 * 自定义弹框控件
 */
/**
 * 自定义弹框控件
 * Created by ykl
 * on 16/6/17.
 */
import React, { PureComponent } from 'react';
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
import type { AlertProps, AlertState } from './type';


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
 * 【onRightPress】: Function 右边按钮点击回调 回调返回当前State的值
 */
export default class Alert extends PureComponent<AlertProps, AlertState> {
    private outSizeCancelable: boolean = true
    private interval: NodeJS.Timer | undefined;
    // State默认值
    private defaultState = {
        isVisible: false,
        title: '',
        titleStyle: null,
        leftText: '',
        rightText: '',
        onLeftPress: () => { },
        onRightPress: () => { },
        btnLeftTextStyle: { color: '#303030', fontSize: 24 * w },
        btnRightTextStyle: { color: '#1592A3', fontSize: 24 * w },
        content: '',
        contentStyle: null,
        isOneButton: false,
        isCancelable: true,
        key: undefined,
        isChecked: false,
        checkBoxText: i18n.t('DoNotPromptAgain'),
        countdown: 0
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
    static getDerivedStateFromProps(nextProps: AlertProps, prevState: AlertState) {
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
            this.interval && clearInterval(this.interval)
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

    /**
     * 自定义属性显示弹框
     */
    showByObj(props: AlertState) {
        this.setState(props)
    }

    /**
     * 显示含不再提示弹框
     * @param key key为空不会显示单选按钮
     * @param props 要传必填项{title: string, onRightPress: Function} 
     */
    showDoNotPromptAgain(key: string, props: AlertState) {
        props.key = key
        props.isVisible = true
        props.isCancelable = this.outSizeCancelable
        this.setState(props);
    }

    /**
     * 显示一个按钮弹框
     * @param title 弹框标题
     * @param content 弹框内容
     * @param rightText 单个按钮文案
     */
    showOneButton(title: string, content?: string, rightText?: string) {
        this.setState({
            title,
            content,
            rightText: rightText || '',
            onRightPress: () => { },
            isVisible: true,
            isOneButton: true,
            isCancelable: this.outSizeCancelable
        });
    }

    /**
     * 显示一个倒计时自动关闭弹框
     * @param countdown 倒计时（秒） 
     * @param title 弹框标题
     * @param content 弹框内容
     * @param rightText 单个按钮文案
     */
    showCountdownClose(countdown: number, title: string, content?: string, rightText?: string) {
        if (countdown > 0) {
            this.interval = setInterval(() => {
                countdown -= 1
                if (countdown == 0) {
                    this.closeModal()
                    this.interval && clearInterval(this.interval)
                    return
                }
                this.setState({ countdown })
            }, 1000)
        }
        this.setState({
            countdown,
            title,
            content,
            rightText: rightText || '',
            onRightPress: () => { },
            isVisible: true,
            isOneButton: true,
        });
    }

    /**
     * 设置点弹框外面是否可以关闭弹框
     * @param isCancelable 是否可关闭，false不可关闭，true可关闭，默认可关闭
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
                    <Text isFixed={this.props.isFixed} selectable={!!!this.state.content && !!!this.props.content} style={[{ fontSize: 25 * w, lineHeight: 25 * 1.3 * w, color: '#111', fontWeight: '500' }, this.state.titleStyle || this.props.titleStyle]}>{this.state.title || this.props.title || ""}</Text>
                    {this.state.content || this.props.content ? <ScrollView keyboardShouldPersistTaps="always" style={{ maxHeight: 500 * w }}><Text isFixed={this.props.isFixed} selectable style={[{ fontSize: 22 * w, color: '#333', marginVertical: 8 * w, lineHeight: 22 * 1.4 * w }, this.state.contentStyle || this.props.contentStyle]}>{(this.state.content || this.props.content || "").replace(/\\n/g, "\n")}</Text></ScrollView> : null}
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
                        <Text >{this.state.checkBoxText || i18n.t('DoNotPromptAgain')}</Text>
                    </TouchableOpacity> : null}
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={{ flex: 1 }} />
                <Button
                    buttonLeftText={this.state.isOneButton ? undefined : (this.state.leftText || this.props.leftText || /*"取消"*/i18n.t('Cancel'))}
                    buttonRightText={this.state.rightText || this.props.rightText || /**"确认"*/i18n.t('Confirm')}
                    isBorder={false}
                    onLeftPress={() => {
                        if ((this.props.onLeftPress && !this.props.onLeftPress(this.state))){
                            this.closeModal()
                        }
                        else if ((!this.props.onLeftPress && this.state.onLeftPress && !this.state.onLeftPress(this.state)) || !this.state.onLeftPress || !this.props.onLeftPress) {
                            this.closeModal()
                        }
                    }}
                    onRightPress={() => {
                        if (this.props.onRightPress && !this.props.onRightPress(this.state)) {
                            this.closeModal()
                        }
                        else if (!this.props.onRightPress && this.state.onRightPress && !this.state.onRightPress(this.state)) {
                            this.closeModal()
                        }
                    }}
                    btnLeftTextStyle={[{ color: '#303030', fontSize: 24 * w }, this.state.btnLeftTextStyle || this.props.btnLeftTextStyle]}
                    btnRightTextStyle={[{ color: '#1592A3', fontSize: 24 * w }, this.state.btnRightTextStyle || this.props.btnRightTextStyle]}
                    btnStyle={{ flex: 1, backgroundColor: '#00000000', alignItems: 'flex-start', paddingTop: 10 * w }}
                    isFixed={this.props.isFixed}
                />
                {/* </View> */}
                {this.state.countdown ? <Text style={styles.countdown}>{this.state.countdown + 's'}</Text> : null}
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

    componentWillUnmount(): void {
        this.interval && clearInterval(this.interval)
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
    countdown: {
        position: 'absolute',
        right: 18 * w,
        top: 15 * w
    }
});