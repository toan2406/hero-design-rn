import normalizeText from './helpers/normalizeText';
import Button from "./components/Button";
import Text from "./components/Text";
import TextInput from "./components/TextInput";
import ThemeProvider, { ThemeConsumer } from "./config/ThemeProvider";
import defaultTheme from "./config/theme";
import withTheme from "./config/withTheme";

export {
  Button,
  TextInput,
  Text,
  ThemeProvider,
  ThemeConsumer,
  withTheme,
  normalizeText,
  defaultTheme
};
