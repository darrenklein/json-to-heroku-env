/* eslint-disable no-console */

const https = require('https');

module.exports = (token, app, path, verbose) => {
  const configData = require(`${process.env.PWD}/${path}`); // eslint-disable-line global-require, import/no-dynamic-require

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
    if (verbose) {
      console.log(`STATUS: ${res.statusCode}`);
      console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    }

    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
  });

  req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
  });

  req.write(JSON.stringify(configData));
  req.end();
};
