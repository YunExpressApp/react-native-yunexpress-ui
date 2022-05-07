---
title: Refresh组件
---

# Card组件

## Screenshots
<img src="/assets/refresh.jpg" width="20%" height="20%"> 

## Usage

```js
import { YTCard } from 'react-native-yunexpress-ui';
```

## Demo

```js
export default function RefreshExample() {

	let [dataList, setDataList] = useState([])
	let [refreshState, setRefreshState] = useState(YTRefreshState.Idle);
	let page = 1;

	useEffect(() => {
		onHeaderRefresh();
	}, [])

	//模拟接口请求数据
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
	//上拉刷新回调
	const onHeaderRefresh = () => {
		page = 1;
		setRefreshState(YTRefreshState.HeaderRefreshing)
		loadData();
	}
	//上拉加载更多回调
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

```

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| children | JSX.Element | JSX.Element[] | never[] |  | 卡片里面的内容
| refreshComponentType | string | 'FlatList' | 列表组件类型  FlatList 或 SectionList
| ... | any |  | 继承了  FlatList 或 SectionList 的全部props
| style | ViewStyle |  | 样式
| refreshState | YTRefreshState | YTRefreshState.Idle | YTRefreshState5个状态  Idle: 默认状态, HeaderRefreshing: 顶部刷新, FooterRefreshing: 顶部加载刷新, NoMoreData: 没有更多数据, Failure: 刷新失败, EmptyData: 没有更多数据,
| data | Array |  | 类型为FlatList的数据源
| sectionsData | Array |  | 类型为SectionList的数据源
| onHeaderRefresh | Function |  | 下拉刷新的回调方法
| onFooterRefresh | Function |  | 上拉加载的回调方法
| footerRefreshingText | string  | 底部正在刷新的文案 数据加载中…  | 上拉加载底部文案
| footerFailureText | string | 加载失败,点击重新加载 | 加载失败文案
| footerNoMoreDataText | string  | 已加载全部数据 |  没有更多数据文案
| footerEmptyDataText | string | 暂时没有相关数据 | 暂无更多数据文案
| footerRefreshingComponent | Element |  |  上拉加载底部组件
| footerFailureComponent | Element |  |  加载失败的组件
| footerNoMoreDataComponent | Element |  | 没有跟多数据的组件
| footerEmptyDataComponent | Element  |  | 没有数据的组件
| renderItem |  |  | 
 
## Contributing

yanyulin
