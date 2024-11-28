
/**
 * 互动自定义Item控件
 * Created by ykl
 * on 16/6/17.
 */

import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
} from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { w } from '../../util/CStyle';
import Text from '../text';
import { ItemProps } from './type';
import TextInput from '../textInput';


/**
 * 功能很全的自定义Item
 * ------------------------------------------------------------------------------------------------
 * 
 *    (*)---topTitle ------------------------------------------------------------------------------
 * 
 *             | title-------------------------titleTag | rightInput------------ | rightIcon-- |
 * 
 *    leftIcon | -------------------------------------- | rightText---rightText2 | loadingView |
 * 
 *             | titleBottomText---titleBottomRightText | rightCustomView------- | ----------- |
 * 
 *    bottomContent -------------------------------------------------------------------------------
 * 
 *    bottomLine ----------------------------------------------------------------------------------
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
        bottomText: PropTypes.string, // 图标下面说明内容
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
        isFixed: false,         //是否固定字体大小
    };

    constructor(props: ItemProps) {
        super(props)
        this.state = {
        }
    }

    render() {
        const leftIcon = this.props.leftIcon ? (<Image resizeMode={'contain'} style={[{ width: 40 * w, height: 40 * w }, this.props.leftIconStyle]} source={this.props.leftIcon} />) : null
        const rightIcon = this.props.rightHidden || this.props.showLoading ? null : (
            this.props.rightIconOnPress
                ? <TouchableOpacity activeOpacity={0.5} style={{ height: 50 * w, justifyContent: 'center', alignItems: 'flex-end' }}
                    onPress={() => {
                        this.props.rightIconOnPress && this.props.rightIconOnPress()
                    }}>
                    <Image resizeMode={'contain'} style={[{ width: 22 * w, height: 22 * w, }, this.props.rightIconStyle]} source={this.props.rightIcon || require('../../imgs/common_arrow_right.png')} />
                </TouchableOpacity>
                : <Image resizeMode={'contain'} style={[{ width: 22 * w, height: 22 * w, }, this.props.rightIconStyle]} source={this.props.rightIcon || require('../../imgs/common_arrow_right.png')} />
        )
        const title = (
            <View style={[{ flexDirection: 'row', alignItems: 'center' }, this.props.titleContentStyle]}>
                <Text
                    fontSize={22 * w}
                    isFixed={this.props.isFixed}
                    style={[{ textAlignVertical: 'center', color: '#4d4d4d' }, this.props.titleStyle]}
                >{`${this.props.title}`}</Text>
                {this.props.subTitle ?
                    <Text fontSize={22 * w} isFixed={this.props.isFixed} style={[{ color: this.props.subTitleColor || '#333' }, this.props.subTitleStyle]} >{this.props.subTitle}</Text>
                    : null
                }
                {this.props.titleTag ?
                    <View style={[{ backgroundColor: '#ff823e', marginLeft: 10 * w, borderRadius: 12 * w, paddingLeft: w * 8, paddingRight: w * 8, paddingTop: w * 4, paddingBottom: w * 4 }, this.props.titleTagContentSytle]}>
                        <Text
                            fontSize={22 * w}
                            isFixed={this.props.isFixed}
                            style={[{ color: '#fff' }, this.props.titleTagStyle]}>{this.props.titleTag}</Text>
                    </View>
                    : null
                }
            </View>)
        const titleBottomContent = this.props.titleBottomText || this.props.titleBottomRightText ? (
            <View style={[{ flexDirection: 'row' }, this.props.titleBottomContentStyle]}>
                {!!this.props.titleBottomText ?
                    <Text
                        fontSize={22 * w}
                        isFixed={this.props.isFixed}
                        style={[{ marginTop: w * 1.1, marginBottom: 0.4 * w, color: '#808080' }, this.props.titleBottomStyle]}
                    >{`${this.props.titleBottomText}`}</Text>
                    : null
                }
                {!!this.props.titleBottomRightText ?
                    <Text
                        fontSize={22 * w}
                        isFixed={this.props.isFixed}
                        style={[{ marginTop: w * 1.1, marginBottom: 0.4 * w, color: '#808080' }, this.props.titleBottomRightStyle]}
                    >{`${this.props.titleBottomRightText}`}</Text>
                    : null
                }
            </View>
        ) : null
        const bottomContent = this.props.bottomText || this.props.bottomRightText ? (
            <View style={[{ flexDirection: 'row', alignItems: 'center', minHeight: 28 * w, backgroundColor: '#fff' }, this.props.bottomContentStyle]}>
                {this.props.bottomText ?
                    <Text
                        fontSize={22 * w}
                        isFixed={this.props.isFixed}
                        style={[{ color: '#808080', marginTop: w * 1.4 }, this.props.bottomStyle]}
                    >{`${this.props.bottomText}`}</Text>
                    : null
                }
                {this.props.bottomRightText ?
                    <Text
                        fontSize={22 * w}
                        isFixed={this.props.isFixed}
                        style={[{ color: '#EF5322', fontWeight: '700', flex: 1, textAlign: 'right' }, this.props.bottomRightStyle]}
                    >{`${this.props.bottomRightText}`}</Text>
                    : null
                }
            </View>
        ) : null
        const bottomLine = this.props.bottomLineStyle ?
            <View style={[{
                height: StyleSheet.hairlineWidth,
                backgroundColor: '#ddd'
            }, this.props.bottomLineStyle]} />
            : null
        {/** rightParentStyle 可让右边方案置顶配置 alignItems: "flex-start", flexDirection: "column" */ }
        const rightContent =
            this.props.rightText || this.props.rightText2
                ? <View style={[{ flexDirection: 'row', alignItems: 'center' }, { flex: 1, marginLeft: w * 5, justifyContent: 'flex-end' }, this.props.rightContentStyle]}>
                    {this.props.rightText ?
                        <Text
                            fontSize={22 * w}
                            isFixed={this.props.isFixed}
                            style={[mStyle.text, { color: '#303030', textAlign: 'right' }, this.props.rightTextStyle]}
                        >{`${this.props.rightText}`}</Text>
                        : null
                    }
                    {this.props.rightText2 ?
                        <Text
                            fontSize={22 * w}
                            isFixed={this.props.isFixed}
                            style={this.props.rightText2Style || { color: '#EF5322', fontWeight: '700' }}
                        >{`${this.props.rightText2}`}</Text>
                        : null
                    }
                </View> : null
        const rightInput = this.props.rightInput ?
            <TextInput
                isFixed={this.props.isFixed}
                {...this.props.rightInput}
            />
            : null
        const rightCustomView = this.props.rightCustomView ? this.props.rightCustomView : null
        const loadingView = !this.props.showLoading ? null : (
            <ActivityIndicator size='small' style={{ marginLeft: w }} />
        )

        const topTitle = this.props.topTitle ?
            <Text fontSize={22 * w} isFixed={this.props.isFixed} style={[mStyle.text, { marginTop: 10 * w, marginBottom: 10 * w }, this.props.topTitleStyle]}>
                <Text fontSize={22 * w} isFixed={this.props.isFixed} style={{ color: 'red' }}>{this.props.required ? '*' : ''}</Text>{this.props.topTitle}</Text>
            : null

        return (
            <TouchableOpacity
                style={[{ backgroundColor: '#fff', paddingLeft: w * 30, paddingRight: w * 30, marginTop: 0, marginBottom: 0, justifyContent: this.props.topTitle || this.props.bottomText || this.props.bottomRightText ? 'flex-start' : 'center' }, this.props.style]}
                activeOpacity={this.props.disabled ? 1 : this.props.activeOpacity ? this.props.activeOpacity : (this.props.onPress ? 0.5 : 1)}
                onPress={() => !this.props.disabled && this.props.onPress && this.props.onPress()}
                onLongPress={() => this.props.onLongPress && this.props.onLongPress()}
            >
                {topTitle}
                <View style={[{ flexDirection: 'row', alignItems: 'center' }, this.props.midContentStyle, this.props.showBorder && mStyle.border]}>
                    {leftIcon}
                    {this.props.title || this.props.titleBottomText ? (
                        <View style={[{ justifyContent: 'center', marginLeft: this.props.leftIcon ? w * 2 : 0, flex: this.props.rightText || this.props.rightText2 ? 0 : 1 }, this.props.titleParentStyle]} >
                            {title}
                            {titleBottomContent}
                        </View>)
                        : null
                    }
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
