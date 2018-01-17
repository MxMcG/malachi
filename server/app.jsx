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
import Helmet from "react-helmet";
/**
 * Server Folder Imports
 */
import database from './database/index.js';
import { setupConfigs, setHeadByProject } from './configs';
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
const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'xv15zcgy',
  dataset: 'firstrelease',
  useCdn: true, // `false` if you want to ensure fresh data
})

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
    client.getDocument('0d87a2a0-3c79-489b-89fe-f76ea2958938').then(sanityData => {
      config['sanityData'] = sanityData;

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
        // run script to generate sitemap.xml
        const stylesheet = () => {
          require("../sitemap-builder.js");
          if (isProduction) {

            return `<link rel='stylesheet' href=${config.bundleCssUrl} />`;
          }
          return "<link rel='stylesheet' />";
        }

        let googleAnalytics;
        let headTags
        switch (activeProject) {
          case 'dms':
            googleAnalytics = "<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-81672933-3', 'auto');ga('send', 'pageview');</script>";
            break;
          case 'mxg':
            headTags = `
              <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700" rel="stylesheet" />
              <script src="https://use.fontawesome.com/3dbc112c20.js"></script>
            `
            break;
          case 'wwf':
            headTags = `
              <meta name="theme-color" content="#ffffff">
              <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
              <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
              <link href="https://fonts.googleapis.com/css?family=Bevan" rel="stylesheet">
              <link rel="apple-touch-icon" sizes="144x144" href="${config.urls.cdnImageBase}apple-touch-icon.png">
              <link rel="icon" type="image/png" sizes="32x32" href="${config.urls.cdnImageBase}favicon-32x32.png">
              <link rel="icon" type="image/png" sizes="16x16" href="${config.urls.cdnImageBase}favicon-16x16.png">
              <link rel="manifest" href="/manifest.json">
              <link rel="mask-icon" href="${config.urls.cdnImageBase}safari-pinned-tab.svg" color="#5bbad5">
              <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700" rel="stylesheet" />
              <script src="https://use.fontawesome.com/3dbc112c20.js"></script>
              <script src="https://sdks.shopifycdn.com/js-buy-sdk/v0/latest/shopify-buy.umd.polyfilled.min.js"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>
              <script src="https://use.fontawesome.com/22e36cff83.js"></script>
              <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
            `
            break;
          default:
            googleAnalytics = null;
        }
        let head = Helmet.rewind();
        const HTML = `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=0' />
              ${headTags}
              ${stylesheet()}
              ${head.title.toString()}
              ${head.meta.toString()}
            </head>
            <body>
              <div id="react-view">${componentHTML}</div>
              <script type="application/javascript">
                window.__INITIAL_STATE__ = ${JSON.stringify(config)};
                window.__DEV_ENV__ = ${JSON.stringify({ env })};
              </script>
              <script src=${JSON.stringify(config.urls.bundleUrl)}></script>
              <script>
                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

                ga('create', 'UA-96472854-1', 'auto');
                ga('send', 'pageview');

              </script>
            </body>
          </html>`;
        res.status(200).send(HTML);
      });
    }).catch((err) => {
      console.log('######### SANITY ERROR: ', err)
      // Handle any error that occurred in any of the previous
      // promises in the chain.
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

app.get('/sitemap.xml', (req, res) => {
  res.sendFile('../sitemap.xml');
});

app.listen(port, () => {
  gutil.log('Server running on port ' + port);
});

// ex: https://www.westward.com/ => localhost:3000/ww/
// localhost:3000/<project acrn>/api
// localhost:3000/<project acrn>/admin

// // keywords
// concert tickets
// live music venue
