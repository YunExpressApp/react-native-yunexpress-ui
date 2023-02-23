/*
 * @Author: 袁康乐 yuankangle@yunexpress.cn
 * @Date: 2022-09-20 16:32:35
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2023-02-21 16:35:38
 * @FilePath: \react-native-yunexpress-ui\src\components\text\Text.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react'
import { Text as RnText, TextProps as RnTextProps } from 'react-native'
import { w } from '../../util/CStyle'
import Theme from '../../themes/Theme';

interface TextProps extends RnTextProps {
    children: React.ReactNode[] | string
    /** 文本大小，中文是原大小，其他语言文本大小 = 文本大小 * 0.8 */
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

    useEffect(() => {
        let styles: any = props.style;
        if (baseNum != 1) {
            if (styles && Array.isArray(styles)) {
                for (let s of styles) {
                    if (s && s.fontSize) {
                        setFontSize(s.fontSize);
                    }
                }
            } else if (styles && typeof styles == 'object') {
                if (styles.fontSize) {
                    setFontSize(styles.fontSize);
                }
            }
        }
    }, [props.style])

    return (
        <RnText
            {...props}
            allowFontScaling={false}
            style={[props.fontSize ? { fontSize: props.fontSize * w * baseNum } : null, props.style, fontSize ? { fontSize: fontSize * baseNum } : null]}
        >{props.children}</RnText>
    )

}