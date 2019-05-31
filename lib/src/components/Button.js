// @flow
import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { PRIMARY_COLOR, BUTTON_TEXT_SIZE } from '../constants';

const Button = ({
  children,
  onPress,
  bottom,
  color = PRIMARY_COLOR,
}: {
  /** Button text */
  children: string,
  /** On press handler. Argument is `event` */
  onPress: Function,
  /** Extra space at the bottom for iPhoneX */
  bottom: boolean,
  /** Background color of button */
  color: string,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={StyleSheet.flatten([styles.wrapper, { backgroundColor: color }])}>
    <SafeAreaView
      forceInset={{ bottom: bottom ? 'always' : 'never' }}
      style={styles.button}>
      <Text
        style={StyleSheet.flatten([
          styles.buttonText,
          { fontSize: BUTTON_TEXT_SIZE },
        ])}>
        {children}
      </Text>
    </SafeAreaView>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PRIMARY_COLOR,
  },
  button: {
    paddingVertical: 24,
  },
  buttonText: {
    color: 'white',
  },
});

export default Button;
