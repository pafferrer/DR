//Phil server
//include express
var express = require('express');

//include parser to split input from post into sensible data
var bodyParser = require('body-parser');
//define object
var app = express();
//set view engine for ejs rendering
app.set('view engine', 'ejs');

//set parsing type to url encoded
var urlencodedParser = bodyParser.urlencoded({ extended: false });


var port = process.env.port || 2000;

//sets up directory for use
app.use(express.static("assets"));

//server msg to say its up
app.listen(port, function(){
        console.log("Server 1 on 1337 actually 2000 again");
       });
   
 //console.log(" 2 ");

   //this sets up landing page
app.get('/', function(request, response){
   response.render('index');
        //qs: quest[0].ask, question: quest[0]});
});

