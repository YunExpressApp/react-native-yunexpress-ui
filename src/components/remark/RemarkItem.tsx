import React, { memo } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import i18n from '../../i18n'
import { w } from '../../util/CStyle';
import RemarkDialog from './RemarkDialog';


type RemarkItemProps = {
	value?: string | undefined,
	label?: string,
	style?: StyleProp<ViewStyle>,
	onChange?: Function,
	require?: boolean
}

const RemarkItem = (props: RemarkItemProps) => {
	const { label, style, onChange, require } = props;
	// const [val, setVal] = useState<string | undefined>(value);
	return (
		<TouchableOpacity style={[s.container, style]} onPress={() => {
			RemarkDialog.showView(props.value || "", (val: string) => {
				// setVal(val);
				onChange && onChange(val);
			});
		}}>
			<View style={s.left_box}>
				<Text style={{ color: '#303030', fontSize: 22 * w, marginRight: 5 * w }}>
					{require && <Text style={{ color: 'red' }}>*</Text>}
					{label}
				</Text>
			</View>
			{
				props.value ? (
					<View style={{ maxWidth: 300 * w }}>
						<Text numberOfLines={1} ellipsizeMode={'tail'} style={{ color: '#303030', fontSize: 20 * w }}>{props.value || ""}</Text>
					</View>
				) : (
					<Text style={{ color: '#CCCCCC', fontSize: 20 * w }}>{i18n.t("InputRemark")}</Text>
				)
			}
		</TouchableOpacity>
	)
}

export default memo(RemarkItem);

const s = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 20 * w,
		backgroundColor: '#FFFFFF',
		paddingHorizontal: 32 * w,
		justifyContent: 'space-between',
	},
	left_box: {
		flexDirection: 'row',
	}
})