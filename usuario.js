var express = require('express');
var usuario = express.Router();

usuario.get('/oi', function (req, res) {
  res.send('Oi!');
});

usuario.get('/ai', function (req, res) {
  res.send('Ai!');
});

module.exports = usuario;
