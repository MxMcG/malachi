const gulp = require('gulp');
const gutil = require("gulp-util");
const webpack = require('webpack');
const WebpackDevServer = require("webpack-dev-server");
const exec = require('child_process').exec;
const devconfig = require('./webpack.config.js');
const prodconfig = require('./webpack.config.production.js');
// ARGVs
const activeProject = require('yargs').argv.project;
const authUsername = require('yargs').argv.username;
const authPassword = require('yargs').argv.password;

const database = require('./server/database/index.js');
const upload = require('./server/upload');
const projectContent = activeProject ? require(`./projects/${activeProject}/content/content.json`) : null
// require('dotenv').config();

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

gulp.task('pushContent:dev', (callback) => {
  process.env.NODE_ENV = 'development';
  database.localContentPush(activeProject, projectContent, process.env.NODE_ENV).then((success) => {
    gutil.log('Local Content Pushed To DB');
    callback();
  }, (err) => {
    gutil.log('Err Local Content Pushed To DB', err);
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
  // database.uploadContentProd(activeProject);
  const compiler = webpack(prodconfig, (err, stats) => {
    if (err) throw new gutil.PluginError('webpack', err);
    gutil.log(stats.toJson());
    callback();
    process.exit();
  });
});

gulp.task('pushContent:prod', (callback) => {
  process.env.NODE_ENV = 'production';
  database.localContentPush(activeProject, projectContent, process.env.NODE_ENV).then((success) => {
    gutil.log('Local Content Pushed To DB');
    callback();
  }, (err) => {
    gutil.log('Err Local Content Pushed To DB', err);
    callback();
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
  const child = exec(`pm2 start ecosystem.config.js --env production`);
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

// USER auth

gulp.task('createUser:dev', (callback) => {
  const env = 'development';
  process.env.ACTIVE_PROJECT = activeProject;
  database.createAdminUser(env, authUsername, authPassword, activeProject).then((data) => {
    gutil.log(`Successfully added new user: ${data.username} for project: ${data.projectAbv}`);
    callback();
  }, (err) => {
    gutil.log('Error: Pushing User to DB', err);
    callback();
  });
});

gulp.task('createUser:prod', (callback) => {
  const env = 'production';
  process.env.ACTIVE_PROJECT = activeProject;
  database.createAdminUser(env, authUsername, authPassword, activeProject).then((data) => {
    gutil.log(`Successfully added new user: ${data.username} for project: ${data.projectAbv}`);
    callback();
  }, (err) => {
    gutil.log('Error: Pushing User to DB', err);
    callback();
  });
});
