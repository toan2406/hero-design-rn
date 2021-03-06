// @flow
// this is from https://github.com/react-native-training/react-native-elements/blob/master/src/config/ThemeProvider.js
import React from "react";
import deepmerge from "deepmerge";

import { getTheme, type ThemeType } from "./theme";

const ThemeContext = React.createContext();
const theme = getTheme();

type ContextProps = { theme: ThemeType };
type ContextState = { theme: ThemeType };
export default class ThemeProvider extends React.Component<
  ContextProps,
  ContextState
> {
  constructor(props: ContextProps) {
    super(props);

    this.state = {
      theme: deepmerge(theme, props.theme)
    };
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export const ThemeConsumer = ThemeContext.Consumer;
