const Webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const activeProject = require('yargs').argv.project;
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const env = process.env.NODE_ENV
const buildPath = path.resolve(__dirname, 'build', activeProject);
const buildPathImg = path.resolve(__dirname, 'build', activeProject, 'images');
const projectPath = activeProject ? path.resolve(__dirname, 'projects', activeProject) : null;
const mainPath = activeProject ? path.resolve(__dirname, 'projects', activeProject, 'config.js') : null;
const projectImgsPath = activeProject ? path.resolve(__dirname, 'projects', activeProject, 'images') : null;
const assetsOutput = activeProject ? path.resolve(__dirname, 'projects', activeProject) : null

const config = {

  // Makes sure errors in console map to the correct file
  // and line number
  devtool: 'source-map',
  entry: [
    mainPath
  ],
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: `/build/${activeProject}/`
  },
  module: {
    loaders: [
      // I highly recommend using the babel-loader as it gives you
      // ES6/7 syntax and JSX transpiling out of the box
      {
        test: /\.jsx$/,
        loader: 'babel',
        exclude: [nodeModulesPath]
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [nodeModulesPath]
      },
      // Let us also add the style-loader and css-loader, which you can
      // expand with less-loader etc.
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass?sourceMap'),
        exclude: [nodeModulesPath]
      },
      {
        // Match woff2 in addition to patterns like .woff?v=1.1.1.
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          // Limit at 50k. Above that it emits separate files
          limit: 50000,

          // url-loader sets mimetype if it's passed.
          // Without this it derives it from the file extension
          mimetype: 'application/font-woff',

          // Output below fonts directory
          name: `projects/${projectPath}/styles/[name].[ext]`,
        },
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
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
    new Webpack.optimize.UglifyJsPlugin(),
    new CopyWebpackPlugin([
      {
        from: projectImgsPath, to: buildPathImg
      }
    ]),
    new CleanWebpackPlugin(buildPath, {
      // Without `root` CleanWebpackPlugin won't point to our
      // project and will fail to work.
      root: process.cwd()
    }),
    new ExtractTextPlugin('index.css', {
      allChunks: false
    })
  ]
};

module.exports = config;
