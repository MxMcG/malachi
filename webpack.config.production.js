const Webpack = require('webpack');
const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const env = process.env.NODE_ENV
const activeProject = require('yargs').argv.project;
const buildPath = path.resolve(__dirname, 'build', activeProject);
const mainPath = activeProject ? path.resolve(__dirname, 'projects', activeProject, 'config.js') : null

const config = {

  // Makes sure errors in console map to the correct file
  // and line number
  devtool: 'source-map',
  entry: [
    // Our application
    mainPath],
  output: {

    // We need to give Webpack a path. It does not actually need it,
    // because files are kept in memory in webpack-dev-server, but an
    // error will occur if nothing is specified. We use the buildPath
    // as that points to where the files will eventually be bundled
    // in production
    path: buildPath,
    filename: 'bundle.js',

    // Everything related to Webpack should go through a build path,
    // localhost:3000/build. That makes proxying easier to handle
    publicPath: `/build/${activeProject}/`
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        exclude: [nodeModulesPath]
      }
    ],

    loaders: [
      // I highly recommend using the babel-loader as it gives you
      // ES6/7 syntax and JSX transpiling out of the box
      {
        test: /\.jsx$/,
        loader: 'babel',
        exclude: [nodeModulesPath]
      },

      // Let us also add the style-loader and css-loader, which you can
      // expand with less-loader etc.
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: [nodeModulesPath]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  // We have to manually add the Hot Replacement plugin when running
  // from Node
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new Webpack.optimize.UglifyJsPlugin()
  ]
};

module.exports = config;
