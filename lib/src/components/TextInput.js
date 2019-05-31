// @flow
import React from 'react';
import { TextInput as RNTextInput, View, Text, StyleSheet } from 'react-native';
import {
  DANGER_COLOR,
  BORDER_COLOR,
  BORDER_RADIUS,
  INPUT_PADDING_VERTICAL,
  INPUT_PADDING_HORIZONTAL,
  INPUT_MARGIN_BOTTOM,
  INPUT_TEXT_SIZE,
} from '../constants';

const TextInput = ({
  keyboard = 'default',
  placeholder,
  value,
  onChange,
  error,
}: {
  keyboard: string,
  placeholder?: string,
  value?: string,
  onChange?: Function,
  error?: string,
}) => (
  <View style={styles.wrapper}>
    <RNTextInput
      keyboardType={keyboard}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoCorrect={false}
      style={StyleSheet.flatten([
        styles.input,
        error ? styles.inputError : null,
      ])}
    />
    {error ? <Text style={styles.textError}>{error}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: INPUT_MARGIN_BOTTOM,
  },
  input: {
    width: '100%',
    paddingVertical: INPUT_PADDING_VERTICAL,
    paddingHorizontal: INPUT_PADDING_HORIZONTAL,
    borderColor: BORDER_COLOR,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: BORDER_RADIUS,
    fontSize: INPUT_TEXT_SIZE,
  },
  inputError: {
    borderColor: DANGER_COLOR,
    borderWidth: 2,
  },
  textError: {
    marginTop: 5,
    color: DANGER_COLOR,
  },
});

export default TextInput;
