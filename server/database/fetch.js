const path = require('path');
// const gutil = require('gulp-util');
const _ = require('lodash');
const mongoose = require('mongoose');
// const mongodbUri = 'mongodb://mxmcg-1:Mx11mcg27*^*@ds035546-a0.mlab.com:35546,ds035546-a1.mlab.com:35546/tourlookup-1?replicaSet=rs-ds035546'
const activeProject = require('yargs').argv.project;
const projectContent = activeProject ? require(`../../projects/${activeProject}/content/content.json`) : null

import { contentSchema } from './schemas.js';

export const fetchContentDev = (projectAbv, callback) => {
  const ContentDev = mongoose.model('ContentDev', contentSchema);
  ContentDev.findOne({ projectName: projectAbv }, (err, doc) => {
    if (err) {
      console.log('Error fetching from database', err);

      callback(err, null);
    }
    if (doc) {
      console.log('Content Fetched: Development');

      callback(null, doc.toObject());
    }
  });
};

export const fetchContentProd = (projectAbv, callback) => {
  const dbConnection = mongoose.connection;
  const ContentProd = mongoose.model('ContentProd', contentSchema);
  ContentProd.findOne({ projectName: projectAbv }, (err, doc) => {
    if (err) {
      console.log('Error fetching from database', err);

      callback(err, null);
    }
    if (doc) {
      console.log('Content Fetched: Production');

      callback(null, doc.toObject());
    }
  });
};

export const fetchProjectVersion = (projectAbv, callback) => {
  const dbConnection = mongoose.connection;
  const ContentProd = mongoose.model('ContentProd', contentSchema);
  ContentProd.findOne({ projectName: projectAbv }, (err, doc) => {
    if (err) {
      console.log('Error fetching version number from database', err);

      callback(err, null);
    }
    if (!doc) {
      console.log('No Versions created for this project yet');

      callback(null, 1)
    }
    if (doc) {
      console.log('Version number fetched: Production');

      callback(null, doc.toObject().projectVersion)
    }
  });
};
