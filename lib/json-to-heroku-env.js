/* eslint-disable no-console */

const https = require('https');

module.exports = (token, { app, config }, responseVerbose) => {
  const options = {
    hostname: 'api.heroku.com',
    path: `/apps/${app}/config-vars`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.heroku+json; version=3',
      Authorization: `Bearer ${token}`,
    },
    method: 'PATCH',
  };
  const req = https.request(options, (res) => {
    if (responseVerbose) {
      console.log(`Response status: ${res.statusCode}`);
      console.log(`Response headers: ${JSON.stringify(res.headers)}\n`);
    }

    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log(`Successfully set Heroku environment config. Current config: ${chunk}`);
    });
  });

  req.on('error', (reqErr) => {
    console.error(`Request error: ${reqErr.message}`);
  });

  req.write(JSON.stringify(config));
  req.end();
};
