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
const templatePath = path.resolve(__dirname, '../views');
const activeProject = process.env.ACTIVE_PROJECT;
const env = process.env.NODE_ENV;

const config = {};
if (env === 'development') {
  database.connectToDB(activeProject, 'fetchContentDev', (err, data) => {
    // delete unwanted mongo db properties
    delete data._id;
    delete data.__v;
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

app.get('/', (req, res) => {
  res.render('index.ejs', { content: config.content });
})

app.get('/api/content', (req, res) => {
  res.json(config.content);
});

app.listen(port, () => {
  console.log('Server running on port ' + port);
});

// ex: https://www.westward.com/ => localhost:3000/ww/
// localhost:3000/<project acrn>/api
// localhost:3000/<project acrn>/admin
