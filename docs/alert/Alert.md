---
title: Alert弹框
group:
    title: 弹框
---

# Alert弹框

## Screenshots
<img src="/assets/alert.gif" width="80%" height="80%"> 

## Demo
```js
import React, { RefObject, useRef, useState } from 'react';
import { Alert } from 'react-native-yunexpress-ui';
...

const alertRef: string | ((instance: Alert | null) => void) | RefObject<Alert> | null | undefined = useRef(null);

alertRef?.current?.show("Alert标题", () => { 
    //确认键处理
})

...

<Alert ref={alertRef} />
```

```js
show(title: string, onRightPress: Function, rightText?: string, onLeftPress?: Function, leftText?: string)
```

可以在标题内容下面插入子组件，可以参考CheckBox文档

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| show | boolean | false | 是否显示弹框
| onClose | Function |  | 弹框关闭时回调，必加属性，关闭后设为不显示
| title | string |  | 弹框标题
| onLeftPress | Function |  | 左边按钮点击回调
| onRightPress | Function |  | 右边按钮点击回调 回调返回当前State的值
| titleStyle | TextStyle |  | 弹框文字样式
| leftText | string | 取消 | 弹框按钮左边文字
| rightText | string | 确认 | 弹框按钮右边文字
| btnLeftTextStyle | TextStyle |  | 弹框按钮左边文字样式
| btnRightTextStyle | TextStyle |  | 弹框按钮右边文字样式
| content | string |  | 弹框内容
| contentStyle | TextStyle |  | 弹框内容样式
| isCancelable | boolean | true | 点旁边是否关闭
| isFixed | boolean | false | 是否固定文本大小
| key | string |  | 弹框key 用来显示不再提示功能

## Methods
### closeModal()
    关闭弹框

### show()
    显示弹框
```js
show(title: string, onRightPress: Function, rightText?: string, onLeftPress?: Function, leftText?: string, content?: string)
```

### showDoNotPromptAgain()
    显示含不再提示弹框
```js
/**
 * 显示含不再提示弹框
 * @param key key为空不会显示单选按钮
 * @param props 要传必填项{title: string, onRightPress: Function}
 */
showDoNotPromptAgain(key: string, props: State)
```

### showOneButton()
    显示一个按钮弹框

### setIsCancelable()
    设置点弹框外面是否可以关闭弹框
```js
/**
 * 设置点弹框外面是否可以关闭弹框
 * @param isCancelable 是否可关闭，false不可关闭，true可关闭，默认可关闭
 */
setIsCancelable(isCancelable: boolean)
```

### setTextStyle()
    设置标题和内容样式
```js
setTextStyle(titleStyle: StyleProp<TextStyle>, contentStyle?: StyleProp<TextStyle>)
```

### setButtonStyle()
    设置按钮文本样式
```js
setButtonStyle(btnLeftTextStyle: StyleProp<TextStyle>, btnRightTextStyle: StyleProp<TextStyle>)
```

## Contributing
create by yuankangle
