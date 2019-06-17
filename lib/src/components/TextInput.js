// @flow
import { TextInput as RNTextInput, View, StyleSheet } from "react-native";
import React from "react";

import type { ThemeType } from "../config/theme";
import Text from "./Text";
import withTheme from "../config/withTheme";

const styles = StyleSheet.create({
  wrapper: (theme: ThemeType) => ({
    marginBottom: theme.input.marginBottom
  }),
  input: (theme: ThemeType) => ({
    width: "100%",
    paddingVertical: theme.input.paddingVertical,
    paddingHorizontal: theme.input.paddingHorizontal,
    borderColor: theme.colors.borderColor,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: theme.input.borderRadius,
    fontSize: theme.input.textSize
  }),
  inputError: (theme: ThemeType) => ({
    borderColor: theme.colors.dangerColor,
    borderWidth: 2
  }),
  textError: (theme: ThemeType) => ({
    marginTop: 5,
    color: theme.colors.dangerColor
  })
});

const TextInput = ({
  theme,
  keyboard = "default",
  placeholder,
  value,
  onChange,
  error
}: {
  theme: ThemeType,
  keyboard: string,
  placeholder?: string,
  value?: string,
  onChange?: Function,
  error?: string
}) => (
  <View style={styles.wrapper(theme)}>
    <RNTextInput
      keyboardType={keyboard}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoCorrect={false}
      style={StyleSheet.flatten([
        styles.input(theme),
        error ? styles.inputError(theme) : null
      ])}
    />
    {error ? <Text style={styles.textError(theme)}>{error}</Text> : null}
  </View>
);

export { TextInput };

export default withTheme(TextInput);
