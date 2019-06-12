const path = require("path");
const libPath = path.dirname(
  require.resolve("hero-design-react-native/lib/package.json")
);

module.exports = {
  components: `${libPath}/src/components/**/*.{js,jsx}`,
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
  },
  exampleMode: "collapse",
  usageMode: "expand"
};
