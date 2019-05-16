module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['@babel/preset-react', '@babel/preset-flow'],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      [
        'babel-plugin-module-resolver',
        {
          alias: {
            '^react-native$': 'react-native-web',
          },
        },
      ],
    ],
  };
};
