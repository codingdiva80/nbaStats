//functions to query database

function getPlayers() {
  $.get("/api/players", function(data) {
    console.log(data);
  });
}

getPlayers();

module.exports = getPlayers;