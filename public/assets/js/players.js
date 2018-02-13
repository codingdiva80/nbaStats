// A function for creating a player. Calls getplayers upon completion
function createPlayer(playerData) {
  $.post("/api/players", playerData)
    // .then(getPlayers);
}

var playerProfiles = function() {
  //username and password required for ajax call
  var username = "deevine";
  var password = "09081983";
  var queryURL = 'https://api.mysportsfeeds.com/v1.1/pull/nba/2016-2017-regular/roster_players.json?fordate=20170315';

  $.ajax
  ({
    type: "GET",
    url: queryURL,
    dataType: 'json',
    async: false,
    headers: {
      "Authorization": "Basic " + btoa(username + ":" + password)
    },
    success: function (){
      alert('Query Sucessful'); 
    }
  }).done(function(response) {
    for (var i = 0; i < response.rosterplayers.playerentry.length; i++) {
      var player = response.rosterplayers.playerentry;
      var pid = player[i].player.ID;
      var firstName = player[i].player.FirstName;
      var lastName = player[i].player.LastName;
      var fullName = lastName + ', ' + firstName;
      var age = player[i].player.Age;
      var birthCountry = player[i].player.BirthCountry;
      var birthDate = player[i].player.BirthDate;
      var height = player[i].player.Height;
      var position = player[i].player.Position;
      var weight = player[i].player.Weight;

      console.log(fullName, age, birthCountry, birthDate, height, position, weight);

      createPlayer({
        pid: pid,
        player_name: fullName,
        age: age,
        birthCountry: birthCountry,
        birthDate: birthDate,
        height: height,
        position: position,
        weight: weight
      });
    }
  });  
}

$('#players').on('click', function() {
  event.preventDefault();
  playerProfiles();
});

function updatePlayerInfo(elementId) {

}


// var cummulativeStats = function() {
//   //username and password required for ajax call
//   var username = "deevine";
//   var password = "09081983";
//   var season = "2016-2017";
//   var feed = 'daily_game_schedule';
//   var forDate = '?fordate=' + '20170113';
//   var queryURL = 'https://api.mysportsfeeds.com/v1.1/pull/nba/2016-2017-regular/cumulative_player_stats.json';

//   $.ajax
//   ({
//     type: "GET",
//     url: queryURL,
//     dataType: 'json',
//     async: false,
//     headers: {
//       "Authorization": "Basic " + btoa(username + ":" + password)
//     },
//     success: function (){
//       alert('Query Sucessful'); 
//     }
//   }).done(function(response) {
//     console.log(response);
//     for (var i = 0; i < response.cumulativeplayerstats.playerstatsentry.length; i++) {
//       var playerinfo = response.cumulativeplayerstats.playerstatsentry[i].player;
//       var stats = response.cumulativeplayerstats.playerstatsentry[i].stats;
//       console.log('should equal points ' + stats.Pts["#text"]);
//       console.log('first name: ' + playerinfo.FirstName);
//       console.log('last name: ' + playerinfo.LastName);
//       console.log('season points:' + stats.Pts["#text"]);
//       console.log('season assists:' + stats.Ast["#text"]);
//       console.log('season blocks:' + stats.Blk["#text"]);
//       // console.log(response);
//       // console.log(response.cumulativeplayerstats.playerstatsentry[0])
//       var firstName = playerinfo.FirstName;
//       var lastName = playerinfo.LastName;
//       var fullName = lastName + ', ' + firstName;
//       var points = parseInt(stats.Pts["#text"]);
//       var assists = parseInt(stats.Ast["#text"]);
//       var rebounds = parseInt(stats.Reb["#text"]);
//       var steals = parseInt(stats.Stl["#text"]);
//       var blocks = parseInt(stats.Blk["#text"]);
//       console.log('points, assists, rebounds, blocks ' + points, assists, rebounds, blocks);
//       //push player data to database
//       createPlayer({
//         player_name: fullName,
//         points: points,
//         assists: assists
//       });
//     }
//   });  
// }
// cummulativeStats();
