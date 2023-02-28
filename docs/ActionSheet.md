---
title: ActionSheet底部选择组件
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

```

## 参数
| params | Type | Default | Note |
|---|---|---|---|
| data | string[] \|\| JSX.Element[] | [] | 字符串数组或者JSX数组
| index | number | null | 默认选中的index
| callback | Function | (index: number) => {} | 选中Item的事件的回调  index选中的索引

## Contributing

yanyulin
