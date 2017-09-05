module.exports = function(req, res, next){
	res.header('access-control-allow-origin', '*');
	res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE');
	res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	next();
};

//this file allows CORS, which allows for communication between server and client on same ports