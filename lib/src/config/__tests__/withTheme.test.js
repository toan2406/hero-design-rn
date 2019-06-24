// @flow
import deepmerge from "deepmerge";
import React from "react";
import { View } from "react-native";

import renderer from "react-test-renderer";

import { getTheme, injectTheme } from "../theme";
import withTheme from "../withTheme";

describe("withTheme", () => {
  const defaultTheme = getTheme();
  const TestComponent = () => <View />;
  const ThemedTestComponent = withTheme(TestComponent);

  it("passes default theme to wrapped component", () => {
    const component = renderer.create(<ThemedTestComponent />);
    const childProps = component.root.findByType(TestComponent).props;
    expect(childProps.theme).toBeDefined();
    expect(childProps.theme.text.fontFamily).toEqual(
      defaultTheme.text.fontFamily
    );
  });

  describe("when inject theme", () => {
    it("uses inject theme", () => {
      const theme = {
        text: { fontFamily: "New Font" }
      };
      injectTheme(deepmerge(defaultTheme, theme));

      const component = renderer.create(<ThemedTestComponent />);
      const childProps = component.root.findByType(TestComponent).props;
      expect(childProps.theme).toBeDefined();
      expect(childProps.theme.text.fontFamily).toEqual("New Font");
    });
  });
});
