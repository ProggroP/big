var dateorder = localStorage.getItem("dateorder");
if (!dateorder) {
	dateorder = 1;
}

var weekday = localStorage.getItem("weekday");
if (!weekday) {
	weekday = 0;
}

var bigminutes = localStorage.getItem("bigminutes");
if (!bigminutes) {
	bigminutes = 0;
}

var showdate = localStorage.getItem("showdate");
if (!showdate) {
	showdate = 1;
}

var lang = localStorage.getItem("lang");
if (!lang) {
	lang = 1;
}

function logVariables() {
	console.log("	dateorder: " + dateorder);
	console.log("	weekday: " + weekday);
	console.log("	bigminutes: " + bigminutes);
	console.log("	showdate: " + showdate);
	console.log("	lang: " + lang);
}

Pebble.addEventListener("ready", function() {
	console.log("Ready Event");
	logVariables();
});

Pebble.addEventListener("showConfiguration", function(e) {
	console.log("showConfiguration Event");

	logVariables();
						
	Pebble.openURL("http://www.famillemattern.com/jnm/pebble/Clipped/Clipped.php?dateorder=" + dateorder + "&weekday=" + weekday + "&lang=" + lang + "&bigminutes=" + bigminutes + "&showdate=" + showdate );
});

Pebble.addEventListener("webviewclosed", function(e) {
	console.log("Configuration window closed");
	console.log(e.type);
	console.log(e.response);

	var configuration = JSON.parse(e.response);
	Pebble.sendAppMessage(configuration);
	
	dateorder = configuration["dateorder"];
	localStorage.setItem("dateorder", dateorder);
	
	weekday = configuration["weekday"];
	localStorage.setItem("weekday", weekday);

	bigminutes = configuration["bigminutes"];
	localStorage.setItem("bigminutes", bigminutes);

	showdate = configuration["showdate"];
	localStorage.setItem("showdate", showdate);

	lang = configuration["lang"];
	localStorage.setItem("lang", lang);
});