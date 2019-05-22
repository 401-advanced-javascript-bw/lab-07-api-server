'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

const validatePost = require('./validatePost');

let db = [];

app.use(express.json());

app.use((req, res, next) => {
  console.log('LOG:', req.method, req.path);
  next();
});

app.get('/categories', (req, res, next) => {
  let count = db.length;
  let results = db;
  res.json({ count, results });
});

app.get('/categories/:id', (req, res, next) => {
  let id = req.params.id;
  let record = db.filter(record => record.id === parseInt(id));
  res.json(record[0]);
});

app.post('/categories', validatePost, (req, res, next) => {
  let { name } = req.body;
  let record = { name };
  record.id = db.length + 1;
  db.push(record);
  res.json(record);
});

app.put('/categories/:id', validatePost, (req, res, next) => {
  console.log(db[0]);
  db.forEach((record, idx) => {
    console.log({ idx, recordid: record.id, body: req.body });
    if (record.id === parseInt(req.params.id)) {
      db[idx] = req.body;
      res.status(200);
      res.send(db[idx]);
    }
  });
});

app.delete('/categories/:id', (req, res, next) => {
  db.forEach((record, idx) => {
    if (record.id === parseInt(req.params.id)) {
      db.splice(idx, 1);
    }
    res.status(200);
    res.send('Item deleted');
  });
});

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  }
};
