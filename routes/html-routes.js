// This file offers a set of routes for sending users to the various html pages
// Dependencies

var path = require("path");

// Routes
module.exports = function(app) {
    // Each of the below routes just handles the HTML page that the user gets sent to.
    // index route loads index.html (Home page)
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    // Loads contents of assets folder (css, img, etc)
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../assets/*"));
    });

    // add route loads the account.html page,
    // where users can create new account
    app.get("/account", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/account.html"));
    });

    app.get("/signup", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });

    app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

    app.get("/login", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });
     
    app.get("/logout", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/logout.html"));
    });

};
