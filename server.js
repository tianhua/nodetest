var express = require('express');
var path = require('path');
var app = express();
var port     =  8899; // set our port
//create our router
var router = express.Router();

app.set('views', __dirname + '/views/ejs');
app.set('view engine', 'ejs');

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});
var twitter_router = express.Router();
twitter_router.use(function(req, res, next) {
	// do logging
	console.log('twitter routing.');
	next();
});
twitter_router.get('/hello.txt', function(req, res){
	  res.render('index', { title: 'Hello' });
	});
twitter_router.get('/about', function(req, res){
	  res.render('about', { title: 'Hello About' });
	});
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});
//REGISTER OUR ROUTES -------------------------------
app.use('/api', router);
app.use('/twitter', twitter_router);
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);