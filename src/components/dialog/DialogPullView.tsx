import React from "react";
import PropTypes from 'prop-types';
import { Animated } from 'react-native';

import Theme from '../../themes/Theme';
import DialogView from './DialogView';
import DialogSuperView from './DialogSuperView';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default class DialogPullView extends DialogSuperView {

	static propTypes = {
		...DialogSuperView.propTypes,
		side: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
		rootTransform: PropTypes.oneOfType([
			PropTypes.oneOf(['none', 'translate', 'scale']),
			PropTypes.arrayOf(PropTypes.shape({
				translateX: PropTypes.number,
				translateY: PropTypes.number,
				scaleX: PropTypes.number,
				scaleY: PropTypes.number,
			})),
		]),
	};

	static defaultProps = {
		...DialogSuperView.defaultProps,
		side: 'bottom',
		animated: true,
		rootTransform: 'none',
	};
	viewLayout: { x: number; y: number; width: number; height: number; };

	constructor(props: any) {
		super(props);
		this.viewLayout = { x: 0, y: 0, width: 0, height: 0 };
		Object.assign(this.state, {
			marginValue: new Animated.Value(0),
			showed: false,
		});
	}

	get appearAnimates() {
		let animates = super.appearAnimates;
		animates.push(
			Animated.spring(this.state.marginValue, {
				toValue: 0,
				friction: 9,
				useNativeDriver: false,
			})
		);
		return animates;
	}

	get disappearAnimates() {
		let animates = super.disappearAnimates;
		animates.push(
			Animated.spring(this.state.marginValue, {
				toValue: this.marginSize,
				friction: 9,
				useNativeDriver: false,
			})
		);
		return animates;
	}

	get appearAfterMount() {
		return false;
	}

	get marginSize() {
		let { side } = this.props;
		if (side === 'left' || side === 'right') return -this.viewLayout.width;
		else return -this.viewLayout.height;
	}

	get rootTransformValue() {
		let { side, rootTransform } = this.props;
		if (!rootTransform || rootTransform === 'none') {
			return [];
		}
		switch (rootTransform) {
			case 'translate':
				switch (side) {
					case 'top': return [{ translateY: this.viewLayout.height }];
					case 'left': return [{ translateX: this.viewLayout.width }];
					case 'right': return [{ translateX: -this.viewLayout.width }];
					default: return [{ translateY: -this.viewLayout.height }];
				}
			case 'scale':
				return [{ scaleX: 0.93 }, { scaleY: 0.93 }];
			default:
				return rootTransform;
		}
	}

	appear(animated = this.props.animated) {

		if (animated) {
			this.state.marginValue.setValue(this.marginSize);
		}
		super.appear(animated);

		let { rootTransform } = this.props;
		if (rootTransform && rootTransform !== 'none') {
			DialogView.transform(this.rootTransformValue, animated);
		}
	}

	disappear(animated = this.props.animated) {
		let { rootTransform } = this.props;
		if (rootTransform && rootTransform !== 'none') {
			DialogView.restore(animated);
		}

		super.disappear(animated);
	}

	onLayout(e: any) {
		this.viewLayout = e.nativeEvent.layout;
		if (!this.state.showed) {
			this.setState({ showed: true });
			this.appear();
		}
	}

	buildStyle() {
		let { side } = this.props;
		let sideStyle;
		//Set flexDirection so that the content view will fill the side
		switch (side) {
			case 'top':
				sideStyle = { flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' };
				break;
			case 'left':
				sideStyle = { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'stretch' };
				break;
			case 'right':
				sideStyle = { flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'stretch' };
				break;
			default:
				sideStyle = { flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'stretch' };
		}
		return super.buildStyle().concat(sideStyle);
	}

	renderContent(content = null) {
		let { side, containerStyle, children } = this.props;

		let contentStyle: any;
		switch (side) {
			case 'top':
				contentStyle = { marginTop: this.state.marginValue };
				break;
			case 'left':
				contentStyle = { marginLeft: this.state.marginValue };
				break;
			case 'right':
				contentStyle = { marginRight: this.state.marginValue };
				break;
			default:
				contentStyle = { marginBottom: this.state.marginValue };
		}
		contentStyle.opacity = this.state.showed ? 1 : 0;
		containerStyle = [{
			backgroundColor: Theme.defaultColor,
		}].concat(containerStyle).concat(contentStyle);

		return (
			<SafeAreaProvider>
				<SafeAreaView style={{ flex: 1 }}>
					<Animated.View style={containerStyle} onLayout={(e: any) => this.onLayout(e)}>
						{content ? content : children}
					</Animated.View>
				</SafeAreaView>
			</SafeAreaProvider>
			// <View style={{ width: 200, height: 300, backgroundColor: 'red' }}></View>
		);
	}

}
