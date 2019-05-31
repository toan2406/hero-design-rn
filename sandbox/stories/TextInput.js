import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextInput from '@hero-design/lib/src/components/TextInput';

class TextInputScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput />
        <TextInput error="Email can not be blank" />
        <TextInput placeholder="Enter your phone number" keyboard="numeric" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default TextInputScreen;
