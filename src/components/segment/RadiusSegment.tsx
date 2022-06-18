import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ViewStyle, StyleProp } from 'react-native'
import { w } from '../../util/CStyle';

type RadiusSegmentProps = {
	leftText?: string,
	rightText?: string,
	index?: number,
	onChange?: Function,
	style?: StyleProp<ViewStyle>,
}

type RadiusSegmentStatus = {
	current?: number
}

export default class RadiusSegment extends Component<RadiusSegmentProps, RadiusSegmentStatus> {

	// static propTypes = {
	// 	leftText: PropTypes.string,   //左边按钮文字
	// 	rightText: PropTypes.string,  //右边按钮文字
	// 	defaultIndex: PropTypes.oneOf([0, 1]), //默认选中项 0：左边 1：右边
	// };

	// static defaultProps = {
	// 	leftText: '新增',
	// 	rightText: '删除',
	// 	defaultIndex: 0
	// };

	constructor(props: RadiusSegmentProps) {
		super(props)
		// let { defaultIndex = 0 } = props;
		// this.state = {
		// 	current: defaultIndex
		// }
	}

	segmentChange = (current: number) => {
		// this.setState({ current })
		this.props.onChange && this.props.onChange(current);
	}

	render() {
		let { index } = this.props;
		let { leftText = '新增', rightText = '删除' } = this.props;
		return (
			<View style={this.props.style}>
				<View style={styles.header}>
					<TouchableOpacity
						activeOpacity={1}
						onPress={() => this.segmentChange(0)}
						style={index == 0 ? styles.actToBg : styles.toBg}
					>
						<View style={index == 0 ? styles.actBg : styles.bgRight}>
							<Text style={index == 0 ? styles.hAddTxtSel : styles.hAddTxt}>
								{leftText}
							</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						activeOpacity={1}
						onPress={() => this.segmentChange(1)}
						style={index == 1 ? styles.actToBg : styles.toBg}
					>
						<View style={index == 1 ? styles.actBg : styles.bg}>
							<Text style={index == 1 ? styles.actDelTxt : styles.delTxt}>{rightText}</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		height: 64 * w,
		borderTopRightRadius: 30 * w,
		borderTopLeftRadius: 30 * w,
		backgroundColor: 'white',
		alignItems: 'center',
		overflow: 'hidden'
	},
	actToBg: {
		backgroundColor: '#E5E5E5',
		flex: 1,
	},
	toBg: {
		backgroundColor: 'white',
		flex: 1,
	},
	actBg: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		height: '100%',
		borderTopRightRadius: 30 * w,
		borderTopLeftRadius: 30 * w,
	},
	bg: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomLeftRadius: 12 * w,
		height: '100%',
		backgroundColor: '#E5E5E5'
	},
	bgRight: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomRightRadius: 12 * w,
		height: '100%',
		backgroundColor: '#E5E5E5'
	},
	hAddTxt: {
		color: '#1693A4',
		fontSize: 20 * w
	},
	hAddTxtSel: {
		color: '#1693A4',
		fontSize: 22 * w
	},
	delTxt: {
		color: '#EF7E2D',
		fontSize: 20 * w
	},
	actDelTxt: {
		color: '#EF7E2D',
		fontSize: 22 * w
	}
})
