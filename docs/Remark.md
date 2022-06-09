---
title: Remark备注组件
---

# Remark备注组件

## Screenshots
<img src="/assets/remark.gif" width="20%" height="20%"> 

## Usage

```js
import { YTRemarkItem } from 'react-native-yunexpress-ui';
```

## Demo

```js

const [value, setValue] = useState<string | undefined>('');

<YTRemarkItem label='备注' value={value} onChange={(val: string) => { setValue(val) }}></YTRemarkItem>
```

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| value | string | '' | 变量值
| label | string | '' | 左边标题文案
| style | ViewStyle | {} | 样式 
| require | boolean | {} | 前面是否带红色 * 必填样式 
| onChange | Function | (val: string) => {} | 回调事件 





## Contributing

yanyulin
