const gulp = require('gulp');
const gutil = require("gulp-util");
const webpack = require('webpack');
const WebpackDevServer = require("webpack-dev-server");
const exec = require('child_process').exec;
const devconfig = require('./webpack.config.js');
const prodconfig = require('./webpack.config.production.js');
const activeProject = require('yargs').argv.project;
const database = require('./server/database');
const upload = require('./server/upload');

gulp.task('build:dev', (callback) => {
  process.env.NODE_ENV = 'development';
  if (!activeProject) {
    return gutil.log('Please provide a project argument ex: --project <accronym>');
  }
  // take content.json and ship it to mongo db
  database.connectToDB(activeProject, 'uploadContentDev');
  const compiler = webpack(devconfig);
  new WebpackDevServer(compiler).listen(8080, "localhost", (err) => {
    if (err) throw new gutil.PluginError("webpack-dev-server", err);
    gutil.log('Bundling assets...');
    callback();
  });
});

gulp.task('start:dev', (callback) => {
  process.env.NODE_ENV = 'development';
  process.env.ACTIVE_PROJECT = activeProject;
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

gulp.task('build:prod', (callback) => {
  process.env.NODE_ENV = 'production';
  if (!activeProject) {
    return gutil.log('Please provide a project argument ex: --project <accronym>');
  }
  // take content.json and ship it to mongo db
  database.connectToDB(activeProject, 'uploadContentProd');
  const compiler = webpack(prodconfig, (err, stats) => {
    if (err) throw new gutil.PluginError('webpack', err);
    gutil.log(stats.toJson('minimal'));
    callback();
  });
});

gulp.task('upload:prod', () => {
  upload.toS3(activeProject);
});

gulp.task('prod:start', (callback) => {
  // starts express instance based on project
  // this instance points to the CDN bundle.js based on project acrn
  // this should be ran from within the droplet/ production instance as the last step of project deployment
  // runs app.js with given property
  callback()
});
