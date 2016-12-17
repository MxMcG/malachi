const gulp = require('gulp');
const gutil = require("gulp-util");
const webpack = require('webpack');
const WebpackDevServer = require("webpack-dev-server");
const exec = require('child_process').exec;
const config = require('./webpack.config.js');
const activeProject = require('yargs').argv.project;
const database = require('./server/database');

gulp.task('dev:build', () => {
  process.env.NODE_ENV = 'development';
  if (!activeProject) {
    return gutil.log('Please provide a project argument ex: --project <accronym>');
  }
  // take content.json and ship it to mongo db
  database.connectToDB(activeProject, 'uploadContentDev');
  const compiler = webpack(config);
  new WebpackDevServer(compiler).listen(8080, "localhost", (err) => {
    if (err) throw new gutil.PluginError("webpack-dev-server", err);
    gutil.log('Bundling assets...');
  });
});

gulp.task('dev:start', () => {
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

gulp.task('prod:build', (callback) => {
  // builds by project and outputs to specific project folder
  // setup CDN, output to  project folder in CDN
  // take current content.json file and upload to mongoDB at ProdContent collection
});

gulp.task('prod:build', (callback) => {
  // talkes build folder and updates S3 bucket
});

gulp.task('prod:start', (callback) => {
  // starts express instance based on project
  // this instance points to the CDN bundle.js based on project acrn
  // this should be ran from within the droplet/ production instance as the last step of project deployment
  // runs app.js with given property
});
