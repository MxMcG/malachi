const path = require('path');
const gutil = require('gulp-util');
const _ = require('lodash');
const mongoose = require('mongoose');
// const mongodbUri = 'mongodb://mxmcg-1:Mx11mcg27*^*@ds035546-a0.mlab.com:35546,ds035546-a1.mlab.com:35546/tourlookup-1?replicaSet=rs-ds035546'
const activeProject = require('yargs').argv.project;
const projectContent = activeProject ? require(`../../projects/${activeProject}/content/content.json`) : null

import { contentSchema } from './schemas.js';
/**
 * CMS DB Methods
 */

// TODO add method to take new images and upload them to CDN
// user is not adding new image properties, just overwriting
// existing image properties with new files
// we need to take the new image files and push them to the CDN
// no rebuild will be required when CMS push occurs b/c upload
// will increment version and replace any existing image files in bucket
export const cmsPushContentDev = (projectAbv, content) => {
  return new Promise((resolve, reject) => {
    gutil.log('Connected To MongoDB');
    // take content.json and upload to db
    const ContentDev = mongoose.model('ContentDev', contentSchema);
    ContentDev.where({ projectName: projectAbv }).findOne((err, doc) => {
      if (err) reject(err, 'DOCUMENT QUERY ERROR');
      // update db with CMS content state obj
      ContentDev.update({ projectName: projectAbv }, { 'project.components': content }, (err, updatedContent) => {
        if (err) reject(err, 'MONGO UPDATE ERROR');
        gutil.log(`Updated content in mongodb for ${projectAbv}`);
        resolve(updatedContent);
      });
    });
  })
};

export const localContentPush = (projectAbv, content, env) => {
  // TODO check prod or dev
  return new Promise((resolve, reject) => {
    gutil.log('Connected To MongoDB');
    // take content.json and upload to db
    const ContentDev = mongoose.model('ContentDev', contentSchema);
    const ContentProd = mongoose.model('ContentProd', contentSchema);
    const ContentEnv = (env === 'development') ? ContentDev : ContentProd
    ContentEnv.where({ projectName: projectAbv }).findOne((err, doc) => {
      if (err) reject(err, 'DOCUMENT QUERY ERROR');
      // update db with CMS content state obj
      ContentEnv.update({ projectName: projectAbv }, { 'project': content }, (err, updatedContent) => {
        if (err) reject(err, 'MONGO UPDATE ERROR');
        gutil.log(`Updated content in mongodb for ${projectAbv}`);
        resolve(updatedContent);
      });
    });
  })
};

export const cmsPushContentProd = (projectAbv, content) => {
  return new Promise((resolve, reject) => {
    gutil.log('Connected To MongoDB');
    // take content.json and upload to db
    const ContentProd = mongoose.model('ContentProd', contentSchema);
    ContentProd.where({ projectName: projectAbv }).findOne((err, doc) => {
      if (err) reject(err, 'DOCUMENT QUERY ERROR');
      // update db with CMS content state obj
      ContentProd.update({ projectName: projectAbv }, { 'project.components': content }, (err, updatedContent) => {
        if (err) reject(err, 'MONGO UPDATE ERROR');
        gutil.log(`Updated content in mongodb for ${projectAbv}`);
        resolve(updatedContent);
      });
    });
  })
};
