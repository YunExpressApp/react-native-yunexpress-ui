---
title: Upgrade升级弹框组件
group:
    title: "列表卡片"
---
# 升级弹框组件

## Screenshots
<img src="/assets/upgrade.png" width="20%" height="20%"> 

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
title
| title | String | '弹框标题' | Upgrade框内的文案
| content | Array\<String\> | ['1.abc', '2.efg'] | Upgrade框内主内容
| children | Array\<React.ReactElement\> | React.ReactElement | \<Text\>content内容\</Text\> | Upgrade框内插槽形式主内容
| handleOperation | () => any | () => {} | 弹框底部操作按钮点击触发函数

## Contributing
create by zhanggui