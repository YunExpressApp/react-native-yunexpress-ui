/*
 * @Author: 康乐 yuankangle@yunexpress.cn
 * @Date: 2024-11-28 13:46:20
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2024-11-28 17:45:58
 * @FilePath: \react-native-yunexpress-ui\src\components\textInput\TextInput.tsx
 */
import React, { forwardRef, Ref, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import { TextInput as RnTextInput, TextInputProps as RnTextInputProps } from 'react-native'
import { w } from '../../util/CStyle';
import Theme from '../../themes/Theme';

export interface TextInputProps extends RnTextInputProps {
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
const TextInput = (props: TextInputProps, ref: Ref<RnTextInput | null>) => {

    // style样式中的文本大小
    const [fontSize, setFontSize] = useState(0);
    // 文本大小变化基数
    const baseNum = (props.locale || Theme.locale) !== 'zh' && !props.isFixed ? 0.8 : 1

    const inputRef = useRef<RnTextInput>(null)
    
    useImperativeHandle(ref, () => inputRef.current)

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
    }, [props.style, props.fontSize])

    useEffect(() => {

    }, [])

    return (
        <RnTextInput
            ref={inputRef}
            {...props}
            allowFontScaling={false}
            style={[props.style, fontSize ? { fontSize: fontSize * baseNum } : null]}
        />
    )

}

export default forwardRef<any, TextInputProps>(TextInput)