var express = require('express')
var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


var requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
  }
  
  app.use(requestTime)
  
app.get('/greet',  function (req, res) {
  console.log('GET recieved: ' + req.requestTime);
  console.log(req.query);
  res.send('hello world!');
})
 
app.post('/greet', function (req, res) {
    console.log(req.body);
    res.send('Hello there!')
})

app.listen(8083)
