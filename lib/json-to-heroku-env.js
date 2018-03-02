const https = require('https');
const base64 = require('base-64');

module.exports = (app) => {
  const configData = JSON.stringify({
    TEST: 'messing around',
    JOKE: 'is on you',
  });

  const options = {
    hostname: 'api.heroku.com',
    path: `/apps/${app}/config-vars`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.heroku+json; version=3',
      Authorization: `Basic ${base64.encode(${username}:${password})}`
    },
    method: 'PATCH',
  };

  console.log(options.headers)

  const req = https.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
  });

  req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
  });

  req.write(configData);
  req.end();
};
