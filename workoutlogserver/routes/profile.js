var router = require('express').Router();
var sequelize = require('../db');
var Log = sequelize.import('../models/log');
var Profile = sequelize.import('../models/profile');

router.post('/', function(req, res) {
	//variables
    var name = req.body.profile.desc;
    var age = req.body.profile.age;
    var weight = req.profile.weight;
    var user = req.user;

	
	//objects must match the model
	Profile.create({ 
		   	name: name,
		   	age: age,
		   	weight: weight,
		   	user: user.id
		}).then(
			function createSuccess(log){
				res.json(log);
		   	}, 
		   function createError(err) {
		       res.send(500, err.message);
			}
		);
});

router.get('/', function(req, res) {
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
});

router.put('/', function(req, res){
	var description = req.body.log.desc;
	var result = req.body.log.result;
	var data = req.body.log.id;
	var definition = req.body.log.def;
	console.log(req);

	Log.update({
		description: description,
		result: result,
		def: definition
	},
		{where: {id : data}}
	).then(
			function updateSuccess(updatedLog){
				res.json(updatedLog);
			},
			function updateError(err){
				res.send(500, err.message);
			}
		)
});

router.delete('/', function(req, res) {
	var data = req.body.log.id;
	Log
		.destroy({
			where: { id: data }
		}).then(
			function deleteLogSuccess(data){
				res.send("you removed a log");
			},
			function deleteLogError(err){
				res.send(500, err.message);
			}
		);
});


module.exports = router;