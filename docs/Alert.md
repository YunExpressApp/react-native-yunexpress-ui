---
title: Alert弹框
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

## Contributing
create by yuankangle
