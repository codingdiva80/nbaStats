var db = require("../models");
module.exports = function(app) {

  app.get("/api/stats:pid", function(req, res) {
    pid = req.params.pid;
    console.log(pid);
    db.sequelize.query("SELECT * FROM Stats WHERE Stats.pid="+pid)
    .then(function(data){
      res.json(data);
    });
  });

  app.get("/api/one:id", function(req, res) {
    var id = req.params.id;
    console.log(id);
    db.sequelize.query("SELECT * FROM Players WHERE Players.pid="+id)
    .then(function(data){
      res.json(data);
    });
  });

  app.get("/api/players", function(req, res) {
   db.sequelize.query("SELECT * FROM Players")
    .then(function(data){
      res.json(data);
    });

  });

  app.post("/api/players", function(req, res) {
    db.Players.create(req.body).then(function(dbPlayer) {
      res.json(dbPlayer);
    });
  });

  app.post("/api/stats", function(req, res) {
    db.Stats.create(req.body).then(function(dbStats) {
      res.json(dbStats);
    });
  });

  app.get("/api/stats/:id", function(req, res) {
    db.sequelize.query("SELECT date, points, rebounds, assists, steals, blocks FROM Players INNER JOIN Stats ON Players.pid=Stats.pid where Stats.pid=" + req.params.id + " limit 10").then(function(data){
    // db.sequelize.query("SELECT Stats.date, Stats.points, Stats.rebounds, Stats.assists, Stats.steals, Stats.blocks FROM nba.Players INNER JOIN Stats ON Players.pid="+ req.params.id + " limit 10").then(function(data){
    // console.log(data);
    res.json(data);
    });
  });

};