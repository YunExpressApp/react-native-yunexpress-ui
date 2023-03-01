---
title: Tip弹框组件
group:
    title: "表单"
---
# Tip弹框组件

## Screenshots
<img src="/assets/tip.png" width="20%" height="20%"> 

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| content | Document | \<Text\>Tip组件\</Text\> | tip框触发节点/可以使Text标题也可以是Button等
| placement | String | '' | tip框出现方向 left right top bottom
| tipMessage | String | '' | tip框内的文案
| bgColor | String | '#fff' | tip框背景颜色
| textColor | String | '#fff' | tip框文案颜色
| isHideTitleIcon | Boolean | false | 是否显示右侧Icon，默认为false
| isShowButton | Boolean | false | tip框是否显示底部操作按钮 取消和操作
| tipType | String | '' | tip主题色类型（默认黑白、警告橙、错误红） warn/error
| iconResource | Image | require("../imgs/white_close.png") | tip框右侧Icon图片来源可定制icon图标，默认大小14
| spaceBetween | number | 0 | tip框与点击触发文案间距
| handleOperation | any | () => {} | tip框底部操作按钮点击触发函数
| offsetNumber | number | 6 | tip框三角箭头偏移量
| boxWidthNumber | number | 358 | tip框长度
| rightIconHandleOperation | Function | () => {} | tip框右侧图标点击事件
## Contributing
create by zhanggui