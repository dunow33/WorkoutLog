var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sequelize = require('./db.js');

var User = sequelize.import(__dirname + '\\models\\user');

app.use(bodyParser.json());
app.use('/api/user', require('./routes/user'));

/*****
***DANGER: THIS WILL DROP THE USER TABLE***
User.sync({ force: true });
****/

app.use(require('./middleware/headers'));

app.use('/api/test', function(req, res){
	res.send("Hello World");
});

app.listen(3000, function(){
	console.log('App is listening on 3000.')
});


User.sync();

