const express = require('express');
const path = require('path');
const fs = require('fs');

let app = express();

function setResponse(res, next, url, isErrorFlag) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  res.set(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  let apiPath = path.join(__dirname, url);
  const jsonData = fs.readFileSync(apiPath);
  if (isErrorFlag) {
    res.status(400).send(jsonData);
  } else {
    res.send(jsonData);
  }
  next();
}

app.use('/todoList.json', (req, res, next) => {
  setResponse(res, next, './todoList.json', true);
});

app.listen(8080);
