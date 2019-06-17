import ButtonScreen from "./stories/Button";
import CustomeTheme from "./stories/CustomeTheme";
import TextInputScreen from "./stories/TextInput";
import TextScreen from "./stories/Text";

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
  Text: {
    screen: TextScreen,
    navigationOptions: {
      title: "Text"
    }
  },
  CustomeTheme: {
    screen: CustomeTheme,
    navigationOptions: {
      title: "Custom Theme"
    }
  }
};
