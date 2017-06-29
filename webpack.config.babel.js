const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Phaser webpack config
const phaserModule = path.join(__dirname, '/node_modules/phaser/');
const phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
const pixi = path.join(phaserModule, 'build/custom/pixi.js');
const p2 = path.join(phaserModule, 'build/custom/p2.js');


module.exports = env => ({
  entry: {
    app: [
      'babel-polyfill',
      path.resolve(__dirname, 'src/main.js'),
    ],
    bundle: ['pixi', 'p2', 'phaser', 'webfontloader'],
  },
  devtool: 'source-map',
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, 'build'),
    publicPath: '',
    filename: 'app.js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'bundle', filename: 'bundle.js' }),
    (env.dev ? false : new webpack.optimize.ModuleConcatenationPlugin()),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
    }),
  ].filter(Boolean),
  module: {
    loaders: [
      { test: /pixi\.js/, use: ['expose-loader?PIXI'] },
      { test: /phaser-split\.js$/, use: ['expose-loader?Phaser'] },
      { test: /p2\.js/, use: ['expose-loader?p2'] },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loaders: [
          'file-loader?name=[name].[ext]',
          'image-webpack-loader',
        ],
      },
    ],
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  resolve: {
    alias: {
      phaser,
      pixi,
      p2,
    },
  },
});
