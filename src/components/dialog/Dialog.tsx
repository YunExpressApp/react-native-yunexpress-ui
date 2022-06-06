import React from "react";
import DialogView from './DialogView';
import DialogSuperView from './DialogSuperView';
import DialogPullView from './DialogPullView';

export default class Dialog {

	static View = DialogSuperView;
	static PullView = DialogPullView;

	static show(overlayView: any) {
		let key: number;
		let onDisappearCompletedSave = overlayView?.props?.onDisappearCompleted;
		let element = React.cloneElement(overlayView, {
			onDisappearCompleted: () => {
				DialogView.remove(key);
				onDisappearCompletedSave && onDisappearCompletedSave();
			}
		});
		key = DialogView.add(element);
		return key;
	}

	static hide(key: number) {
		DialogView.remove(key);
	}

	static transformRoot(transform: any, animated: any, animatesOnly = null) {
		DialogView.transform(transform, animated, animatesOnly);
	}

	static restoreRoot(animated: any, animatesOnly = null) {
		DialogView.restore(animated, animatesOnly);
	}

}
