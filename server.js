var express = require('express');
var middleware = require('./middleware.js');
var app = express();
const PORT = 3000;

app.use(middleware.logger);

app.get('/', function (req, res){

  res.send('Hello World!');

});

app.get('/about', middleware.requireAuthentication, function (req, res){

    res.send('This is the very first express app!');
  
  });

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
    console.log('Express started at port ' + PORT);
});
