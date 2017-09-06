require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sequelize = require('./db.js');
var User=sequelize.import(__dirname + '//models//user.js');
User.sync();/* this will drop (delete) the user table
User.sync({force:true});
*/
app.use(bodyParser.json());
app.use(require('./middleware/headers.js'));
app.use(require('./middleware/validate-session.js'));
app.use('/api/user', require('./routes/user.js'));
app.use('/api/login', require('./routes/session.js'));
app.use('/api/test', function(req, res){
    res.send("Hello World");
});
app.listen(3000, function(){
    console.log('App is listening on 3000.')
});