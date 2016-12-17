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
    default:
      gutil.log('Default task called, please specify a task for db connection');
  }
};

const uploadContentDev = (project, dbConnection) => {
  dbConnection.on('error', console.error.bind(console, 'connection error:'));
  dbConnection.once('open', () => {
    gutil.log('Connected To MongoDB');
    // take content.json and upload to db
    const schema = new mongoose.Schema({
      projectName: String,
      content: mongoose.Schema.Types.Mixed
    });
    const ContentDev = mongoose.model('ContentDev', schema);
    ContentDev.where({ projectName: project }).findOne((err, doc) => {
      if (err) gutil.log('DOCUMENT QUERY ERROR');
      if (!doc) {
        gutil.log('No doc for this property, creating new doc ...')
        const newContent = { projectName: project, content: projectContent, test: 'hii' };
        ContentDev.create(newContent, (err, updatedContent) => {
          if (err) gutil.log('MONGO SAVE ERROR', err);
          gutil.log('Saved new project content to mongodb');
        });
      } else {
        ContentDev.update({ projectName: project }, { content: projectContent }, (err, updatedContent) => {
          if (err) gutil.log('MONGO UPDATE ERROR', err);
          gutil.log('Updated content in mongodb');
        });
      }
    });
  });
};

const uploadContentProd = (project, dbConnection) => {
  dbConnection.on('error', console.error.bind(console, 'connection error:'));
  dbConnection.once('open', () => {
    gutil.log('Connected To MongoDB');
    // take content.json and upload to db
    const schema = new mongoose.Schema({
      projectName: String,
      content: mongoose.Schema.Types.Mixed
    });
    const ContentProd = mongoose.model('ContentProd', schema);
    ContentProd.where({ projectName: project }).findOne((err, doc) => {
      if (err) gutil.log('DOCUMENT QUERY ERROR');
      if (!doc) {
        gutil.log('No doc for this property, creating new doc ...')
        const newContent = { projectName: project, content: projectContent, test: 'hii' };
        ContentProd.create(newContent, (err, updatedContent) => {
          if (err) gutil.log('MONGO SAVE ERROR', err);
          gutil.log('Saved new project content to mongodb');
        });
      } else {
        ContentProd.update({ projectName: project }, { content: projectContent }, (err, updatedContent) => {
          if (err) gutil.log('MONGO UPDATE ERROR', err);
          gutil.log('Updated content in mongodb');
        });
      }
    });
  });
};

const fetchContentDev = (project, dbConnection, callback) => {
  const schema = new mongoose.Schema({
    projectName: String,
    content: mongoose.Schema.Types.Mixed
  });
  const ContentDev = mongoose.model('ContentDev', schema);
  console.log('PROKECT', project);
  ContentDev.findOne({ projectName: project }, (err, doc) => {
    if (err) {
      gutil.log('Error fetching from database', err);
      callback(err, null);
    }
    if (doc) {
      callback(null, doc.toObject());
    }
  });
};



module.exports = {
  connectToDB
}
