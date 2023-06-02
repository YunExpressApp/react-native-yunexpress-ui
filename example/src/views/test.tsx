/*
 * @Author: 康乐 yuankangle@yunexpress.cn
 * @Date: 2023-02-28 16:39:15
 * @LastEditors: 康乐 yuankangle@yunexpress.cn
 * @LastEditTime: 2023-06-02 11:21:39
 * @FilePath: \react-native-yunexpress-ui\example\src\views\test.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import { View, Alert, Text } from 'react-native';

export default class App extends Component {
    showAlert = () => {
        Alert.alert('Alert Title', 'My Alert Msg',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'), style: 'cancel'
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ], { cancelable: false })
    }

    render() {
        return (<View>
            <Text onPress={() => {
                this.showAlert()
            }}>show</Text>
        </View>);
    }
}
