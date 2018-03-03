# json-to-heroku-env
> Set remote Heroku environment variables from local exported JSON data.

json-to-heroku-env is a simple script that can be used to set remote Heroku environment variables from exported JSON data in a local `.js` file.

To use json-to-heroku-env, you must have the [Heroku CLI] installed and be logged in.

## Installation

#### NPM

``` SH
npm install --save-dev json-to-heroku-env
```

(I recommend using this package as a dev dependency, but do what you will!)

## Usage

To run json-to-heroku-env, simply include the following command in the NPM script of your choice:

``` JSON
json-to-heroku-env
```

for example, in your project's `package.json` file:

``` JSON
"scripts": {
  "set-heroku-env-vars": "json-to-heroku-env --app my-heroku-app --path path/to/file.js"
}
```

Or call it directly from the command line:

``` SH
npm run json-to-heroku-env --app my-heroku-app --path  path/to/file.js
```

The keys and values in your exported JSON data will correspond to the environment variables and their values in your Heroku app.

``` JS
module.exports = {'FOO': 'greetings', 'BAR': 'my friends'}
```

will set the environment variables `FOO` and `BAR` as 'greetings' and 'my friends', respectively.

### Requirements/Options

json-to-heroku-env has two required options, `--app` and `--path`.

``` JSON
--app      specify the name of the Heroku app
--path     specify the relative path to the .js file with the exported JSON data
```

As noted above, you must have installed the Heroku CLI and be logged in for this module to work.

## Notes

This module has been formatted according to ESLint's [eslint-config-airbnb-base] rules.

[Heroku CLI]: https://devcenter.heroku.com/articles/heroku-cli
[eslint-config-airbnb-base]: https://www.npmjs.com/package/eslint-config-airbnb-base