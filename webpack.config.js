'use strict';
const webpack = require('webpack');

module.exports = {
  entry: './src/scripts/main.js',
  output: {
    filename: 'main.bundle.js',
    path: './'
  },
  module: {
    loaders: [
      {test: /.js$/, exclude: /node_modules/, loader: 'babel'}
    ]
  }
  ,plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      mangle: {
        except: ['exports', 'require']
      },
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};
