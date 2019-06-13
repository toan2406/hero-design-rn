import ButtonScreen from "./stories/Button";
import CustomeTheme from "./stories/CustomeTheme";
import TextInputScreen from "./stories/TextInput";

export default {
  Button: {
    screen: ButtonScreen,
    navigationOptions: {
      title: "Button"
    }
  },
  TextInput: {
    screen: TextInputScreen,
    navigationOptions: {
      title: "TextInput"
    }
  },
  CustomeTheme: {
    screen: CustomeTheme,
    navigationOptions: {
      title: "Custom Theme"
    }
  }
};
