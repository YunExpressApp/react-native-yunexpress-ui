import React, { useEffect, useState } from "react";
import { ListRenderItemInfo, StyleSheet, Text, View } from "react-native";
import { YTRefresh, YTRefreshState } from "react-native-yunexpress-ui";

export default function RefreshExample() {

	let [dataList, setDataList] = useState([])
	let [refreshState, setRefreshState] = useState(YTRefreshState.Idle);
	let page = 1;

	useEffect(() => {
		onHeaderRefresh();
	}, [])

	const loadData = () => {
		setTimeout(() => {
			let data: any = [];
			for (let index = 0; index < 20; index++) {
				data.push(`${page}${index}`)
			}
			if (page == 1) {
				setDataList(data);
			} else {
				setDataList(dataList.concat(data));
			}
			setRefreshState(YTRefreshState.Idle)
		}, 3000);
	}

	const onHeaderRefresh = () => {
		page = 1;
		setRefreshState(YTRefreshState.HeaderRefreshing)
		loadData();
	}

	const onFooterRefresh = () => {
		page = page + 1;
		setRefreshState(YTRefreshState.FooterRefreshing)
		loadData();
	}

	const renderItem = ({ item, index }: ListRenderItemInfo<any>) => {
		return (
			<View style={styles.item}>
				<Text>{`${index} --- ${item}`}</Text>
			</View>
		);
	}
	return (
		<View style={styles.container}>
			<YTRefresh
				style={styles.refresh}
				refreshComponentType="FlatList"
				data={dataList}
				renderItem={renderItem}
				stickySectionHeadersEnabled={false}
				keyExtractor={(item: any, index: number) => {
					return item.id + '' + index
				}}
				refreshState={refreshState}
				onHeaderRefresh={onHeaderRefresh}
				onFooterRefresh={onFooterRefresh}
				ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
				footerEmptyDataComponent={() => <Text>暂无数据</Text>}
			/>
		</View>

	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	refresh: {
		flex: 1,
	},
	item: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
