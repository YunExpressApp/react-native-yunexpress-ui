---
title: SearchBox
group:
    title: "表单"
---
# SearchBox通用卡片组件

## Screenshots
<img src="/assets/search.png" width="20%" height="20%"> 

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| searchList | Array\<Object\> | [{}] | 全量搜索数据来源
| title | String | '弹框标题' | SearchBox框内标题文案
| placeholder | String | '请输入搜索内容' | 输入框placeholder文案
| colorType | String | 'bright' | 输入框底色风格（深色\浅色） bright深色 tint浅色
| onChangeText | (e) => any | () => {} | '输入内容时触发的回调函数'
| onSubmitEditing | (e) => any | () => {} | '回车确认时触发的回调函数'
| onCancelText | () => any | () => {} | '点击取消时触发的回调函数'


## Contributing
create by zhanggui