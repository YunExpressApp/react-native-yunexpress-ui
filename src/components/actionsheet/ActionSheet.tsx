import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Dialog from '../dialog';
import { w } from '../../util/CStyle';
import i18n from '../../i18n'
type ActionSheetProps = {
	onClose?: Function,
	callback?: Function,
	index?: number | null,
	data?: string[] | JSX.Element[],
	cancelText?: string
}

export default class ActionSheet extends Component<ActionSheetProps, any> {

	static overlayView: any | null;

	static show = (data: string[] | JSX.Element[], index?: number | null, callback?: Function) => {
		let overlayView = (
			<Dialog.PullView ref={v => this.overlayView = v} side='bottom' modal={false} containerStyle={{ backgroundColor: 'transparent' }}>
				<ActionSheet onClose={() => {
					this.overlayView && this.overlayView.close();
				}} callback={callback} index={index} data={data} />
			</Dialog.PullView>
		);
		Dialog.show(overlayView);
	}

	constructor(props: ActionSheetProps) {
		super(props);
		this.state = {
			data: props.data || [],
			index: props.index
		}
	}

	rendItems = () => {
		let { index } = this.state;
		let elements: JSX.Element[] = []
		this.state.data.map((item: string | JSX.Element, i: number) => {
            console.log(typeof item);
			elements.push(
				<TouchableOpacity activeOpacity={1} key={`${i}`} style={styles.itemView} onPress={() => {
					this.props.callback != null && this.props.callback(i);

					this.props.onClose != null && this.props.onClose();
				}}>
					{
                        (typeof item == "string") && 
                        <Text style={[index != null && index == i ? styles.itemSelTxt : styles.itemTxt]}>{item}</Text>
                    }
                    {
                        (typeof item != "string") && item
                    }

				</TouchableOpacity>
			)
		})
		return elements;
	}

	render() {
		let { cancelText } = this.props;
		return (
			<View style={styles.container}>
				<ScrollView style={styles.scrollView} keyboardShouldPersistTaps="always">
					{this.rendItems()}
				</ScrollView>
				<View style={styles.lineView}></View>
				<TouchableOpacity style={styles.cancelView} onPress={() => {
					this.props.onClose != null && this.props.onClose();
				}}>
					<Text style={styles.cancelTxt}>{cancelText || i18n.t("Cancel")}</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		borderTopLeftRadius: 16 * w,
		borderTopRightRadius: 16 * w
	},
	cancelView: {
		padding: 17 * w,
		fontSize: 24 * w,
		justifyContent: 'center',
		alignItems: 'center'
	},
	scrollView: {
		maxHeight: 490 * w
	},
	itemView: {
		paddingVertical: 17 * w,
		marginHorizontal: 25 * w,
		fontSize: 24 * w,
		justifyContent: 'center',
		// alignItems: 'center',
		borderBottomColor: '#EEEEEE',
		borderBottomWidth: StyleSheet.hairlineWidth
	},
	lineView: {
		backgroundColor: '#F5F5F5',
		height: 10 * w
	},
	cancelTxt: {
		color: '#303030',
		fontSize: 24 * w
	},
	itemTxt: {
		color: '#303030',
		fontSize: 24 * w,
        textAlign: 'center'
	},
	itemSelTxt: {
		color: '#1693A4',
		fontSize: 24 * w,
        textAlign: 'center'
	}
})