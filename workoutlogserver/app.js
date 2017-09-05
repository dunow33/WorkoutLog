var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//imports the express module, calls the express function with the app variable

app.use('/api/test', function(req, res){
	res.send("Hello World");
});

app.use(require('./middleware/headers'));

app.listen(3000, function(){
	console.log("app is listening on 3000");
});

var Sequelize = require('sequelize');
var sequelize = new Sequelize('workoutlog', 'postgres', 'bdiver1', {
	host: 'localhost',
	dialect: 'postgres'
});

sequelize.authenticate().then(
	function() {
		console.log('connected to workoutlog postgres db');
	},
	function(err){
		console.log(err);
	}
);

var User = sequelize.define('user', {
	username: Sequelize.STRING,
	passwordhash: Sequelize.STRING,
});

User.sync();

app.use(bodyParser.json());

app.post('/app/user', function(req, res){
	var username = req.body.user.username;
	var pass = req.body.user.password;
	User.create({
		username: username,
		passwordhash: ""
	}).then(
		function createSuccess(user){
			res.json({
				user: user,
				message: 'create'
			});
		},
		function createError(err){
			res.send(500, error.message);
		}
	);
});

//User.sync({force: true});