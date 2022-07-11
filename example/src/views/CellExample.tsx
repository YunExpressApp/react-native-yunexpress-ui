import React from 'react'
import { StyleSheet, View } from "react-native";
import { YTCell } from 'react-native-yunexpress-ui';
export default function CellExample() {

	return (
		<View style={styles.container}>
			<YTCell leftTitle='左边内容' rightTitle='右边内容'></YTCell>
			<YTCell leftTitle='左边内容' rightTitle='右边内容'></YTCell>
			<YTCell leftTitle='左边内容' rightTitle='右边内容'></YTCell>

			<YTCell.ScanCode isFirst={true} data={{ code: "123456CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC", status: 1, message: "提示信息" }} />
			<YTCell.ScanCode data={{ code: "123456GGGG", status: 1, message: "提示信息" }} showDelete onDelete={() => {

			}} />
			<YTCell.ScanCode data={{ code: "123456", status: 2, message: "提示信息", value: "code值信息" }} />
			<YTCell.ScanCode data={{ code: "123456", status: 2, message: "提示信息", value: "code值信息" }} valueStyle={{ color: 'red' }} />
			<YTCell.ScanCode data={{ code: "123456", status: 2, message: "提示信息" }} />
			<YTCell.ScanCode isDel={true} data={{ code: "123456", status: 1, message: "提示信息" }} />
			<YTCell.ScanCode isDel={true} data={{ code: "123456", status: 1, message: "提示信息" }} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		padding: 24
	}
});