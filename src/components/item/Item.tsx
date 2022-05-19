/**
 * 互动自定义Item控件
 * Created by ykl
 * on 16/6/17.
 */

import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet,
    TextInput,
    ActivityIndicator
} from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { w } from '../../util/CStyle';

/** Item属性 */
type ItemProps = {
    /** 左边图标 */
    leftIcon?: any,
    /** 左边图标样式 */
    leftIconStyle?: any,
    /** 是否显示右边图标，默认显示右指向的箭头小图标 */
    rightHidden?: boolean,
    /** 右边图标 */
    rightIcon?: any,
    /** 右边图标样式 */
    rightIconStyle?: any,
    /** 右边图标点击事件 */
    rightIconOnPress?: Function,
    /** 是否显示菊花 */
    showLoading?: boolean,
    /** 标题 */
    title?: string,
    /** 标题样式 */
    titleStyle?: any,
    /** 子标题 */
    subTitle?: string,
    /** 子标题颜色 */
    subTitleColor?: string,
    /** 子标题右边内容 */
    titleTag?: string,
    /** 子标题右边内容样式 */
    titleTagStyle?: any,
    /** 子标题父组件样式 */
    titleTagContentSytle: any,
    /** 是否显示红点 */
    showRedDot?: boolean,
    /** 标题下面内容 */
    titleBottomText?: string,
    /** 标题下面内容样式 */
    titleBottomStyle?: any,
    /** 标题下面右边内容 */
    titleBottomRightText?: string,
    /** 标题下面右边内容样式 */
    titleBottomRightStyle?: any,
    /** 标题下面父组件样式 */
    titleBottomContentStyle?: any,
    /** 最下面内容 */
    bottomText?: string,
    /** 最下面内容样式 */
    bottomStyle?: any,
    /** 最下面右边内容 */
    bottomRightText?: string,
    /** 最下面右边内容样式 */
    bottomRightStyle?: any,
    /** 最下面右边父组件样式 */
    bottomContentStyle?: any,
    /** 最下面线条样式 */
    bottomLineStyle?: any,
    /** 标题右边父组件样式 */
    rightContentStyle?: any,
    /** 标题右边内容 */
    rightText?: string,
    /** 标题右边内容样式 */
    rightTextStyle?: any,
    /** 标题右边的右边内容 */
    rightText2?: string,
    /** 标题右边的右边内容样式 */
    rightText2Style?: any,
    /** 标题右边输入框属性 */
    rightInput?: any,
    /** 标题右边自定义组件 */
    rightCustomView?: any,
    /** 是否可以点击 */
    disabled?: boolean,
    /** 点击效果 */
    activeOpacity?: number,
    /** 标题上面内容 */
    topTitle?: string,
    /** 标题上面内容样式 */
    topTitleStyle?: any,
    /** 点击事件 */
    onPress?: Function,
    /** 长按事件 */
    onLongPress?: Function,
    /** 核心部位样式 */
    leftTopStyle?: any,
    /** 是否显示边框 */
    showBorder?: boolean,
    /** topTitle是否有必填的红色星号 */
    required?: boolean,
    /** 总父组件样式 */
    style?: any,
    /** 标题父组件样式 */
    titleParentSytle?: any,
}


/**
 * 功能很全的自定义Item
 * 
 * -------------------------------------------------------------------------------------------
 * 
 * topTitle
 * 
 * -------------------------------------------------------------------------------------------
 *          | title-------------|
 * 
 * leftIcon |--------------------------|rightContent rightInput rightCustomView rightIcon loadingView 
 * 
 *          | titleBottomContent|
 * -------------------------------------------------------------------------------------------
 * bottomContent
 * 
 * -------------------------------------------------------------------------------------------
 * bottomLine
 */
export default class Item extends React.Component<ItemProps> {

