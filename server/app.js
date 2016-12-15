const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const logger = require('morgan');
const database = require('./database');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 3000;
const templatePath = path.resolve(__dirname, '../templates');
const activeProject = process.env.ACTIVE_PROJECT;
const env = process.env.NODE_ENV;

if (env === 'development') {
  database.connectToDB(activeProject, 'fetchContentDev', (err, data) => {
    console.log('DATA UP', data);
    // take data and set it to content on window.
  });
}
// Determine env
// access content.json
// set cdn url to content object

app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(templatePath));

/**
 * Error Handling Middleware
 */
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
      message: err.message,
      error: err
  });
});

app.get('/*', (req, res) => {
  console.log('HIII')
  console.log('hello, world!')

})

app.listen(port, () => {
  console.log('Server running on port ' + port);
});

// ex: https://www.westward.com/ => localhost:3000/ww/
// localhost:3000/<project acrn>/api
// localhost:3000/<project acrn>/admin
