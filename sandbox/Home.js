import React from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {
  BORDER_COLOR,
  BUTTON_PADDING_VERTICAL,
  BUTTON_TEXT_SIZE,
} from '@hero-design/lib/src/constants';
import routes from './routes';

const menuData = Object.keys(routes).map(route => ({
  title: routes[route].navigationOptions.title,
  route,
}));

const HomeScreen = ({ navigation }) => (
  <FlatList
    data={menuData}
    keyExtractor={({ route }) => route}
    renderItem={({ item: { title, route } }) => (
      <TouchableOpacity
        onPress={() => navigation.navigate(route)}
        style={styles.row}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    )}
    style={styles.menu}
  />
);

const styles = StyleSheet.create({
  menu: {
    flex: 1,
  },
  row: {
    alignItems: 'center',
    paddingVertical: BUTTON_PADDING_VERTICAL,
    borderBottomColor: BORDER_COLOR,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: BUTTON_TEXT_SIZE,
  },
});

export default HomeScreen;
