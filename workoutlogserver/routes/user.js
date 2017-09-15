var router = require('express').Router();
var sequelize = require('../db.js');
var User = sequelize.import('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


router.post('/', function(req, res) {
		var firstName = req.body.user.firstName;
		var lastName = req.body.user.lastName;
		var currentWeight = req.body.user.currentWeight;
		var targetWeight = req.body.user.targetWeight;
		var sex = req.body.user.sex;
		var username = req.body.user.username;
		var pass = req.body.user.password;
		var age = req.body.user.age;
		//Need to create a user object and use sequelize to put that user into

		User.create({
			firstName: firstName,
			lastName: lastName,
			currentWeight: currentWeight,
			targetWeight: targetWeight,
			sex: sex,
			username: username,
			passwordhash: bcrypt.hashSync(pass, 10),
			age: age
		}).then(
		//Sequelize is going to return the object it created from db.

			function createSuccess(user){
			    var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
				res.json({
						user: user,
						message: 'created',
						sessionToken: token
				});
			},
			function createError(err){
				res.send(500, err.message);
			}
		);
	});

/*router.get('/', function(req, res) {
	//user variable
	var userid = req.user.id;
	
	//findAll by owner method
		Profile.findAll({
			where: { name: userid }
		})
		.then(function findAllSuccess(data) {
				res.json(data);
		},
		//failure
		function findAllError(err) {
		res.send(500, err.message);
		}
		);
});*/

module.exports = router;
