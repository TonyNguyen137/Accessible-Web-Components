const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    vendor: './src/vendor.js',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
    assetModuleFilename: 'images/[name][hash][ext]',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      filename: '[name].html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.html$/i,
        use: 'html-loader',
      },
    ],
  },
};
