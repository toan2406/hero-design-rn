// @flow
import { Text as NativeText, StyleSheet } from "react-native";
import React from "react";

import type { ThemeType } from "../config/theme";
import withTheme from "../config/withTheme";

const Text = ({
  h1 = false,
  h2 = false,
  h3 = false,
  h4 = false,
  h5 = false,
  h6 = false,
  bold = false,
  bolder = false,
  light = false,
  lighter = false,
  primary = false,
  secondary = false,
  danger = false,
  warning = false,
  success = false,
  style = {},
  children,
  theme,
  ...rest
}: {
  /**
   * Text font size, on EH it's fontSize 22
   */
  h1?: boolean,
  /**
   * Text font size, on EH it's fontSize 20
   */
  h2?: boolean,
  /**
   * Text font size, on EH it's fontSize 18
   */
  h3?: boolean,
  /**
   * Text font size, on EH it's fontSize 16
   */
  h4?: boolean,
  /**
   * Text font size, on EH it's fontSize 14
   */
  h5?: boolean,
  /**
   * Text font size, on EH it's fontSize 12
   */
  h6?: boolean,
  /**
   * Text font weight, on EH it's 500
   */
  bold?: boolean,
  /**
   * Text font weight, on EH it's 600
   */
  bolder?: boolean,
  /**
   * Text font weight, on EH it's 300
   */
  light?: boolean,
  /**
   * Text font weight, on EH it's 200
   */
  lighter?: boolean,
  /**
   * Text color, on EH it's #737373
   */
  primary?: boolean,
  /**
   * Text color, on EH it's #fff
   */
  secondary?: boolean,
  /**
   * Text color, on EH it's #FF0035
   */
  danger?: boolean,
  /**
   * Text color, on EH it's #FFA234
   */
  warning?: boolean,
  /**
   * Text color, on EH it's #003580
   */
  success?: boolean,
  /**
   * Custom styles be applied
   */
  style?: StyleSheet.TextStyle,
  /**
   *
   * @ignore
   */
  children: string,
  /**
   *
   * @ignore
   */
  theme: ThemeType
}) => (
  <NativeText
    style={StyleSheet.flatten([
      {
        fontFamily: theme.text.fontFamily,
        fontWeight: theme.text.fontWeight,
        color: theme.text.defaultColor
      },
      h1 && theme.text.h1Style,
      h2 && theme.text.h2Style,
      h3 && theme.text.h3Style,
      h4 && theme.text.h4Style,
      h5 && theme.text.h5Style,
      h6 && theme.text.h6Style,
      bold && theme.text.boldStyle,
      bolder && theme.text.bolderStyle,
      light && theme.text.lightStyle,
      lighter && theme.text.lighterStyle,
      primary && { color: theme.text.primaryColor },
      secondary && { color: theme.text.secondaryColor },
      danger && { color: theme.text.dangerColor },
      warning && { color: theme.text.warningColor },
      success && { color: theme.text.successColor },
      style
    ])}
    {...rest}
  >
    {children}
  </NativeText>
);

export { Text };

export default withTheme(Text);
