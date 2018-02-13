//NBA Stats API
function NbaStatsAPI(){
	this.jDiv;
}

NbaStatsAPI.prototype.loadScores = function(){
	var jDiv = this.jDiv;
	var statsUrl = "http://stats.nba.com/stats/scoreboard/?GameDate= " + this.date + "&LeagueID=00&DayOffset=0";
	var date = this.date;
	$.ajax({
		url: statsUrl,
		dataType: "jsonp",
	}).done(function(data){
	//console.log(data);

		var rows = data.resultSets[1].rowSet;
		var j = 0;
		var html = "<div class='date-div'> " + date + "</div>";
		var teamColor = "";
		var teamKey = "";
		for (var i = 0; i < rows.length; i++) {
			teamKey = rows[i][4] + " " + rows[i][5];
			teamColor = teamColors[teamKey];
			if(j === 0) {
				html += "<div class='main-div'>"
				html += "<div class='div-table'>"
				html += "<div class='div-row'>";
				html += "<div class='div-cell'><img src='assets/images/team_logos/" + rows[i][4] + ".png'></div>";

				html += "<div class='div-cell-right'>" + rows[i][4] + "</div>";
				html += "<div class='div-cell'><span style='color: " + teamColor +"'>" + rows[i][5] + " (" + rows[i][6] + ")</span></div>";
				html += "<div class='div-cell'>" + rows[i][21] + "</div>";
				html += "</div>";
				j++;
			} else {
				html += "<div class='div-row'>";
				html += "<div class='div-cell'><img src='assets/images/team_logos/" + rows[i][4] + ".png'></div>";
				html += "<div class='div-cell-right'>" + rows[i][4] + "</div>";
				html += "<div class='div-cell'><span style='color: " + teamColor +"'>" + rows[i][5] + " (" + rows[i][6] + ")</span></div>";
				
				html += "<div class='div-cell'>" + rows[i][21] + "</div>";
				html += "</div><div class='div-row'><div class='div-cell'>&nbsp;</div></div>";
				html += "</div>";
				html += "</div>";
				j++;
				j = 0;
			}
		};
		html+="</div>";
		jDiv.html(html);
	});	
};

NbaStatsAPI.prototype.displayScores = function(div){
	this.jDiv = $('#'+div);
	this.date = getFormattedDate(-1);
	this.jDiv.html("Retrieving scores from "+this.date+"...");
	this.loadScores();
}

var teamColors = {};
teamColors["ATL Atlanta"] = "#C8102E";
teamColors["BOS Boston"] = "#007A33";
teamColors["BKN Brooklyn"] = "#010101";
teamColors["CHA Charlotte"] = "#201747";
teamColors["CHI Chicago"] = "#BA0C2F";
teamColors["CLE Cleveland"] = "#6F263D";
teamColors["DAL Dallas"] = "#0050B5";
teamColors["DEN Denver"] = "#418FDE";
teamColors["DET Detroit"] = "#D50032";
teamColors["GSW Golden State"] = "#003DA5";
teamColors["HOU Houston"] = "#BA0C2F";
teamColors["IND Indiana"] = "#041E42";
teamColors["LAC Los Angeles"] = "#D50032";
teamColors["LAL Los Angeles"] = "#702F8A";
teamColors["MEM Memphis"] = "#23375B";
teamColors["MIA Miami"] = "#862633";
teamColors["MIL Milwaukee"] = "#2C5234";
teamColors["MIN Minnesota"] = "#002B5C";
teamColors["NOP New Orleans"] = "#002B5C";
teamColors["NYK New York"] = "#003DA5";
teamColors["OKC Oklahoma"] = "#007DC3";
teamColors["ORL Orlando"] = "#C4CED3";
teamColors["PHI Philadelphia"] = "#006BB6";
teamColors["PHX Phoenix"] = "#E56020";
teamColors["POR Portland"] = "#F0163A";
teamColors["SAC Sacramento"] = "#724C9F";
teamColors["SAS San Antonio"] = "#B6BFBF";
teamColors["TOR Toronto"] = "#CE1141";
teamColors["UTA Utah"] = "#002B5C";
teamColors["WAS Washington"] = "#0C2340";






