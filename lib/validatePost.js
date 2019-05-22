'use strict';

const postSchema = {
  name: 'string'
};

const putSchema = {
  name: 'string',
  id: 'string'
};
/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
function validatePost(req, res, next) {
  console.log('validating req.body');
  const { body } = req;
  let schema;
  if (req.method === 'POST') {
    schema = postSchema;
  } else if (req.method === 'PUT') {
    schema = putSchema;
  }
  let keys = Object.keys(schema);
  let hasKeys = keys.every(key => {
    return body.hasOwnProperty(key);
  });
  if (hasKeys === true && Object.keys(body).length === keys.length) {
    console.log('successful validation');
    next();
  } else {
    next('Object keys do not match schema');
  }
}

module.exports = validatePost;
