---
title: BoxItem弹框
group:
    title: 弹框
---

# BoxItem弹框

## Screenshots
<img src="/assets/boxItem.gif" width="400ps" > 

## Demo
```js
import React from 'react'
import { Image, View } from "react-native";
import { BoxItem, Button, Text, w } from 'react-native-yunexpress-ui'

export default function BoxItemExample() {
    return (
        <View>
            <BoxItem
                style={{ alignItems: 'center', height: 80 * w, backgroundColor: '#969653' }}
                boxStyle={{ paddingTop: 200 * w }}
                text='测试'
                itemProps={{
                    leftTopStyle: { flex: 1 },
                    titleParentSytle: { flex: 0 },
                    titleStyle: { color: '#fff', backgroundColor: '#36562200', fontSize: 20, width: '100%', textAlign: 'center' }
                }}
                boxLeftText={'确定'}
            >
                <View style={{ marginLeft: 30 * w, flex: 1 }}>
                    <Text>你好.............</Text>
                    <Image source={require('../imgs/functionIcon/transfer.png')} />
                </View>
                <Button
                    buttonRightText='提交'
                    onRightPress={() => {

                    }}
                />
            </BoxItem>

            <BoxItem
                style={{ height: 90 * w, backgroundColor: '#fff', marginTop: 20 * w }}
                boxStyle={{ paddingTop: 0 * w, justifyContent: 'flex-end' }}
                boxContainerStyle={{ minHeight: '50%', maxHeight: '85%', flex: 0 }}
                text='测试2'
                itemProps={{
                    titleStyle: { color: '#5533dd', fontSize: 26 * w, height: 88 * w },
                    rightHidden: false
                }}
                boxLeftText={'确定'}
            >
                <View style={{ marginLeft: 30 * w, flex: 1 }}>
                    <Text>你好1.............</Text>
                    <Text>你好2.............</Text>
                    <Text>你好3.............</Text>
                    <Image source={require('../imgs/functionIcon/transfer.png')} />
                </View>
            </BoxItem>
        </View>
    )
}
```

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| style | ViewStyle |  | 整体样式
| itemStyle | ViewStyle |  | 子项按钮样式
| boxStyle | ViewStyle |  | 弹框样式
| boxContainerStyle | TextStyle |  | 弹框内容样式
| itemProps | ItemProps |  | 子项属性
| text | string |  | item的标题，也可以在itemProps.title里面赋值
| boxLeftText | string |  | 弹框左上角按钮
| boxRigthText | string |  | 弹框右上角按钮
| boxLeftOnPress | Function |  | 弹框左上角按钮点击
| boxRightOnPress | Function |  | 弹框右上角按钮点击
| text | string |  | item的标题，也可以在itemProps.title里面赋值
| onPress | Function |  | 子项点击
| onClose | Function |  | 子项关闭

## Methods
### onShow()
    关闭或者显示弹框
    参数：isShow 是否显示 -- true 表示显示弹框，false表示关闭弹框
```js
onShow(isShow: boolean)
```

## Contributing
create by yuankangle
