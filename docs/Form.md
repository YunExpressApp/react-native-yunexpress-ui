<!--
 * @Date: 2022-06-18 10:23:43
 * @LastEditors: yanyulin
 * @LastEditTime: 2022-08-25 15:14:00
 * @FilePath: \yunExpresse:\git\react-native-yunexpress-ui\docs\Form.md
-->
---
title: Form组件
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
const [value, setValue] = useState("");

<YTForm.Search placeholder='请输入搜索关键字' />

<YTForm.Input label='必选项' require value={value} onChangeText={(val: string) => {
	setValue(val);
}} />

<YTForm.Input label='选择项' maxLength={10} editable={false} value="禁止输入" />

<YTForm.Input label='输入项' />

<YTForm.InputItem label='选择项' editable={true} value={value} onClick={() => {
	Alert.alert("请选择");
}} />

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
| require | boolean | false | 是否必填  必填时前面显示“*”  true:必填 false:非必填 
| editable | boolean | true | 是否可编辑 
| onClick | Function | ()=>{} | 点击事件
  

## Contributing

yanyulin
