// TODO add linting to server files
const path = require('path');
const gutil = require('gulp-util');
const _ = require('lodash');
const mongoose = require('mongoose');
const mongodbUri = 'mongodb://mxmcg-1:Mx11mcg27*^*@ds035546-a0.mlab.com:35546,ds035546-a1.mlab.com:35546/tourlookup-1?replicaSet=rs-ds035546'
const activeProject = require('yargs').argv.project;
const projectContent = activeProject ? require(`../../projects/${activeProject}/content/content.json`) : null

import { cmsPushContentDev, cmsPushContentProd } from './cms.js';
import { fetchContentDev, fetchContentProd, fetchProjectVersion } from './fetch.js';
import { uploadContentDev, uploadContentProd } from './upload.js';

// Create the database connection
mongoose.connect(mongodbUri);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection open to ' + mongodbUri);
});

// If the connection throws an error
mongoose.connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

module.exports = {
  cmsPushContentDev,
  cmsPushContentProd,
  fetchContentDev,
  fetchContentProd,
  fetchProjectVersion,
  uploadContentDev,
  uploadContentProd
}
