import { Button, ThemeProvider } from "hero-design-rn";
import { View, StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  pusher: {
    flex: 1
  }
});

const theme = {
  colors: {
    primaryColor: "#ff3242"
  }
};

class CustomeTheme extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <View style={styles.pusher} />
          <Button color="blue">Button</Button>
          <Button bottom>Button</Button>
        </View>
      </ThemeProvider>
    );
  }
}

export default CustomeTheme;