    // 类型声明
    static propTypes = {
        rightHidden: PropTypes.bool, // 隐藏右边箭头
        leftIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.any]), // 左边图标
        title: PropTypes.string, // 主标题
        titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
        rightText: PropTypes.string, // 主标题右边说明内容
        rightStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
        bottomContent: PropTypes.string, // 图标下面说明内容
        bottomStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
        titleBottomContent: PropTypes.string, // 主标题下面说明内容
        titleBottomStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]), // 主标题下面说明内容样式
        layoutHeight: PropTypes.number, // 控件高度
        onPress: PropTypes.func, // 控件点击事件
        titleTag: PropTypes.string, // 标题标
        required: PropTypes.bool //topTitle是否有必填的星号
    }

    static defaultProps = {
        rightHidden: false,     //是否隐藏右边图标
        showBorder: false,      //是否显示边框
    };

    constructor(props: ItemProps) {
        super(props)
        this.state = {
        }
    }

    render() {
        let leftIcon = this.props.leftIcon ? (<Image resizeMode={'contain'} style={[{ width: 40 * w, height: 40 * w }, this.props.leftIconStyle]} source={this.props.leftIcon} />) : null
        let rightIcon = this.props.rightHidden || this.props.showLoading ? null : (
            this.props.rightIconOnPress
                ? <TouchableOpacity activeOpacity={0.5} style={{ height: 50 * w, justifyContent: 'center', alignItems: 'flex-end' }}
                    onPress={() => {
                        this.props.rightIconOnPress && this.props.rightIconOnPress()
                    }}>
                    <Image resizeMode={'contain'} style={[{ width: 22 * w, height: 22 * w, }, this.props.rightIconStyle]} source={this.props.rightIcon || require('../../imgs/common_arrow_right.png')} />
                </TouchableOpacity>
                : <Image resizeMode={'contain'} style={[{ width: 22 * w, height: 22 * w, }, this.props.rightIconStyle]} source={this.props.rightIcon || require('../../imgs/common_arrow_right.png')} />
        )
        let title = (
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text
                        allowFontScaling={false}
                        style={[{ fontSize: 22 * w, textAlignVertical: 'center', color: '#4d4d4d' }, this.props.titleStyle]}
                    >{`${this.props.title}`}</Text>
                    {this.props.subTitle ? <Text allowFontScaling={false} style={{ fontSize: 22 * w, color: this.props.subTitleColor || '#333' }} >{this.props.subTitle}</Text> : null}
                    {this.props.titleTag
                        ? <View style={[{ backgroundColor: '#ff823e', marginLeft: 10 * w, borderRadius: 12 * w, paddingLeft: w * 0.8, paddingRight: w * 0.8, paddingTop: w * 0.4, paddingBottom: w * 0.4 }, this.props.titleTagContentSytle]}>
                            <Text
                                allowFontScaling={false}
                                style={{ color: '#fff', fontSize: 16 * w, ...this.props.titleTagStyle }}>{this.props.titleTag}</Text>
                        </View> : null}
                </View>
                {this.props.showRedDot ? <Image style={{ left: w * 0.5, width: w * 7.2, height: w * 3.2 }} resizeMode={'contain'} source={require('../../imgs/common_arrow_right.png')} /> : null}
            </View>)
        let titleBottomContent = this.props.titleBottomText || this.props.titleBottomRightText ? (
            <View style={[{ flexDirection: 'row' }, this.props.titleBottomContentStyle]}>
                {!!this.props.titleBottomText ? <Text
                    allowFontScaling={false}
                    style={[{ marginTop: w * 1.1, fontSize: w * 22, marginBottom: 0.4 * w, color: '#808080' }, this.props.titleBottomStyle]}
                >{`${this.props.titleBottomText}`}</Text> : null}
                {!!this.props.titleBottomRightText ? <Text
                    allowFontScaling={false}
                    style={[{ marginTop: w * 1.1, fontSize: w * 22, marginBottom: 0.4 * w, color: '#808080' }, this.props.titleBottomRightStyle]}
                >{`${this.props.titleBottomRightText}`}</Text> : null}
            </View>
        ) : null
        let bottomContent = this.props.bottomText || this.props.bottomRightText ? (
            <View style={[{ flex: 1, flexDirection: 'row', justifyContent: 'center' }, this.props.bottomContentStyle]}>
                {this.props.bottomText ? <Text
                    allowFontScaling={false}
                    style={[{ fontSize: w * 22, color: '#808080', marginTop: w * 1.4 }, this.props.bottomStyle]}
                >{`${this.props.bottomText}`}</Text> : null}
                {this.props.bottomRightText ? <Text
                    allowFontScaling={false}
                    style={this.props.bottomRightStyle || { fontSize: w * 22, color: '#EF5322', fontWeight: '700' }}
                >{`${this.props.bottomRightText}`}</Text> : null}
            </View>
        ) : null
        let bottomLine = this.props.bottomLineStyle ? <View style={[{
            height: StyleSheet.hairlineWidth,
            backgroundColor: '#ddd'
        }, this.props.bottomLineStyle]} /> : null
        {/** rightParentStyle 可让右边方案置顶配置 alignItems: "flex-start", flexDirection: "column" */ }
        let rightContent =
            this.props.rightText || this.props.rightText2
                ? <View style={[{ flexDirection: 'row', alignItems: 'center' }, { flex: 1, marginLeft: w * 5, justifyContent: 'flex-end' }, this.props.rightContentStyle]}>
                    {this.props.rightText ? <Text
                        allowFontScaling={false}
                        style={[mStyle.text, { fontSize: 22 * w, color: '#303030', textAlign: 'right' }, this.props.rightTextStyle]}
                    >{`${this.props.rightText}`}</Text> : null}
                    {this.props.rightText2 ? <Text
                        allowFontScaling={false}
                        style={this.props.rightText2Style || { fontSize: w * 22, color: '#EF5322', fontWeight: '700' }}
                    >{`${this.props.rightText2}`}</Text> : null}
                </View> : null
        let rightInput = this.props.rightInput ? <TextInput
            {...this.props.rightInput}
        /> : null
        let rightCustomView = this.props.rightCustomView ? this.props.rightCustomView : null
        let loadingView = !this.props.showLoading ? null : (
            <ActivityIndicator size='small' style={{ marginLeft: w }} />
        )

        return (
            <TouchableOpacity
                style={[{ backgroundColor: '#fff', paddingLeft: w * 32, paddingRight: w * 32, marginTop: 0, marginBottom: 0, justifyContent: this.props.topTitle || this.props.bottomText || this.props.bottomRightText ? 'flex-start' : 'center' }, this.props.style]}
                activeOpacity={this.props.disabled ? 1 : this.props.activeOpacity ? this.props.activeOpacity : (this.props.onPress ? 0.5 : 1)}
                onPress={() => !this.props.disabled && this.props.onPress && this.props.onPress()}
                onLongPress={() => this.props.onLongPress && this.props.onLongPress()}>
                {this.props.topTitle && <Text style={[mStyle.text, { fontSize: 22 * w, marginTop: 10 * w, marginBottom: 10 * w }, this.props.topTitleStyle]}><Text style={{ color: 'red' }}>{this.props.required && '*'}</Text>{this.props.topTitle}</Text>}
                <View style={[{ flexDirection: 'row', alignItems: 'center' }, this.props.leftTopStyle, this.props.showBorder && mStyle.border]}>
                    {leftIcon}
                    {this.props.title || this.props.titleBottomText ? (
                        <View style={[{ justifyContent: 'center', marginLeft: this.props.leftIcon ? w * 2 : 0, flex: this.props.rightText || this.props.rightText2 ? 0 : 1 }, this.props.titleParentSytle]} >
                            {title}
                            {titleBottomContent}
                        </View>) : null}
                    {rightContent}
                    {rightInput}
                    {rightCustomView}
                    {rightIcon}
                    {loadingView}
                </View>
                {bottomContent}
                {bottomLine}
            </TouchableOpacity>
        )
    }
}

const mStyle = StyleSheet.create({
    triangleRight: {
        borderTopWidth: w * 0.8,
        borderTopColor: 'transparent',
        borderLeftWidth: w * 0.8,
        borderLeftColor: '#999',
        borderBottomWidth: w * 0.8,
        borderBottomColor: 'transparent',
        marginRight: 1.2 * w,
        marginLeft: 1.4 * w
    },
    border: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 1.5 * w,
        marginBottom: 1 * w,
    },
    text: {
        color: '#333'
    }
})
