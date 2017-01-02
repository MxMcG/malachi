import express from 'express';
import path from 'path';
import fs from 'fs';
import logger from 'morgan';
import database from './database';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import React from 'react';
import Redux from 'redux';
import { Router, Route, browserHistory, IndexRoute, match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

const activeProject = process.env.ACTIVE_PROJECT;
const app = express();
const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT: 3000;
const templatePath = path.resolve(__dirname, '../views');
const env = process.env.NODE_ENV;
// dynamic variables, unable to use es6 imports
const configureStore = require('../projects/' + activeProject + '/common/store/configureStore.js').default;
const App = require('../projects/' + activeProject + '/common/containers/appContainer.js').default;

const config = {};
if (env === 'development') {
  database.connectToDB(activeProject, 'fetchContentDev', (err, data) => {
    if (err) { throw err; }
    // delete unwanted mongo db properties
    delete data._id;
    delete data.__v;
    config.cdnUrl = 'http://localhost:8080/projects/' + activeProject + '/';
    config.bundleUrl = 'http://localhost:8080/bundle.js/'
    config.content = data;
  });
}
if (env === 'production') {
  database.connectToDB(activeProject, 'fetchContentProd', (err, data) => {
    // delete unwanted mongo db properties
    console.log('VERSION', data.projectVersion)
    const currentProjectVersion = data.projectVersion;
    console.log('ACTIVE PROJECT', activeProject)

    delete data._id;
    delete data.__v;
    config.projectVersion = currentProjectVersion;
    config.cdnUrl = 'https://d3hc4gv509jw9l.cloudfront.net/projects/' + activeProject +  '_v' + currentProjectVersion + '/';
    config.bundleCssUrl = 'https://d3hc4gv509jw9l.cloudfront.net/projects/' + activeProject + '_v' + currentProjectVersion + '/index.css';
    config.bundleUrl = 'https://d3hc4gv509jw9l.cloudfront.net/projects/' + activeProject + '_v' + currentProjectVersion + '/bundle.js';
    config.content = data;
  });
}

// Determine env
// access content.json
// set cdn url to content object
app.set('view engine', 'ejs');
app.use(express.static(templatePath));
app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(session(sessionData));
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
  next();
});

app.use((req, res) => {
  const store = configureStore(config);

  // goal is to bundle JS and then send
  const componentHTML = renderToString(
    <Provider store={store} >
      <App />
    </Provider>
  );

  const stylesheet = () => {
    if (isProduction) {
      return `<link rel='stylesheet' href=${config.bundleCssUrl} />`;
    }
    return "<link rel='stylesheet' />"
  }

  const HTML = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      ${stylesheet()}
    </head>
    <body>
      <div id="react-view">${componentHTML}</div>
      <script type="application/javascript">
        window.__INITIAL_STATE__ = ${JSON.stringify(config)};
      </script>
      <script src=${JSON.stringify(config.bundleUrl)}></script>
    </body>
  </html>`;
  res.status(200).send(HTML);
});

// app.get('/*', (req, res) => {
//   res.render('index.ejs', { config: config });
// })

app.listen(port, () => {
  console.log('Server running on port ' + port);
});

// ex: https://www.westward.com/ => localhost:3000/ww/
// localhost:3000/<project acrn>/api
// localhost:3000/<project acrn>/admin
