import React, { RefObject, useRef, useState } from 'react'
import { Text, View } from "react-native";
import { Alert } from 'react-native-yunexpress-ui'
export default function AlertExample() {
	const alertRef: string | ((instance: Alert | null) => void) | RefObject<Alert> | null | undefined = useRef(null);
	const [text, setText] = useState('');
	return <View>
		<Text onPress={() => {
			setText("")
			alertRef?.current?.show("Alert标题", () => {
				//确认键处理
				setText("已弹出Alert，并点击确认")
			})
		}}>请点我---{text}</Text>
		<Alert ref={alertRef} />
	</View>
}