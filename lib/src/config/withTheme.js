// @flow
// this is from https://github.com/react-native-training/react-native-elements/blob/master/src/config/withTheme.js

import * as React from "react";
import hoistNonReactStatics from "hoist-non-react-statics";

import { ThemeConsumer } from "./ThemeProvider";
import { getTheme } from "./theme";

const isClassComponent = Component =>
  Boolean(Component.prototype && Component.prototype.isReactComponent);

const withTheme = (WrappedComponent: React.ComponentType) => {
  class ThemedComponent extends React.Component {
    render() {
      const { forwardedRef, children, ...rest } = this.props;

      return (
        <ThemeConsumer>
          {context => {
            // If user isn't using ThemeProvider
            if (!context) {
              const props = { ...rest, theme: getTheme(), children };

              return isClassComponent(WrappedComponent) ? (
                <WrappedComponent ref={forwardedRef} {...props} />
              ) : (
                <WrappedComponent {...props} />
              );
            }

            const { theme } = context;
            const props = {
              theme,
              children,
              ...rest
            };

            if (isClassComponent(WrappedComponent)) {
              return <WrappedComponent ref={forwardedRef} {...props} />;
            }
            return <WrappedComponent {...props} />;
          }}
        </ThemeConsumer>
      );
    }
  }

  const name = `Themed.${WrappedComponent.displayName ||
    WrappedComponent.name ||
    "Component"}`;

  if (isClassComponent(WrappedComponent)) {
    const forwardRef = (props, ref) => (
      <ThemedComponent {...props} forwardedRef={ref} />
    );

    forwardRef.displayName = name;
    return hoistNonReactStatics(React.forwardRef(forwardRef), WrappedComponent);
  }

  ThemedComponent.displayName = name;
  return ThemedComponent;
};

export default withTheme;
