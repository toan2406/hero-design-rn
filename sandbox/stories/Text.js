import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "hero-design-rn";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});

class TextScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Normal </Text>
        <Text h1> Heading 1 </Text>
        <Text h2> Heading 2 </Text>
        <Text h3> Heading 3 </Text>
        <Text h4> Heading 4 </Text>
        <Text h5> Heading 5 </Text>
        <Text h6> Heading 6 </Text>
        <Text> Bold </Text>
        <Text h1 bold>
          Heading 1
        </Text>
        <Text h2 bold>
          Heading 2
        </Text>
        <Text h3 bold>
          Heading 3
        </Text>
        <Text h4 bold>
          Heading 4
        </Text>
        <Text h5 bold>
          Heading 5
        </Text>
        <Text h6 bold>
          Heading 6
        </Text>
        <Text> Light </Text>
        <Text h1 light>
          Heading 1
        </Text>
        <Text h2 light>
          Heading 2
        </Text>
        <Text h3 light>
          Heading 3
        </Text>
        <Text h4 light>
          Heading 4
        </Text>
        <Text h5 light>
          Heading 5
        </Text>
        <Text h6 light>
          Heading 6
        </Text>
      </View>
    );
  }
}

export default TextScreen;
