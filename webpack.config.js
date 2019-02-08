const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.eot|ttf|svg|png$/,
        loader: 'file-loader'
      },
      {
        test: /\.woff2?$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new WebpackNotifierPlugin({alwaysNotify: true})
  ]
};
