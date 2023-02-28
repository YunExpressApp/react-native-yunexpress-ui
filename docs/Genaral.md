---
title: GenaralCard
---
# Genaral通用卡片组件

## Screenshots
<img src="/assets/genaralCard.png" width="20%" height="20%"> 

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| title | String | '弹框标题' | GenaralCard框内标题文案
| isPopCard | boolean | false | '弹框是否开启弹框能力'
| content | Array<String> | ['标题：信息内容'] | GenaralCard框内主内容
| children | Document | <Text style={{ fontSize: 18, fontWeight: '300', color: '#999999', marginRight: 'auto' }}>标题：信息内容</Text> | GenaralCard框内插槽形式传递主内容
| leftButtom | { text?: String, color?: String } | { text: '普通操作', color: '#999999' } | '弹框内左边操作按钮参数'
| rightButtom | { text?: String, color?: String } | { text: '主要操作', color: '#999999' } | '弹框内右边操作按钮参数'
| isShowButton | boolean | false | '是否显示按钮'
| handleLeftOperation | () => any | () => {} | '弹框内左侧操作按钮函数参数'
| handleRightOperation | () => any | () => {} | '弹框内右侧操作按钮函数参数'

## Contributing
create by zhanggui