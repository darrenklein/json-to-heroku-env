#! /usr/bin/env node

/* eslint-disable no-console */

const { exec } = require('child_process');
const jsonToHerokuEnv = require('../lib/json-to-heroku-env.js');

const app = process.argv.indexOf('--app') > -1 ? `${process.argv[process.argv.indexOf('--app') + 1]}` : undefined;
const path = process.argv.indexOf('--path') > -1 ? `${process.argv[process.argv.indexOf('--path') + 1]}` : undefined;

if (app && path) {
  exec('heroku auth:token', (error, stdout) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }

    (() => jsonToHerokuEnv(stdout.trim(), app, path))();
  });
} else {
  console.error('Failed to provide --app or --path required options - please see README');
}
