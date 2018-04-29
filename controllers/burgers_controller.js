var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// router.get("/", function(request, response){
//     burger.all(function(data){
//     var burgerObject = {
//         burgers: data
//     };
//     console.log(burgerObject);
//     response.render("index", burgerObject);
// });
// });

router.get("/", function(request, response) {
    console.log('inside /')
    burger.all  (function(data){
        console.log("test:", data);
        response.render("index", { burgers: data });

    });
});
// change connection to use the orm burger.??
router.post("/api/burgers", function(request, response){
    burger.create ([
        "name", "devour"
    ],[
        request.body.burger_name, request.body.devour
    ], function(result){
        result.json({ id: result.insertId });
        console.log("###################################", burger);
    });
});

router.delete("/api/burgers/:id", function(request, response){
    var condition = "id = ? " + request.params.id;

    cat.delete(condition, function(result){
        if (result.affectedRows == 0) {
            return response.status(404).end();
        } else{
            response.status(200).end;
        }
    });
});

// router.put("burgers/:id", function(request, response){
//     connection.query("UPDATE burgers SET burger_name = ? WHERE id = ?", [request.body.burger_name, request.params.id], function(error, result) {
//         if (error) {
//             return res.status(500).end();
//         }
//         else if (result.changedRows === 0) {
//             return response.status(404).end();
//         }
//         res.status(200).end();
//     });
// });

// router.delete("burgers/:id", function(request,response){
//     connection.query("DELETE FROM burgers WHERE id = ?", [request.params.id], function(error, result){
//         if (error){
//             return res.status(500).end();
//         }
//         else if (result.affectRows === 0){
//             return result.status(404).end();
//         }
//         result.status(200).end();
        
//     });
// });

module.exports = router;
