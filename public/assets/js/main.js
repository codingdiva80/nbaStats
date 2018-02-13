// My Account Form
// Function for creating a user account 
function newAccount() {
    $("#signupbtn").on("click", function(event) {
        event.preventDefault();

        // Make a newUser object
        var newUser = {
            email: $("#email").val().trim(),
            password: $("#password").val().trim()
        };
        
        //Send an AJAX POST-request with jQuery
        $.post("/api/new", newUser)
        // On success, run the following code
        .done(function(result) {
            var account = new Account();
            account.setLoginInfo(newUser.email, newUser.password);
            setTimeout(function() {
              window.location.href = "/";
            }, 1000)
        });

        // Empty each input box by replacing the value with an empty string
        $("#email").val("");
        $("#password").val("");
        $("#repeat_password").val("")
    });
};

// Function for generating a modal window after user signs up
function addModal() {
    var modal = document.getElementById('myModal');
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks the button, open the modal 
    modal.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    if(span){
            span.onclick = function() {
            modal.style.display = "none";
        }
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }
}; 

//Function for generating a modal window if user chooses Search
function searchOption() {
    var modal = document.getElementById('searchModal');
    // Get the button that opens the modal
    var btn = document.getElementById("searchbtn");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close-search")[0];
    
    // When the user clicks the button, open the modal 
    if(btn){
        btn.onclick = function() {
            modal.style.display = "block";
        }
    }
    
    // When the user clicks on <span> (x), close the modal
    if(span){
        span.onclick = function() {
            modal.style.display = "none";
        }
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }
};     

//Function for taking user back to Home page
function goBackToHome() {
    $("#gohomebtn").on("click", function(event) {
        event.preventDefault();
        document.location.href = "/";
    });
};
//Login
function setLoginButton() {
    
    $("#loginbtn").on("click", function(event) {
        event.preventDefault();
        email = $('#email').val();
        password = $('#password').val();
        var account = new Account();
        account.doLogin(email, password, goToHome);
    });    
};

function goToHome(success){
    if(success){
        window.location.href = "/";
    }
    else{
        alert("Username or password incorrect");
    }
};

function getFormattedDate(daysFromNow) {
    if(!daysFromNow){ daysFromNow = -1; }
    $today = new Date();
    $yesterday = new Date($today);
    $yesterday.setDate($today.getDate() + daysFromNow);

    var $dd = $yesterday.getDate();
    var $mm = $yesterday.getMonth()+1; //January is 0!

    var $yyyy = $yesterday.getFullYear();
    if($dd<10){$dd='0'+$dd} if($mm<10){$mm='0'+$mm} $yesterday = $mm+'/'+$dd+'/'+$yyyy;
    return $yesterday;
}
searchOption();
goBackToHome();

