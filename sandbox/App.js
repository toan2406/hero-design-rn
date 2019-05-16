import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '@hero-design/lib/src/components/Button';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pusher} />
        <Button position="bottom">Button</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pusher: {
    flex: 1,
  },
});
