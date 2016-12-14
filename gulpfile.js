const gulp = require('gulp');
const gutil = require("gulp-util");
const webpack = require('webpack');
const WebpackDevServer = require("webpack-dev-server");
const exec = require('child_process').exec;
const config = require('./webpack.config.js');
const activeProject = require('yargs').argv.project;

gulp.task('dev:build', (callback) => {
  const compiler = webpack(config);
  new WebpackDevServer(compiler, {

  }).listen(8080, "localhost", (err) => {
    if (err) throw new gutil.PluginError("webpack-dev-server", err);
    gutil.log('Bundling assets...');
  });
});

gulp.task('dev:start', () => {
  const child = exec('node server/app.js');
  child.stdout.on('data', (data) => {
    console.log('STDOUT: ' + data);
  });
  child.stderr.on('data', (data) => {
    console.log('STDERR: ' + data);
  });
  child.on('close', (code) => {
    console.log('CLOSING PROCESS: ' + code);
  });
});

gulp.task('prod:build', (callback) => {
  // builds by project and outputs to specific project folder
});

gulp.task('prod:upload', (callback) => {
  // takes build and updates CDN with bundled project at property folder
});

gulp.task('prod:start', (callback) => {
  // starts express instance based on project
  // this instance points to the CDN bundle.js based on project acrn
  // this should be ran from within the droplet/ production instance as the last step of project deployment
});
