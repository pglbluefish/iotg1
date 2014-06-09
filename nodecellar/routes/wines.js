exports.initIndexPage = function(req, res) {
    var myDate=new Date();
 console.log(req.url + " was accessed on: " + (myDate.getMonth()+1) +"|"+ myDate.getDate() +"|"+ myDate.getFullYear() +"|"+ myDate.getHours() +":"+myDate.getMinutes());  
    console.log("request for main index page was received ");
   res.writeHead(200, {
        'Content-Type': 'text/html',
        'Cache-Control': 'no-cache'
    
        
   //     'Connection': 'keep-alive'
    }); 
   res.write("in initIndexPage");
    res.write('<br>');    
    res.write("you got main index page congrats!");
    res.send();
};





exports.initPage = function (req, res) {    
    var myDate=new Date();
 console.log(req.url + " was accessed on: " + (myDate.getMonth()+1) +"|"+ myDate.getDate() +"|"+ myDate.getFullYear() +"|"+ myDate.getHours() +":"+myDate.getMinutes());  
 // res.sendfile("/clientfiles/clientNodecellar.html");
 
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write('<!doctype html>\n<html lang="en">\n' +
 '<head>\n'+
 '<title>Alliance Research Group C9 Cloud Server Development and Training</title>'+
 '<meta name="description" content="C9 cloud server development and training Alliance Research Group development team">'+
'<meta name="keywords" content="cloud server development, training, alliance research, paul ling, ling">' +
'<meta charset=UTF-8">' +
 
 
 
 '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' +
 '</head>\n<body>\n<h1>C9 v1.0 Server</h1>\n' +
 '<div id="content">' +
 '<p>Go to Main Page:</p>' +
 //'<p><a href="https://otg1-c9-pglbluefish.c9.io/clientfiles/clientNodecellar.html">Main Page</a> </p>' +//
 '<p><a href="https://otg1-c9-pglbluefish.c9.io/clientfiles/template2/index.html">Main Page</a> </p>' +
 '</div>' +
 '\n</body>\n</html>');
  
   res.send("init complete" )  ;
 //  res.send('<p><a href="https://otg1-c9-pglbluefish.c9.io/clientfiles/clintNodecellar.html">Main Page</a> </p>')  ;
   
   
};                      




exports.uploadFile = function (req, res) {                                                
    // request.files will contain the uploaded file(s),                                           
    // keyed by the input name (in this case, "file")                                             

    // show the uploaded file name  
  var myDate=new Date();  
 console.log(req.url + " was accessed on: " + (myDate.getMonth()+1) +"|"+ myDate.getDate() +"|"+ myDate.getFullYear() +"|"+ myDate.getHours() +":"+myDate.getMinutes());  
    console.log("file name", req.files.file.name);                                            
    console.log("file path", req.files.file.path);                                            
    res.send("upload api was called successfully for file:" + req.files.file.name + " at "+ req.files.file.path);                                                              
};                          


exports.findById = function(req, res) {
    var id = req.params.id;
 var myDate=new Date();
 console.log(req.url + " was accessed on: " + (myDate.getMonth()+1) +"|"+ myDate.getDate() +"|"+ myDate.getFullYear() +"|"+ myDate.getHours() +":"+myDate.getMinutes());  
   console.log('msg received from Paul!..Retrieving wine: ' + id);
     res.writeHead(200, {
        'Content-Type': 'text/html',
        'Cache-Control': 'no-cache'
 
   /*     'Connection': 'keep-alive'  */
    }); 
      res.write("in findById");
      res.write('<br>');    
    res.write("you sent me an id congrats " + id +"!!!!" );
    res.send();

 };

exports.findAll = function(req, res) {
    var myDate=new Date();
 console.log(req.url + " was accessed on: " + (myDate.getMonth()+1) +"|"+ myDate.getDate() +"|"+ myDate.getFullYear() +"|"+ myDate.getHours() +":"+myDate.getMinutes());  
    console.log("Paul's request was received and will be processed by findAll");
   res.writeHead(200, {
        'Content-Type': 'text/html',
        'Cache-Control': 'no-cache'
   //     'Connection': 'keep-alive'
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