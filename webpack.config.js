var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-source-map" : false,
  entry: "./src/index.js",
  output: {
    path: __dirname + "/src/",
    filename: "scripts.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ],
  module : {
    loaders : [
      {
        test : /\.js?$/,
        include : path.resolve(__dirname, 'src'),
        exclude: /(node_modules)/,
        loader : 'babel-loader'
      }
    ]
  }
};
