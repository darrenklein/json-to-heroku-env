#! /usr/bin/env node

const jsonToHerokuEnv = require('../lib/json-to-heroku-env.js');

const app = process.argv.indexOf('--app') > -1 ? `${process.argv[process.argv.indexOf('--app') + 1]}` : undefined;

(() => (app ? jsonToHerokuEnv(app) : console.error('Please provide a valid \'--app\' option')))();
