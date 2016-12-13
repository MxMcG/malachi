const express = require('express');
const path = require('path');
const app = express();
const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 3000;
const templatePath = path.resolve(__dirname, '../templates');

console.log('**********************')
console.log('ENV', process.env.NODE_ENV)
console.log('**********************')

// We point to our static assets
app.use(express.static(templatePath));

// And run the server
app.listen(port, () => {
  console.log('Server running on port ' + port);
});
