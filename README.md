# json-to-heroku-env
> Set remote Heroku environment variables from local exported JSON data.

> Upgrading from v1.X.X to v2.X.X? See the [v1-to-v2-upgrade guide]

> Upgrading from v2.X.X to v3.X.X? [v2-to-v3-upgrade guide] in your face

[json-to-heroku-env] is a simple script that can be used to set remote Heroku environment variables from a local file.

**To use json-to-heroku-env, you must have the [Heroku CLI] installed and be logged in.**

## Installation

#### NPM

``` SH
npm install --save-dev json-to-heroku-env
```

(I imagine that you'll want to use this as a dev dependency, do what you will)

## Usage

To use **json-to-heroku-env**, you'll need to create a `.json_to_heroku_envrc.json` file in your app's root directory. The JSON data in that file has two required keys, `app` and `config` - for example:

```JSON
{
	"app": "my-heroku-app",
	"config": {
		"FOO": "greetings",
		"BAR": "friends"
	}
}
```

Then just include the following command in the NPM script of your choice in your `package.json` file:

```JSON
json-to-heroku-env
```

for example, I like to roll:

```JSON
"scripts": {
  "set-heroku-env-vars": "json-to-heroku-env"
}
```

The `config` keys and values from your JSON data will set the corresponding environment values in your remote Heroku app. The example above would set `FOO` and `BAR` as "greetings" and "my friends", respectively.

Note that the environment variables that you set via this script will either be created if they don't yet exist or overwritten if they do - as of now, this script has no destructive behaviors... although I'm considering such a thing for a future release.

### Requirements

As noted above, you must have installed the [Heroku CLI] and be logged in for this module to work.

The current version of the Heroku CLI requires Node version 8.3.0 or greater - this has been set in the "engines" field in the package.json file.

### Options

You can pass one optional flag into the `json-to-heroku-env ` command, `--response-verbose`, which will log the status and headers from Heroku's response.

## Notes

This module has been formatted according to ESLint's [eslint-config-airbnb-base] rules.

[v1-to-v2-upgrade guide]: upgrade_guides/v1-to-v2-upgrade-guide.md
[v2-to-v3-upgrade guide]: upgrade_guides/v2-to-v3-upgrade-guide.md
[json-to-heroku-env]: https://www.npmjs.com/package/json-to-heroku-env
[Heroku CLI]: https://devcenter.heroku.com/articles/heroku-cli
[eslint-config-airbnb-base]: https://www.npmjs.com/package/eslint-config-airbnb-base
