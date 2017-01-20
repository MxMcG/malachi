/**
 * Imports
 */
import express from 'express';
import path from 'path';
import fs from 'fs';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import React from 'react';
import Redux from 'redux';
import { Router, Route, browserHistory, IndexRoute, match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { createLocation } from 'history';
import gutil from 'gulp-util';
/**
 * Server Folder Imports
 */
import database from './database/index.js';
import { setupConfigs } from './configs';
/**
 * Dynamic Consts
 */
const activeProject = process.env.ACTIVE_PROJECT;
const app = express();
const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT: 3000;
const templatePath = path.resolve(__dirname, '../views');
const env = process.env.NODE_ENV;
const configureStore = require('../projects/' + activeProject + '/common/store/configureStore.js').default;
const routes = require('../projects/' + activeProject + '/common/routes.jsx').default;

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

app.get('*', (req, res) => {
  setupConfigs(env, activeProject, (config) => {
    const store = configureStore(config, env);
    const location = createLocation(req.url);

    match({ routes, location }, (err, redirectLocation, renderProps) => {
      if (err) {
        gutil.error(err);
        return res.status(500).end('Internal server error');
      }
      if (!renderProps) return res.status(404).end('Not found.');

      // goal is to bundle JS and then send
      const componentHTML = renderToString(
        <Provider store={store} >
          <RouterContext {...renderProps} />
        </Provider>
      );

      // allows server side rendering of css
      const stylesheet = () => {
        console.log('*************************************', config.bundleCssUrl)
        if (isProduction) {
          return `<link rel='stylesheet' href=${config.bundleCssUrl} />`;
        }
        return "<link rel='stylesheet' />";
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
            window.__DEV_ENV__ = ${JSON.stringify({ env })};
          </script>
          <script src=${JSON.stringify(config.urls.bundleUrl)}></script>
        </body>
      </html>`;
      res.status(200).send(HTML);
    });
  });
});

app.post('/api/cms/pushContent', (req, res) => {
  const content = req.body.content;
  const projectName = req.body.projectName;
  // takes content from client req, updates db
  if (env === 'development') {
    database.cmsPushContentDev(projectName, content).then((message) => {
      gutil.log('Updated Content CMS Development: ', message);
    }).catch((err, errMessage) => {
      gutil.log(errmessage);
      gutil.log('Error description: ', err);
    });
  }
  if (env === 'production') {
    database.cmsPushContentProd(projectName, content).then((message) => {
      gutil.log('Updated Content CMS Production: ', message);
    }).catch((err, errMessage) => {
      gutil.log(errmessage);
      gutil.log('Error description: ', err);
    });
  }
  // run start script to restart the app w new content
  res.send('thanks man')
  // ssh into server instance, run a restart script
});

app.post('/api/cms/fetchContent', (req, res) => {
  const projectAbv = req.body.projectAbv;
  // takes content from client req, updates db
  if (env === 'development') {
    database.fetchContentDev(projectAbv, (error, data) => {
      if (error) {
        gutil.error(error);
        return res.status(500).end('Internal server error');
      }
      res.json(data);
    });
  }
  if (env === 'production') {
    database.fetchContentProd(projectAbv, (error, data) => {
      if (error) {
        gutil.error(error);
        return res.status(500).end('Internal server error');
      }
      res.json(data);
    });
  }
  // run start script to restart the app w new content
  // ssh into server instance, run a restart script
});

app.post('/admin/login', (req, res) => {
  const username = req.body.username;
  const hash = req.body.hash;
  // takes content from client req, updates db
  database.loginAdminUser(env, username, hash).then((data) => {
    if (data.validUser) {
      res.json(data);
    } else {
      res.json({
        message: 'Invalid User',
        validUser: false
      });
    }
  }).catch((err, errMessage) => {
    gutil.log(errMessage);
    gutil.log('Error description: ', err);
  });
});

app.listen(port, () => {
  gutil.log('Server running on port ' + port);
});

// ex: https://www.westward.com/ => localhost:3000/ww/
// localhost:3000/<project acrn>/api
// localhost:3000/<project acrn>/admin
