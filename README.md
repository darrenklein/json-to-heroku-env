# json-to-heroku-env
> Set remote Heroku environment variables from local exported JSON data.

> Upgrading from v1.X.X to v2.X.X? See the [upgrade guide]

[json-to-heroku-env] is a simple script that can be used to set remote Heroku environment variables from exported JSON data in a local `.js` file.

To use json-to-heroku-env, you must have the [Heroku CLI] installed and be logged in.

## Installation

#### NPM

``` SH
npm install --save-dev json-to-heroku-env
```

(I recommend using this package as a dev dependency, but do what you will!)

## Usage

To run json-to-heroku-env, simply include the following command and required options in the NPM script of your choice:

``` JSON
json-to-heroku-env --app YOUR_APP_NAME --path PATH_TO_EXPORTED_JSON
```

for example, in your project's `package.json` file:

``` JSON
"scripts": {
  "set-heroku-env-vars": "json-to-heroku-env --app my-heroku-app --path path/to/file.js"
}
```

The keys and values in your exported JSON data will correspond to the environment variables and their values in your Heroku app.

``` JS
module.exports = {'FOO': 'greetings', 'BAR': 'my friends'}
```

will set the environment variables `FOO` and `BAR` as 'greetings' and 'my friends', respectively.

### Requirements/Options

json-to-heroku-env has two required options, `--app` and `--path`, and the optional `--response-verbose`.

``` JSON
--app my-heroku-app       specify the name of the Heroku app (required)
--path path/to/file.js    specify the relative path to the .js file (required)
--response-verbose        log the status and headers from Heroku's response
```

As noted above, you must have installed the Heroku CLI and be logged in for this module to work.

The current version of the Heroku CLI requires Node version 8.3.0 or greater - this has been set in the "engines" field in the package.json file.

## Notes

This module has been formatted according to ESLint's [eslint-config-airbnb-base] rules.

[upgrade guide]: upgrade_guides/v1-to-v2-upgrade-guide.md
[json-to-heroku-env]: https://www.npmjs.com/package/json-to-heroku-env
[Heroku CLI]: https://devcenter.heroku.com/articles/heroku-cli
[eslint-config-airbnb-base]: https://www.npmjs.com/package/eslint-config-airbnb-base