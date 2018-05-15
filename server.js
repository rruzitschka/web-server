var express = require('express');
var app = express();
const PORT = 3000;

var middleware = {
    requireAuthentication: (req, res, next) => {
        console.log('private route hit!');
        next();
    },
    logger: (req, res, next) => {
        
        let timeStamp = new Date().toString();
        console.log('Request:' + timeStamp +' '+ req.method + ' ' + req.originalUrl);
        next();
    }
};

app.use(middleware.logger);

app.get('/', function (req, res){

  res.send('Hello World');

});

app.get('/about', middleware.requireAuthentication, function (req, res){

    res.send('This is the very first express app!');
  
  });

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
    console.log('Express started at port ' + PORT);
});
