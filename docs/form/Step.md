---
title: Step
group:
    title: "表单"
---
# Step路由流程

## Screenshots
<img src="/assets/step.png" width="30%" height="30%"> 

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| type | string | 'default' | 完成节点的展示风格 icon图标展示\default默认黑点展示
| content | Array<{
        isFinish?: Boolean, // 节点是否已完成
        title: string,  // 节点主标题
        subTitle?: string,  // 节点副标题
        message: Array<React.ReactElement> | React.ReactElement | string,   // 节点描述内容
    }> | null | 节点数组
## Contributing
create by zhanggui