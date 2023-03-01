---
title: functionIcon
group:
    title: "列表卡片"
---
# 功能图标

## Screenshots
<img src="/assets/functionIcon.png" width="20%" height="20%"> 

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
title
| type | String | 'functionType' | 图标组类型（模块图标类型moduleType、功能图标类型functionType）
| content | Array<{ icon: string, text: string, handleOperation: Function }> | [{ icon: require('../imgs/functionIcon/user_cancel.png'), text: '客户取消', handleOperation: () => { console.log('客户取消') }}] | icon组件图标参数

## Contributing
create by zhanggui