import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "hero-design-rn";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});

class TextInputScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput />
        <TextInput error="Email can not be blank" />
        <TextInput
          placeholder="Enter your email"
          error="Email can not be blank"
          noBorder
        />
        <TextInput placeholder="Enter your phone number" keyboard="numeric" />
        <TextInput
          placeholder="Enter your phone number"
          keyboard="numeric"
          noMargin
        />
        <TextInput
          placeholder="Enter your phone number"
          keyboard="numeric"
          noBorder
        />
      </View>
    );
  }
}

export default TextInputScreen;
