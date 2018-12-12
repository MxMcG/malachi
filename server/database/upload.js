const path = require('path');
// const gutil = require('gulp-util');
const _ = require('lodash');
const mongoose = require('mongoose');
// const mongodbUri = 'mongodb://mxmcg-1:Tru$$vine*^*@ds153870-a0.mlab.com:53870,ds153870-a1.mlab.com:53870/tourlookup-1?replicaSet=rs-ds153870'
const activeProject = require('yargs').argv.project;
const projectContent = activeProject ? require(`../../projects/${activeProject}/content/content.json`) : null

import { contentSchema } from './schemas.js';

export const uploadContentDev = (projectAbv) => {
  console.log('Connected To MongoDB');
  // take content.json and upload to db

  const ContentDev = mongoose.model('ContentDev', contentSchema);
  ContentDev.where({ projectName: projectAbv }).findOne((err, doc) => {
    if (err) console.log('DOCUMENT QUERY ERROR');
    if (!doc) {
      console.log('No doc for this property, creating new doc ...')
      const newContent = { projectName: projectAbv, project: projectContent, test: 'hii' };
      ContentDev.create(newContent, (err, updatedContent) => {
        if (err) console.log('MONGO SAVE ERROR', err);
        console.log(`Saved new project content to mongodb for ${projectAbv}`);

      });
    } else {
      // fetchCurrent content
      // merge currentContent with projectContent
      // update db with merged object
      ContentDev.findOne({ projectName: projectAbv }, (err, doc) => {
        if (err) {
          console.log('Error fetching from database', err);

          callback(err, null);
        }
        if (doc) {
          console.log('Content Fetched: Development');
          const dbContent = doc.toObject().project;
          //TODO if CMS is added, bring merge functionality back in
          // take current db doc and merge with content.json for project
          // db doc may have changed via CMS pushLive
          // important that no CMS action can add new properties
          // this merge replaces changed values from CMS actions and will retain any new content properties from local content.json
          // console.log('projectcontent', projectContent)
          // console.log('dbcontent', dbContent)
          // const mergedContent = _.merge({}, projectContent, dbContent);
          // console.log('Merged Content: ', mergedContent);
          ContentDev.update({ projectName: projectAbv }, { project: projectContent }, (err, updatedContent) => {
            if (err) {
              console.log('MONGO UPDATE ERROR', err)

            };
            console.log(`Updated content in mongodb for ${projectAbv}`);

          });
        }
      });
    }
  });
};

export const uploadContentProd = (projectAbv) => {
  console.log('Connected To MongoDB');
  // take content.json and upload to db
  const ContentProd = mongoose.model('ContentProd', contentSchema);
  ContentProd.where({ projectName: projectAbv }).findOne((err, doc) => {
    if (err) console.log('DOCUMENT QUERY ERROR');
    if (!doc) {
      console.log('No doc for this property, creating new doc ...')
      const newContent = { projectName: projectAbv, project: projectContent, projectVersion: 1 };
      ContentProd.create(newContent, (err, updatedContent) => {
        if (err) console.log('MONGO SAVE ERROR', err);
        console.log('Saved new project content to mongodb');
      });
    } else {
      // Update project version so CDN can pull most recently changed files :)
      const currentProjectVersion = doc.toObject().projectVersion;
      const nextProjectVersion = doc.toObject().projectVersion + 1;
      console.log('Project Version updated to: ', nextProjectVersion);
      console.log('Updating doc for this property ... Thank you for your patience :)')
      // fetchCurrent content
      // merge currentContent with projectContent
      // update db with merged object
      ContentProd.findOne({ projectName: projectAbv }, (err, doc) => {
        if (err) {
          console.log('Error fetching from database', err);

          callback(err, null);
        }
        if (doc) {
          console.log('Content Fetched: Development');
          const dbContent = doc.toObject().project;
          //TODO if CMS is added, bring merge functionality back in
          // take current db doc and merge with content.json for project
          // db doc may have changed via CMS pushLive
          // important that no CMS action can add new properties
          // this merge replaces changed values from CMS actions and will retain any new content properties from local content.json
          // console.log('projectcontent', projectContent)
          // console.log('dbcontent', dbContent)
          // const mergedContent = _.merge({}, projectContent, dbContent);
          // console.log('Merged Content: ', mergedContent);
          ContentProd.update({ projectName: projectAbv }, { project: projectContent, projectVersion: nextProjectVersion }, (err, updatedContent) => {
            if (err) {
              console.log('MONGO UPDATE ERROR', err)

            };
            console.log(`Updated content in mongodb for ${projectAbv}`);

          });
        }
      });
    }
  });
};
