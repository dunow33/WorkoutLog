var router = require('express').Router();
var sequelize = require('../db');
var Log = sequelize.import('../models/log');

router.post('/', function(req, res) {
	//variables
    var description = req.body.log.desc;
    var result = req.body.log.result;
    var user = req.user;
    var definition = req.body.log.def;

	
	//objects must match the model
	Log.create({ 
		   	description: description,
		   	result: result,
		   	owner: user.id,
		   	def: definition
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
	Log.findAll({
			where: { owner: userid }
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


router.get('/:id', function(req, res){
	var data = req.params.id;

	Log.findOne({
		where: {id : data}
	}).then(
		function getSuccess(updateData) {
			res.json(updateData);
		},
		function getError(err) {
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