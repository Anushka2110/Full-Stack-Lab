var express = require('express');
var app = express();
 
app.get('/html', function (req, res) {
	res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/json', function (req, res) {
	res.json({ firstname: 'John', lastname: 'Smith' });
});

app.get('/toronto+team', function (req, res) {
	res.send('<html><head></head><body><h1>Go Toronto!</h1></body></html>');
});

app.get('/person/:id', function (req, res) {
	res.send('<html><head></head><body><h1>Person ID: ' + req.params.id + '</h1></body></html>');
});


app.listen(3000);

