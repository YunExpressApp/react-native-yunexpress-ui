/*
 * @Author: 袁康乐 yuankangle@yunexpress.cn
 * @Date: 2022-09-20 16:32:35
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2023-03-24 16:53:52
 * @FilePath: \react-native-yunexpress-ui\src\components\text\Text.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useMemo, useState } from 'react'
import { Text as RnText, TextProps as RnTextProps } from 'react-native'
import { w } from '../../util/CStyle';
import Theme from '../../themes/Theme';

interface TextProps extends RnTextProps {
    children: React.ReactNode[] | string
    /** 
     * 优先取style里面的fontSize,style里面没有再取这个
     * 文本大小，中文是原大小，其他语言文本大小 = 文本大小 * 0.8 
     */
    fontSize?: number
    /** 设置语言属性，可不传 */
    locale?: string
    /** 是否固定文本大小 */
    isFixed?: boolean
}

/**
 * children: React.ReactNode[] | string
 * --
 * 【必传】子组件可以是当前组件或者字符串
 * 
 * fontSize: number
 * --
 * 文本大小，中文是原大小，其他语言文本大小 = 文本大小 * 0.8 
 * 
 * locale?: string
 * --
 * 设置语言属性，可不传
 * 
 * style?: StyleProp<TextStyle>
 * --
 * 样式里面的fontSize会覆盖组件的fontSize属性
 * 
 * isFixed?: boolean
 * --
 * 是否固定文本大小 
 * 
 * @param props 
 */
export default function Text(props: TextProps) {

    // style样式中的文本大小
    const [fontSize, setFontSize] = useState(0);
    // 文本大小变化基数
    const baseNum = (props.locale || Theme.locale) !== 'zh' && !props.isFixed ? 0.8 : 1

    useMemo(() => {
        // console.log('========1==========' + props.children)
        let styles: any = props.style;
        if (styles && Array.isArray(styles)) {
            for (let s of styles) {
                if (s && s.fontSize) {
                    setFontSize(s.fontSize);
                    return
                }
            }
        } else if (styles && typeof styles == 'object') {
            if (styles.fontSize) {
                setFontSize(styles.fontSize);
                return
            }
        }
        if (props.fontSize) {
            setFontSize(props.fontSize);
        } else {
            setFontSize(20 * w);
        }
    }, [props.style, props.children, props.fontSize])

    useEffect(() => {

    }, [])

    return (
        <RnText
            {...props}
            allowFontScaling={false}
            style={[props.style, fontSize ? { fontSize: fontSize * baseNum } : null]}
        >{props.children}</RnText>
    )

}