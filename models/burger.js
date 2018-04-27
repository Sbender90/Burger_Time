var orm = require("../config/orm.js");

var burger = {
    all: function(callback){
        orm.all("burgers", function(response){
            callback(response);
        });
    }, 
    create: function(collums, values, callback){
        orm.create("burgers", collums, values, function(response){
            callback(response);
        });
    },
    update: function(objectCollValues, current, calback) {
        orm.update("burgers", objectCollValues, current, function(response){
            callback(response);
        });
    }
};
//call the orm functions for the burgers?

module.exports = burger;

