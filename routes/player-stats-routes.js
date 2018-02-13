var db = require("../models");
module.exports = function(app) {

db.sequelize.query("SELECT Players.player_name, Stats.points FROM Players INNER JOIN Stats ON Players.pid=Stats.pid").then(function(data){
  console.log(data);
});


app.get("/api/player-names", function(req, res) {
    
    db.Players.findAll({
      include: [db.Stats]
    }).then(function(dbPlayers) {
      console.log(dbPlayers.player_name);
      res.json(dbPlayers);
    });

  });


}