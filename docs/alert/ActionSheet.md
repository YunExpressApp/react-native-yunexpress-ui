---
title: ActionSheet底部选择组件
group:
    title: 弹框
---

# ActionSheet底部选择组件

## Screenshots
<img src="/assets/actionsheet.gif" width="20%" height="20%"> 

## Usage

```js
import { YTActionSheet } from 'react-native-yunexpress-ui';

```

## Demo

```js

let data = ["a", "b", "c", "b"];
const showChoice = () => {
	YTActionSheet.show(data, index, (index: number) => {
		
	});
}

let data3 = [{ a: 'bb', b: '122', c: 'eeee' }, { a: 'cc', b: 666, c: '1999-2-9' }]
// 选项显示参数a
YTActionSheet.showByObj(data3, ['a'], (index: number) => {

}, index);

```

## 参数
| params | Type | Default | Note |
|---|---|---|---|
| data | string[] \| JSX.Element[] \| object[] | [] | 字符串数组或者JSX数组，或是对象数组
| index | number | null | 默认选中的index
| callback | Function | (index: number) => {} | 选中Item的事件的回调  index选中的索引

## 方法
### show()
	根据字符串数据或者组件数组来弹出选择器
```js
show(data: string[] | JSX.Element[], index?: number | null, callback?: Function)
```

### showByObj()
	根据对象显示选择器
```js
/**
 * 根据对象显示选择器
 * @param data 对象数组
 * @param valuse 要显示对象中的key
 * @param callback 选择回调
 * @param index 选择标记
 */
showByObj(data: object[], valuse?: string[], callback?: Function, index?: number | null)
```

## Contributing

yanyulin
