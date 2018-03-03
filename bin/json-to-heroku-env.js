#! /usr/bin/env node

const exec = require('child_process').exec;
const jsonToHerokuEnv = require('../lib/json-to-heroku-env.js');

const token = process.argv.indexOf('--token') > -1 ? `${process.argv[process.argv.indexOf('--token') + 1]}` : undefined;
const app = process.argv.indexOf('--app') > -1 ? `${process.argv[process.argv.indexOf('--app') + 1]}` : undefined;

exec('heroku auth:token', (error, stdout) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }

  return (() => jsonToHerokuEnv(stdout, app))();
});





// (() => (app ? jsonToHerokuEnv(app, token) : console.error('Please provide a valid \'--app\' option')))();
