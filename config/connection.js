var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 8080,
    user: "root",
    password: "50miler",
    database: "burgers_db"
});

connection.connect(function(error){
    if (error) {
        console.error("error: ", error.stack);
        return;
    } 
    concole.log("connected: ", connection.threadId);
    // put the starting function here

})

module.exports = connection; 