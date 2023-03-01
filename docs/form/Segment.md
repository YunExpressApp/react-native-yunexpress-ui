---
title: Segment分段选择组件
group:
    title: "表单"
---

# Segment分段选择组件

## Screenshots
<img src="/assets/segment.gif" width="20%" height="20%"> 

## Usage

```js
import { YTSegment } from 'react-native-yunexpress-ui';
```

## Demo

```js

<YTSegment.Title data={["标签1", "标签2"]} index={0}/>

<YTSegment.Sub data={["标签1", "标签2"]} />

<YTSegment.Radius leftText='添加' rightText='删除' />
```

## YTSegment.Title  Props
| Prop | Type | Default | Note |
|---|---|---|---|
| style | ViewStyle | {} | 样式 
| itemStyle | ViewStyle | {} | 每项Item的样式 
| data | string[] | [] | 数据 eg: ["标签1","标签2"]
| index | snumber | null | 选中位置的索引
| onChange | Function | (index: number) => {} | 分段标签切换改变事件 

## YTSegment.Sub  Props
| Prop | Type | Default | Note |
|---|---|---|---|
| style | ViewStyle | {} | 样式 
| data | string[] | [] | 数据 eg: ["标签1","标签2"]
| colors | string[] | [] | 每个栏目选中的字体颜色 eg: ["#1592A3", "#EF7E2C"]
| onChange | Function | (index: number) => {} | 分段标签切换改变事件 


## YTSegment.Radius  Props
| Prop | Type | Default | Note |
|---|---|---|---|
| style | ViewStyle | {} | 样式 
| leftText | string | '' | 左边标签文案
| rightText | string | '' | 右边标签文案
| onChange | Function | (index: number) => {} | 分段标签切换改变事件 

 


## Contributing

yanyulin
