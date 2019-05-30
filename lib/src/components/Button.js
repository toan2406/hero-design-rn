// @flow
import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { PRIMARY_COLOR, BUTTON_TEXT_SIZE } from '../constants';

type Props = {
  children: any,
  onPress: Function,
  position: string,
  color: string,
};

class Button extends React.Component<Props> {
  render() {
    const { children, onPress, position, color = PRIMARY_COLOR } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={StyleSheet.flatten([
          styles.wrapper,
          { backgroundColor: color },
        ])}>
        <SafeAreaView
          forceInset={{ [position]: 'always' }}
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
  }
}

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
