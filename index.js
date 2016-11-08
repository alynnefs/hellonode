var express = require('express');
var app = express();
var morgan = require('morgan');

app.use(morgan("dev","immediate"));

app.use(express.static('public'));

app.use('/usuario', require('./usuario'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


