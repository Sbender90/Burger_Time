var connection = require("../config/connection");

// mySQU functions to add update and delete from database

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objectSql(object){
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

var orm = {
    all: function(tableInput, cb) {
      // console.log('inside orm.all');
      var queryString = "SELECT * FROM " + tableInput + ";";
      console.log(`QS = ${queryString}`);
      // console.log(connection)
      connection.query(queryString, function(err, result) {
        // console.log('inside orm cb')
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
  
      // console.log(queryString);
  
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    delete: function(table, condition, callback) {
      var queryString = "DELETE FROM " + table;
      queryString += " WHERE ";
      queryString += condition;

      connection.query(queryString, function(error, result){
        if(error) {
          throw error;
        }
        callback(result);
      });
    },
// An example of objColVals would be {name: panther, sleepy: true}
update: function(table, objColVals, condition, cb) {
  var queryString = "UPDATE " + table;

  queryString += " SET ";
  queryString += objToSql(objColVals);
  queryString += " WHERE ";
  queryString += condition;

  console.log(queryString);
  connection.query(queryString, function(err, result) {
    if (err) {
      throw err;
    }

    cb(result);
  });
},
};

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


