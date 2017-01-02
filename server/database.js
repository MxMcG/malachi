// TODO add linting to server files
const path = require('path');
const gutil = require("gulp-util");
const mongoose = require('mongoose');
const mongodbUri = 'mongodb://mxmcg-1:Mx11mcg27*^*@ds035546-a0.mlab.com:35546,ds035546-a1.mlab.com:35546/tourlookup-1?replicaSet=rs-ds035546'
const activeProject = require('yargs').argv.project;
const projectContent = activeProject ? require(`../projects/${activeProject}/content/content.json`) : null

const connectToDB = (project, task, callback) => {
  /*
   * Mongoose by default sets the auto_reconnect option to true.
   * We recommend setting socket options at both the server and replica set level.
   * We recommend a 30 second connection timeout because it allows for
   * plenty of time in most operating environments.
   */
  const options = {
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } }
  };
  mongoose.connect(mongodbUri, options);
  const dbConnection = mongoose.connection;
  switch (task) {
    case 'uploadContentDev':
      uploadContentDev(project, dbConnection);
      break;
    case 'fetchContentDev':
      fetchContentDev(project, dbConnection, (err, data) => {
        if (err) return callback(err, null);
        callback(null, data);
      });
      break;
    case 'uploadContentProd':
      uploadContentProd(project, dbConnection);
      break;
    case 'fetchContentProd':
      fetchContentProd(project, dbConnection, (err, data) => {
        if (err) return callback(err, null);
        callback(null, data);
      });
      break;
    case 'fetchProjectVersion':
      fetchProjectVersion(project, dbConnection, (err, data) => {
        if (err) return callback(err, null);
        callback(null, data);
      });
      break;
    default:
      gutil.log('Default task called, please specify a task for db connection');
  }
};

const uploadContentDev = (projectAbv, dbConnection) => {
  dbConnection.on('error', console.error.bind(console, 'connection error:'));
  dbConnection.once('open', () => {
    gutil.log('Connected To MongoDB');
    // take content.json and upload to db
    const schema = new mongoose.Schema({
      projectName: String,
      project: mongoose.Schema.Types.Mixed,
      projectVersion: Number
    });
    const ContentDev = mongoose.model('ContentDev', schema);
    ContentDev.where({ projectName: projectAbv }).findOne((err, doc) => {
      console.log('CONTENT', projectContent)
      if (err) gutil.log('DOCUMENT QUERY ERROR');
      if (!doc) {
        gutil.log('No doc for this property, creating new doc ...')
        const newContent = { projectName: projectAbv, project: projectContent, test: 'hii' };
        ContentDev.create(newContent, (err, updatedContent) => {
          if (err) gutil.log('MONGO SAVE ERROR', err);
          gutil.log(`Saved new project content to mongodb for ${projectAbv}`);
        });
      } else {
        ContentDev.update({ projectName: projectAbv }, { project: projectContent }, (err, updatedContent) => {
          if (err) gutil.log('MONGO UPDATE ERROR', err);
          gutil.log(`Updated content in mongodb for ${projectAbv}`);
        });
      }
    });
  });
};

const uploadContentProd = (projectAbv, dbConnection) => {
  dbConnection.on('error', console.error.bind(console, 'connection error:'));
  dbConnection.once('open', () => {
    gutil.log('Connected To MongoDB');
    // take content.json and upload to db
    const schema = new mongoose.Schema({
      projectName: String,
      project: mongoose.Schema.Types.Mixed,
      projectVersion: Number
    });
    const ContentProd = mongoose.model('ContentProd', schema);
    ContentProd.where({ projectName: projectAbv }).findOne((err, doc) => {
      if (err) gutil.log('DOCUMENT QUERY ERROR');
      if (!doc) {
        gutil.log('No doc for this property, creating new doc ...')
        const newContent = { projectName: projectAbv, project: projectContent, projectVersion: 1 };
        ContentProd.create(newContent, (err, updatedContent) => {
          if (err) gutil.log('MONGO SAVE ERROR', err);
          gutil.log('Saved new project content to mongodb');
        });
      } else {
        // Update project version so CDN can pull most recently changed files :)
        const currentProjectVersion = doc.toObject().projectVersion;
        const nextProjectVersion = doc.toObject().projectVersion + 1;
        gutil.log('Project Version updated to: ', nextProjectVersion);
        gutil.log('Updating doc for this property ... Thank you for your patience :)')
        ContentProd.update({ projectName: projectAbv }, { project: projectContent, projectVersion: nextProjectVersion }, (err, updatedContent) => {
          if (err) gutil.log('MONGO UPDATE ERROR', err);
          gutil.log('Updated content in mongodb');
        });
      }
    });
  });
};

const fetchContentDev = (projectAbv, dbConnection, callback) => {
  const schema = new mongoose.Schema({
    projectName: String,
    project: mongoose.Schema.Types.Mixed,
    projectVersion: Number
  });
  const ContentDev = mongoose.model('ContentDev', schema);
  ContentDev.findOne({ projectName: projectAbv }, (err, doc) => {
    if (err) {
      gutil.log('Error fetching from database', err);
      callback(err, null);
    }
    if (doc) {
      gutil.log('Content Fetched: Development');
      callback(null, doc.toObject());
    }
  });
};

const fetchContentProd = (projectAbv, dbConnection, callback) => {
  const schema = new mongoose.Schema({
    projectName: String,
    project: mongoose.Schema.Types.Mixed,
    projectVersion: Number
  });
  const ContentProd = mongoose.model('ContentProd', schema);
  ContentProd.findOne({ projectName: projectAbv }, (err, doc) => {
    if (err) {
      gutil.log('Error fetching from database', err);
      callback(err, null);
    }
    if (doc) {
      gutil.log('Content Fetched: Production');
      callback(null, doc.toObject());
    }
  });
};

const fetchProjectVersion = (projectAbv, dbConnection, callback) => {
  const schema = new mongoose.Schema({
    projectName: String,
    project: mongoose.Schema.Types.Mixed,
    projectVersion: Number
  });
  const ContentProd = mongoose.model('ContentProd', schema);
  ContentProd.findOne({ projectName: projectAbv }, (err, doc) => {
    if (err) {
      gutil.log('Error fetching version number from database', err);
      callback(err, null);
    }
    if (!doc) {
      gutil.log('No Versions created for this project yet');
      callback(null, 1)
    }
    if (doc) {
      gutil.log('Version number fetched: Production');
      callback(null, doc.toObject().projectVersion)
    }
  });
};

module.exports = {
  connectToDB
}
