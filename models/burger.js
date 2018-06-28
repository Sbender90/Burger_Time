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

    update: function(id, callback){
        orm.update('burgers',id,callback);
    },
   
    // update: function(objectCollValues, current, callback) {
    //     orm.update("burgers", objectCollValues, current, function(response){
    //         callback(response);
    //     });
    // },
    delete: function(condition, callback){
        orm.delete("burgers", condition, function(response){
            callback(response);
        });
    }
};
//call the orm functions for the burgers?

module.exports = burger;

