var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "50miler",
    database: "burgers_db"
});

connection.connect(function(err){
    if (err) throw err; 
    // put the starting function here

})

module.exports = connection; 