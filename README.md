# json-to-heroku-env
> Set remote Heroku environment variables from local exported JSON data.

json-to-heroku-env is a bash script that uses a cURL request to set remote Heroku environment variables from exported JSON data in a local `.js` file.

To use json-to-heroku-env, you must have the [Heroku CLI] installed and be logged in.

## Installation

## Usage

### Requirements/Options

json-to-heroku-env has two required options, `--app` and `--path`.

`--app` is the name of the Heroku app whose environment variables you are updating.

`--path` is the relative path to the .js file with the exported JSON data you wish to set as your app's environment variables.

## Notes

This module has been formatted according to ESLint's [eslint-config-airbnb-base] rules.

[Heroku CLI]: https://devcenter.heroku.com/articles/heroku-cli
[eslint-config-airbnb-base]: https://www.npmjs.com/package/eslint-config-airbnb-base