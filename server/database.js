// TODO add linting to server files

const path = require('path');
const gutil = require("gulp-util");
const mongoose = require('mongoose');
const mongodbUri = 'mongodb://mxmcg-1:Mx11mcg27*^*@ds035546-a0.mlab.com:35546,ds035546-a1.mlab.com:35546/tourlookup-1?replicaSet=rs-ds035546'
const activeProject = require('yargs').argv.project;
const projectContent = activeProject ? require(`../projects/${activeProject}/content/content.json`) : null

const connectToDB = (project) => {
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
  const conn = mongoose.connection;
  conn.on('error', console.error.bind(console, 'connection error:'));
  conn.once('open', () => {
    gutil.log('Connected To MongoDB');
    // take content.json and upload to db
    const schema = new mongoose.Schema({
      projectName: String,
      content: mongoose.Schema.Types.Mixed
    });
    const Content = mongoose.model('Content', schema);
    Content.where({ projectName: activeProject }).findOne((err, doc) => {
      if (err) gutil.log('DOCUMENT QUERY ERROR');
      if (!doc) {
        gutil.log('No doc for this property, creating new doc ...')
        const newContent = { projectName: activeProject, content: projectContent, test: 'hii' };
        Content.create(newContent, (err, updatedContent) => {
          if (err) gutil.log('MONGO SAVE ERROR', err);
          gutil.log('Saved new project content to mongodb');
        });
      } else {
        Content.update({ projectName: activeProject }, { content }, (err, updatedContent) => {
          if (err) gutil.log('MONGO UPDATE ERROR', err);
          gutil.log('updated project content in mongodb');
        });
      }
    });
  });
};

const fetchProjectContent = () => {

};



module.exports = {
  connectToDB
}
