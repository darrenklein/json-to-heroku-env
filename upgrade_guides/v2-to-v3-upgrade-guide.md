# json-to-heroku-env
> Set remote Heroku environment variables from local exported JSON data.

## v2.X.X to v3.X.X

#### Differences

In version 3.X.X, this package has moved to the standard of using a user-supplied runtime configuration file instead of NPM command arguments to designate the name of the Heroku app and the configuration key/value pairs.

#### Upgrading

This runtime configuration file should be placed in your application's root directory, and should be named `.json_to_heroku_envrc.json`. The JSON data in that file has two required keys, `app` and `config` - for example:

```JSON
{
	"app": "my-heroku-app",
	"config": {
		"FOO": "greetings",
		"BAR": "friends"
	}
}
```

You can remove the `--app` and `--path` options from the NPM command in your `package.json` file, although `--response-verbose` remains a valid option.
