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
    console.log("hi")
    console.log(response)
    burger.create ([
        "burger_name"
    ],[
        request.body.burger_name
    ], function(result){
        // result.json({ id: result.insertId });
        // console.log("###################################", burger);
        response.redirect("/");
    });
});

router.put("/burgers/update", function(req, res) {
    burger.update(req.body.burger_id, function(result){
        console.log(result);
        res.redirect("/");
    });
});

// router.put("/api/burgers/:id", function(request, response){
//     console.log("HEY")
//     var condition = "id =  " + request.params.id;
// console.log("cond :"+condition);
//     burger.update({
// devour:true
//     },condition,function(result){
//         response.redirect("/");
//     });
// });

// router.put("burgers/:id", function(request,response){
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
