#! /usr/bin/env node

/* eslint-disable no-console */

const { exec } = require('child_process');
const { sep } = require('path');

const jsonToHerokuEnv = require(`..${sep}lib${sep}json-to-heroku-env.js`); // eslint-disable-line import/no-dynamic-require

const app = process.argv.indexOf('--app') > -1 ? `${process.argv[process.argv.indexOf('--app') + 1]}` : undefined;
const filePath = process.argv.indexOf('--path') > -1 ? `${process.argv[process.argv.indexOf('--path') + 1]}` : undefined;
const responseVerbose = process.argv.indexOf('--response-verbose') !== -1;

if (app && filePath) {
  exec('heroku auth:token', (error, stdout) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }

    (() => jsonToHerokuEnv(stdout.trim(), app, filePath, responseVerbose))();
  });
} else {
  console.error('Failed to provide --app or --path required options - please see README');
}
