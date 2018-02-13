// A function for pushing stats from player game logs. Calls sendStats upon completion
function sendStats(statsData) {
  $.post("/api/stats", statsData)
    // .then(getPlayers);
}

var gameLogStats = function() {
  //username and password required for ajax call
  var username = "deevine";
  var password = "09081983";
  var queryDate = '20161232';
  var queryURL ='https://api.mysportsfeeds.com/v1.1/pull/nba/2016-2017-regular/player_gamelogs.json?team=gsw';
  var teams = ['atl', 'brooklyn-nets', 'bos', 'cha', 'chi', 'cle', 'dal', 'den', 'det', 'gsw', 'hou', 'ind', 'lac', 'lal', 'mem', 'mia', 'mil', 'min', 'nop', 'nyk', 'okc', 'orl', 'phi', 'phx', 'por', 'sac', 'sas', 'tor', 'uta', 'was'];

  for (var i = 0; i < teams.length; i++) {
    console.log(teams[i]);
    queryURL =   'https://api.mysportsfeeds.com/v1.1/pull/nba/2016-2017-regular/player_gamelogs.json?team=' + teams[i];
    console.log(queryURL);
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
      // alert('Query Sucessful'); 
    }
    }).done(function(response) {
      console.log(response);
      for (var i = 0; i < response.playergamelogs.gamelogs.length; i++) {
        // console.log(response);
        var gamelog = response.playergamelogs.gamelogs[i];
        var date = gamelog.game.date;
        date = date.replace(/-/g,'');
        var time = gamelog.game.time;
        var city = gamelog.game.homeTeam.City;
        var pid = gamelog.player.ID;
        var points = gamelog.stats.Pts['#text'];
        var assists = gamelog.stats.Ast['#text'];
        var rebounds = gamelog.stats.Reb['#text'];
        var steals = gamelog.stats.Stl['#text'];
        var blocks = gamelog.stats.Blk['#text'];
        var turnovers = gamelog.stats.Tov['#text'];
        console.log(pid, date, time, city, points, assists, rebounds, steals, blocks, turnovers);

        sendStats({
          date: date,
          time: time,
          city: city,
          pid: pid,
          points: points,
          assists: assists,
          rebounds: rebounds,
          steals: steals,
          blocks: blocks,
          turnovers: turnovers
        });
      }
    });  
  } 
}
    

var weather = function(location, date) {
  var apikey = '60b18c12e98e451fa5a192111170311';
  var location = location;
  var date = date
  var queryURL = 'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key='+apikey+'&q='+location+'&format=json&date='+date+'';
 
  $.ajax
  ({
    type: "GET",
    url: queryURL,
    dataType: 'json',
    async: false,
    success: function (){
      alert('Weather Query Sucessful'); 
    }
  }).done(function(response) {
    console.log(response)
    var temperature = response.data.weather[0].maxtempF;
    console.log('max temp for the day: ' + temperature);
  });  

};
//add event listeners to call apis

$('#gamelog').on('click', function(){
  event.preventDefault();
  gameLogStats();
});

$('#weather').on('click', function(){
  weather('new+york','2009-12-01');
});

$('#get-players').on('click', function(){
  getPlayers();
});

//return player stats and points based on pid
$('#player-stats').on('click', function(){
  getPlayerStats('9298');
});

$('#get-one').on('click', function(){
  getOnePlayer('9298');
});

//this is where we'll make the specific query requests

//query all player info from player table
function getPlayers() {
  $.get("/api/players", function(data) {
    console.log(data);
  });
}

//query a specific players gamelogs with pid
function getPlayerStats(pid) {
  $.get("/api/stats"+pid, function(data) {
    console.log(data[0])
  });
}

//query a specific players gamelogs with pid
function getOnePlayer(pid) {
  $.get("/api/oneplayer"+pid, function(data) {
    var player = data[0][0];
    console.log(player);
  });
}