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

## YTForm.Search Props
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

## YTForm.Input Props
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

## YTForm.InputItem Props
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
