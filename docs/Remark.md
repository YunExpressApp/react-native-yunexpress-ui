---
title: Remark组件
---

# Title组件

## Screenshots
<img src="/assets/remark.gif" width="20%" height="20%"> 

## Usage

```js
import { YTRemark, YTRemarkRef } from 'react-native-yunexpress-ui';
```

## Demo

```js
const ytRemarkRef = useRef<YTRemarkRef | null>();
<YTRemark ref={r => ytRemarkRef.current = r}></YTRemark>

ytRemarkRef.current?.show("", (val?: string) => {
	
});
```

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| maxLength | number | 255 | 备注最大限制字数
| placeholder | string | 请输入备注 | 



## Contributing

yanyulin
