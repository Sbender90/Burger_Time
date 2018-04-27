var connection = require("../config/connection");
// mySQU functions to add update and delete from database
function objectSql(boject){
    var arr = [];
    for (var key in object){
        var value = object[key];
        if(Object.hasOwnProperty.call(object, key)) {
            if (typeof value === "string" && value.indexOf (" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
        return arr.toString();
}

// var orm = {
//     all: function(tableInput, callback) {
//         var queryString = "SELECT * FROM" + tableInput + ";";
//         connection.query(queryString, function(error, result){
//             if (error) {
//                 throw error;
//             }
//             callback(result);
//         });
//     }
// }, 

var orm = {
    all: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    create: function(table, cols, vals, cb) {
      var queryString = "INSERT INTO " + table;
  
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";
  
      console.log(queryString);
  
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
}

module.exports = orm;

// create: function(table, cols, vals, callback)




// update: function(table, name_col, callback){
//     var queryString = "UPDATE" + table;

//     queryString += " SET ";
//     queryString += objToSQL
// }

// delete: function(devour){
//     var queryString = "id",
//     if(error){
//         throw error;
//     }
//     callback(result);
// }


