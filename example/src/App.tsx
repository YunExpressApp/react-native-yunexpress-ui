import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Button, Alert } from 'react-native-yunexpress-ui';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const [show, setShow] = React.useState<boolean | undefined>(false)

  React.useEffect(() => {
  }, []);

  return (
    <View style={styles.container}>
      <Button
        buttonLeftText={"取消"}
        buttonRightText={"确认"}
        isBorder={false}
        onLeftPress={() => {
          //...
          setShow(true)
        }}
        onRightPress={() => {
          //...
        }}
        title={'标题'}
        btnLeftTextStyle={{ color: '#303030', fontSize: 24 }}
        btnTextStyle={{ color: '#1592A3', fontSize: 24 }}
        btnStyle={{ flex: 1, backgroundColor: '#00000000', alignItems: 'flex-start', paddingTop: 10 }}
      />
      <Alert
        show={show}
        title={'弹框'}
        onClose={() => {
          setShow(false)
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
