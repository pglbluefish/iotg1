var express = require('express'),
    wine = require('./routes/wines');
 
var app = express();
 
/* give access to server directory of the running server script for requesting a file in any server folder under that server directory */

// remove app configure (not needed in newer express versions)
//app.configure(function () {

    app.use(express.static(__dirname)); 

/**In Node.js, __dirname is always the directory in which the currently executing script resides 
__dirname isn't actually a global but rather local to each module. 
**/

 
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());

// remove app configure (not needed in newer express versions)
//});
 
app.get('/wines', wine.findAll);
app.get('/wines/:id', wine.findById);
app.post('/wines', wine.addWine);
app.put('/wines/:id', wine.updateWine);
app.delete('/wines/:id', wine.deleteWine);
app.post('/upload/', wine.uploadFile);
 
app.listen(1999);
console.log('Hello Paul server up and Listening on port 1999...');