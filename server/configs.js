import database from './database/index.js';
import gutil from 'gulp-util';

export const setupConfigs = (env, activeProject, callback) => {
  const config = {
    urls: {}
  };
  if (env === 'development') {
    database.fetchContentDev(activeProject, (err, data) => {
      if (err) { throw err; }
      // delete unwanted mongo db properties
      delete data._id;
      delete data.__v;
      config.content = data;
      config.urls.cdnUrl = 'http://localhost:8080/projects/' + activeProject + '/';
      config.urls.cdnImageBase = 'http://localhost:8080/projects/' + activeProject + '/images/';
      config.urls.bundleUrl = 'http://localhost:8080/bundle.js/'
      console.log('CONFIGS', config)
      callback(config);
    });
  }

  if (env === 'production') {
    database.fetchContentProd(activeProject, (err, data) => {
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
