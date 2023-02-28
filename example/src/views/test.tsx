import React, { Component } from 'react';
import { StyleSheet, View, Alert, Text, TouchableOpacity } from 'react-native';

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

const styles = StyleSheet.create({ container: { flex: 1, justifyContent: 'center', alignItems: 'center' }, button: { backgroundColor: '#4ba37b', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20 } });