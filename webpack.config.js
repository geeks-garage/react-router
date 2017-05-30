var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var nodeEnv = process.env.NODE_ENV || "development";
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-source-map" : false,
  entry: [
    "./src/app/assets/styles/main/index.less",
    "./src/app/lib/render/client.js"
  ],
  output: {
    publicPath: '/',
    path: __dirname + "/src/",
    filename: "scripts.min.js"
  },
  module : {
    loaders : [
      {
        test: /\.js?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules)/,
        loader : 'babel-loader'
      },
      {
        test: /\.less$/,
        // include: path.resolve(__dirname, 'src/app'),
        loader: debug
          ? "style-loader!css-loader!less-loader"
          : ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      }
    ]
  },
  plugins: debug ? [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv),
        CLIENT_SIDE: true
      }
    })
  ]
  :
  [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
    new ExtractTextPlugin("style.css", { allChunks: false }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv),
        CLIENT_SIDE: true
      }
    })
  ]
};
