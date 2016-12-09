const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer();
const app = express();

const isProduction = process.env.NODE_ENV === 'production';
console.log('**********************')
console.log('ENV', process.env.NODE_ENV)
console.log('**********************')
const port = isProduction ? process.env.PORT : 3000;
const templatePath = path.resolve(__dirname, 'template');

// We point to our static assets
app.use(express.static(templatePath));

// We only want to run the workflow when not in production
if (!isProduction) {

  // We require the bundler inside the if block because
  // it is only needed in a development environment. Later
  // you will see why this is a good idea
  var bundle = require('./bundle.js');
  bundle();

  // Any requests to localhost:3000/build is proxied
  // to webpack-dev-server
  app.all('/build/*', (req, res) => {
    proxy.web(req, res, {
        target: 'http://localhost:3000'
    });
  });

}

// It is important to catch any errors from the proxy or the
// server will crash. An example of this is connecting to the
// server when webpack is bundling
proxy.on('error', (e) => {
  console.log('Could not connect to proxy, please try again...');
});

// And run the server
app.listen(port, () => {
  console.log('Server running on port ' + port);
});
