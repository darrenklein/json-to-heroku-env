#! /usr/bin/env node

const { exec } = require('child_process');
const jsonToHerokuEnv = require('../lib/json-to-heroku-env.js');

const app = process.argv.indexOf('--app') > -1 ? `${process.argv[process.argv.indexOf('--app') + 1]}` : undefined;
const path = process.argv.indexOf('--path') > -1 ? `${process.argv[process.argv.indexOf('--path') + 1]}` : undefined;

exec('heroku auth:token', (error, stdout) => {
  if (error) {
    console.error(`exec error: ${error}`); // eslint-disable-line no-console
    return;
  }

  (() => jsonToHerokuEnv(stdout.trim(), app, path))();
});
