#! /usr/bin/env node

const jsonToHerokuEnv = require('../lib/json-to-heroku-env.js');

const token = process.argv.indexOf('--token') > -1 ? `${process.argv[process.argv.indexOf('--token') + 1]}` : undefined;
const app = process.argv.indexOf('--app') > -1 ? `${process.argv[process.argv.indexOf('--app') + 1]}` : undefined;

(() => jsonToHerokuEnv(token, app))()

// (() => (app ? jsonToHerokuEnv(app, token) : console.error('Please provide a valid \'--app\' option')))();
