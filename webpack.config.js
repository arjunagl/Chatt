const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.jsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      PUBLIC_URL: JSON.stringify('https://localhost:3001'),
      CHATT_SERVER_URL: JSON.stringify('ws://localhost:9990/ws')
    }),
    new CopyWebpackPlugin([
      { from: './src/serviceWorker.js', to: '../public/', toType: 'dir', force: true }
    ]),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    https: true,
    contentBase: path.join(__dirname, 'public/'),
    port: 3001,
    publicPath: 'https://localhost:3001/dist/',
    hotOnly: true
  }
};
