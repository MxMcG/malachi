const gulp = require('gulp');
const gutil = require("gulp-util");
const webpack = require('webpack');
const WebpackDevServer = require("webpack-dev-server");
const exec = require('child_process').exec;
const config = require('./webpack.config.js');

gulp.task('dev', (callback) => {
  const compiler = webpack(config);
  new WebpackDevServer(compiler, {

  }).listen(8080, "localhost", (err) => {
    if (err) throw new gutil.PluginError("webpack-dev-server", err);
    // Server listening
    gutil.log("[webpack-dev-server]", "http://localhost:8080/build/bundle.js");
    // keep the server alive or continue?
    // callback();
  });
});

gulp.task('devserver', () => {

  exec('node server/app.js', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });

  console.log('Task Ran');
});

gulp.task('express prod', () => {
  console.log('Task Ran');
});
