import { Button, Text, ThemeProvider, normalizeText } from "hero-design-rn";
import { View, StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  pusher: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 20,
    flex: 1
  }
});

const theme = {
  text: {
    fontFamily: "Avenir",
    h1Style: {
      fontSize: normalizeText(22)
    },
    h2Style: {
      fontSize: normalizeText(20)
    },
    h3Style: {
      fontSize: normalizeText(18)
    },
    h4Style: {
      fontSize: normalizeText(16)
    },
    h5Style: {
      fontSize: normalizeText(14)
    },
    h6Style: {
      fontSize: normalizeText(12)
    }
  },
  colors: {
    primaryColor: "#ff3242"
  }
};

class CustomeTheme extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <View style={styles.pusher}>
            <Text h1> Heading 1 </Text>
            <Text h2> Heading 2 </Text>
            <Text h3> Heading 3 </Text>
            <Text h4> Heading 4 </Text>
            <Text h5> Heading 5 </Text>
            <Text h6> Heading 6 </Text>
          </View>
          <Button color="blue">Button</Button>
          <Button bottom>Button</Button>
        </View>
      </ThemeProvider>
    );
  }
}

export default CustomeTheme;
