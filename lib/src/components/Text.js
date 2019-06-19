// @flow
import { Text as NativeText, StyleSheet } from "react-native";
import React from "react";

import type { ThemeType } from "../config/theme";
import withTheme from "../config/withTheme";

const Text = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  style,
  children,
  theme,
  ...rest
}: {
  h1?: boolean,
  h2?: boolean,
  h3?: boolean,
  h4?: boolean,
  h5?: boolean,
  h6?: boolean,
  style?: StyleSheet.TextStyle,
  children: string,
  // @ignore
  theme: ThemeType
}) => (
  <NativeText
    style={StyleSheet.flatten([
      {
        fontFamily: theme.text.fontFamily,
        fontWeight: theme.text.fontWeight,
        color: theme.text.color
      },
      h1 && theme.text.h1Style,
      h2 && theme.text.h2Style,
      h3 && theme.text.h3Style,
      h4 && theme.text.h4Style,
      h5 && theme.text.h5Style,
      h6 && theme.text.h6Style,
      style
    ])}
    {...rest}
  >
    {children}
  </NativeText>
);

export { Text };

export default withTheme(Text);
