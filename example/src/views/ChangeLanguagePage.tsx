/*
 * @Author: 袁康乐 yuankangle@yunexpress.cn
 * @Date: 2022-06-13 10:22:40
 * @LastEditors: 袁康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2022-09-26 11:17:13
 * @FilePath: \react-native-yunexpress-ui\example\src\views\ButtonExample.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react'
import { Text, View } from "react-native";
import { Button, Theme, w } from 'react-native-yunexpress-ui'
export default function ChangeLanguagePage() {
	const [text, setText] = useState(Theme.locale || 'zh');
	return <View>
		<Text style={{ textAlign: 'center', padding: 10 }}>--- 当前语言{text} ---</Text>
		<Button
			style={{ marginBottom: 16 * w }}
			buttonRightText={'切换语言'}
			onRightPress={() => {
				if (Theme.locale == 'zh') {
					Theme.locale = 'en'
					setText("en")
				} else {
					Theme.locale = 'zh'
					setText("zh")
				}
			}}
		/>
	</View>
}