// A set of routes for displaying and saving data to the db
// Dependencies

var db = require("../models");

// Routes
module.exports = function(app) {
    // Get all users
    app.get("/api/all", function(req, res) {
        // Finding all Users, and then returning them to the user as JSON.
        // Sequelize queries are asynchronous, which helps with percieved speed.
        // If we want something to be guaranteed to happen after the query, we'll use
        // the .then function
        db.account.findAll({}).then(function(results) {
        // results are available to us inside the .then
        res.jsonp(results);
        });
    });

    // Add a user
    app.post("/api/new", function(req, res) {
        console.log("User Data:");
        console.log(req.body);

        db.account.create({
            email: req.body.email,
            password: req.body.password,
        }).then(function(results) {
        // `results` here would be the newly created user
        res.end();
        });
    });

    //see if the user can log in using credentials
    app.post("/api/loginattempt", function(req, res) {
        "use strict"
        let data = req.body;
        console.log("User Data Login:");
        console.log(req.body);

        db.account.findOne({
            where: {
                email: data.email,
                password: data.password
            }
        }).then(function(results) {
            console.log(results);
        // `results` here would be the newly created user
            if(!results){
                res.end('{"success":false}');
            }
            else{ res.end('{"success":true}');}
           
        });
    });
};