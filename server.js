var express = require("express");
var bodyParser = require('body-parser');

var connection = require("./config/connection");
var app = express();
var PORT = connection;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var mysql = require("mysql");
var connection = require("connection");

connection.connect(function(err){
    if(err){
        console.error("error connecting: ", err.stack);
        return;
    }

    console.log("connected as id: ", connection.threadId);
});
//add stuff here

app.listen(PORT, function(){
    console.log("Server listening on: ", PORT);
});
