import database from './database';
import gutil from 'gulp-util';

export const setupConfigs = (env, activeProject, callback) => {
  const config = {};
  if (env === 'development') {
    database.connectToDB(activeProject, 'fetchContentDev', (err, data) => {
      if (err) { throw err; }
      // delete unwanted mongo db properties
      delete data._id;
      delete data.__v;
      config.cdnUrl = 'http://localhost:8080/projects/' + activeProject + '/';
      config.cdnImageBase = 'http://localhost:8080/projects/' + activeProject + '/images/';
      config.bundleUrl = 'http://localhost:8080/bundle.js/'
      config.content = data;
      callback(config);
    });
  }
  if (env === 'production') {
    database.connectToDB(activeProject, 'fetchContentProd', (err, data) => {
      // delete unwanted mongo db properties
      gutil.log('VERSION PRODUCTION', data.projectVersion)
      const currentProjectVersion = data.projectVersion;
      delete data._id;
      delete data.__v;
      config.projectVersion = currentProjectVersion;
      config.cdnUrl = 'https://d3hc4gv509jw9l.cloudfront.net/projects/' + activeProject +  '_v' + currentProjectVersion + '/';
      config.cdnImageBase = 'https://d3hc4gv509jw9l.cloudfront.net/projects/' + activeProject +  '_v' + currentProjectVersion + '/images/';
      config.bundleCssUrl = 'https://d3hc4gv509jw9l.cloudfront.net/projects/' + activeProject + '_v' + currentProjectVersion + '/index.css';
      config.bundleUrl = 'https://d3hc4gv509jw9l.cloudfront.net/projects/' + activeProject + '_v' + currentProjectVersion + '/bundle.js';
      config.content = data;
      callback(config);
    });
  }
}
