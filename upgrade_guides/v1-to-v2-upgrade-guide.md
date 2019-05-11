# json-to-heroku-env
> Set remote Heroku environment variables from local exported JSON data.

## v1.X.X to v2.X.X

#### Differences

The major change between version 1.X.X and 2.X.X is an unfortunately silly one - using the `--verbose` option may generate unexpected results, as `--verbose` is already in use by NPM. That option has been replaced with `--response-verbose`.

#### Upgrading

If you have used the `--verbose` option in your app, please change it to `--response-verbose`.
