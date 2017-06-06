var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var nodeEnv = process.env.NODE_ENV || "development";
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, 'src'),
  devtool: "inline-source-map",
  entry: [
    "./app/lib/render/index.js",
    "./app/assets/styles/main/index.less"
  ],
  output: {
    publicPath: 'src/public/',
    path: path.resolve(__dirname, "src/build/"),
    filename: "scripts.min.js"
  },
  devServer: {
    contentBase: 'src/public'
  },
  module : {
    loaders : [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader : 'babel-loader'
      },
      {
        test: /\.less$/,
        // include: path.resolve(__dirname, 'src/app'),
        // loader: debug
        //   ? "style-loader!css-loader!less-loader"
        //   : ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
        loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader!less-loader" })
      }
    ]
  },
  plugins: debug ? [
    new ExtractTextPlugin("style.css"),
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
    new ExtractTextPlugin("style.css"),
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
