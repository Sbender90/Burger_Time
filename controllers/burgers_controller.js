var express = require("express");
var burger = require("burger");
var server = require("server");
// put routes here

app.get("/", function(request, response) {
    connection.query("SELECT * FROM burgers;", function(error, data){
        if (error) throw error;

        res.render("index", { burgers: data });
    
    });
});

app.post("/", function(request, response){
    connection.query("INSERT INTO burgers ()burger_name) VALUES (?)", [request.body.burgers], function(error, result) {
        if (error) {
            return response.status(500).end();
        }
        response.json({if: result.insertId });
        console.log({ id: result.insertId });
        response.redirect("/");
    });
});

app.put("burgers/:id", function(request, response){
    connection.query("UPDATE burgers SET burger_name = ? WHERE id = ?", [request.body.burger_name, request.params.id], function(error, result) {
        if (error) {
            return res.status(500).end();
        }
        else if (result.changedRows === 0) {
            return response.status(404).end();
        }
        res.status(200).end();
    });
});

app.delete("burgers/:id", function(request,response){
    connection.query("DELETE FROM burgers WHERE id = ?", [request.params.id], function(error, result){
        if (error){
            return res.status(500).end();
        }
        else if (result.affectRows === 0){
            return result.status(404).end();
        }
        result.status(200).end();
        
    });
});

module.exports = router;
