# ![CF](http://i.imgur.com/7v5ASc8.png) LAB

## Lab-07-api-server

### Author: Chris and Bonnie

### Links and Resources

- [submission PR](https://github.com/401-advanced-javascript-bw/lab-07-api-server/pull/1)
- [travis](https://www.travis-ci.com/401-advanced-javascript-bw/lab-07-api-server)


### Modules

#### `server.js`

#### `validatePost.js`

### Setup

- Listen on `PORT 8080`

#### Running the app

- `npm i`
- `nodemon`
- Endpoint: `/categories`
  - Returns a JSON object with name data.

#### Tests

- run `npm test` to run tests.
- Rejects if req.body keys do not match schema keys
- Accepts req.body if all keys match schema

#### UML

![](./images/uml.jpg)
