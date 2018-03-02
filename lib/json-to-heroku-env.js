const https = require('https');

module.exports = (token, app) => {
  const configData = JSON.stringify({
    FOO: 'bar!',
    BAZ: 'foo!',
  });

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
