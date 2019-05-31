import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '@hero-design/lib/src/components/Button';

class ButtonScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pusher} />
        <Button color="red">Button</Button>
        <Button bottom>Button</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pusher: {
    flex: 1,
  },
});

export default ButtonScreen;
