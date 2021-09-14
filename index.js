const express = require('express');

const app = express();

const { config } = require('./config/index');

app.get('/', function (req, res) {
  res.send('helloWorld');
});

app.get('/json', function (req, res) {
  res.json({ hello: 'world' });
});

app.listen(config.port, function () {
  console.log(`Listenig http://localhost:${config.port}`);
});
