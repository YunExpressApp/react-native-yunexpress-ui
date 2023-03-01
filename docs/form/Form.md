---
title: Form组件
group:
    title: "表单"
---

# Form组件

## Screenshots
<img src="/assets/form.gif" width="20%" height="20%"> 

## Usage

```js
import { YTForm } from 'react-native-yunexpress-ui';
```

## Demo

```js
const [value, setValue] = useState("请输入");

const [selValue, setSelValue] = useState("请选择");

const [radioIndex, setRadioIndex] = useState(0);

<YTForm.Search placeholder='请输入搜索关键字' />

<YTForm.Input label='必选项' require value={value} onChangeText={(val: string) => {
    setValue(val);
}} />

<YTForm.InputItem label='选择项' editable={true} value={selValue} onClick={() => {
    Alert.alert("请选择");
}} />

<YTForm.Radio label='单选项' data={["选项1", "选项2", "选项3"]} index={radioIndex} onChange={(i: number) => {
    setRadioIndex(i);
}} />

<YTForm.PhotosView require 
    imgUrls={["", ""]} max={50} title="照片" 
    style={{ paddingHorizontal: 32 * w }} 
    onDel={(index?: number) => {
        Alert.alert("删除图片" + index);
    }}
    onView={(index?: number) => {
        Alert.alert("查看大图" + index);
    }}
    onAdd={() => {
        Alert.alert("上传图片");
    }}
/>

```

## YTForm.Search 搜索输入框 Props 
| Prop | Type | Default | Note |
|---|---|---|---|
| style | ViewStyle | {} | 自定义样式
| value | string |  | 默认值
| multiline | boolean | false | 是否允许多行
| numberOfLines | number | 1 | 最多行数
| placeholder | string |  | 占位提示文案
| inputStyle | ViewStyle |  | 输入框文字样式
| maxLength | number |  | 限制最大长度
| editable | boolean | true | 是否可编辑输入
| onChangeText | Function | (val:string)=>{} | 输入框文字改变时回调 
| onSubmitEditing | Function | ()=>{} | 完成编辑时的回调 

## YTForm.Input  输入框 Props
| Prop | Type | Default | Note |
|---|---|---|---|
| style | ViewStyle | {} | 自定义样式
| label | string |  | 左边按钮文案
| labelStyle | TextStyle |  | 左边按钮样式
| value | string |  | 右边输入框里面的值
| inputStyle | ViewStyle |  | 右边输入框样式
| multiline | boolean | false | 是否允许多行输入
| placeholder | string |  | 占位提示符
| maxLength | number |  | 限制最大长度
| require | boolean | false | 是否必填  必填时前面显示“*”  true:必填 false:非必填 
| editable | boolean | true | 是否可编辑 
| keyboardType | KeyboardTypeOptions |  | 
| onChangeText | Function | (val:string)=>{} | 输入框文字改变时回调

## YTForm.Radio  单选按钮 Props
| Prop | Type | Default | Note |
|---|---|---|---|
| style | ViewStyle | {} | 自定义样式
| label | string |  | 左边按钮文案
| labelStyle | TextStyle |  | 左边按钮样式
| data | string[] |  | 数据源字符串数组
| index | number |  | 默认选中第几项
| require | boolean | false | 是否必填  必填时前面显示“*”  true:必填 false:非必填 
| disable | boolean | false | true 禁止点击 false:可以点击 
| onChange | Function | (index:number)=>{} | 选中的是第几项

## YTForm.InputItem  下拉选择框  Props
| Prop | Type | Default | Note |
|---|---|---|---|
| style | ViewStyle | {} | 自定义样式
| label | string |  | 左边按钮文案
| labelStyle | TextStyle |  | 左边按钮样式
| value | string |  | 右边输入框里面的值
| inputStyle | ViewStyle |  | 右边输入框样式 
| placeholder | string |  | 占位提示符
| multiline | boolean | false | 右边是否允许多行显示
| numberOfLines | number | 1 | 右边最多行数
| require | boolean | false | 是否必填  必填时前面显示“*”  true:必填 false:非必填 
| editable | boolean | true | 是否可编辑 
| onClick | Function | ()=>{} | 点击事件

## YTForm.PhotosView  九宫格图片上传组件  Props
| Prop | Type | Default | Note |
|---|---|---|---|
| style | ViewStyle | {} | 自定义样式
| titleStyle | TextStyle |  | 标题文字样式
| require | boolean | false | 是否必填  必填时前面显示“*”  true:必填 false:非必填 
| imgUrls | string[] |  | 图片数组
| max | number | 1 | 最多上传图片张数
| title | string \| JSX.Element  |  | 标题文字字符串或者JSX
| onDel | (index?: number) => void | null | 删除图片调用
| onView | (index?: number) => void | null | 查看大图调用
| onAdd | () => void | null | 上传图片
| enableEdit | boolean | true | 是否可编辑

## Contributing

yanyulin
