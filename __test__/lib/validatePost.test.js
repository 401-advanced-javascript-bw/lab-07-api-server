'use strict';

const validatePost = require('../../lib/validatePost.js');

describe('Validates post', () => {
  it('rejects if req.body keys do not match schema keys', () => {
    const req = { body: { name: 'spongebob' }, method: 'PUT' };
    validatePost(req, {}, (err, req, res, next) => {
      expect(err).toEqual('Object keys do not match schema');
    });
  });
  it('accepts req.body if all keys match schema', () => {
    const req = { body: { name: 'spongebob' }, method: 'POST' };
    validatePost(req, {}, (err, req, res, next) => {
      expect(err).toBeUndefined();
    });
  });
});
