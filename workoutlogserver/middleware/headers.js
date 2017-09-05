module.exports = function(req, res, next){
	res.header('access-control-allow-origin', '*');
	next();
};

//this file allows CORS, which allows for communication between server and client on same ports