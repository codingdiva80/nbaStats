
function getPlayers() {
  $.get("/api/players", function(data) {
    console.log(data);

    div = $("#playerChooser")

     var list = "<form><select id = 'browsers'>";
     for (var i = 0; i < data[0].length; i++) {
     	list += "<option value = '" + data[0][i].pid + "'>" + data[0][i].player_name + "</option>"
     };

     list += "  <option value='9218' selected>Curry, Stephen</option></select></form>"

     // console.log(list);
    	
     div.html(list);
  });
}
function getPlayers2() {
  $.get("/api/players", function(data) {
    // console.log(data);

    div = $("#playerChooser2")

     var list = "<form><select id = 'browsers2'>";
     for (var i = 0; i < data[0].length; i++) {
        list += "<option value = '" + data[0][i].pid + "'>" + data[0][i].player_name + "</option>"
     };

     list += "  <option value='9298' selected>Barnes, Matt</option></select></form>"

     // console.log(list);
        
     div.html(list);

    // console.log($("#playerChooser").html());
  });
}

// function displayPlayer() {
//     $("#submitForm").on("click", function() {
//         var player = $("#browsers").val();
//         var text = $("#browsers :selected").text();
//         alert("Hi");

//         $("#spotlight").html('<h3>' + text + '</h3>');
//         console.log(player);
//         console.log(text);
//         console.log('hello world')
//     });
// };
getPlayers();
getPlayers2();
// displayPlayer();

// action='./assets/js/individualStats.js' method='get'

// cut from line 8
// <input id='playerSelect' list = 'browsers'>