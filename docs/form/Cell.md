---
title: Cell组件
group:
    title: "表单"
---

# Cell组件

## Example
<img src="/assets/cell.png" width="20%" height="20%"> 

## Usage

```js
import { YTCell } from 'react-native-yunexpress-ui';
```

## Demo

```js
<YTCell leftTitle='左边内容' rightTitle='右边内容'></YTCell>
<YTCell leftTitle='左边内容' rightTitle='右边内容'></YTCell>
<YTCell leftTitle='左边内容' rightTitle='右边内容'></YTCell>
<YTCell leftTitle='左边内容' rightTitle='右边内容'></YTCell>

<YTCell.ScanCode data={{ code: "123456", status: 1, message: "提示信息" }} />
<YTCell.ScanCode data={{ code: "123456", status: 2, message: "提示信息" }} />
<YTCell.ScanCode isDel={true} data={{ code: "123456", status: 1, message: "提示信息" }} />
<YTCell.ScanCode isFirst={true} isDel={true} data={{ code: "123456", status: 1, message: "提示信息" }} />
```

## Cell Props
| Prop | Type | Default | Note |
|---|---|---|---|
| style | ViewStyle |  | Cell样式
| leftTitle | string |  | 左边文字
| leftStyle | TextStyle | {} | 左边文字样式
| rightTitle | string |  | 右边文字
| rightStyle | TextStyle | {} | 右边文字样式

## YTCell.ScanCode  Props
| Prop | Type | Default | Note |
|---|---|---|---|
| style | ViewStyle |  | Cell样式
| valueStyle | TextStyle |  | 右边文字样式
| isFirst | boolean |  | 是否为第一行
| isDel | boolean |  | 是否为删除操作
| showDelete | boolean |  | 是否显示删除操作
| onClick | Function |  | Cell行点击事件
| onDelete | Function |  | Cell行点击删除事件
| data | DataType | {} | DataType类型如下


 ### DataType  Props
| Prop | Type | Default | Note |
|---|---|---|---|
| status | number |  | 扫描结果status状态: 1 成功 2 失败
| message | string |  | 错误信息  点击cell的时候提示需要
| code | string |  | 扫码结果的ScanCode
| value | string |  | 右边显示的值


 
	
## Contributing

yanyulin
