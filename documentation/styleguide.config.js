const path = require("path");

const libPath = path.dirname(require.resolve("../lib/package.json"));
const { styles, theme } = require("./styleguide.style");

module.exports = {
  styles,
  theme,
  sections: [
    {
      name: "Introduction",
      content: "docs/introduction.md"
    },
    {
      name: "Documentation",
      sections: [
        {
          name: "Installation",
          content: "docs/installation.md",
          description: "The description for the installation section"
        },
        {
          name: "Customization",
          content: "docs/customization.md"
        },
        {
          name: "Theme configuration",
          components: `../lib/src/config/theme.js`,
          content: "docs/theme.md"
        }
      ]
    },
    {
      name: "Components",
      components: `${libPath}/src/components/**/*.{js,jsx}`,
      exampleMode: "collapse",
      usageMode: "expand"
    }
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules\/(?!(react-native-safe-area-view)\/).*/,
          loader: "babel-loader"
        }
      ]
    }
  }
};
