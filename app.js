var lab1_1 = require("./lab/lab1_1").lab
var example_1 = require("./example_1").lab;
var lab1_2 = require("./lab/lab1_2").lab
var lab1_3 = require("./lab/lab1_3").lab
var lab2_1 = require("./lab/lab2_1").lab;
var PORT = 8080;


var urlMap = [
	{path: "/", action:__dirname + "/static/index.html"},	 
	{path: "/digest", action: lab1_1},	
	{path: "/example_1", action: example_1},
	{path: "/lab1_2", action: lab1_2},
	{path: "/lab1_3", action: lab1_3},
	{path: "/health", action: function(req, cb) {
		cb(null, "ok");
	}},
	{path: "/lab2_1", action: lab2_1},
	];

var service = require("./lib/service").http(urlMap);

service(PORT);

