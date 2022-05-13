import React, { RefObject, useRef, useState } from 'react';
import { StyleSheet, Text, View } from "react-native";
import { CheckBox, Alert } from 'react-native-yunexpress-ui';
export default function CheckBoxExample() {
    const alertRef: string | ((instance: Alert | null) => void) | RefObject<Alert> | null | undefined = useRef(null);
    const [isChecked, setCheced] = useState(false);

    return (
        <View style={styles.container}>
            <Text onPress={() => {
                alertRef?.current?.show("ChcekBox测试", () => { })
            }}>测试-请点我</Text>
            <Alert ref={alertRef} >
                <CheckBox
                    style={{ marginTop: 10 }} onChecked={(isChecked: boolean) => {
                        setCheced(isChecked)
                    }}
                    content={"请点我-" + (isChecked ? '已选中' : '未选中')}
                    isChecked={isChecked}
                />
            </Alert>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
});