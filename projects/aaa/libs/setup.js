const request = require('superagent');

const requestContent = () => {
  const env = process.env.NODE_ENV;
  let cephasBaseUrl;
  if (env === 'development') {
    cephasBaseUrl = 'http://localhost:3000';
  } else if (env === 'production') {
    cephasBaseUrl = 'ADD HOSTNAME';
  }
  request
    .get(`${cephasBaseUrl}/api/content`)
    .end((err, res) => {
      if (err) return err;
      window.config = JSON.parse(res.text);
    });
}

module.exports = {
  requestContent
}
