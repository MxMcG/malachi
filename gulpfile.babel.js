const gulp = require('gulp');
// const pm2 = require('pm2');
const gutil = require("gulp-util");
const webpack = require('webpack');
const WebpackDevServer = require("webpack-dev-server");
const exec = require('child_process').exec;
const devconfig = require('./webpack.config.js');
const prodconfig = require('./webpack.config.production.js');
const activeProject = require('yargs').argv.project;
const database = require('./server/database/index.js');
const upload = require('./server/upload');

gulp.task('build:dev', (callback) => {
  process.env.NODE_ENV = 'development';
  if (!activeProject) {
    return gutil.log('Please provide a project argument ex: --project <accronym>');
  }
  // take content.json and ship it to mongo db
  database.uploadContentDev(activeProject);
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

/**
 * Outputs production bundle to build/<project>
 * Pushes content to ContentProd DB model
 * Increments project version number
 */
gulp.task('build:prod', (callback) => {
  process.env.NODE_ENV = 'production';
  if (!activeProject) {
    return gutil.log('Please provide a project argument ex: --project <accronym>');
  }
  // take content.json and ship it to mongo db
  database.uploadContentProd(activeProject);
  const compiler = webpack(prodconfig, (err, stats) => {
    if (err) throw new gutil.PluginError('webpack', err);
    // gutil.log(stats.toJson('minimal'));
    callback();
    process.exit();
  });
});

/**
 * Adds version number to project folder then uploads each file to S3
 */
gulp.task('upload:prod', () => {
  upload.toS3(activeProject);
});

/**
 * Starts express process via pm2 start
 * pm2 tasks: kill, logs
 */
gulp.task('start:prod', (callback) => {
  process.env.NODE_ENV = 'production';
  process.env.ACTIVE_PROJECT = activeProject;
  process.env.PORT = 5000;
  const child = exec('NODE_ENV=production PORT=5000 ACTIVE_PROJECT=' + activeProject + ' pm2 start server/app.js');
  child.stdout.on('data', (data) => {
    console.log('STDOUT: ' + data);
  });
  child.stderr.on('data', (data) => {
    console.log('STDERR: ' + data);
  });
  child.on('close', (code) => {
    console.log('CLOSING PROCESS: ' + code);
  });
  callback()
});
