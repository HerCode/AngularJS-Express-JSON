var express = require('express');
var index = require('./routes/index');
var Olympics = require('./routes/Olympics');

var app = express();

app.use(express.static('public'));
app.use('/', index);
app.use('/Olympics', Olympics);

var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('Listening on port ', port);
  console.log('Press Ctrl-C to quit');
});
