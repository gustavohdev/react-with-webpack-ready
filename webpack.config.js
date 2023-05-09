const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map', // use the option source-map for production
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: './dist',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      files: 'src/**/*.js',
      overrideConfig: {
        extends: ['eslint:recommended', 'plugin:react/recommended'],
        rules: {},
      },
    }),
  ],
};
