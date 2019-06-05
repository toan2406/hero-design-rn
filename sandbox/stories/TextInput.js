import React from "react";
import { View, StyleSheet } from "react-native";
import TextInput from "@hero-design/lib/src/components/TextInput";

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
        <TextInput placeholder="Enter your phone number" keyboard="numeric" />
      </View>
    );
  }
}

export default TextInputScreen;
