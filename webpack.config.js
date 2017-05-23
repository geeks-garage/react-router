var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var nodeEnv = process.env.NODE_ENV || "development";

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-source-map" : false,
  entry: "./src/app/lib/render/client.js",
  output: {
    path: __dirname + "/src/",
    filename: "scripts.min.js"
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
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv),
        CLIENT_SIDE: true
      }
    })
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
