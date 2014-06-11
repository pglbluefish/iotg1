// server.js (Express 4.0)
var express = require('express');
var mongoose       = require('mongoose'); 
var mongodb       = require('mongodb'); 
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var multer     = require('multer');
var methodOverride = require('method-override');
var fs             = require('fs');
var path = require('path');
var http = require('http');

var app = express();

//overload console.log to write to file
//var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'a'});
var log_stdout = process.stdout;

console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};

//date



// config

//mongoose.connect('mongodb://localhost/constellates');

app.use(morgan('dev')); // log every request to the console
app.use(bodyParser()); // pull information from html in POST
app.use(multer()); //for multipart/form-data post upload requests
app.use(methodOverride()); // simulate DELETE and PUT

/* give access to server directory of the running server script for requesting a file in any server folder under that server directory */


    app.use(express.static(__dirname)); 
   
/**In Node.js, __dirname is always the directory in which the currently executing script resides 
__dirname isn't actually a global but rather local to each module. 
**/


/**** new express 4.0 routes ***/ 
// routes
//require('./routes/wines')(app);
// load routing from 'routes/wines.js'

var wine = require('./routes/wines');  



app.route('/')
 .get(wine.initPage);

//this route not executing initIndexPage
app.route('/clientfiles/template2/')
 .get(wine.initIndexPage);
//********
 
 
 app.route('/wines')
   .get(wine.findAll)
    .post(wine.addWine);


 app.route('/wines/:id')
	.get(wine.findById);
 
 /*
 app.route('/wines/:id')
	.get(wine.updateWine)
	.delete(wine.deleteWine);
*/

app.route('/upload/')	
	.post(wine.uploadFile);
	
	
/*** end new express 4.0 routes ***/


app.listen(process.env.PORT);
console.log('Hello Paul cloud !!! server up and Listening at host:port ...' + process.env.IP +':' +process.env.PORT );