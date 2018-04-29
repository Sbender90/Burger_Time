var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "50miler",
    database: "burgers_db"
});

connection.connect(function(error){
    if (error) {
        console.error("error: ", error.stack);
        return;
    } 
    console.log("db connected: ", connection.threadId);
    // put the starting function here

})

module.exports = connection; 