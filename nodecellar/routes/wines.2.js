exports.initPage = function (req, res) {                                                
    console.log("initializing page"); 
 
  // res.sendfile("/clientfiles/clientNodecellar.html");
 
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write('<!doctype html>\n<html lang="en">\n' +
 '<head>'+
 '\n<meta charset="utf-8">' +
 '<META http-equiv="refresh" content="5;URL=https://otg1-c9-pglbluefish.c9.io">' +
 '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' +
 '</head>\n<h1>C9 v1.0 Server</h1>\n'+
 '<body>' +
 'redirecting you to main site' +
 '</body>'+
 '\n</html>');
  
   res.send("init complete")  ;
 //  res.send('<p><a href="https://otg1-c9-pglbluefish.c9.io/clientfiles/clintNodecellar.html">Main Page</a> </p>')  ;
   
   
};                          

/*
<html>
  <head>
    <title>IU Webmaster redirect</title>
    <META http-equiv="refresh" content="0;URL=http://www.indiana.edu/~account/new-directory">
  </head>
  <body bgcolor="#ffffff">
    <center>The contents you are looking for have moved. You will be redirected to the new location automatically in 5 seconds. Please bookmark the correct page at <a href="http://www.indiana.edu/~wmhelp/new-directory"> http://www.indiana.edu/~wmhelp/new-directory</a>
    </center>
  </body>
</html>
*/


exports.uploadFile = function (req, res) {                                                
    // request.files will contain the uploaded file(s),                                           
    // keyed by the input name (in this case, "file")                                             

    // show the uploaded file name                                                                
    console.log("file name", req.files.file.name);                                            
    console.log("file path", req.files.file.path);                                            
    res.send("upload complete");                                                              
};                          


exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('msg received from Paul!..Retrieving wine: ' + id);
 };

exports.findAll = function(req, res) {
    console.log("Paul's request was received and will be processed by findAll");
   res.writeHead(200, {
        'Content-Type': 'text/html',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    }); 
   res.write("in findAll");
      res.write('<br>');    
    res.write("you got me congrats!");
    res.send();
};

exports.addWine = function(req, res) {
console.log(JSON.stringify(req.body) +" was received and will be processed by addWine");
    console.log('post (Add) request from Paul!!! Adding wine: ' +JSON.stringify(req.body));
    res.write('in addWine, done....Success!!' + req.body);
    res.write('\n'); 
    res.write("closing conn Bye");
    res.send();
}


exports.updateWine = function(req, res) {
    var id = req.params.id;
    var wine = req.body;
    console.log('Updating wine: ' + id);
    console.log(JSON.stringify(wine));
    console.log('' + res + ' document(s) updated');
    res.send(wine);
}

exports.deleteWine = function(req, res) {
    var id = req.params.id;
    console.log('Deleting wine: ' + id);
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
}

/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function() {

    var wines = [
    {
        name: "CHATEAU DE SAINT COSME",
        year: "2009",
        grapes: "Grenache / Syrah",
        country: "France",
        region: "Southern Rhone",
        description: "The aromas of fruit and spice...",
        picture: "saint_cosme.jpg"
    },
    {
        name: "LAN RIOJA CRIANZA",
        year: "2006",
        grapes: "Tempranillo",
        country: "Spain",
        region: "Rioja",
        description: "A resurgence of interest in boutique vineyards...",
        picture: "lan_rioja.jpg"
    }];

    db.collection('wines', function(err, collection) {
        collection.insert(wines, {safe:true}, function(err, result) {});
    });

};