//PlayerStats Graphs
var ctx = document.getElementById("myChart").getContext("2d");
var colors = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
var numberData = [12, 19, 3, 5, 2, 3];
 var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: colors,
          datasets: [{
              label: '# of Votes',
              lineTension: 0.15,
              data: numberData,
              backgroundColor: [
                  'rgba(255, 159, 64, 0)'
              ],
              borderColor: [
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 2
          },{
              label: '# of Votes',
              lineTension: 0.15,
              data: numberData,
              backgroundColor: [
                  'rgba(255, 159, 64, 0)'
              ],
              borderColor: [
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 2
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });

  $(".graphController").on("click", function() {
    $("#currentChart").html($(this).html());
    switch ($(this).html()) {
      case "Points":  
        myChart.data.datasets[0].borderColor = ["rgb(255,180,0)"];
        myChart.data.datasets[0].data = points;
        myChart.data.datasets[0].label = playerName;
        myChart.data.labels = date;
        myChart.data.datasets[1].borderColor = ["rgb(255,60,0)"];
        myChart.data.datasets[1].data = points2;
        myChart.data.datasets[1].label = playerName2;
        myChart.data.labels = date;
        myChart.update();
        break;
    
      case "Rebounds":  
        myChart.data.datasets[0].borderColor = ["rgb(255,180,0)"];
        myChart.data.datasets[0].data = rebounds;
        myChart.data.datasets[0].label = playerName;
        myChart.data.labels = date;
        // myChart.data.datasets[1].backgroundColor = ["rgba(56, 114,209,0.2)"];
        myChart.data.datasets[1].borderColor = ["rgb(255,60,0)"];
        myChart.data.datasets[1].data = rebounds2;
        myChart.data.datasets[1].label = playerName2;
        myChart.data.labels = date;        
        myChart.update();
        break;

      case "Assists":
        // myChart.data.datasets[0].backgroundColor = ["rgba(55, 178, 164,0.2)"];
        myChart.data.datasets[0].borderColor = ["rgb(255,180,0)"];
        myChart.data.datasets[0].data = assists;
        myChart.data.datasets[0].label = playerName;
        myChart.data.labels = date;
        // myChart.data.datasets[1].backgroundColor = ["rgba(55, 178, 164,0.2)"];
        myChart.data.datasets[1].borderColor = ["rgb(255,60,0)"];
        myChart.data.datasets[1].data = assists2;
        myChart.data.datasets[1].label = playerName2;
        myChart.data.labels = date;
        myChart.update();
        break;
    
      case "Steals":
        // myChart.data.datasets[0].backgroundColor = ["rgba(125, 168, 33,0.2)"];
        myChart.data.datasets[0].borderColor = ["rgb(255,180,0)"];
        myChart.data.datasets[0].data = steals;
        myChart.data.datasets[0].label = playerName;
        myChart.data.labels = date;
        // myChart.data.datasets[1].backgroundColor = ["rgba(125, 168, 33,0.2)"];
        myChart.data.datasets[1].borderColor = ["rgb(255,60,0)"];
        myChart.data.datasets[1].data = steals2;
        myChart.data.datasets[1].label = playerName2;
        myChart.data.labels = date;
        myChart.update();
        break;
    
      case "Blocks":
        myChart.data.datasets[0].borderColor = ["rgb(255,180,0)"];
        myChart.data.datasets[0].data = blocks;
        myChart.data.datasets[0].label = playerName;
        myChart.data.labels = date;
        myChart.data.datasets[1].borderColor = ["rgb(255,60,0)"];
        myChart.data.datasets[1].data = blocks2;
        myChart.data.datasets[1].label = playerName2;
        myChart.data.labels = date;
        myChart.update();
    }
    myChart.update();
    console.log($(this).html());
    console.log(myChart.data.datasets[0].backgroundColor)
  })
  
  var playerName;
  var playerName2;

  var createChart = function(id, id2){
      playerName = $("#browsers :selected").text();
      playerName2 = $("#browsers2 :selected").text();

      date = [];
      points = [];
      rebounds = [];
      assists = [];
      steals = [];
      blocks = []; 

      date2 = [];
      points2 = [];
      rebounds2 = [];
      assists2 = [];
      steals2 = [];
      blocks2 = []; 

    $.ajax("/api/stats/" + id,{
      type: "GET"
    }).then(function(data){
      console.log(data);
      console.log(data[0][0].points);

      for(var i=0;i<data[0].length;i++){
        // console.log("date is ",data[0][i]);
        newDate = moment(data[0][i].date, "YYYY/MM/DD");
        console.log(newDate);
        var formattedDate = moment(newDate).format("YYYY/MM/DD");
        date.push(formattedDate);
        points.push(data[0][i].points);
        rebounds.push(data[0][i].rebounds);
        assists.push(data[0][i].assists);
        steals.push(data[0][i].steals);
        blocks.push(data[0][i].blocks);
      }
      // myChart.data.labels = date;
      // myChart.data.datasets[0].data = points;
      console.log(date);
      console.log(points);
      console.log(rebounds);
      console.log(assists);
      console.log(steals);
      console.log(blocks);

        // myChart.data.datasets[0].backgroundColor = ["rgba(255,100,100,0.2)"];
        myChart.data.datasets[0].borderColor = ["rgb(255,180,00)"];
        myChart.data.datasets[0].data = points;
        myChart.data.labels = date;
        myChart.data.datasets[0].label = playerName;
        // myChart.update();
    });
    // -----------------------------------------------------------
        $.ajax("/api/stats/" + id2,{
      type: "GET"
    }).then(function(data){
      console.log(data);
      console.log(data[0][0].points);

      for(var i=0;i<data[0].length;i++){
        // console.log("date is ",data[0][i]);
        newDate = moment(data[0][i].date, "YYYY/MM/DD");
        console.log(newDate);
        var formattedDate = moment(newDate).format("YYYY/MM/DD");
        date2.push(formattedDate);
        points2.push(data[0][i].points);
        rebounds2.push(data[0][i].rebounds);
        assists2.push(data[0][i].assists);
        steals2.push(data[0][i].steals);
        blocks2.push(data[0][i].blocks);
      }
      // myChart.data.labels = date;
      // myChart.data.datasets[0].data = points;
      console.log(date);
      console.log(points);
      console.log(rebounds);
      console.log(assists);
      console.log(steals);
      console.log(blocks);

        // myChart.data.datasets[0].backgroundColor = ["rgba(255,100,100,0.2)"];
        myChart.data.datasets[1].borderColor = ["rgb(255,60,0)"];
        myChart.data.datasets[1].data = points2;
        myChart.data.labels = date;
        myChart.data.datasets[1].label = playerName2;
        myChart.update();
    });
  };

  function generatePlayerInfo(id) {
    $.ajax("/api/one" + id,{
      type: "GET"
    }).then(function(data){
      var player = data[0][0];
      console.log(player);
    });
  }

  $("#submitForm").on("click", function(){
      var id = $("#browsers").val();
      var id2 = $("#browsers2").val();
      createChart(id, id2);
      displayPlayerDemoInfo(id, id2);
  });
  
  createChart("9218", "9298");

function displayLabelWhenPageLoad (){
      myChart.data.datasets[0].label = "Curry, Stephen";
      myChart.data.datasets[1].label = "Barnes, Matt";
      playerName = "Curry, Stephen";
      playerName2 = "Barnes, Matt";
      myChart.update();
      // console.log("timeout!!");
};
setTimeout(displayLabelWhenPageLoad, 1000 * 1);

//Display player demographic info
function displayPlayerDemoInfo(id, id2) {
  $.ajax("/api/one" + id, {
    type: "GET",
  }) 
  .then(function(res) {
    console.log(res);
    var player = res[0][0];
    $("#player1-name").html("Name: " + player.player_name);
    $("#player1-age").html("Age: " + player.age);
    $("#player1-birthDate").html("Birth date: " + player.birthDate);
    $("#player1-birthCountry").html("Birth country: " + player.birthCountry);
    $("#player1-height").html("Height: " + player.height);
    $("#player1-weight").html("Weight: " + player.weight);
    $("#player1-position").html("Position: " + player.position);
  });

  $.ajax("/api/one" + id2, {
    type: "GET",
  }) 
  .then(function(res) {
    var player = res[0][0];
    $("#player2-name").html("Name: " + player.player_name);
    $("#player2-age").html("Age: " + player.age);
    $("#player2-birthDate").html("Birth date: " + player.birthDate);
    $("#player2-birthCountry").html("Birth country: " + player.birthCountry);
    $("#player2-height").html("Height: " + player.height);
    $("#player2-weight").html("Weight: " + player.weight);
    $("#player2-position").html("Position: " + player.position);
  });
};

generatePlayerInfo('9298');


