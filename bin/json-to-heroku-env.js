#! /usr/bin/env node

/* eslint-disable no-console */

const fs = require('fs');
const { exec } = require('child_process');
const { sep } = require('path');

const jsonToHerokuEnv = require(`..${sep}lib${sep}json-to-heroku-env.js`); // eslint-disable-line import/no-dynamic-require

const responseVerbose = process.argv.indexOf('--response-verbose') !== -1;
const rcDataFile = '.json_to_heroku_envrc.json';

fs.readFile(rcDataFile, 'utf8', (fsErr, data) => {
  const rcData = data;

  if (fsErr) {
    console.error(`Error reading ${rcDataFile}: ${fsErr}`);
    return;
  }

  exec('heroku auth:token', (execErr, stdout) => {
    const parsedRcData = JSON.parse(rcData);

    if (execErr) {
      console.error(`exec error: ${execErr}`);
      return;
    } else if (!parsedRcData.app || !parsedRcData.config) { // eslint-disable-line no-else-return
      console.error(`${rcDataFile} is missing required "app" or "config" keys. Please see README.md for the required format.`);
      return;
    }

    (() => jsonToHerokuEnv(stdout.trim(), parsedRcData, responseVerbose))();
  });
});
