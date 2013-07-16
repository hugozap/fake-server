//Fake data server

var express = require('express');
var cities = require('./fakedata/cities.js');


var app = express();
app.use(express.bodyParser());

//Endpoint to test the application http://localhost:8080/App

app.use('/app',express.static('./Web'));

//Endpoint serving fake data created in cities.js
app.get('/cities',function(req,res){
	res.send(cities);
});


app.listen(8080);