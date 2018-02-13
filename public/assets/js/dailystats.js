$(document).ready(function() {

  // A function for creating an player. Calls getplayers upon completion
  function sendStats(statsData) {
    $.post("/api/stats", statsData)
      // .then(getPlayers);
  }

  var dailyStats = function() {
    //username and password required for ajax call
    var username = "deevine";
    var password = "09081983";
    var queryDate = '20161232';
    var queryURL = 'https://api.mysportsfeeds.com/v1.1/pull/nba/2016-2017-regular/daily_player_stats.json?fordate='+queryDate;

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
      console.log(response);

      var player = response.dailyplayerstats.playerstatsentry;
      var pid = player[0].player['ID'];
      console.log(pid);
      var points = player[0].stats.Pts['#text'];
      var assists = player[0].stats.Ast['#text'];
      var rebounds = player[0].stats.Reb['#text'];
      var steals = player[0].stats.Stl['#text'];
      var blocks = player[0].stats.Blk['#text'];
      var turnovers = player[0].stats.Tov['#text'];
      console.log(player[0]);
      console.log(assists);
      console.log(points, assists, rebounds, steals, blocks, turnovers);
      sendStats({
        pid: pid,
        points: points,
        assists: assists,
        rebounds: rebounds,
        steals: steals,
        blocks: blocks,
        turnovers: turnovers
      });
    });  
  }

  dailyStats();
});
