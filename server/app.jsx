var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools')
const path = require('path');
const activeProject = process.env.ACTIVE_PROJECT;
const mainPath = activeProject ? path.resolve(__dirname, '../projects', activeProject) : null
// this must be equal to your Webpack configuration "context" parameter
console.log('MAIN', mainPath)
var project_base_path = mainPath


// this global variable will be used later in express middleware
global.webpack_isomorphic_tools = new WebpackIsomorphicToolsPlugin(require('../webpack-isomorphic-tools-configuration'))
// initializes a server-side instance of webpack-isomorphic-tools
// (the first parameter is the base path for your project
//  and is equal to the "context" parameter of you Webpack configuration)
// (if you prefer Promises over callbacks
//  you can omit the callback parameter
//  and then it will return a Promise instead)
.server(project_base_path, function(err, success)
{
  // webpack-isomorphic-tools is all set now.
  // here goes all your web application code:
  // (it must reside in a separate *.js file
  //  in order for the whole thing to work)
  require('./server.jsx')
})
