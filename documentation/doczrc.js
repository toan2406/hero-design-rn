const path = require('path');
const libPath = path.dirname(require.resolve('@hero-design/lib/package.json'));

export default {
  title: 'Hero Design RN',
  src: `${libPath}/src/components/`,
  onCreateWebpackChain: config =>
    config.merge({
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules\/(?!(react-native-safe-area-view)\/).*/,
            loader: 'babel-loader',
          },
        ],
      },
    }),
};
