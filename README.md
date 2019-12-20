[![Maintainability](https://api.codeclimate.com/v1/badges/1976aa3b119cf66b162b/maintainability)](https://codeclimate.com/repos/5d41e0a56747ad016301ead7/maintainability)


## Development Dependencies:

1. [Node](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04-pt)
2. [Angular/cli](https://cli.angular.io/)

## Env Dependencies:
1. Create `config.ts` file
```
$ cp config.default.ts config.ts
```
2. set env variables
```
production
AUTH_URL
GRANT_TYPE
CLIENT_SECRET
CLIENT_ID
```

## Pre Run Project
1. Install packages
```
$ npm i --unsafe-perm
```

## Run Project
```
$ ng serve
```

open [`localhost:4200`](http://localhost:4200) in your browser

### @TODO
1. List Quotations of QuotationGroups
2. Modularize `App` super-module for feature, like `Admin` super-module