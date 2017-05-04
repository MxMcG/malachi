// // TODO add linting to server files
// const path = require('path');
// const gutil = require("gulp-util");
// const _ = require('lodash');
// const mongoose = require('mongoose');
// const mongodbUri
// const activeProject = require('yargs').argv.project;
// const projectContent = activeProject ? require(`../projects/${activeProject}/content/content.json`) : null
//
// const connectToDB = (project, task, callback) => {
//   /*
//    * Mongoose by default sets the auto_reconnect option to true.
//    * We recommend setting socket options at both the server and replica set level.
//    * We recommend a 30 second connection timeout because it allows for
//    * plenty of time in most operating environments.
//    */
//   const options = {
//     server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
//     replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } }
//   };
//   mongoose.connect(mongodbUri, options);
//   const dbConnection = mongoose.connection;
//   switch (task) {
//     case 'uploadContentDev':
//       uploadContentDev(project, dbConnection);
//       break;
//     case 'fetchContentDev':
//       fetchContentDev(project, dbConnection, (err, data) => {
//         if (err) return callback(err, null);
//         callback(null, data);
//       });
//       break;
//     case 'uploadContentProd':
//       uploadContentProd(project, dbConnection);
//       break;
//     case 'fetchContentProd':
//       fetchContentProd(project, dbConnection, (err, data) => {
//         if (err) return callback(err, null);
//         callback(null, data);
//       });
//       break;
//     case 'fetchProjectVersion':
//       fetchProjectVersion(project, dbConnection, (err, data) => {
//         if (err) return callback(err, null);
//         callback(null, data);
//       });
//       break;
//     default:
//       gutil.log('Default task called, please specify a task for db connection');
//   }
// };
//
// const contentSchema = new mongoose.Schema({
//   projectName: String,
//   project: mongoose.Schema.Types.Mixed,
//   projectVersion: Number
// });
//
// const uploadContentDev = (projectAbv, dbConnection) => {
//   dbConnection.on('error', console.error.bind(console, 'connection error:'));
//   dbConnection.once('open', () => {
//     gutil.log('Connected To MongoDB');
//     // take content.json and upload to db
//
//     const ContentDev = mongoose.model('ContentDev', contentSchema);
//     ContentDev.where({ projectName: projectAbv }).findOne((err, doc) => {
//       if (err) gutil.log('DOCUMENT QUERY ERROR');
//       if (!doc) {
//         gutil.log('No doc for this property, creating new doc ...')
//         const newContent = { projectName: projectAbv, project: projectContent, test: 'hii' };
//         ContentDev.create(newContent, (err, updatedContent) => {
//           if (err) gutil.log('MONGO SAVE ERROR', err);
//           gutil.log(`Saved new project content to mongodb for ${projectAbv}`);
//           // mongoose.connection.close();
//         });
//       } else {
//         // fetchCurrent content
//         // merge currentContent with projectContent
//         // update db with merged object
//         ContentDev.findOne({ projectName: projectAbv }, (err, doc) => {
//           if (err) {
//             gutil.log('Error fetching from database', err);
//             // mongoose.connection.close();
//             callback(err, null);
//           }
//           if (doc) {
//             gutil.log('Content Fetched: Development');
//             const dbContent = doc.toObject().project;
//             // take current db doc and merge with content.json for project
//             // db doc may have changed via CMS pushLive
//             // important that no CMS action can add new properties
//             // this merge replaces changed values from CMS actions and will retain any new content properties from local content.json
//             console.log('projectcontent', projectContent)
//             console.log('dbcontent', dbContent)
//             const mergedContent = _.merge({}, projectContent, dbContent);
//             gutil.log('Merged Content: ', mergedContent);
//             ContentDev.update({ projectName: projectAbv }, { project: mergedContent }, (err, updatedContent) => {
//               if (err) {
//                 gutil.log('MONGO UPDATE ERROR', err)
//                 // mongoose.connection.close();
//               };
//               gutil.log(`Updated content in mongodb for ${projectAbv}`);
//               // mongoose.connection.close();
//             });
//           }
//         });
//       }
//     });
//   });
// };
//
// const uploadContentProd = (projectAbv, dbConnection) => {
//   dbConnection.on('error', console.error.bind(console, 'connection error:'));
//   dbConnection.once('open', () => {
//     gutil.log('Connected To MongoDB');
//     // take content.json and upload to db
//     const ContentProd = mongoose.model('ContentProd', contentSchema);
//     ContentProd.where({ projectName: projectAbv }).findOne((err, doc) => {
//       if (err) gutil.log('DOCUMENT QUERY ERROR');
//       if (!doc) {
//         gutil.log('No doc for this property, creating new doc ...')
//         const newContent = { projectName: projectAbv, project: projectContent, projectVersion: 1 };
//         ContentProd.create(newContent, (err, updatedContent) => {
//           if (err) gutil.log('MONGO SAVE ERROR', err);
//           gutil.log('Saved new project content to mongodb');
//         });
//       } else {
//         // Update project version so CDN can pull most recently changed files :)
//         const currentProjectVersion = doc.toObject().projectVersion;
//         const nextProjectVersion = doc.toObject().projectVersion + 1;
//         gutil.log('Project Version updated to: ', nextProjectVersion);
//         gutil.log('Updating doc for this property ... Thank you for your patience :)')
//         // fetchCurrent content
//         // merge currentContent with projectContent
//         // update db with merged object
//         ContentProd.findOne({ projectName: projectAbv }, (err, doc) => {
//           if (err) {
//             gutil.log('Error fetching from database', err);
//             mongoose.connection.close();
//             callback(err, null);
//           }
//           if (doc) {
//             gutil.log('Content Fetched: Development');
//             const dbContent = doc.toObject().project;
//             // take current db doc and merge with content.json for project
//             // db doc may have changed via CMS pushLive
//             // important that no CMS action can add new properties
//             // this merge replaces changed values from CMS actions and will retain any new content properties from local content.json
//             console.log('projectcontent', projectContent)
//             console.log('dbcontent', dbContent)
//             const mergedContent = _.merge({}, projectContent, dbContent);
//             gutil.log('Merged Content: ', mergedContent);
//             ContentProd.update({ projectName: projectAbv }, { project: mergedContent, projectVersion: nextProjectVersion }, (err, updatedContent) => {
//               if (err) {
//                 gutil.log('MONGO UPDATE ERROR', err)
//                 mongoose.connection.close();
//               };
//               gutil.log(`Updated content in mongodb for ${projectAbv}`);
//               mongoose.connection.close();
//             });
//           }
//         });
//       }
//     });
//   });
// };
//
// const fetchContentDev = (projectAbv, dbConnection, callback) => {
//   const ContentDev = mongoose.model('ContentDev', contentSchema);
//   ContentDev.findOne({ projectName: projectAbv }, (err, doc) => {
//     if (err) {
//       gutil.log('Error fetching from database', err);
//       // mongoose.connection.close();
//       callback(err, null);
//     }
//     if (doc) {
//       gutil.log('Content Fetched: Development');
//       // mongoose.connection.close();
//       callback(null, doc.toObject());
//     }
//   });
// };
//
// const fetchContentProd = (projectAbv, dbConnection, callback) => {
//   const ContentProd = mongoose.model('ContentProd', contentSchema);
//   ContentProd.findOne({ projectName: projectAbv }, (err, doc) => {
//     if (err) {
//       gutil.log('Error fetching from database', err);
//       callback(err, null);
//     }
//     if (doc) {
//       gutil.log('Content Fetched: Production');
//       mongoose.connection.close();
//       callback(null, doc.toObject());
//     }
//   });
// };
//
// const fetchProjectVersion = (projectAbv, dbConnection, callback) => {
//   const ContentProd = mongoose.model('ContentProd', contentSchema);
//   ContentProd.findOne({ projectName: projectAbv }, (err, doc) => {
//     if (err) {
//       gutil.log('Error fetching version number from database', err);
//       callback(err, null);
//     }
//     if (!doc) {
//       gutil.log('No Versions created for this project yet');
//       callback(null, 1)
//     }
//     if (doc) {
//       gutil.log('Version number fetched: Production');
//       mongoose.connection.close();
//       callback(null, doc.toObject().projectVersion)
//     }
//   });
// };
//
// /**
//  * CMS DB Methods
//  */
//
// // TODO add method to take new images and upload them to CDN
// // user is not adding new image properties, just overwriting
// // existing image properties with new files
// // we need to take the new image files and push them to the CDN
// // no rebuild will be required when CMS push occurs b/c upload
// // will increment version and replace any existing image files in bucket
// const cmsPushContentDev = (projectAbv, content) => {
//   return new Promise((resolve, reject) => {
//     const options = {
//       server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
//       replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } }
//     };
//     mongoose.connect(mongodbUri, options);
//     const dbConnection = mongoose.connection;
//     dbConnection.on('error', console.error.bind(console, 'connection error:'));
//     dbConnection.once('open', () => {
//       gutil.log('Connected To MongoDB');
//       // take content.json and upload to db
//       const ContentDev = mongoose.model('ContentDev', contentSchema);
//       ContentDev.where({ projectName: projectAbv }).findOne((err, doc) => {
//         if (err) reject(err, 'DOCUMENT QUERY ERROR');
//         // update db with CMS content state obj
//         ContentDev.update({ projectName: projectAbv }, { 'project.components': content }, (err, updatedContent) => {
//           if (err) reject(err, 'MONGO UPDATE ERROR');
//           gutil.log(`Updated content in mongodb for ${projectAbv}`);
//           resolve(updatedContent);
//         });
//       });
//     });
//   })
// };
//
// const cmsPushContentProd = (projectAbv, content) => {
//   return new Promise((resolve, reject) => {
//     const options = {
//       server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
//       replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } }
//     };
//     mongoose.connect(mongodbUri, options);
//     const dbConnection = mongoose.connection;
//     dbConnection.on('error', console.error.bind(console, 'connection error:'));
//     dbConnection.once('open', () => {
//       gutil.log('Connected To MongoDB');
//       // take content.json and upload to db
//       const ContentProd = mongoose.model('ContentProd', contentSchema);
//       ContentProd.where({ projectName: projectAbv }).findOne((err, doc) => {
//         if (err) reject(err, 'DOCUMENT QUERY ERROR');
//         // update db with CMS content state obj
//         ContentProd.update({ projectName: projectAbv }, { 'project.components': content }, (err, updatedContent) => {
//           if (err) reject(err, 'MONGO UPDATE ERROR');
//           gutil.log(`Updated content in mongodb for ${projectAbv}`);
//           resolve(updatedContent);
//         });
//       });
//     });
//   })
// };
//
// module.exports = {
//   connectToDB,
//   cmsPushContentDev,
//   cmsPushContentProd
// }
